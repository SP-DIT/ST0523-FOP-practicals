module.exports = {
    testcases: [
        {
            input: [[1, 2, 3, 4, 5]],
            expected: 'Ascending',
        },
        {
            input: [[5, 4, 3, 2, 1]],
            expected: 'Descending',
        },
        {
            input: [[1, 1, 1, 1, 1]],
            expected: 'Constant',
        },
        {
            input: [[1, 2, 2, 3, 4]],
            expected: 'Non-descending',
        },
        {
            input: [[5, 4, 4, 3, 2]],
            expected: 'Non-ascending',
        },
        {
            input: [[1, 2, 4, 3, 5]],
            expected: 'Unsorted',
        },
        {
            input: [[1, 5, 13, 16, 21, 38, 47, 66, 90, 1010]],
            expected: 'Ascending',
        },
        {
            input: [[1010, 988, 652, 147, 60, 15, 14, 10, 7, 1]],
            expected: 'Descending',
        },
        {
            input: [[99999, 99999, 99999, 99999, 99999, 99999, 99999, 99999, 99999, 99999]],
            expected: 'Constant',
        },
        {
            input: [[12, 20, 20, 73, 142, 142, 500, 767, 1010, 1010]],
            expected: 'Non-descending',
        },
        {
            input: [[1999, 1999, 797, 283, 77, 35, 24, 24, 13, 7]],
            expected: 'Non-ascending',
        },
        {
            input: [[1, 192010, 3212, 2138, 32324, 12314, 13331, 252, 3117, 316]],
            expected: 'Unsorted',
        },
    ],
    options: {},
};
