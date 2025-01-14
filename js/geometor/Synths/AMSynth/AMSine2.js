// AMSine2 AMSynth

const settings = {
    "harmonicity": 2,
    "oscillator": {
        "type": "amsine2",
      	"modulationType" : "sine",
 	     "harmonicity": 1.01
    },
    "envelope": {
        "attack": 0.006,
        "decay": 4,
        "sustain": 0.04,
        "release": 1.2
    },
    "modulation" : {
      	"volume" : 13,
        "type": "amsine2",
      	"modulationType" : "sine",
 	     "harmonicity": 12
    },
    "modulationEnvelope" : {
        "attack": 0.006,
        "decay": 0.2,
        "sustain": 0.2,
        "release": 0.4
    }
}

export class AMSine2 extends Tone.AMSynth {

  constructor() {
    super(settings)
  }

}
