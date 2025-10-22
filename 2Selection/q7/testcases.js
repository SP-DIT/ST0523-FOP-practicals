module.exports = {
    testcases: [
        // Public test cases (first 3)
        {
            input: [1, 2, 3, 4],
            expected: 4,
            isPublic: true,
            description: 'Challenge: biggest(1, 2, 3, 4) using bigger function should return 4',
        },
        {
            input: [3, 2, 5, 1],
            expected: 5,
            isPublic: true,
            description: 'Challenge: biggest(3, 2, 5, 1) using bigger function should return 5',
        },
        {
            input: [9, 9, 9, 9],
            expected: 9,
            isPublic: true,
            description: 'Challenge: biggest(9, 9, 9, 9) using bigger function should return 9',
        },
        // Hidden test cases
        {
            input: [10, 5, 7, 2],
            expected: 10,
            isPublic: false,
            description: 'Challenge: First number biggest using bigger function',
        },
        {
            input: [1, 15, 7, 2],
            expected: 15,
            isPublic: false,
            description: 'Challenge: Second number biggest using bigger function',
        },
        {
            input: [1, 5, 20, 2],
            expected: 20,
            isPublic: false,
            description: 'Challenge: Third number biggest using bigger function',
        },
        {
            input: [1, 5, 7, 25],
            expected: 25,
            isPublic: false,
            description: 'Challenge: Fourth number biggest using bigger function',
        },
        {
            input: [-5, -2, -10, -1],
            expected: -1,
            isPublic: false,
            description: 'Challenge: All negative numbers using bigger function',
        },
        {
            input: [100, 100, 50, 100],
            expected: 100,
            isPublic: false,
            description: 'Challenge: Multiple same max values using bigger function',
        },
    ],
    options: {
        type: 'JSON',
        functionName: 'biggest',
    },
};
