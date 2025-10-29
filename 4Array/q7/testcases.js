module.exports = {
    testcases: [
        // Public test cases (first 3)
        {
            input: [2, 5],
            expected: [2, 4, 6, 8, 10],
            isPublic: true,
            description: 'First 5 multiples of 2 should be [2, 4, 6, 8, 10]',
        },
        {
            input: [3, 4],
            expected: [3, 6, 9, 12],
            isPublic: true,
            description: 'First 4 multiples of 3 should be [3, 6, 9, 12]',
        },
        {
            input: [5, 3],
            expected: [5, 10, 15],
            isPublic: true,
            description: 'First 3 multiples of 5 should be [5, 10, 15]',
        },
        // Hidden test cases
        {
            input: [10, 0],
            expected: [],
            isPublic: false,
            description: 'First 0 multiples of 10 should be [] (empty array)',
        },
        {
            input: [1, 5],
            expected: [1, 2, 3, 4, 5],
            isPublic: false,
            description: 'First 5 multiples of 1 should be [1, 2, 3, 4, 5]',
        },
        {
            input: [7, 1],
            expected: [7],
            isPublic: false,
            description: 'First 1 multiple of 7 should be [7]',
        },
        {
            input: [4, 6],
            expected: [4, 8, 12, 16, 20, 24],
            isPublic: false,
            description: 'First 6 multiples of 4 should be [4, 8, 12, 16, 20, 24]',
        },
        {
            input: [0, 5],
            expected: [0, 0, 0, 0, 0],
            isPublic: false,
            description: 'First 5 multiples of 0 should be [0, 0, 0, 0, 0]',
        },
        {
            input: [6, 3],
            expected: [6, 12, 18],
            isPublic: false,
            description: 'First 3 multiples of 6 should be [6, 12, 18]',
        },
        {
            input: [9, 2],
            expected: [9, 18],
            isPublic: false,
            description: 'First 2 multiples of 9 should be [9, 18]',
        },
        {
            input: [8, 4],
            expected: [8, 16, 24, 32],
            isPublic: false,
            description: 'First 4 multiples of 8 should be [8, 16, 24, 32]',
        },
        {
            input: [11, 3],
            expected: [11, 22, 33],
            isPublic: false,
            description: 'First 3 multiples of 11 should be [11, 22, 33]',
        },
        {
            input: [12, 5],
            expected: [12, 24, 36, 48, 60],
            isPublic: false,
            description: 'First 5 multiples of 12 should be [12, 24, 36, 48, 60]',
        },
        {
            input: [15, 2],
            expected: [15, 30],
            isPublic: false,
            description: 'First 2 multiples of 15 should be [15, 30]',
        },
        {
            input: [20, 3],
            expected: [20, 40, 60],
            isPublic: false,
            description: 'First 3 multiples of 20 should be [20, 40, 60]',
        },
        {
            input: [25, 4],
            expected: [25, 50, 75, 100],
            isPublic: false,
            description: 'First 4 multiples of 25 should be [25, 50, 75, 100]',
        },
        {
            input: [100, 2],
            expected: [100, 200],
            isPublic: false,
            description: 'First 2 multiples of 100 should be [100, 200]',
        },
        {
            input: [13, 6],
            expected: [13, 26, 39, 52, 65, 78],
            isPublic: false,
            description: 'First 6 multiples of 13 should be [13, 26, 39, 52, 65, 78]',
        },
        {
            input: [50, 1],
            expected: [50],
            isPublic: false,
            description: 'First 1 multiple of 50 should be [50]',
        },
        {
            input: [7, 7],
            expected: [7, 14, 21, 28, 35, 42, 49],
            isPublic: false,
            description: 'First 7 multiples of 7 should be [7, 14, 21, 28, 35, 42, 49]',
        },
    ],
    options: {
        type: 'JSON',
    },
};