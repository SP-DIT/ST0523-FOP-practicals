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
    ],
    options: {
        type: 'JSON',
    },
};
