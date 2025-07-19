module.exports = {
    testcases: [
        {
            input: [1, 2],
            expected: 3,
        },
        {
            input: [1, '2'],
            expected: 3,
        },
        {
            input: ['1', 2],
            expected: 3,
        },
        {
            input: ['1', '2'],
            expected: 3,
        },
        {
            input: [13, 25],
            expected: 38,
        },
        {
            input: [91, '29'],
            expected: 120,
        },
        {
            input: ['37', 54],
            expected: 91,
        },
        {
            input: ['10', '20'],
            expected: 30,
        },
    ],
    options: {},
};
