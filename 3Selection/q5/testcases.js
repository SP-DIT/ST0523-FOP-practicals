module.exports = {
    testcases: [
        // Public test cases (first 3)
        {
            input: [2],
            expected: true,
            isPublic: true,
            description: 'Even number: 2 should return true',
        },
        {
            input: [3],
            expected: false,
            isPublic: true,
            description: 'Odd number: 3 should return false',
        },
        {
            input: [4],
            expected: true,
            isPublic: true,
            description: 'Even number: 4 should return true',
        },
        // Hidden test cases
        {
            input: [5],
            expected: false,
            isPublic: false,
            description: 'Odd number: 5 should return false',
        },
        {
            input: [0],
            expected: true,
            isPublic: false,
            description: 'Zero should return true (even)',
        },
        {
            input: [1],
            expected: false,
            isPublic: false,
            description: 'One should return false (odd)',
        },
        {
            input: [6],
            expected: true,
            isPublic: false,
            description: 'Even number: 6 should return true',
        },
        {
            input: [7],
            expected: false,
            isPublic: false,
            description: 'Odd number: 7 should return false',
        },
        {
            input: [8],
            expected: true,
            isPublic: false,
            description: 'Even number: 8 should return true',
        },
        {
            input: [9],
            expected: false,
            isPublic: false,
            description: 'Odd number: 9 should return false',
        },
        {
            input: [10],
            expected: true,
            isPublic: false,
            description: 'Even number: 10 should return true',
        },
        {
            input: [11],
            expected: false,
            isPublic: false,
            description: 'Odd number: 11 should return false',
        },
        {
            input: [100],
            expected: true,
            isPublic: false,
            description: 'Large even number: 100 should return true',
        },
        {
            input: [101],
            expected: false,
            isPublic: false,
            description: 'Large odd number: 101 should return false',
        },
        {
            input: [1000],
            expected: true,
            isPublic: false,
            description: 'Very large even number: 1000 should return true',
        },
        {
            input: [999],
            expected: false,
            isPublic: false,
            description: 'Very large odd number: 999 should return false',
        },
        {
            input: [-2],
            expected: true,
            isPublic: false,
            description: 'Negative even number: -2 should return true',
        },
        {
            input: [-1],
            expected: false,
            isPublic: false,
            description: 'Negative odd number: -1 should return false',
        },
        {
            input: [-10],
            expected: true,
            isPublic: false,
            description: 'Negative even number: -10 should return true',
        },
        {
            input: [-7],
            expected: false,
            isPublic: false,
            description: 'Negative odd number: -7 should return false',
        },
    ],
    options: {
        type: 'JSON',
    },
};
