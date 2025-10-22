module.exports = {
    testcases: [
        // Public test cases (first 3)
        {
            input: [2],
            expected: true,
            isPublic: true,
        },
        {
            input: [3],
            expected: false,
            isPublic: true,
        },
        {
            input: [4],
            expected: true,
            isPublic: true,
        },
        // Hidden test cases
        {
            input: [5],
            expected: false,
            isPublic: false,
        },
        {
            input: [0],
            expected: true,
            isPublic: false,
        },
        {
            input: [1],
            expected: false,
            isPublic: false,
        },
        {
            input: [6],
            expected: true,
            isPublic: false,
        },
        {
            input: [7],
            expected: false,
            isPublic: false,
        },
        {
            input: [8],
            expected: true,
            isPublic: false,
        },
        {
            input: [9],
            expected: false,
            isPublic: false,
        },
        {
            input: [10],
            expected: true,
            isPublic: false,
        },
        {
            input: [11],
            expected: false,
            isPublic: false,
        },
        {
            input: [100],
            expected: true,
            isPublic: false,
        },
        {
            input: [101],
            expected: false,
            isPublic: false,
        },
        {
            input: [1000],
            expected: true,
            isPublic: false,
        },
        {
            input: [999],
            expected: false,
            isPublic: false,
        },
        {
            input: [-2],
            expected: true,
            isPublic: false,
        },
        {
            input: [-1],
            expected: false,
            isPublic: false,
        },
        {
            input: [-10],
            expected: true,
            isPublic: false,
        },
        {
            input: [-7],
            expected: false,
            isPublic: false,
        },
    ],
    options: {
        type: 'JSON',
    },
};
