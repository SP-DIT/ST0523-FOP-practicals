module.exports = {
    testcases: [
        {
            input: [160, 17, false, false],
            expected: true,
        },
        {
            input: [160, 17, true, false],
            expected: true,
        },
        {
            input: [160, 17, false, true],
            expected: false,
        },
        {
            input: [160, 17, true, true],
            expected: false,
        },
        {
            input: [100, 17, false, false],
            expected: false,
        },
        {
            input: [160, 12, false, false],
            expected: false,
        },
        {
            input: [160, 12, true, false],
            expected: true,
        },
        {
            input: [160, 12, false, true],
            expected: false,
        },
        {
            input: [160, 12, true, true],
            expected: false,
        },
    ],
    options: {},
};
