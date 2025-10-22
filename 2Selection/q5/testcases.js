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
    ],
    options: {
        type: 'JSON',
    },
};
