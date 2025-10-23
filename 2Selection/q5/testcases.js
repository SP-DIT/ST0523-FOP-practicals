module.exports = {
    testcases: [
        // Public test cases (first 3)
        {
            input: [1, 2],
            expected: 2,
            isPublic: true,
            description: 'First number smaller: bigger(1, 2) should return 2',
        },
        {
            input: [3, 2],
            expected: 3,
            isPublic: true,
            description: 'First number bigger: bigger(3, 2) should return 3',
        },
        {
            input: [4, 4],
            expected: 4,
            isPublic: true,
            description: 'Equal numbers: bigger(4, 4) should return 4',
        },
        // Hidden test cases
        {
            input: [10, 5],
            expected: 10,
            isPublic: false,
            description: 'First number bigger: bigger(10, 5) should return 10',
        },
        {
            input: [7, 15],
            expected: 15,
            isPublic: false,
            description: 'Second number bigger: bigger(7, 15) should return 15',
        },
        {
            input: [0, 0],
            expected: 0,
            isPublic: false,
            description: 'Both zero: bigger(0, 0) should return 0',
        },
        {
            input: [-5, -3],
            expected: -3,
            isPublic: false,
            description: 'Both negative: bigger(-5, -3) should return -3',
        },
        {
            input: [-10, 5],
            expected: 5,
            isPublic: false,
            description: 'Negative and positive: bigger(-10, 5) should return 5',
        },
        {
            input: [5, -10],
            expected: 5,
            isPublic: false,
            description: 'Positive and negative: bigger(5, -10) should return 5',
        },
        {
            input: [100, 99],
            expected: 100,
            isPublic: false,
            description: 'Large numbers close together: bigger(100, 99) should return 100',
        },
        {
            input: [0, 1],
            expected: 1,
            isPublic: false,
            description: 'Zero and positive: bigger(0, 1) should return 1',
        },
        {
            input: [1, 0],
            expected: 1,
            isPublic: false,
            description: 'Positive and zero: bigger(1, 0) should return 1',
        },
        {
            input: [0, -1],
            expected: 0,
            isPublic: false,
            description: 'Zero and negative: bigger(0, -1) should return 0',
        },
        {
            input: [-1, 0],
            expected: 0,
            isPublic: false,
            description: 'Negative and zero: bigger(-1, 0) should return 0',
        },
        {
            input: [-100, -50],
            expected: -50,
            isPublic: false,
            description: 'Two negative numbers: bigger(-100, -50) should return -50',
        },
        {
            input: [1000, 999],
            expected: 1000,
            isPublic: false,
            description: 'Very large numbers: bigger(1000, 999) should return 1000',
        },
        {
            input: [-1, -1],
            expected: -1,
            isPublic: false,
            description: 'Equal negative numbers: bigger(-1, -1) should return -1',
        },
        {
            input: [42, 42],
            expected: 42,
            isPublic: false,
            description: 'Equal positive numbers: bigger(42, 42) should return 42',
        },
        {
            input: [3.5, 3.2],
            expected: 3.5,
            isPublic: false,
            description: 'Decimal numbers: bigger(3.5, 3.2) should return 3.5',
        },
        {
            input: [-2.7, -3.1],
            expected: -2.7,
            isPublic: false,
            description: 'Negative decimal numbers: bigger(-2.7, -3.1) should return -2.7',
        },
    ],
    options: {
        type: 'JSON',
    },
};
