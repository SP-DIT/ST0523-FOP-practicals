module.exports = {
    testcases: [
        {
            input: [2, 1],
            expected: 1,
        },
        {
            input: [2, '1'],
            expected: 1,
        },
        {
            input: ['2', 1],
            expected: 1,
        },
        {
            input: ['2', '1'],
            expected: 1,
        },
        {
            input: [25, 13],
            expected: 12,
        },
        {
            input: [91, '29'],
            expected: 62,
        },
        {
            input: ['54', 37],
            expected: 17,
        },
        {
            input: ['20', '10'],
            expected: 10,
        },
    ],
    options: {},
};
