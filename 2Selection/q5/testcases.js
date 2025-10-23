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
        {
            input: [4, 3, 2, 1],
            expected: 4,
            isPublic: false,
            description: 'Descending order: biggest(4, 3, 2, 1) should return 4',
        },
        {
            input: [0, 0, 0, 0],
            expected: 0,
            isPublic: false,
            description: 'All zeros: biggest(0, 0, 0, 0) should return 0',
        },
        {
            input: [-1, -1, -1, -1],
            expected: -1,
            isPublic: false,
            description: 'All equal negative: biggest(-1, -1, -1, -1) should return -1',
        },
        {
            input: [0, -5, 3, -2],
            expected: 3,
            isPublic: false,
            description: 'Mixed positive, negative, zero: biggest(0, -5, 3, -2) should return 3',
        },
        {
            input: [1000, 999, 998, 1001],
            expected: 1001,
            isPublic: false,
            description: 'Large numbers: biggest(1000, 999, 998, 1001) should return 1001',
        },
        {
            input: [42, 42, 41, 42],
            expected: 42,
            isPublic: false,
            description: 'Three equal max: biggest(42, 42, 41, 42) should return 42',
        },
        {
            input: [7, 7, 7, 6],
            expected: 7,
            isPublic: false,
            description: 'First three equal: biggest(7, 7, 7, 6) should return 7',
        },
        {
            input: [-100, -50, -75, -25],
            expected: -25,
            isPublic: false,
            description: 'All negative different: biggest(-100, -50, -75, -25) should return -25',
        },
        {
            input: [3.5, 3.7, 3.2, 3.9],
            expected: 3.9,
            isPublic: false,
            description: 'Decimal numbers: biggest(3.5, 3.7, 3.2, 3.9) should return 3.9',
        },
        {
            input: [0, 1, -1, 0],
            expected: 1,
            isPublic: false,
            description: 'Zero, positive, negative mix: biggest(0, 1, -1, 0) should return 1',
        },
        {
            input: [50, 50, 50, 49],
            expected: 50,
            isPublic: false,
            description: 'First three max equal: biggest(50, 50, 50, 49) should return 50',
        },
    ],
    options: {
        type: 'JSON',
    },
};
