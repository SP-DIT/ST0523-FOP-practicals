module.exports = {
    testcases: [
        // Public test cases (first 3)
        {
            input: [[1, 2, 3, 4, 5]],
            expected: 3,
            isPublic: true,
            description: 'Average of [1, 2, 3, 4, 5] should be 3',
        },
        {
            input: [[10, 20, 30]],
            expected: 20,
            isPublic: true,
            description: 'Average of [10, 20, 30] should be 20',
        },
        {
            input: [[5]],
            expected: 5,
            isPublic: true,
            description: 'Average of single element [5] should be 5',
        },
        // Hidden test cases
        {
            input: [[0]],
            expected: 0,
            isPublic: false,
            description: 'Average of [0] should be 0',
        },
        {
            input: [[2, 4]],
            expected: 3,
            isPublic: false,
            description: 'Average of [2, 4] should be 3',
        },
        {
            input: [[1, 2, 3]],
            expected: 2,
            isPublic: false,
            description: 'Average of [1, 2, 3] should be 2',
        },
        {
            input: [[-5, -10, -15]],
            expected: -10,
            isPublic: false,
            description: 'Average of negative numbers [-5, -10, -15] should be -10',
        },
        {
            input: [[-5, 5]],
            expected: 0,
            isPublic: false,
            description: 'Average of [-5, 5] should be 0',
        },
        {
            input: [[100, 200, 300, 400]],
            expected: 250,
            isPublic: false,
            description: 'Average of [100, 200, 300, 400] should be 250',
        },
        {
            input: [[7, 7, 7, 7]],
            expected: 7,
            isPublic: false,
            description: 'Average of identical elements [7, 7, 7, 7] should be 7',
        },
        {
            input: [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]],
            expected: 5.5,
            isPublic: false,
            description: 'Average of [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] should be 5.5',
        },
        {
            input: [[0, 0, 0, 6]],
            expected: 1.5,
            isPublic: false,
            description: 'Average of [0, 0, 0, 6] should be 1.5',
        },
        {
            input: [[25, 50, 75]],
            expected: 50,
            isPublic: false,
            description: 'Average of [25, 50, 75] should be 50',
        },
        {
            input: [[-1, -2, -3, -4, -5]],
            expected: -3,
            isPublic: false,
            description: 'Average of [-1, -2, -3, -4, -5] should be -3',
        },
        {
            input: [[1.5, 2.5, 3.5, 4.5]],
            expected: 3,
            isPublic: false,
            description: 'Average of decimal numbers [1.5, 2.5, 3.5, 4.5] should be 3',
        },
        {
            input: [[12, 18]],
            expected: 15,
            isPublic: false,
            description: 'Average of [12, 18] should be 15',
        },
        {
            input: [[8, 12, 16, 20, 24]],
            expected: 16,
            isPublic: false,
            description: 'Average of [8, 12, 16, 20, 24] should be 16',
        },
        {
            input: [[50, 100]],
            expected: 75,
            isPublic: false,
            description: 'Average of [50, 100] should be 75',
        },
        {
            input: [[3, 6, 9, 12, 15]],
            expected: 9,
            isPublic: false,
            description: 'Average of [3, 6, 9, 12, 15] should be 9',
        },
        {
            input: [[2.2, 4.4, 6.6]],
            expected: 4.4,
            isPublic: false,
            description: 'Average of [2.2, 4.4, 6.6] should be 4.4',
        },
    ],
    options: {
        type: 'floating point',
        precision: 6,
    },
};
