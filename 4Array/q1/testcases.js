module.exports = {
    testcases: [
        // Public test cases (first 3)
        {
            input: [[1, 2, 3, 4, 5]],
            expected: 15,
            isPublic: true,
            description: 'Sum of [1, 2, 3, 4, 5] should be 15',
        },
        {
            input: [[10, 20, 30]],
            expected: 60,
            isPublic: true,
            description: 'Sum of [10, 20, 30] should be 60',
        },
        {
            input: [[7]],
            expected: 7,
            isPublic: true,
            description: 'Sum of single element [7] should be 7',
        },
        // Hidden test cases
        {
            input: [[]],
            expected: 0,
            isPublic: false,
            description: 'Sum of empty array should be 0',
        },
        {
            input: [[0]],
            expected: 0,
            isPublic: false,
            description: 'Sum of [0] should be 0',
        },
        {
            input: [[1, 2]],
            expected: 3,
            isPublic: false,
            description: 'Sum of [1, 2] should be 3',
        },
        {
            input: [[-5, -3, -2]],
            expected: -10,
            isPublic: false,
            description: 'Sum of negative numbers [-5, -3, -2] should be -10',
        },
        {
            input: [[5, -3, 2]],
            expected: 4,
            isPublic: false,
            description: 'Sum of mixed positive/negative [5, -3, 2] should be 4',
        },
        {
            input: [[100]],
            expected: 100,
            isPublic: false,
            description: 'Sum of [100] should be 100',
        },
        {
            input: [[1, 1, 1, 1, 1]],
            expected: 5,
            isPublic: false,
            description: 'Sum of repeated elements [1, 1, 1, 1, 1] should be 5',
        },
        {
            input: [[0, 0, 0]],
            expected: 0,
            isPublic: false,
            description: 'Sum of [0, 0, 0] should be 0',
        },
        {
            input: [[-1, -2, -3, -4]],
            expected: -10,
            isPublic: false,
            description: 'Sum of [-1, -2, -3, -4] should be -10',
        },
        {
            input: [[2.5, 3.5, 4]],
            expected: 10,
            isPublic: false,
            description: 'Sum of decimal numbers [2.5, 3.5, 4] should be 10',
        },
        {
            input: [[50, 25, 25]],
            expected: 100,
            isPublic: false,
            description: 'Sum of [50, 25, 25] should be 100',
        },
        {
            input: [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]],
            expected: 55,
            isPublic: false,
            description: 'Sum of [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] should be 55',
        },
        {
            input: [[-10, 10]],
            expected: 0,
            isPublic: false,
            description: 'Sum of [-10, 10] should be 0',
        },
        {
            input: [[999]],
            expected: 999,
            isPublic: false,
            description: 'Sum of large single element [999] should be 999',
        },
        {
            input: [[15, 25, 35, 45]],
            expected: 120,
            isPublic: false,
            description: 'Sum of [15, 25, 35, 45] should be 120',
        },
        {
            input: [[3, 6, 9, 12]],
            expected: 30,
            isPublic: false,
            description: 'Sum of multiples of 3: [3, 6, 9, 12] should be 30',
        },
        {
            input: [[1.1, 2.2, 3.3]],
            expected: 6.6,
            isPublic: false,
            description: 'Sum of [1.1, 2.2, 3.3] should be 6.6',
        },
    ],
    options: {
        type: 'floating point',
        precision: 6,
    },
};