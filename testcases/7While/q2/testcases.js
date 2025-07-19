module.exports = {
    testcases: [
        {
            input: [
                // 1,2,3,4,5,....,26,27,28,29,30
                Array(30)
                    .fill(undefined)
                    .map((_, index) => index + 1),
            ],
            expected: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        },
        {
            input: [
                // 1,1,3,3,5,5,7,7,9,9,.....29,29,31,31
                Array(60)
                    .fill(undefined)
                    .map((_, index) => index + 1 - ((index + 2) % 2)),
            ],
            expected: [1, 3, 5, 7, 9, 11, 13, 15, 17, 19],
        },
        {
            input: [
                // 4,4,6,6,8,8,10,10,12,12,.....,28,28,30,30,32,32
                Array(60)
                    .fill(undefined)
                    .map((_, index) => index + 1 - ((index - 1) % 2) + 2),
            ],
            expected: [4, 6, 8, 10, 12, 14, 16, 18, 20, 22],
        },
        {
            input: [[40, 13, 28, 13, 28, 25, 47, 40, 15, 15, 40, 23, 17, 28, 28, 13, 12, 39, 45, 13, 10]],
            expected: [40, 13, 28, 25, 47, 15, 23, 17, 12, 39],
        },
        {
            input: [
                [30, 13, 13, 34, 30, 24, 24, 24, 30, 47, 16, 13, 16, 39, 47, 19, 19, 45, 13, 32, 32, 15, 47, 48, 41],
            ],
            expected: [30, 13, 34, 24, 47, 16, 39, 19, 45, 32],
        },
    ],
    options: {
        type: 'JSON',
        monkeyPatch: (fn) => {
            const originalMathRandom = Math.random;
            return (mockRandomValue) => {
                let i = 0;
                Math.random = () => (mockRandomValue[i++] - 1) / 30;
                const result = fn();
                Math.random = originalMathRandom;
                return result;
            };
        },
    },
};
