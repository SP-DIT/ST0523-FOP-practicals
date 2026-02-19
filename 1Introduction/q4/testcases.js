module.exports = {
    testcases: [
        // Public test cases (first 3)
        {
            input: [10, 1],
            expected: 99,
            isPublic: true,
            description: 'Basic example: 10² - 1² = 100 - 1 = 99',
        },
        {
            input: [5, 3],
            expected: 16,
            isPublic: true,
            description: 'Simple calculation: 5² - 3² = 25 - 9 = 16',
        },
        {
            input: [4, 2],
            expected: 12,
            isPublic: true,
            description: 'Even numbers: 4² - 2² = 16 - 4 = 12',
        },

        // Private test cases
        {
            input: [0, 0],
            expected: 0,
            isPublic: false,
            description: 'Both zero: 0² - 0² = 0',
        },
        {
            input: [1, 0],
            expected: 1,
            isPublic: false,
            description: 'Second parameter zero: 1² - 0² = 1',
        },
        {
            input: [0, 1],
            expected: -1,
            isPublic: false,
            description: 'First parameter zero: 0² - 1² = -1',
        },
        {
            input: [1, 1],
            expected: 0,
            isPublic: false,
            description: 'Equal parameters: 1² - 1² = 0',
        },
        {
            input: [2, 2],
            expected: 0,
            isPublic: false,
            description: 'Equal larger parameters: 2² - 2² = 0',
        },
        {
            input: [3, 4],
            expected: -7,
            isPublic: false,
            description: 'First smaller than second: 3² - 4² = 9 - 16 = -7',
        },
        {
            input: [6, 2],
            expected: 32,
            isPublic: false,
            description: 'Larger difference: 6² - 2² = 36 - 4 = 32',
        },
        {
            input: [7, 0],
            expected: 49,
            isPublic: false,
            description: 'Second parameter zero: 7² - 0² = 49',
        },
        {
            input: [8, 6],
            expected: 28,
            isPublic: false,
            description: 'Both large: 8² - 6² = 64 - 36 = 28',
        },
        {
            input: [1, 5],
            expected: -24,
            isPublic: false,
            description: 'Large negative result: 1² - 5² = 1 - 25 = -24',
        },
        {
            input: [9, 9],
            expected: 0,
            isPublic: false,
            description: 'Large equal parameters: 9² - 9² = 0',
        },
        {
            input: [12, 5],
            expected: 119,
            isPublic: false,
            description: 'Larger numbers: 12² - 5² = 144 - 25 = 119',
        },
        {
            input: [3, 7],
            expected: -40,
            isPublic: false,
            description: 'Medium negative: 3² - 7² = 9 - 49 = -40',
        },
        {
            input: [15, 0],
            expected: 225,
            isPublic: false,
            description: 'Large first parameter: 15² - 0² = 225',
        },
        {
            input: [0, 10],
            expected: -100,
            isPublic: false,
            description: 'Large second parameter: 0² - 10² = -100',
        },
        {
            input: [13, 12],
            expected: 25,
            isPublic: false,
            description: 'Close large numbers: 13² - 12² = 169 - 144 = 25',
        },
        {
            input: [20, 20],
            expected: 0,
            isPublic: false,
            description: 'Very large equal: 20² - 20² = 0',
        },
    ],
    options: {
        type: 'JSON',
    },
};
