module.exports = {
    testcases: [
        {
            input: [3, 2],
            expected: 6,
        },
        {
            input: [3, '2'],
            expected: 6,
        },
        {
            input: ['3', 2],
            expected: 6,
        },
        {
            input: ['3', '2'],
            expected: 6,
        },
        {
            input: [7, 5],
            expected: 35,
        },
        {
            input: [10, '4'],
            expected: 40,
        },
        {
            input: ['6', 6],
            expected: 36,
        },
        {
            input: ['9', '3'],
            expected: 27,
        },
    ],
    options: {},
};
