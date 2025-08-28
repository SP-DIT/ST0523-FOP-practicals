module.exports = {
    testcases: [
        {
            input: [6, 2],
            expected: 3,
        },
        {
            input: [6, '2'],
            expected: 3,
        },
        {
            input: ['6', 2],
            expected: 3,
        },
        {
            input: ['6', '2'],
            expected: 3,
        },
        {
            input: [20, 5],
            expected: 4,
        },
        {
            input: [15, '3'],
            expected: 5,
        },
        {
            input: ['18', 6],
            expected: 3,
        },
        {
            input: ['100', '25'],
            expected: 4,
        },
    ],
    options: {},
};
