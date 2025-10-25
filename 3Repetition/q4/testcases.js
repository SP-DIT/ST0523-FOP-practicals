module.exports = {
    testcases: [
        // Public test cases (first 3)
        {
            input: [10, 3],
            expected: 3,
            isPublic: true,
            description: 'Count multiples of 3 between 1 and 10 -> (3,6,9) = 3',
        },
        {
            input: [20, 5],
            expected: 4,
            isPublic: true,
            description: 'Count multiples of 5 between 1 and 20 -> (5,10,15,20) = 4',
        },
        {
            input: [7, 2],
            expected: 3,
            isPublic: true,
            description: 'Count multiples of 2 between 1 and 7 -> (2,4,6) = 3',
        },

        // Hidden test cases
        {
            input: [0, 3],
            expected: 0,
            isPublic: false,
            description: 'n = 0 should return 0',
        },
        {
            input: [5, 1],
            expected: 5,
            isPublic: false,
            description: 'Count multiples of 1 -> every number is a multiple of 1',
        },
        {
            input: [10, 10],
            expected: 1,
            isPublic: false,
            description: 'Count multiples of 10 up to 10 -> only 10 itself',
        },
        {
            input: [9, 10],
            expected: 0,
            isPublic: false,
            description: 'Count multiples of 10 up to 9 -> none',
        },
        {
            input: [15, 4],
            expected: 3,
            isPublic: false,
            description: 'Count multiples of 4 between 1 and 15 -> (4,8,12) = 3',
        },
        {
            input: [100, 7],
            expected: 14,
            isPublic: false,
            description: 'Count multiples of 7 between 1 and 100 -> 14',
        },
        {
            input: [6, 6],
            expected: 1,
            isPublic: false,
            description: 'Count multiples of 6 up to 6 -> only 6 itself',
        },
        {
            input: [14, 4],
            expected: 3,
            isPublic: false,
            description: 'Count multiples of 4 between 1 and 14 -> (4,8,12) = 3',
        },
        {
            input: [16, 4],
            expected: 4,
            isPublic: false,
            description: 'Count multiples of 4 between 1 and 16 -> (4,8,12,16) = 4',
        },
        {
            input: [13, 5],
            expected: 2,
            isPublic: false,
            description: 'Count multiples of 5 between 1 and 13 -> (5,10) = 2',
        },
        {
            input: [1, 2],
            expected: 0,
            isPublic: false,
            description: 'n < x should return 0',
        },
        {
            input: [50, 12],
            expected: 4,
            isPublic: false,
            description: 'Count multiples of 12 between 1 and 50 -> (12,24,36,48) = 4',
        },
        {
            input: [30, 6],
            expected: 5,
            isPublic: false,
            description: 'Count multiples of 6 between 1 and 30 -> (6,12,18,24,30) = 5',
        },
        {
            input: [25, 8],
            expected: 3,
            isPublic: false,
            description: 'Count multiples of 8 between 1 and 25 -> (8,16,24) = 3',
        },
        {
            input: [1000, 13],
            expected: 76,
            isPublic: false,
            description: 'Large numbers: multiples of 13 up to 1000',
        },
        {
            input: [3, 3],
            expected: 1,
            isPublic: false,
            description: 'n equals x -> exactly one multiple',
        },
        {
            input: [18, 9],
            expected: 2,
            isPublic: false,
            description: 'Count multiples of 9 between 1 and 18 -> (9,18) = 2',
        },
    ],
    options: {
        type: 'JSON',
    },
};