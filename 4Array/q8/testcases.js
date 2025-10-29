module.exports = {
    testcases: [
        // Public test cases (first 3)
        {
            input: [[1, 5, 3, 9, 2]],
            expected: [8, 4, 6, 0, 7],
            isPublic: true,
            description: 'Differences from max [1, 5, 3, 9, 2] should be [8, 4, 6, 0, 7] (max is 9)',
        },
        {
            input: [[10, 10, 10]],
            expected: [0, 0, 0],
            isPublic: true,
            description: 'Differences from max [10, 10, 10] should be [0, 0, 0] (all elements equal max)',
        },
        {
            input: [[3, 1, 4, 1, 5]],
            expected: [2, 4, 1, 4, 0],
            isPublic: true,
            description: 'Differences from max [3, 1, 4, 1, 5] should be [2, 4, 1, 4, 0] (max is 5)',
        },
        // Hidden test cases
        {
            input: [[7]],
            expected: [0],
            isPublic: false,
            description: 'Differences from max [7] should be [0] (single element)',
        },
        {
            input: [[1, 2]],
            expected: [1, 0],
            isPublic: false,
            description: 'Differences from max [1, 2] should be [1, 0] (max is 2)',
        },
        {
            input: [[5, 5, 5, 5]],
            expected: [0, 0, 0, 0],
            isPublic: false,
            description: 'Differences from max [5, 5, 5, 5] should be [0, 0, 0, 0] (all equal)',
        },
        {
            input: [[0, 1, 2, 3, 4]],
            expected: [4, 3, 2, 1, 0],
            isPublic: false,
            description: 'Differences from max [0, 1, 2, 3, 4] should be [4, 3, 2, 1, 0] (max is 4)',
        },
        {
            input: [[-5, -2, -8, -1]],
            expected: [4, 1, 7, 0],
            isPublic: false,
            description: 'Differences from max [-5, -2, -8, -1] should be [4, 1, 7, 0] (max is -1)',
        },
        {
            input: [[100, 50, 75]],
            expected: [0, 50, 25],
            isPublic: false,
            description: 'Differences from max [100, 50, 75] should be [0, 50, 25] (max is 100)',
        },
        {
            input: [[2, 8, 6, 4]],
            expected: [6, 0, 2, 4],
            isPublic: false,
            description: 'Differences from max [2, 8, 6, 4] should be [6, 0, 2, 4] (max is 8)',
        },
        {
            input: [[0]],
            expected: [0],
            isPublic: false,
            description: 'Differences from max [0] should be [0] (single zero)',
        },
        {
            input: [[-10, -5, -15, -3]],
            expected: [7, 2, 12, 0],
            isPublic: false,
            description: 'Differences from max [-10, -5, -15, -3] should be [7, 2, 12, 0] (max is -3)',
        },
        {
            input: [[1, 1, 1, 2, 1]],
            expected: [1, 1, 1, 0, 1],
            isPublic: false,
            description: 'Differences from max [1, 1, 1, 2, 1] should be [1, 1, 1, 0, 1] (max is 2)',
        },
        {
            input: [[15, 12, 18, 9]],
            expected: [3, 6, 0, 9],
            isPublic: false,
            description: 'Differences from max [15, 12, 18, 9] should be [3, 6, 0, 9] (max is 18)',
        },
        {
            input: [[7, 3, 7, 1, 7]],
            expected: [0, 4, 0, 6, 0],
            isPublic: false,
            description: 'Differences from max [7, 3, 7, 1, 7] should be [0, 4, 0, 6, 0] (max is 7)',
        },
        {
            input: [[25, 20, 30, 15]],
            expected: [5, 10, 0, 15],
            isPublic: false,
            description: 'Differences from max [25, 20, 30, 15] should be [5, 10, 0, 15] (max is 30)',
        },
        {
            input: [[6, 2, 4, 8, 1]],
            expected: [2, 6, 4, 0, 7],
            isPublic: false,
            description: 'Differences from max [6, 2, 4, 8, 1] should be [2, 6, 4, 0, 7] (max is 8)',
        },
        {
            input: [[0, 0, 5, 0]],
            expected: [5, 5, 0, 5],
            isPublic: false,
            description: 'Differences from max [0, 0, 5, 0] should be [5, 5, 0, 5] (max is 5)',
        },
        {
            input: [[11, 14, 11, 17, 11]],
            expected: [6, 3, 6, 0, 6],
            isPublic: false,
            description: 'Differences from max [11, 14, 11, 17, 11] should be [6, 3, 6, 0, 6] (max is 17)',
        },
        {
            input: [[42, 42]],
            expected: [0, 0],
            isPublic: false,
            description: 'Differences from max [42, 42] should be [0, 0] (both equal max)',
        },
    ],
    options: {
        type: 'JSON',
    },
};