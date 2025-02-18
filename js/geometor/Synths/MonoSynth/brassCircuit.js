export const brassCircuit = {
    "portamento": 0.01,
    "oscillator": {
        "type": "sawtooth"
    },
    "filter": {
        "Q": 2,
        "type": "lowpass",
        "rolloff": -24
    },
    "envelope": {
        "attack": 0.1,
        "decay": 0.1,
        "sustain": 0.6,
        "release": 0.5
    },
    "filterEnvelope": {
        "attack": 0.05,
        "decay": 0.8,
        "sustain": 0.4,
        "release": 1.5,
        "baseFrequency": 2000,
        "octaves": 1.5
    }
}
