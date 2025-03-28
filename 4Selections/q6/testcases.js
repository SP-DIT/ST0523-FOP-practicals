module.exports = {
    testcases: [
        {
            inputs: [
                [
                    function (a, b) {
                        return a - b;
                    },
                ],
                [
                    function (a, b) {
                        return b - a;
                    },
                ],
                [
                    function (a, b) {
                        return a > b;
                    },
                ],
                [
                    function (a, b) {
                        return a < b;
                    },
                ],
                [
                    function (a, b) {
                        if (a > b) return 1;
                        else if (b > a) return -1;
                        else return 0;
                    },
                ],
                [
                    function (a, b) {
                        if (a >= b) return 1;
                        else if (b > a) return -1;
                        else return 0;
                    },
                ],
                [
                    function (a, b) {
                        if (a > b) return 1;
                        else if (b >= a) return -1;
                        else return 0;
                    },
                ],
                [
                    function (a, b) {
                        if (a - b > 0) return -1;
                        else if (a - b < 0) return 1;
                        else return 0;
                    },
                ],
                [
                    function (a, b) {
                        if (a - b < 0) return -1;
                        else if (a - b > 0) return 1;
                        else return 0;
                    },
                ],
                [
                    function (a, b) {
                        const max = Math.max(a, b);
                        if (max === a) return 1;
                        else if (max === b) return -1;
                        else return 0;
                    },
                ],
                [
                    function (a, b) {
                        const max = Math.max(a, b);
                        if (max === a) return 1;
                        else if (max === b) return -1;
                        else return 0;
                    },
                ],
                [
                    function (a, b) {
                        return 1;
                    },
                ],
                [
                    function (a, b) {
                        return -1;
                    },
                ],
                [
                    function (a, b) {
                        return 0;
                    },
                ],
            ],
            expected: [true, false, false, false, true, false, false, false, true, false, false, false, false, false],
        },
    ],
};
