// functions based on
// https://www.russellgood.com/how-to-convert-audiobuffer-to-audio-file/

export function toWav(abuffer, total_samples, basename = "test") {

  // get duration and sample rate
  var duration = abuffer.duration,
    rate = abuffer.sampleRate,
    offset = 0;


  var download_link = document.getElementById("download_link");

  var new_file = URL.createObjectURL(bufferToWave(abuffer, total_samples));
  download_link.href = new_file;
  download_link.download = generateFileName(basename) + ".wav";

}


function generateFileName(filename) {

  var d = new Date();

  var year = d.getFullYear();
  var month = '' + (d.getMonth() + 1).toString().padStart(2, "0");
  var date = d.getDate().toString().padStart(2, "0");
  return filename + "-" + year + "-" + month + "-" + date + "-" + d.getTime() ;

}

// Convert an AudioBuffer to a Blob using WAVE representation
function bufferToWave(abuffer, len) {
  var numOfChan = abuffer.numberOfChannels,
    length = len * numOfChan * 2 + 44,
    buffer = new ArrayBuffer(length),
    view = new DataView(buffer),
    channels = [],
    i, sample,
    offset = 0,
    pos = 0;

  // write WAVE header
  setUint32(0x46464952); // "RIFF"
  setUint32(length - 8); // file length - 8
  setUint32(0x45564157); // "WAVE"

  setUint32(0x20746d66); // "fmt " chunk
  setUint32(16); // length = 16
  setUint16(1); // PCM (uncompressed)
  setUint16(numOfChan);

  setUint32(abuffer.sampleRate);
  // setUint32(48000);
  setUint32(abuffer.sampleRate * 2 * numOfChan); // avg. bytes/sec
  // setUint32(48000 * 2 * numOfChan); // avg. bytes/sec
  setUint16(numOfChan * 2); // block-align
  setUint16(16); // 16-bit (hardcoded in this demo)

  setUint32(0x61746164); // "data" - chunk
  setUint32(length - pos - 4); // chunk length

  // write interleaved data
  for (i = 0; i < abuffer.numberOfChannels; i++)
    channels.push(abuffer.getChannelData(i));

  while (pos < length) {
    for (i = 0; i < numOfChan; i++) { // interleave channels
      sample = Math.max(-1, Math.min(1, channels[i][offset])); // clamp
      sample = (0.5 + sample < 0 ? sample * 32768 : sample * 32767) | 0; // scale to 16-bit signed int
      view.setInt16(pos, sample, true); // write 16-bit sample
      pos += 2;
    }
    offset++ // next source sample
  }

  // create Blob
  return new Blob([buffer], {
    type: "audio/wav"
  });

  function setUint16(data) {
    view.setUint16(pos, data, true);
    pos += 2;
  }

  function setUint32(data) {
    view.setUint32(pos, data, true);
    pos += 4;
  }
}
