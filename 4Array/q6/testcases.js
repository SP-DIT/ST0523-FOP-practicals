module.exports = {
    testcases: [
        // Public test cases (first 3)
        {
            input: [[1, 2, 3]],
            expected: [3, 2, 1],
            isPublic: true,
            description: 'Reverse array [1, 2, 3] should be [3, 2, 1]',
        },
        {
            input: [['a', 'b', 'c', 'd']],
            expected: ['d', 'c', 'b', 'a'],
            isPublic: true,
            description: 'Reverse array ["a", "b", "c", "d"] should be ["d", "c", "b", "a"]',
        },
        {
            input: [[5]],
            expected: [5],
            isPublic: true,
            description: 'Reverse single element array [5] should be [5]',
        },
        // Hidden test cases
        {
            input: [[]],
            expected: [],
            isPublic: false,
            description: 'Reverse empty array should be []',
        },
        {
            input: [[1, 2]],
            expected: [2, 1],
            isPublic: false,
            description: 'Reverse array [1, 2] should be [2, 1]',
        },
        {
            input: [[10, 20, 30, 40, 50]],
            expected: [50, 40, 30, 20, 10],
            isPublic: false,
            description: 'Reverse array [10, 20, 30, 40, 50] should be [50, 40, 30, 20, 10]',
        },
        {
            input: [[-1, -2, -3]],
            expected: [-3, -2, -1],
            isPublic: false,
            description: 'Reverse negative numbers [-1, -2, -3] should be [-3, -2, -1]',
        },
        {
            input: [[0, 1, 0, 1, 0]],
            expected: [0, 1, 0, 1, 0],
            isPublic: false,
            description: 'Reverse palindrome [0, 1, 0, 1, 0] should be [0, 1, 0, 1, 0]',
        },
        {
            input: [[7, 7, 7, 7]],
            expected: [7, 7, 7, 7],
            isPublic: false,
            description: 'Reverse identical elements [7, 7, 7, 7] should be [7, 7, 7, 7]',
        },
        {
            input: [[100, 200, 300]],
            expected: [300, 200, 100],
            isPublic: false,
            description: 'Reverse array [100, 200, 300] should be [300, 200, 100]',
        },
        {
            input: [['x', 'y']],
            expected: ['y', 'x'],
            isPublic: false,
            description: 'Reverse string array ["x", "y"] should be ["y", "x"]',
        },
        {
            input: [[1, 2, 3, 4, 5, 6]],
            expected: [6, 5, 4, 3, 2, 1],
            isPublic: false,
            description: 'Reverse array [1, 2, 3, 4, 5, 6] should be [6, 5, 4, 3, 2, 1]',
        },
        {
            input: [[0]],
            expected: [0],
            isPublic: false,
            description: 'Reverse single zero [0] should be [0]',
        },
        {
            input: [[-5, 0, 5]],
            expected: [5, 0, -5],
            isPublic: false,
            description: 'Reverse mixed numbers [-5, 0, 5] should be [5, 0, -5]',
        },
        {
            input: [[1, 3, 5, 7, 9]],
            expected: [9, 7, 5, 3, 1],
            isPublic: false,
            description: 'Reverse odd numbers [1, 3, 5, 7, 9] should be [9, 7, 5, 3, 1]',
        },
        {
            input: [[2, 4, 6, 8]],
            expected: [8, 6, 4, 2],
            isPublic: false,
            description: 'Reverse even numbers [2, 4, 6, 8] should be [8, 6, 4, 2]',
        },
        {
            input: [['first', 'second', 'third']],
            expected: ['third', 'second', 'first'],
            isPublic: false,
            description: 'Reverse word array ["first", "second", "third"] should be ["third", "second", "first"]',
        },
        {
            input: [[42]],
            expected: [42],
            isPublic: false,
            description: 'Reverse single number [42] should be [42]',
        },
        {
            input: [[1, 1, 2, 2, 3, 3]],
            expected: [3, 3, 2, 2, 1, 1],
            isPublic: false,
            description: 'Reverse paired numbers [1, 1, 2, 2, 3, 3] should be [3, 3, 2, 2, 1, 1]',
        },
        {
            input: [[10, 5, 15, 20, 25]],
            expected: [25, 20, 15, 5, 10],
            isPublic: false,
            description: 'Reverse array [10, 5, 15, 20, 25] should be [25, 20, 15, 5, 10]',
        },
    ],
    options: {
        type: 'JSON',
    },
};