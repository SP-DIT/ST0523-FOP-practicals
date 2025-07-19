module.exports = {
    testcases: [
        {
            input: [12, 30, 2025],
            expected: 'US',
        },
        {
            input: [30, 12, 2025],
            expected: 'EU',
        },
        {
            input: [12, 12, 2025],
            expected: 'Either',
        },
        {
            input: [1, 1, 2025],
            expected: 'Either',
        },
        {
            input: [30, 3, 1994],
            expected: 'EU',
        },
        {
            input: [19, 12, 1986],
            expected: 'EU',
        },
        {
            input: [10, 22, 2003],
            expected: 'US',
        },
        {
            input: [1, 30, 2013],
            expected: 'US',
        },
    ],
    options: {},
};
