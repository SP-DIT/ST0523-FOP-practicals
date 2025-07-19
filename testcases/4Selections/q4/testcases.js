module.exports = {
    testcases: [
        {
            input: [10, 10],
            expected: 'Enough',
        },
        {
            input: [10, 5],
            expected: 'You lack 5 chickens',
        },
        {
            input: [10, 9],
            expected: 'You lack 1 chicken',
        },
        {
            input: [10, 15],
            expected: 'You have a surplus of 5 chickens',
        },
        {
            input: [10, 11],
            expected: 'You have a surplus of 1 chicken',
        },
    ],
    options: {},
};
