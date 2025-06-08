module.exports = {
    testcases: [
        {
            input: [5, 5],
            expected: [5, 14, 23, 32, 41],
        },
        {
            input: [3, 10],
            expected: [19, 28, 37],
        },
        {
            input: [7, 6],
            expected: [6, 15, 24, 33, 42, 51, 60],
        },
        {
            input: [8, 9],
            expected: [9, 18, 27, 36, 45, 54, 63, 72],
        },
        {
            input: [3, 16],
            expected: [79, 88, 97],
        },
        {
            input: [4, 20],
            expected: [299, 389, 398, 479],
        },
        {
            input: [10, 43],
            expected: [79999, 88999, 89899, 89989, 89998, 97999, 98899, 98989, 98998, 99799],
        },
    ],
    options: {
        type: 'JSON',
    },
};
