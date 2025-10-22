module.exports = {
    testcases: [
        // Public test cases (first 3)
        {
            input: [1, 2, 3, 4],
            expected: 4,
            isPublic: true,
            description: 'Ascending order: biggest(1, 2, 3, 4) should return 4',
        },
        {
            input: [3, 2, 5, 1],
            expected: 5,
            isPublic: true,
            description: 'Mixed order: biggest(3, 2, 5, 1) should return 5',
        },
        {
            input: [9, 9, 9, 9],
            expected: 9,
            isPublic: true,
            description: 'All equal: biggest(9, 9, 9, 9) should return 9',
        },
        // Hidden test cases
        {
            input: [10, 5, 7, 2],
            expected: 10,
            isPublic: false,
            description: 'First number biggest: biggest(10, 5, 7, 2) should return 10',
        },
        {
            input: [1, 15, 7, 2],
            expected: 15,
            isPublic: false,
            description: 'Second number biggest: biggest(1, 15, 7, 2) should return 15',
        },
        {
            input: [1, 5, 20, 2],
            expected: 20,
            isPublic: false,
            description: 'Third number biggest: biggest(1, 5, 20, 2) should return 20',
        },
        {
            input: [1, 5, 7, 25],
            expected: 25,
            isPublic: false,
            description: 'Fourth number biggest: biggest(1, 5, 7, 25) should return 25',
        },
        {
            input: [-5, -2, -10, -1],
            expected: -1,
            isPublic: false,
            description: 'All negative: biggest(-5, -2, -10, -1) should return -1',
        },
        {
            input: [100, 100, 50, 100],
            expected: 100,
            isPublic: false,
            description: 'Multiple same max values: biggest(100, 100, 50, 100) should return 100',
        },
    ],
    options: {
        type: 'JSON',
    },
};
