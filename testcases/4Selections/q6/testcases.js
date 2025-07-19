module.exports = {
    testcases: [
        {
            input: [
                function (a, b) {
                    return a - b;
                },
            ],
            expected: true,
        },
        {
            input: [
                function (a, b) {
                    return b - a;
                },
            ],
            expected: false,
        },
        {
            input: [
                function (a, b) {
                    return a > b;
                },
            ],
            expected: false,
        },
        {
            input: [
                function (a, b) {
                    return a < b;
                },
            ],
            expected: false,
        },
        {
            input: [
                function (a, b) {
                    if (a > b) return 1;
                    else if (b > a) return -1;
                    else return 0;
                },
            ],
            expected: true,
        },
        {
            input: [
                function (a, b) {
                    if (a >= b) return 1;
                    else if (b > a) return -1;
                    else return 0;
                },
            ],
            expected: false,
        },
        {
            input: [
                function (a, b) {
                    if (a > b) return 1;
                    else if (b >= a) return -1;
                    else return 0;
                },
            ],
            expected: false,
        },
        {
            input: [
                function (a, b) {
                    if (a - b > 0) return -1;
                    else if (a - b < 0) return 1;
                    else return 0;
                },
            ],
            expected: false,
        },
        {
            input: [
                function (a, b) {
                    if (a - b < 0) return -1;
                    else if (a - b > 0) return 1;
                    else return 0;
                },
            ],
            expected: true,
        },
        {
            input: [
                function (a, b) {
                    const max = Math.max(a, b);
                    if (max === a) return 1;
                    else if (max === b) return -1;
                    else return 0;
                },
            ],
            expected: false,
        },
        {
            input: [
                function (a, b) {
                    const max = Math.max(a, b);
                    if (max === a) return 1;
                    else if (max === b) return -1;
                    else return 0;
                },
            ],
            expected: false,
        },
        {
            input: [
                function (a, b) {
                    return 1;
                },
            ],
            expected: false,
        },
        {
            input: [
                function (a, b) {
                    return -1;
                },
            ],
            expected: false,
        },
        {
            input: [
                function (a, b) {
                    return 0;
                },
            ],
            expected: false,
        },
    ],
    options: {},
};
