module.exports = {
    testcases: [
        {
            input: [[5, 10, 15]],
            expected: 30,
        },
        {
            input: [[1, 2, 3, 4]],
            expected: 10,
        },
        {
            input: [[0, 0, 0]],
            expected: 0,
        },
        {
            input: [[-5, 5, 10]],
            expected: 10,
        },
        {
            input: [[]],
            expected: 0,
        },
    ],
    options: {
        type: 'JSON',
    },
};
