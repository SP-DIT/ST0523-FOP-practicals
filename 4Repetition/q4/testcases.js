module.exports = {
    testcases: [
        // Public test cases (first 3)
        {
            input: [1, 4],
            expected: 10,
            isPublic: true,
            description: 'Sum from 1 to 4 should be 10',
        },
        {
            input: [3, 6],
            expected: 18,
            isPublic: true,
            description: 'Sum from 3 to 6 should be 18',
        },
        {
            input: [5, 5],
            expected: 5,
            isPublic: true,
            description: 'Sum from 5 to 5 should be 5',
        },
        // Hidden test cases
        {
            input: [0, 0],
            expected: 0,
            isPublic: false,
            description: 'Sum from 0 to 0 should be 0',
        },
        {
            input: [0, 3],
            expected: 6,
            isPublic: false,
            description: 'Sum from 0 to 3 should be 6',
        },
        {
            input: [2, 2],
            expected: 2,
            isPublic: false,
            description: 'Sum from 2 to 2 should be 2',
        },
        {
            input: [2, 3],
            expected: 5,
            isPublic: false,
            description: 'Sum from 2 to 3 should be 5',
        },
        {
            input: [4, 7],
            expected: 22,
            isPublic: false,
            description: 'Sum from 4 to 7 should be 22',
        },
        {
            input: [1, 10],
            expected: 55,
            isPublic: false,
            description: 'Sum from 1 to 10 should be 55',
        },
        {
            input: [10, 20],
            expected: 165,
            isPublic: false,
            description: 'Sum from 10 to 20 should be 165',
        },
        {
            input: [20, 25],
            expected: 135,
            isPublic: false,
            description: 'Sum from 20 to 25 should be 135',
        },
        {
            input: [50, 50],
            expected: 50,
            isPublic: false,
            description: 'Sum from 50 to 50 should be 50',
        },
        {
            input: [7, 9],
            expected: 24,
            isPublic: false,
            description: 'Sum from 7 to 9 should be 24',
        },
        {
            input: [8, 12],
            expected: 50,
            isPublic: false,
            description: 'Sum from 8 to 12 should be 50',
        },
        {
            input: [99, 100],
            expected: 199,
            isPublic: false,
            description: 'Sum from 99 to 100 should be 199',
        },
        {
            input: [100, 100],
            expected: 100,
            isPublic: false,
            description: 'Sum from 100 to 100 should be 100',
        },
        {
            input: [-3, 3],
            expected: 0,
            isPublic: false,
            description: 'Sum from -3 to 3 should be 0',
        },
        {
            input: [-5, -1],
            expected: -15,
            isPublic: false,
            description: 'Sum from -5 to -1 should be -15',
        },
        {
            input: [-2, 2],
            expected: 0,
            isPublic: false,
            description: 'Sum from -2 to 2 should be 0',
        },
        {
            input: [15, 30],
            expected: 360,
            isPublic: false,
            description: 'Sum from 15 to 30 should be 360',
        },
    ],
    options: {
        type: 'JSON',
    },
};
