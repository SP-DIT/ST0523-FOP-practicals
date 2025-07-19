module.exports = {
    testcases: [
        {
            input: [2.5, 3, 4],
            expected: true,
        },
        {
            input: [5, 3, 4],
            expected: true,
        },
        {
            input: [2, 3, 4],
            expected: false,
        },
        {
            input: [6.5, 5, 12],
            expected: true,
        },
        {
            input: [12.5, 7, 24],
            expected: true,
        },
        {
            input: [12.5, 7, 25],
            expected: false,
        },
        {
            input: [4, 1, 30],
            expected: false,
        },
    ],
    options: {},
};
