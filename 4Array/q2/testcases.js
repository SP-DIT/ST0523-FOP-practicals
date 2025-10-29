module.exports = {
    testcases: [
        // Public test cases (first 3)
        {
            input: [[3, 7, 2, 9, 5]],
            expected: 9,
            isPublic: true,
            description: 'Maximum of [3, 7, 2, 9, 5] should be 9',
        },
        {
            input: [[-10, -5, -1]],
            expected: -1,
            isPublic: true,
            description: 'Maximum of negative numbers [-10, -5, -1] should be -1',
        },
        {
            input: [[5]],
            expected: 5,
            isPublic: true,
            description: 'Maximum of single element [5] should be 5',
        },
        // Hidden test cases
        {
            input: [[1, 2, 3, 4, 5]],
            expected: 5,
            isPublic: false,
            description: 'Maximum of ascending array [1, 2, 3, 4, 5] should be 5',
        },
        {
            input: [[5, 4, 3, 2, 1]],
            expected: 5,
            isPublic: false,
            description: 'Maximum of descending array [5, 4, 3, 2, 1] should be 5',
        },
        {
            input: [[0]],
            expected: 0,
            isPublic: false,
            description: 'Maximum of [0] should be 0',
        },
        {
            input: [[-1, -2, -3, -4, -5]],
            expected: -1,
            isPublic: false,
            description: 'Maximum of all negative [-1, -2, -3, -4, -5] should be -1',
        },
        {
            input: [[100, 50, 200, 75]],
            expected: 200,
            isPublic: false,
            description: 'Maximum of [100, 50, 200, 75] should be 200',
        },
        {
            input: [[7, 7, 7, 7]],
            expected: 7,
            isPublic: false,
            description: 'Maximum of identical elements [7, 7, 7, 7] should be 7',
        },
        {
            input: [[-5, 0, 3, -2, 8]],
            expected: 8,
            isPublic: false,
            description: 'Maximum of mixed positive/negative [-5, 0, 3, -2, 8] should be 8',
        },
        {
            input: [[1.5, 2.7, 1.2, 3.8]],
            expected: 3.8,
            isPublic: false,
            description: 'Maximum of decimal numbers [1.5, 2.7, 1.2, 3.8] should be 3.8',
        },
        {
            input: [[999]],
            expected: 999,
            isPublic: false,
            description: 'Maximum of large single element [999] should be 999',
        },
        {
            input: [[10, 20, 30, 40, 50, 60, 70, 80, 90, 100]],
            expected: 100,
            isPublic: false,
            description: 'Maximum of [10, 20, 30, 40, 50, 60, 70, 80, 90, 100] should be 100',
        },
        {
            input: [[50, 25, 75, 12, 88, 3]],
            expected: 88,
            isPublic: false,
            description: 'Maximum of [50, 25, 75, 12, 88, 3] should be 88',
        },
        {
            input: [[-100, -50, -75, -25]],
            expected: -25,
            isPublic: false,
            description: 'Maximum of [-100, -50, -75, -25] should be -25',
        },
        {
            input: [[0, 0, 0, 1, 0]],
            expected: 1,
            isPublic: false,
            description: 'Maximum of [0, 0, 0, 1, 0] should be 1',
        },
        {
            input: [[42, 42, 41, 42, 40]],
            expected: 42,
            isPublic: false,
            description: 'Maximum of [42, 42, 41, 42, 40] should be 42',
        },
        {
            input: [[-1]],
            expected: -1,
            isPublic: false,
            description: 'Maximum of single negative [-1] should be -1',
        },
        {
            input: [[1, 3, 2, 5, 4, 7, 6, 9, 8]],
            expected: 9,
            isPublic: false,
            description: 'Maximum of [1, 3, 2, 5, 4, 7, 6, 9, 8] should be 9',
        },
        {
            input: [[2.5, 3.1, 2.9, 3.0]],
            expected: 3.1,
            isPublic: false,
            description: 'Maximum of [2.5, 3.1, 2.9, 3.0] should be 3.1',
        },
    ],
    options: {
        type: 'floating point',
        precision: 6,
    },
};
