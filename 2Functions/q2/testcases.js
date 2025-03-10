module.exports = {
    testcases: [
        {
            inputs: [
                [1, 1, 2, 2],
                [2, 2, 4, 8],
                [3, 3, -4, -25],
                [4, 4, 20, 100],
            ],
            expected: [1, 3, 4, 6],
        },
        {
            inputs: [
                [41, -64, 43, 62],
                [29, -48, -33, -56],
                [-72, -51, -18, -25],
                [22, -26, -69, 16],
                [-49, -80, 49, -87],
                [61, 8, 31, 25],
                [25, 40, 37, -77],
                [59, -21, 42, -55],
                [94, -7, -30, 55],
                [97, 7, -96, -77],
            ],
            expected: [
                63, 0.12903225806451613, 0.48148148148148145, -0.46153846153846156, -0.07142857142857142,
                -0.5666666666666667, -9.75, 2, -0.5, 0.43523316062176165,
            ],
        },
    ],
    options: {
        type: 'floating point',
        precision: 6,
    },
};
