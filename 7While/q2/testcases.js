module.exports = {
    testcases: [
        {
            inputs: [
                [
                    [1, 3, 5],
                    [2, 4, 6],
                ],
                [
                    [1, 11, 27, 39],
                    [9, 10, 15, 17],
                ],
                [
                    [1, 2, 3],
                    [1, 2, 3],
                ],
                [
                    [189, 268, 578, 732, 755],
                    [289, 308, 668, 742, 972],
                ],
                [[1], [2, 3, 4, 5, 6, 7]],
                [[2, 3, 4, 5, 6, 7], [1]],
                [
                    [-5, -3, -1, 0, 1, 3, 5],
                    [-4, -2, 0, 2, 4, 6, 8],
                ],
            ],
            expected: [
                [1, 2, 3, 4, 5, 6],
                [1, 9, 10, 11, 15, 17, 27, 39],
                [1, 1, 2, 2, 3, 3],
                [189, 268, 289, 308, 578, 668, 732, 742, 755, 972],
                [1, 2, 3, 4, 5, 6, 7],
                [1, 2, 3, 4, 5, 6, 7],
                [-5, -4, -3, -2, -1, 0, 0, 1, 2, 3, 4, 5, 6, 8],
            ],
        },
    ],
    options: {
        type: 'JSON',
        monkeyPatch: (fn) => {
            Array.prototype.sort = function () {
                throw new Error('Array.sort() is disabled!');
            };
            Array.prototype.toSorted = function () {
                throw new Error('Array.sort() is disabled!');
            };
            return fn;
        },
    },
};
