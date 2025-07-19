module.exports = {
    testcases: [
        {
            input: ['aaab', 'aaac', 'aaad', 'aaae'],
            expected: 3,
        },
        {
            input: ['abc', 'abcd', 'abcde', 'abcdef'],
            expected: 3,
        },
        {
            input: ['abc', 'aef', 'acd', 'bdf'],
            expected: 0,
        },
        {
            input: ['abc', 'bdf', 'aef', 'acd'],
            expected: 0,
        },
        {
            input: ['a', 'ab', 'abc', 'abcd'],
            expected: 1,
        },
        {
            input: ['programming', 'programmes', 'programmers', 'progamer'],
            expected: 4,
        },
    ],
    options: {},
};
