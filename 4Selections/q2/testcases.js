module.exports = {
    testcases: [
        {
            inputs: [
                [12, 30, 2025],
                [30, 12, 2025],
                [12, 12, 2025],
                [1, 1, 2025],
                [30, 3, 1994],
                [19, 12, 1986],
                [10, 22, 2003],
                [1, 30, 2013],
            ],
            expected: ['UK', 'US', 'Either', 'Either', 'US', 'US', 'UK', 'UK'],
        },
    ],
};
