module.exports = {
    testcases: [
        {
            input: [[1, 2, 3, 4]],
            expected: [4, 3, 2, 1],
        },
        {
            input: [["a", "b", "c"]],
            expected: ["c", "b", "a"],
        },
        {
            input: [[]],
            expected: [],
        },
        {
            input: [[10]],
            expected: [10],
        },
        {
            input: [[5, 10, 15, 20]],
            expected: [20, 15, 10, 5],
        },
    ],
    options: {
        type: 'JSON',
    },
};
