module.exports = {
    testcases: [
        {
            input: [1, 1, 2, 2],
            expected: 1,
        },
        {
            input: [2, 2, 4, 8],
            expected: 3,
        },
        {
            input: [3, 3, -4, -25],
            expected: 4,
        },
        {
            input: [4, 4, 20, 100],
            expected: 6,
        },
        {
            input: [41, -64, 43, 62],
            expected: 63,
        },
        {
            input: [29, -48, -33, -56],
            expected: 0.12903225806451613,
        },
        {
            input: [-72, -51, -18, -25],
            expected: 0.48148148148148145,
        },
        {
            input: [22, -26, -69, 16],
            expected: -0.46153846153846156,
        },
        {
            input: [-49, -80, 49, -87],
            expected: -0.07142857142857142,
        },
        {
            input: [61, 8, 31, 25],
            expected: -0.5666666666666667,
        },
        {
            input: [25, 40, 37, -77],
            expected: -9.75,
        },
        {
            input: [59, -21, 42, -55],
            expected: 2,
        },
        {
            input: [94, -7, -30, 55],
            expected: -0.5,
        },
        {
            input: [97, 7, -96, -77],
            expected: 0.43523316062176165,
        },
    ],
    options: {
        type: 'floating point',
        precision: 6,
    },
};
