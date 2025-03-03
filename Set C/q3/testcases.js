module.exports = {
    testcases: [
        {
            inputs: [
                [[1, 2, 3, 4, 5, 6, 7, 8], 2],
                [[1, 2, 3, 4, 5, 6, 7, 8], 3],
                [[80, 37, 91, 66, 67, 2, 93, 7, 17, 50, 52, 86, 27, 63, 90], 5],
                [[90, 2, 95, 40, 0, 40, 45, 87, 42, 88, 63, 26, 1, 77, 2, 93], 4],
                [
                    [
                        64, 24, 71, 40, 17, 85, 21, 34, 52, 1, 45, 6, 40, 38, 83, 90, 43, 62, 60, 96, 58, 57, 6, 97, 40,
                        97, 51, 88, 28, 82, 78, 41,
                    ],
                    8,
                ],
            ],
            expected: [
                [1.5, 3.5, 5.5, 7.5],
                [2, 5, 7.5],
                [68.2, 33.8, 63.6],
                [56.75, 43, 54.75, 43.25],
                [44.5, 44.375, 59.875, 63.125],
            ],
        },
    ],
    options: {
        type: 'array',
    },
};
