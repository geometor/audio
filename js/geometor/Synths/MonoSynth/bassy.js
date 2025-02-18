export const bassy = {
    "portamento": 0.08,
    "oscillator": {
        "partials": [2, 1, 3, 2, 0.4]
    },
    "filter": {
        "Q": 4,
        "type": "lowpass",
        "rolloff": -48
    },
    "envelope": {
        "attack": 0.04,
        "decay": 0.06,
        "sustain": 0.4,
        "release": 1
    },
    "filterEnvelope": {
        "attack": 0.01,
        "decay": 0.1,
        "sustain": 0.6,
        "release": 1.5,
        "baseFrequency": 50,
        "octaves": 3.4
    }
}
