module.exports = {
    testcases: [
        // Public test cases (first 3)
        {
            input: [10],
            expected: 3,
            isPublic: true,
            description: 'Count multiples of 3 between 1 and 10 -> (3,6,9) = 3',
        },
        {
            input: [20],
            expected: 6,
            isPublic: true,
            description: 'Count multiples of 3 between 1 and 20 -> 6',
        },
        {
            input: [3],
            expected: 1,
            isPublic: true,
            description: 'Exactly one multiple when n=3 -> (3)',
        },

        // Hidden / additional cases
        {
            input: [0],
            expected: 0,
            isPublic: false,
            description: 'n = 0 should return 0',
        },
        {
            input: [1],
            expected: 0,
            isPublic: false,
            description: 'n = 1 has no multiples of 3',
        },
        {
            input: [2],
            expected: 0,
            isPublic: false,
            description: 'n = 2 has no multiples of 3',
        },
        {
            input: [4],
            expected: 1,
            isPublic: false,
            description: 'n = 4 -> (3) = 1',
        },
        {
            input: [5],
            expected: 1,
            isPublic: false,
            description: 'n = 5 -> (3) = 1',
        },
        {
            input: [6],
            expected: 2,
            isPublic: false,
            description: 'n = 6 -> (3,6) = 2',
        },
        {
            input: [100],
            expected: 33,
            isPublic: false,
            description: 'n = 100 should return floor(100/3)=33',
        },
        {
            input: [99],
            expected: 33,
            isPublic: false,
            description: 'n = 99 -> 33 multiples (3..99)',
        },
        {
            input: [101],
            expected: 33,
            isPublic: false,
            description: 'n = 101 -> floor(101/3)=33',
        },
        {
            input: [102],
            expected: 34,
            isPublic: false,
            description: 'n = 102 -> 34 multiples (3..102)',
        },
        {
            input: [-5],
            expected: 0,
            isPublic: false,
            description: 'Negative n should return 0',
        },
        {
            input: [3.9],
            expected: 1,
            isPublic: false,
            description: 'Non-integer n (3.9) treated by floor -> floor(3.9/3)=1',
        },
        {
            input: [2.9],
            expected: 0,
            isPublic: false,
            description: 'Non-integer n less than 3 -> 0',
        },
        {
            input: [1000000],
            expected: 333333,
            isPublic: false,
            description: 'Large n performance check',
        },
        {
            input: [999999],
            expected: 333333,
            isPublic: false,
            description: 'Large odd n -> floor division',
        },
        {
            input: ['a'],
            expected: 0,
            isPublic: false,
            description: 'Invalid input type should return 0',
        },
        {
            input: [null],
            expected: 0,
            isPublic: false,
            description: 'Null input should return 0',
        },
    ],
    options: {
        type: 'JSON',
    },
};
