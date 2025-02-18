export const pizz = {
     "oscillator": {
        "type": "sawtooth"
    },
    "filter": {
        "Q": 3,
        "type": "highpass",
        "rolloff": -12
    },
    "envelope": {
        "attack": 0.01,
        "decay": 0.3,
        "sustain": 0,
        "release": 0.9
    },
    "filterEnvelope": {
        "attack": 0.01,
        "decay": 0.1,
        "sustain": 0,
        "release": 0.1,
        "baseFrequency": 800,
        "octaves": -1.2
    }
}
