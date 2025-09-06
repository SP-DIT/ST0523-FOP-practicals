module.exports = {
    testcases: [
        {
            input: [5],
            expected: [1, 4, 9, 16, 25],
        },
        {
            input: [3],
            expected: [1, 4, 9],
        },
        {
            input: [0],
            expected: [],
        },
        {
            input: [1],
            expected: [1],
        },
        {
            input: [7],
            expected: [1, 4, 9, 16, 25, 36, 49],
        },
    ],
    options: {
        type: 'JSON',
    },
};
