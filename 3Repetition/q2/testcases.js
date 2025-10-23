module.exports = {
    testcases: [
        // Public test cases (first 3)
        {
            input: [5],
            expected: 6,
            isPublic: true,
            description: 'Sum even numbers from 1 to 5: 2 + 4 = 6',
        },
        {
            input: [10],
            expected: 30,
            isPublic: true,
            description: 'Sum even numbers from 1 to 10: 2 + 4 + 6 + 8 + 10 = 30',
        },
        {
            input: [1],
            expected: 0,
            isPublic: true,
            description: 'Sum even numbers from 1 to 1: no even numbers = 0',
        },
        // Hidden test cases
        {
            input: [0],
            expected: 0,
            isPublic: false,
            description: 'Sum even numbers from 1 to 0: no numbers = 0',
        },
        {
            input: [2],
            expected: 2,
            isPublic: false,
            description: 'Sum even numbers from 1 to 2: 2 = 2',
        },
        {
            input: [3],
            expected: 2,
            isPublic: false,
            description: 'Sum even numbers from 1 to 3: 2 = 2',
        },
        {
            input: [4],
            expected: 6,
            isPublic: false,
            description: 'Sum even numbers from 1 to 4: 2 + 4 = 6',
        },
        {
            input: [6],
            expected: 12,
            isPublic: false,
            description: 'Sum even numbers from 1 to 6: 2 + 4 + 6 = 12',
        },
        {
            input: [7],
            expected: 12,
            isPublic: false,
            description: 'Sum even numbers from 1 to 7: 2 + 4 + 6 = 12',
        },
        {
            input: [8],
            expected: 20,
            isPublic: false,
            description: 'Sum even numbers from 1 to 8: 2 + 4 + 6 + 8 = 20',
        },
        {
            input: [9],
            expected: 20,
            isPublic: false,
            description: 'Sum even numbers from 1 to 9: 2 + 4 + 6 + 8 = 20',
        },
        {
            input: [12],
            expected: 42,
            isPublic: false,
            description: 'Sum even numbers from 1 to 12: 2 + 4 + 6 + 8 + 10 + 12 = 42',
        },
        {
            input: [15],
            expected: 56,
            isPublic: false,
            description: 'Sum even numbers from 1 to 15: 2 + 4 + 6 + 8 + 10 + 12 + 14 = 56',
        },
        {
            input: [20],
            expected: 110,
            isPublic: false,
            description: 'Sum even numbers from 1 to 20: 2 + 4 + ... + 20 = 110',
        },
        {
            input: [14],
            expected: 56,
            isPublic: false,
            description: 'Sum even numbers from 1 to 14: 2 + 4 + 6 + 8 + 10 + 12 + 14 = 56',
        },
        {
            input: [16],
            expected: 72,
            isPublic: false,
            description: 'Sum even numbers from 1 to 16: 2 + 4 + ... + 16 = 72',
        },
        {
            input: [18],
            expected: 90,
            isPublic: false,
            description: 'Sum even numbers from 1 to 18: 2 + 4 + ... + 18 = 90',
        },
        {
            input: [25],
            expected: 156,
            isPublic: false,
            description: 'Sum even numbers from 1 to 25: 2 + 4 + ... + 24 = 156',
        },
        {
            input: [30],
            expected: 240,
            isPublic: false,
            description: 'Sum even numbers from 1 to 30: 2 + 4 + ... + 30 = 240',
        },
        {
            input: [11],
            expected: 30,
            isPublic: false,
            description: 'Sum even numbers from 1 to 11: 2 + 4 + 6 + 8 + 10 = 30',
        },
    ],
    options: {
        type: 'JSON',
    },
};