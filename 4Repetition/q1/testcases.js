module.exports = {
    testcases: [
        // Public test cases (first 3)
        {
            input: [5],
            expected: 15,
            isPublic: true,
            description: 'Sum from 1 to 5 should be 15',
        },
        {
            input: [7],
            expected: 28,
            isPublic: true,
            description: 'Sum from 1 to 7 should be 28',
        },
        {
            input: [1],
            expected: 1,
            isPublic: true,
            description: 'Sum from 1 to 1 should be 1',
        },
        // Hidden test cases
        {
            input: [0],
            expected: 0,
            isPublic: false,
            description: 'Sum from 1 to 0 should be 0',
        },
        {
            input: [2],
            expected: 3,
            isPublic: false,
            description: 'Sum from 1 to 2 should be 3',
        },
        {
            input: [3],
            expected: 6,
            isPublic: false,
            description: 'Sum from 1 to 3 should be 6',
        },
        {
            input: [4],
            expected: 10,
            isPublic: false,
            description: 'Sum from 1 to 4 should be 10',
        },
        {
            input: [6],
            expected: 21,
            isPublic: false,
            description: 'Sum from 1 to 6 should be 21',
        },
        {
            input: [8],
            expected: 36,
            isPublic: false,
            description: 'Sum from 1 to 8 should be 36',
        },
        {
            input: [9],
            expected: 45,
            isPublic: false,
            description: 'Sum from 1 to 9 should be 45',
        },
        {
            input: [10],
            expected: 55,
            isPublic: false,
            description: 'Sum from 1 to 10 should be 55',
        },
        {
            input: [12],
            expected: 78,
            isPublic: false,
            description: 'Sum from 1 to 12 should be 78',
        },
        {
            input: [15],
            expected: 120,
            isPublic: false,
            description: 'Sum from 1 to 15 should be 120',
        },
        {
            input: [20],
            expected: 210,
            isPublic: false,
            description: 'Sum from 1 to 20 should be 210',
        },
        {
            input: [25],
            expected: 325,
            isPublic: false,
            description: 'Sum from 1 to 25 should be 325',
        },
        {
            input: [50],
            expected: 1275,
            isPublic: false,
            description: 'Sum from 1 to 50 should be 1275',
        },
        {
            input: [100],
            expected: 5050,
            isPublic: false,
            description: 'Sum from 1 to 100 should be 5050',
        },
        {
            input: [-1],
            expected: 0,
            isPublic: false,
            description: 'Sum from 1 to -1 should be 0',
        },
        {
            input: [-5],
            expected: 0,
            isPublic: false,
            description: 'Sum from 1 to -5 should be 0',
        },
        {
            input: [30],
            expected: 465,
            isPublic: false,
            description: 'Sum from 1 to 30 should be 465',
        },
    ],
    options: {
        type: 'JSON',
    },
};
