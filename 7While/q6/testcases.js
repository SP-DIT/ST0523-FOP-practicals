module.exports = {
    testcases: [
        {
            input: [[1, 2, 0]],
            expected: true,
        },
        {
            input: [[1, 2, 1]],
            expected: true,
        },
        {
            input: [[2, 1, 4, 1, 9]],
            expected: false,
        },
        {
            input: [[2, 4, 1, 6, 3, 9, 5]],
            expected: false,
        },
        {
            input: [[2, 4, 1, 6, 3, 0, 5]],
            expected: true,
        },
    ],
    options: {},
};
