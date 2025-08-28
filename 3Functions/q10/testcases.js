module.exports = {
    testcases: [
        {
            input: [2, 3],
            expected: 5,
        },
        {
            input: [2, '3'],
            expected: 5,
        },
        {
            input: ['2', 3],
            expected: 5,
        },
        {
            input: ['2', '3'],
            expected: 5,
        },
        {
            input: [15, 10],
            expected: 25,
        },
        {
            input: [20, '5'],
            expected: 25,
        },
        {
            input: ['7', 8],
            expected: 15,
        },
        {
            input: ['50', '25'],
            expected: 75,
        },
    ],
    options: {},
};
