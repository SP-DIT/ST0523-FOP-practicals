module.exports = {
    testcases: [
        {
            input: [0, 0, 120, 0],
            expected: 0,
        },
        {
            input: [0, 0, 120, 4],
            expected: 4,
        },
        {
            input: [0, 0, 120, 3],
            expected: 3,
        },
        {
            input: [0, 0, 120, 3.5],
            expected: 3.5,
        },
        {
            input: [0, 0, 120, 2.5],
            expected: 2.5,
        },
        {
            input: [3, 14, 120, 3],
            expected: 3,
        },
        {
            input: [2, 49, 240, 3.5],
            expected: 4,
        },
        {
            input: [3, 11, 120, 3.5],
            expected: 4,
        },
        {
            input: [1, 92, 320, 2],
            expected: 2.5,
        },
        {
            input: [0, 56, 240, 3],
            expected: 4,
        },
        {
            input: [3, 90, 120, 3],
            expected: 3,
        },
        {
            input: [0, 5, 120, 3.75],
            expected: 4,
        },
        {
            input: [1.1, 10, 240, 3.8],
            expected: 4,
        },
        {
            input: [2.07, 29, 220, 3.14],
            expected: 3.5,
        },
        {
            input: [1.25, 60, 320, 2.6],
            expected: 3,
        },
    ],
    options: {},
};
