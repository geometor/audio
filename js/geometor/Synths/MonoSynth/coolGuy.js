export const coolGuy = {
    "oscillator" : {
        "type" : "pwm",
        "modulationFrequency" : 1
    },
    "filter" : {
        "Q" : 6,
        "rolloff" : -24
    },
    "envelope" : {
        "attack" : 0.025,
        "decay" : 0.3,
        "sustain" : 0.9,
        "release" : 2
    },
    "filterEnvelope" : {
        "attack" : 0.245,
        "decay" : 0.131,
        "sustain" : 0.5,
        "release" : 2,
        "baseFrequency" : 20,
        "octaves" : 7.2,
        "exponent" : 2
    }
}
