module.exports = {
    testcases: [
        // Public test cases (first 3)
        {
            input: [2],
            expected: true,
            isPublic: true,
            description: '2 should be prime',
        },
        {
            input: [3],
            expected: true,
            isPublic: true,
            description: '3 should be prime',
        },
        {
            input: [4],
            expected: false,
            isPublic: true,
            description: '4 should not be prime',
        },
        // Hidden test cases
        {
            input: [5],
            expected: true,
            isPublic: false,
            description: '5 should be prime',
        },
        {
            input: [10],
            expected: false,
            isPublic: false,
            description: '10 should not be prime',
        },
        {
            input: [0],
            expected: false,
            isPublic: false,
            description: '0 should not be prime',
        },
        {
            input: [1],
            expected: false,
            isPublic: false,
            description: '1 should not be prime',
        },
        {
            input: [-1],
            expected: false,
            isPublic: false,
            description: '-1 should not be prime',
        },
        {
            input: [6],
            expected: false,
            isPublic: false,
            description: '6 should not be prime',
        },
        {
            input: [7],
            expected: true,
            isPublic: false,
            description: '7 should be prime',
        },
        {
            input: [8],
            expected: false,
            isPublic: false,
            description: '8 should not be prime',
        },
        {
            input: [9],
            expected: false,
            isPublic: false,
            description: '9 should not be prime',
        },
        {
            input: [11],
            expected: true,
            isPublic: false,
            description: '11 should be prime',
        },
        {
            input: [13],
            expected: true,
            isPublic: false,
            description: '13 should be prime',
        },
        {
            input: [15],
            expected: false,
            isPublic: false,
            description: '15 should not be prime',
        },
        {
            input: [17],
            expected: true,
            isPublic: false,
            description: '17 should be prime',
        },
        {
            input: [19],
            expected: true,
            isPublic: false,
            description: '19 should be prime',
        },
        {
            input: [21],
            expected: false,
            isPublic: false,
            description: '21 should not be prime',
        },
        {
            input: [23],
            expected: true,
            isPublic: false,
            description: '23 should be prime',
        },
        {
            input: [25],
            expected: false,
            isPublic: false,
            description: '25 should not be prime',
        },
    ],
    options: {
        type: 'JSON',
    },
};
