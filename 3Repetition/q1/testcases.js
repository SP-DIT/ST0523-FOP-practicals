module.exports = {
    testcases: [
        // Public test cases (first 3)
        {
            input: [4],
            expected: 10,
            isPublic: true,
            description: 'Sum from 1 to 4: 1+2+3+4 = 10',
        },
        {
            input: [6],
            expected: 21,
            isPublic: true,
            description: 'Sum from 1 to 6: 1+2+3+4+5+6 = 21',
        },
        {
            input: [1],
            expected: 1,
            isPublic: true,
            description: 'Sum from 1 to 1: 1 = 1',
        },
        // Hidden test cases
        {
            input: [0],
            expected: 0,
            isPublic: false,
            description: 'Sum from 1 to 0 should return 0',
        },
        {
            input: [2],
            expected: 3,
            isPublic: false,
            description: 'Sum from 1 to 2: 1+2 = 3',
        },
        {
            input: [3],
            expected: 6,
            isPublic: false,
            description: 'Sum from 1 to 3: 1+2+3 = 6',
        },
        {
            input: [5],
            expected: 15,
            isPublic: false,
            description: 'Sum from 1 to 5: 1+2+3+4+5 = 15',
        },
        {
            input: [7],
            expected: 28,
            isPublic: false,
            description: 'Sum from 1 to 7: 1+2+3+4+5+6+7 = 28',
        },
        {
            input: [8],
            expected: 36,
            isPublic: false,
            description: 'Sum from 1 to 8: 1+2+3+4+5+6+7+8 = 36',
        },
        {
            input: [9],
            expected: 45,
            isPublic: false,
            description: 'Sum from 1 to 9: 1+2+3+4+5+6+7+8+9 = 45',
        },
        {
            input: [10],
            expected: 55,
            isPublic: false,
            description: 'Sum from 1 to 10: 1+2+3+4+5+6+7+8+9+10 = 55',
        },
        {
            input: [15],
            expected: 120,
            isPublic: false,
            description: 'Sum from 1 to 15: 120',
        },
        {
            input: [20],
            expected: 210,
            isPublic: false,
            description: 'Sum from 1 to 20: 210',
        },
        {
            input: [25],
            expected: 325,
            isPublic: false,
            description: 'Sum from 1 to 25: 325',
        },
        {
            input: [50],
            expected: 1275,
            isPublic: false,
            description: 'Sum from 1 to 50: 1275',
        },
        {
            input: [100],
            expected: 5050,
            isPublic: false,
            description: 'Sum from 1 to 100: 5050',
        },
        {
            input: [12],
            expected: 78,
            isPublic: false,
            description: 'Sum from 1 to 12: 78',
        },
        {
            input: [13],
            expected: 91,
            isPublic: false,
            description: 'Sum from 1 to 13: 91',
        },
        {
            input: [14],
            expected: 105,
            isPublic: false,
            description: 'Sum from 1 to 14: 105',
        },
        {
            input: [11],
            expected: 66,
            isPublic: false,
            description: 'Sum from 1 to 11: 66',
        },
    ],
    options: {
        type: 'JSON',
    },
};
