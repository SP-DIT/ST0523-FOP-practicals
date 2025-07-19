module.exports = {
    testcases: [
        {
            input: [2, 5],
            expected: [2, 4, 6, 8, 10],
        },
        {
            input: [3, 4],
            expected: [3, 6, 9, 12],
        },
        {
            input: [5, 3],
            expected: [5, 10, 15],
        },
        {
            input: [6, 0],
            expected: [],
        },
        {
            input: [-8, 12],
            expected: [-8, -16, -24, -32, -40, -48, -56, -64, -72, -80, -88, -96],
        },
    ],
    options: {
        type: 'JSON',
    },
};
