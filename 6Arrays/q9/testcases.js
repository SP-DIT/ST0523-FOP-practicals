module.exports = {
    testcases: [
        {
            input: [[1, 2, 2, 3, 2, 4], 2],
            expected: 3,
        },
        {
            input: [["a", "b", "a", "c", "a"], "a"],
            expected: 3,
        },
        {
            input: [["x", "y", "z"], "a"],
            expected: 0,
        },
        {
            input: [[5, 5, 5, 5], 5],
            expected: 4,
        },
        {
            input: [[true, false, true, true], true],
            expected: 3,
        },
    ],
    options: {
        type: 'JSON',
    },
};
