module.exports = {
    testcases: [
        // Public test cases (first 3)
        {
            input: [[1, -3, 5, -2, 7]],
            expected: [1, 5, 7],
            isPublic: true,
            description: 'Filter positive numbers from [1, -3, 5, -2, 7] should be [1, 5, 7]',
        },
        {
            input: [[-5, -1, -9]],
            expected: [],
            isPublic: true,
            description: 'Filter positive numbers from [-5, -1, -9] should be [] (empty array)',
        },
        {
            input: [[2, 4, 6, 8]],
            expected: [2, 4, 6, 8],
            isPublic: true,
            description: 'Filter positive numbers from [2, 4, 6, 8] should be [2, 4, 6, 8] (all positive)',
        },
        // Hidden test cases
        {
            input: [[]],
            expected: [],
            isPublic: false,
            description: 'Filter positive numbers from empty array should be []',
        },
        {
            input: [[0]],
            expected: [],
            isPublic: false,
            description: 'Filter positive numbers from [0] should be [] (0 is not positive)',
        },
        {
            input: [[1]],
            expected: [1],
            isPublic: false,
            description: 'Filter positive numbers from [1] should be [1]',
        },
        {
            input: [[-1]],
            expected: [],
            isPublic: false,
            description: 'Filter positive numbers from [-1] should be []',
        },
        {
            input: [[0, 1, 2, 3]],
            expected: [1, 2, 3],
            isPublic: false,
            description: 'Filter positive numbers from [0, 1, 2, 3] should be [1, 2, 3]',
        },
        {
            input: [[-3, -2, -1, 0, 1, 2, 3]],
            expected: [1, 2, 3],
            isPublic: false,
            description: 'Filter positive numbers from [-3, -2, -1, 0, 1, 2, 3] should be [1, 2, 3]',
        },
        {
            input: [[10, -5, 20, -15, 30]],
            expected: [10, 20, 30],
            isPublic: false,
            description: 'Filter positive numbers from [10, -5, 20, -15, 30] should be [10, 20, 30]',
        },
        {
            input: [[100, 200, 300]],
            expected: [100, 200, 300],
            isPublic: false,
            description: 'Filter positive numbers from [100, 200, 300] should be [100, 200, 300]',
        },
        {
            input: [[-100, -200, -300]],
            expected: [],
            isPublic: false,
            description: 'Filter positive numbers from [-100, -200, -300] should be []',
        },
        {
            input: [[5, 5, 5, 5]],
            expected: [5, 5, 5, 5],
            isPublic: false,
            description: 'Filter positive numbers from [5, 5, 5, 5] should be [5, 5, 5, 5] (repeated positives)',
        },
        {
            input: [[-7, -7, -7]],
            expected: [],
            isPublic: false,
            description: 'Filter positive numbers from [-7, -7, -7] should be [] (repeated negatives)',
        },
        {
            input: [[1, 0, -1, 2, 0, -2]],
            expected: [1, 2],
            isPublic: false,
            description: 'Filter positive numbers from [1, 0, -1, 2, 0, -2] should be [1, 2]',
        },
        {
            input: [[0.5, -0.5, 1.5, -1.5]],
            expected: [0.5, 1.5],
            isPublic: false,
            description: 'Filter positive numbers from [0.5, -0.5, 1.5, -1.5] should be [0.5, 1.5]',
        },
        {
            input: [[99, -99]],
            expected: [99],
            isPublic: false,
            description: 'Filter positive numbers from [99, -99] should be [99]',
        },
        {
            input: [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]],
            expected: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            isPublic: false,
            description: 'Filter positive numbers from [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] should be [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]',
        },
        {
            input: [[-10, -8, -6, -4, -2, 0, 2, 4, 6, 8, 10]],
            expected: [2, 4, 6, 8, 10],
            isPublic: false,
            description: 'Filter positive numbers from mixed array should be [2, 4, 6, 8, 10]',
        },
        {
            input: [[3.14, -2.71, 1.41, -1.73]],
            expected: [3.14, 1.41],
            isPublic: false,
            description: 'Filter positive numbers from [3.14, -2.71, 1.41, -1.73] should be [3.14, 1.41]',
        },
    ],
    options: {
        type: 'JSON',
    },
};