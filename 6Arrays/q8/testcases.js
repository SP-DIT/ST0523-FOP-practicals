module.exports = {
    testcases: [
        {
            input: [[1, 2, 3, 4, 5, 6]],
            expected: [2, 4, 6],
        },
        {
            input: [[7, 9, 11]],
            expected: [],
        },
        {
            input: [[2, 4, 6, 8]],
            expected: [2, 4, 6, 8],
        },
        {
            input: [[1, 3, 5]],
            expected: [],
        },
        {
            input: [[10, 15, 20, 25]],
            expected: [10, 20],
        },
    ],
    options: {
        type: 'JSON',
    },
};
