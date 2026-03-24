module.exports = {
    testcases: [
        // Public test cases (first 3)
        {
            input: [5],
            expected: 120,
            isPublic: true,
            description: 'Factorial of 5 should be 120',
        },
        {
            input: [7],
            expected: 5040,
            isPublic: true,
            description: 'Factorial of 7 should be 5040',
        },
        {
            input: [0],
            expected: 1,
            isPublic: true,
            description: 'Factorial of 0 should be 1',
        },
        // Hidden test cases
        {
            input: [1],
            expected: 1,
            isPublic: false,
            description: 'Factorial of 1 should be 1',
        },
        {
            input: [2],
            expected: 2,
            isPublic: false,
            description: 'Factorial of 2 should be 2',
        },
        {
            input: [3],
            expected: 6,
            isPublic: false,
            description: 'Factorial of 3 should be 6',
        },
        {
            input: [4],
            expected: 24,
            isPublic: false,
            description: 'Factorial of 4 should be 24',
        },
        {
            input: [6],
            expected: 720,
            isPublic: false,
            description: 'Factorial of 6 should be 720',
        },
        {
            input: [8],
            expected: 40320,
            isPublic: false,
            description: 'Factorial of 8 should be 40320',
        },
        {
            input: [9],
            expected: 362880,
            isPublic: false,
            description: 'Factorial of 9 should be 362880',
        },
        {
            input: [10],
            expected: 3628800,
            isPublic: false,
            description: 'Factorial of 10 should be 3628800',
        },
        {
            input: [11],
            expected: 39916800,
            isPublic: false,
            description: 'Factorial of 11 should be 39916800',
        },
        {
            input: [12],
            expected: 479001600,
            isPublic: false,
            description: 'Factorial of 12 should be 479001600',
        },
        {
            input: [-1],
            expected: 1,
            isPublic: false,
            description: 'Factorial loop for -1 should return 1',
        },
        {
            input: [-3],
            expected: 1,
            isPublic: false,
            description: 'Factorial loop for -3 should return 1',
        },
        {
            input: [13],
            expected: 6227020800,
            isPublic: false,
            description: 'Factorial of 13 should be 6227020800',
        },
        {
            input: [14],
            expected: 87178291200,
            isPublic: false,
            description: 'Factorial of 14 should be 87178291200',
        },
        {
            input: [15],
            expected: 1307674368000,
            isPublic: false,
            description: 'Factorial of 15 should be 1307674368000',
        },
        {
            input: [16],
            expected: 20922789888000,
            isPublic: false,
            description: 'Factorial of 16 should be 20922789888000',
        },
        {
            input: [17],
            expected: 355687428096000,
            isPublic: false,
            description: 'Factorial of 17 should be 355687428096000',
        },
    ],
    options: {
        type: 'JSON',
    },
};
