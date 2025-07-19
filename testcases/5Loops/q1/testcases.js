module.exports = {
    testcases: [
        {
            input: [2, 3],
            expected: '2 * 1 = 2\n2 * 2 = 4\n2 * 3 = 6\n',
        },
        {
            input: [3, 5],
            expected: '3 * 1 = 3\n3 * 2 = 6\n3 * 3 = 9\n3 * 4 = 12\n3 * 5 = 15\n',
        },
        {
            input: [4, 12],
            expected:
                '4 * 1 = 4\n4 * 2 = 8\n4 * 3 = 12\n4 * 4 = 16\n4 * 5 = 20\n4 * 6 = 24\n4 * 7 = 28\n4 * 8 = 32\n4 * 9 = 36\n4 * 10 = 40\n4 * 11 = 44\n4 * 12 = 48\n',
        },
        {
            input: [1, 1],
            expected: '1 * 1 = 1\n',
        },
        {
            input: [-1, 5],
            expected: '-1 * 1 = -1\n-1 * 2 = -2\n-1 * 3 = -3\n-1 * 4 = -4\n-1 * 5 = -5\n',
        },
        {
            input: [0, 5],
            expected: '0 * 1 = 0\n0 * 2 = 0\n0 * 3 = 0\n0 * 4 = 0\n0 * 5 = 0\n',
        },
    ],
    options: {
        type: 'string',
    },
};
