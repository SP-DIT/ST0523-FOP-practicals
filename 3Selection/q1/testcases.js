module.exports = {
    testcases: [
        // Public test cases (first 3)
        {
            input: [5, 3, 2],
            expected: true,
            isPublic: true,
            description: 'a is greater than both b and c: (5,3,2) should return true',
        },
        {
            input: [5, 6, 2],
            expected: false,
            isPublic: true,
            description: 'a is smaller than b: (5,6,2) should return false',
        },
        {
            input: [5, 3, 6],
            expected: false,
            isPublic: true,
            description: 'a is smaller than c: (5,3,6) should return false',
        },
        // Hidden test cases
        {
            input: [10, 9, 8],
            expected: true,
            isPublic: false,
            description: 'strict descending values with a largest should return true',
        },
        {
            input: [10, 10, 9],
            expected: false,
            isPublic: false,
            description: 'a equals b is not strictly largest, should return false',
        },
        {
            input: [10, 9, 10],
            expected: false,
            isPublic: false,
            description: 'a equals c is not strictly largest, should return false',
        },
        {
            input: [9, 10, 8],
            expected: false,
            isPublic: false,
            description: 'b is largest so should return false',
        },
        {
            input: [9, 8, 10],
            expected: false,
            isPublic: false,
            description: 'c is largest so should return false',
        },
        {
            input: [0, -1, -2],
            expected: true,
            isPublic: false,
            description: 'zero compared against negatives should return true',
        },
        {
            input: [-1, -2, -3],
            expected: true,
            isPublic: false,
            description: 'least negative value as a should return true',
        },
        {
            input: [-2, -1, -3],
            expected: false,
            isPublic: false,
            description: 'b is larger among negatives so should return false',
        },
        {
            input: [-2, -3, -1],
            expected: false,
            isPublic: false,
            description: 'c is larger among negatives so should return false',
        },
        {
            input: [1, 1, 1],
            expected: false,
            isPublic: false,
            description: 'all equal values means a is not strictly largest',
        },
        {
            input: [2, 2, 1],
            expected: false,
            isPublic: false,
            description: 'tie between a and b should return false',
        },
        {
            input: [2, 1, 2],
            expected: false,
            isPublic: false,
            description: 'tie between a and c should return false',
        },
        {
            input: [100, 50, 99],
            expected: true,
            isPublic: false,
            description: 'a larger than both with mixed magnitudes should return true',
        },
        {
            input: [50, 100, 99],
            expected: false,
            isPublic: false,
            description: 'a less than b and c should return false',
        },
        {
            input: [99, 100, 50],
            expected: false,
            isPublic: false,
            description: 'a less than b should return false even if greater than c',
        },
        {
            input: [3.5, 3.4, 3.3],
            expected: true,
            isPublic: false,
            description: 'decimal values where a is largest should return true',
        },
        {
            input: [3.5, 3.6, 3.4],
            expected: false,
            isPublic: false,
            description: 'decimal values where b is largest should return false',
        },
    ],
};
