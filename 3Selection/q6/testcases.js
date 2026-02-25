module.exports = {
    testcases: [
        // Public test cases (first 3)
        {
            input: [5, 3],
            expected: false,
            isPublic: true,
            description: '5 divided by 3 has remainder of 2 (not divisible)',
        },
        {
            input: [15, 5],
            expected: true,
            isPublic: true,
            description: '15 divided by 5 has remainder of 0 (divisible)',
        },
        {
            input: [21, 7],
            expected: true,
            isPublic: true,
            description: '21 divided by 7 has remainder of 0 (divisible)',
        },
        // Hidden test cases
        {
            input: [10, 3],
            expected: false,
            isPublic: false,
            description: '10 divided by 3 has remainder of 1 (not divisible)',
        },
        {
            input: [10, 4],
            expected: false,
            isPublic: false,
            description: '10 divided by 4 has remainder of 2 (not divisible)',
        },
        {
            input: [13, 5],
            expected: false,
            isPublic: false,
            description: '13 divided by 5 has remainder of 3 (not divisible)',
        },
        {
            input: [12, 4],
            expected: true,
            isPublic: false,
            description: '12 divided by 4 has remainder of 0 (divisible)',
        },
        {
            input: [100, 10],
            expected: true,
            isPublic: false,
            description: '100 divided by 10 has remainder of 0 (divisible)',
        },
        {
            input: [0, 5],
            expected: true,
            isPublic: false,
            description: '0 divided by any non-zero number is divisible',
        },
        {
            input: [7, 1],
            expected: true,
            isPublic: false,
            description: 'Any number is divisible by 1',
        },
        {
            input: [25, 25],
            expected: true,
            isPublic: false,
            description: 'Any number is divisible by itself',
        },
        {
            input: [1, 1],
            expected: true,
            isPublic: false,
            description: '1 is divisible by 1',
        },
        {
            input: [2, 2],
            expected: true,
            isPublic: false,
            description: '2 is divisible by 2',
        },
        {
            input: [9, 3],
            expected: true,
            isPublic: false,
            description: '9 divided by 3 has remainder of 0 (divisible)',
        },
        {
            input: [8, 3],
            expected: false,
            isPublic: false,
            description: '8 divided by 3 has remainder of 2 (not divisible)',
        },
        {
            input: [17, 2],
            expected: false,
            isPublic: false,
            description: '17 divided by 2 has remainder of 1 (not divisible)',
        },
        {
            input: [20, 4],
            expected: true,
            isPublic: false,
            description: '20 divided by 4 has remainder of 0 (divisible)',
        },
        {
            input: [99, 9],
            expected: true,
            isPublic: false,
            description: '99 divided by 9 has remainder of 0 (divisible)',
        },
        {
            input: [50, 7],
            expected: false,
            isPublic: false,
            description: '50 divided by 7 has remainder of 1 (not divisible)',
        },
        {
            input: [144, 12],
            expected: true,
            isPublic: false,
            description: '144 divided by 12 has remainder of 0 (divisible)',
        },
    ],
    options: {
        type: 'JSON',
    },
};
