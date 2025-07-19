module.exports = {
    testcases: [
        {
            input: [['A', 'A', 'A', 'A', ' ']],
            expected: 3,
        },
        {
            input: [['A', 'A', 'B', 'B', 'C', 'C', 'D', 'D', 'E', 'E', ' ']],
            expected: 5,
        },
        {
            input: [['A', 'B', 'C', 'D', 'D', ' ']],
            expected: 1,
        },
        {
            input: [['A', 'D', 'B', 'B', 'C', 'A', ' ']],
            expected: 1,
        },
        {
            input: [['A', 'D', 'C', 'B', 'C', 'C', 'A', 'C', 'D', 'D', 'A', 'B', 'A', 'A', ' ']],
            expected: 3,
        },
    ],
    options: {
        type: 'floating point',
        precision: 6,
    },
};
