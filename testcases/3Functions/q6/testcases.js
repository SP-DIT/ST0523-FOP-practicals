module.exports = {
    testcases: [
        {
            input: [1, 52],
            expected: true,
        },
        {
            input: [10, 8],
            expected: false,
        },
        {
            input: [42, 19],
            expected: false,
        },
        {
            input: [50, 12],
            expected: true,
        },
        {
            input: [50, 24],
            expected: true,
        },
        {
            input: [13, 13],
            expected: false,
        },
    ],
    options: {
        monkeyPatch: function (fn) {
            let called = 0;
            return (a, b) => {
                const newA = (a - 1) / 52;
                const newB = (b - 1) / 52;
                Math.random = () => (called++ ? (called > 2 ? 0 : newA) : newB);
                const result = fn();
                called = 0;
                return result;
            };
        },
    },
};
