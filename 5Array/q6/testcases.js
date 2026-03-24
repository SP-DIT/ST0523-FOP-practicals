module.exports = {
    testcases: [
        // Public test cases (first 3)
        {
            input: [[1, 2, 3, 4, 5]],
            expected: 2,
            isPublic: true,
            description: 'Count even numbers in [1, 2, 3, 4, 5] should be 2 (2 and 4)',
        },
        {
            input: [[10, 15, 20, 25]],
            expected: 2,
            isPublic: true,
            description: 'Count even numbers in [10, 15, 20, 25] should be 2 (10 and 20)',
        },
        {
            input: [[1, 3, 5, 7]],
            expected: 0,
            isPublic: true,
            description: 'Count even numbers in [1, 3, 5, 7] should be 0 (all odd)',
        },
        // Hidden test cases
        {
            input: [[]],
            expected: 0,
            isPublic: false,
            description: 'Count even numbers in empty array should be 0',
        },
        {
            input: [[2, 4, 6, 8]],
            expected: 4,
            isPublic: false,
            description: 'Count even numbers in [2, 4, 6, 8] should be 4 (all even)',
        },
        {
            input: [[0]],
            expected: 1,
            isPublic: false,
            description: 'Count even numbers in [0] should be 1 (0 is even)',
        },
        {
            input: [[1]],
            expected: 0,
            isPublic: false,
            description: 'Count even numbers in [1] should be 0 (1 is odd)',
        },
        {
            input: [[2]],
            expected: 1,
            isPublic: false,
            description: 'Count even numbers in [2] should be 1 (2 is even)',
        },
        {
            input: [[-2, -4, -6]],
            expected: 3,
            isPublic: false,
            description: 'Count even numbers in [-2, -4, -6] should be 3 (negative evens)',
        },
        {
            input: [[-1, -3, -5]],
            expected: 0,
            isPublic: false,
            description: 'Count even numbers in [-1, -3, -5] should be 0 (negative odds)',
        },
        {
            input: [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]],
            expected: 5,
            isPublic: false,
            description: 'Count even numbers in [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] should be 5',
        },
        {
            input: [[-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5]],
            expected: 5,
            isPublic: false,
            description: 'Count even numbers in mixed positive/negative array should be 5',
        },
        {
            input: [[100, 101, 102, 103, 104]],
            expected: 3,
            isPublic: false,
            description: 'Count even numbers in [100, 101, 102, 103, 104] should be 3',
        },
        {
            input: [[2, 2, 2, 2]],
            expected: 4,
            isPublic: false,
            description: 'Count even numbers in [2, 2, 2, 2] should be 4 (repeated evens)',
        },
        {
            input: [[1, 1, 1, 1]],
            expected: 0,
            isPublic: false,
            description: 'Count even numbers in [1, 1, 1, 1] should be 0 (repeated odds)',
        },
        {
            input: [[0, 0, 0]],
            expected: 3,
            isPublic: false,
            description: 'Count even numbers in [0, 0, 0] should be 3 (zeros are even)',
        },
        {
            input: [[12, 13, 14, 15, 16, 17, 18, 19, 20]],
            expected: 5,
            isPublic: false,
            description: 'Count even numbers in [12, 13, 14, 15, 16, 17, 18, 19, 20] should be 5',
        },
        {
            input: [[-10, -8, -6, -4, -2, 0, 2, 4, 6, 8, 10]],
            expected: 11,
            isPublic: false,
            description: 'Count even numbers in all even array should be 11',
        },
        {
            input: [[50, 51, 52]],
            expected: 2,
            isPublic: false,
            description: 'Count even numbers in [50, 51, 52] should be 2',
        },
        {
            input: [[99, 100, 101, 102, 103]],
            expected: 2,
            isPublic: false,
            description: 'Count even numbers in [99, 100, 101, 102, 103] should be 2',
        },
    ],
    options: {
        type: 'JSON',
    },
};
