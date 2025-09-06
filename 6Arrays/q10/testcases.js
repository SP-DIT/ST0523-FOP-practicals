module.exports = {
    testcases: [
        {
            input: [[1, 2, 3]],
            expected: [2, 4, 6],
        },
        {
            input: [[5, 10, 15]],
            expected: [10, 20, 30],
        },
        {
            input: [[0, -1, -2]],
            expected: [0, -2, -4],
        },
        {
            input: [[100]],
            expected: [200],
        },
        {
            input: [[]],
            expected: [],
        },
    ],
    options: {
        type: 'JSON',
    },
};
