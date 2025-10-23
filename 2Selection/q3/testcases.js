module.exports = {
    testcases: [
        // Public test cases (first 3)
        {
            input: [3],
            expected: 'fizz',
            isPublic: true,
            description: '3 is divisible by 3 only, should return "fizz"',
        },
        {
            input: [5],
            expected: 'buzz',
            isPublic: true,
            description: '5 is divisible by 5 only, should return "buzz"',
        },
        {
            input: [15],
            expected: 'fizzbuzz',
            isPublic: true,
            description: '15 is divisible by both 3 and 5, should return "fizzbuzz"',
        },
        // Hidden test cases
        {
            input: [16],
            expected: 16,
            isPublic: false,
            description: '16 is not divisible by 3 or 5, should return 16',
        },
        {
            input: [9],
            expected: 'fizz',
            isPublic: false,
            description: '9 is divisible by 3 only, should return "fizz"',
        },
        {
            input: [10],
            expected: 'buzz',
            isPublic: false,
            description: '10 is divisible by 5 only, should return "buzz"',
        },
        {
            input: [30],
            expected: 'fizzbuzz',
            isPublic: false,
            description: '30 is divisible by both 3 and 5, should return "fizzbuzz"',
        },
        {
            input: [1],
            expected: 1,
            isPublic: false,
            description: '1 is not divisible by 3 or 5, should return 1',
        },
        {
            input: [6],
            expected: 'fizz',
            isPublic: false,
            description: '6 is divisible by 3 only, should return "fizz"',
        },
        {
            input: [25],
            expected: 'buzz',
            isPublic: false,
            description: '25 is divisible by 5 only, should return "buzz"',
        },
        {
            input: [12],
            expected: 'fizz',
            isPublic: false,
            description: '12 is divisible by 3 only, should return "fizz"',
        },
        {
            input: [20],
            expected: 'buzz',
            isPublic: false,
            description: '20 is divisible by 5 only, should return "buzz"',
        },
        {
            input: [45],
            expected: 'fizzbuzz',
            isPublic: false,
            description: '45 is divisible by both 3 and 5, should return "fizzbuzz"',
        },
        {
            input: [7],
            expected: 7,
            isPublic: false,
            description: '7 is not divisible by 3 or 5, should return 7',
        },
        {
            input: [21],
            expected: 'fizz',
            isPublic: false,
            description: '21 is divisible by 3 only, should return "fizz"',
        },
        {
            input: [35],
            expected: 'buzz',
            isPublic: false,
            description: '35 is divisible by 5 only, should return "buzz"',
        },
        {
            input: [60],
            expected: 'fizzbuzz',
            isPublic: false,
            description: '60 is divisible by both 3 and 5, should return "fizzbuzz"',
        },
        {
            input: [2],
            expected: 2,
            isPublic: false,
            description: '2 is not divisible by 3 or 5, should return 2',
        },
        {
            input: [18],
            expected: 'fizz',
            isPublic: false,
            description: '18 is divisible by 3 only, should return "fizz"',
        },
        {
            input: [50],
            expected: 'buzz',
            isPublic: false,
            description: '50 is divisible by 5 only, should return "buzz"',
        },
    ],
    options: {
        type: 'JSON',
    },
};
