module.exports = {
    testcases: [
        // Public test cases (first 3)
        {
            input: [3],
            expected: 1,
            isPublic: true,
            description: 'fibonacci(3) should return 1',
        },
        {
            input: [6],
            expected: 5,
            isPublic: true,
            description: 'fibonacci(6) should return 5',
        },
        {
            input: [1],
            expected: 0,
            isPublic: true,
            description: 'fibonacci(1) should return 0 (base case)',
        },
        // Hidden test cases
        {
            input: [2],
            expected: 1,
            isPublic: false,
            description: 'fibonacci(2) should return 1 (base case)',
        },
        {
            input: [4],
            expected: 2,
            isPublic: false,
            description: 'fibonacci(4) should return 2',
        },
        {
            input: [5],
            expected: 3,
            isPublic: false,
            description: 'fibonacci(5) should return 3',
        },
        {
            input: [7],
            expected: 8,
            isPublic: false,
            description: 'fibonacci(7) should return 8',
        },
        {
            input: [8],
            expected: 13,
            isPublic: false,
            description: 'fibonacci(8) should return 13',
        },
        {
            input: [9],
            expected: 21,
            isPublic: false,
            description: 'fibonacci(9) should return 21',
        },
        {
            input: [10],
            expected: 34,
            isPublic: false,
            description: 'fibonacci(10) should return 34',
        },
        {
            input: [11],
            expected: 55,
            isPublic: false,
            description: 'fibonacci(11) should return 55',
        },
        {
            input: [12],
            expected: 89,
            isPublic: false,
            description: 'fibonacci(12) should return 89',
        },
        {
            input: [13],
            expected: 144,
            isPublic: false,
            description: 'fibonacci(13) should return 144',
        },
        {
            input: [14],
            expected: 233,
            isPublic: false,
            description: 'fibonacci(14) should return 233',
        },
        {
            input: [15],
            expected: 377,
            isPublic: false,
            description: 'fibonacci(15) should return 377',
        },
        {
            input: [16],
            expected: 610,
            isPublic: false,
            description: 'fibonacci(16) should return 610',
        },
        {
            input: [17],
            expected: 987,
            isPublic: false,
            description: 'fibonacci(17) should return 987',
        },
        {
            input: [18],
            expected: 1597,
            isPublic: false,
            description: 'fibonacci(18) should return 1597',
        },
        {
            input: [19],
            expected: 2584,
            isPublic: false,
            description: 'fibonacci(19) should return 2584',
        },
        {
            input: [20],
            expected: 4181,
            isPublic: false,
            description: 'fibonacci(20) should return 4181',
        },
    ],
    options: {
        type: 'JSON',
    },
};
