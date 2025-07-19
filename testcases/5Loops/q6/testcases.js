module.exports = {
    testcases: [
        {
            input: [
                function (x) {
                    return x;
                },
                1,
                5,
            ],
            expected: 0.4,
        },
        {
            input: [
                function (x) {
                    return 'foo';
                },
                6,
                10,
            ],
            expected: 0.6,
        },
        {
            input: [
                function (x) {
                    return 'bar';
                },
                11,
                20,
            ],
            expected: 0.9,
        },
        {
            input: [
                function (x) {
                    const i = x + 1;
                    return (i % 15 === 0 && 'foobar') || (i % 3 === 0 && 'foo') || (i % 5 === 0 && 'bar') || i;
                },
                1,
                100,
            ],
            expected: 1,
        },
        {
            input: [
                function (i) {
                    return (i % 15 === 0 && 'foobar') || (i % 3 === 0 && 'foo') || (i % 5 === 0 && 'bar') || i;
                },
                1,
                100,
            ],
            expected: 0,
        },
        {
            input: [
                function (i) {
                    return (i % 15 === 0 && 'foobar') || (i % 3 === 0 && 'foo') || (i % 5 === 0 && 'bar') || i;
                },
                100,
                100000,
            ],
            expected: 0,
        },
        {
            input: [
                function (i) {
                    return (i % 3 === 0 && 'foo') || (i % 5 === 0 && 'bar') || (i % 15 === 0 && 'foobar') || i;
                },
                1,
                1000,
            ],
            expected: 0.066,
        },
        {
            input: [
                function (i) {
                    return (i % 3 === 0 && 'foo') || (i % 5 === 0 && 'bar') || (i % 15 === 0 && 'foobar') || i;
                },
                999,
                9999,
            ],
            expected: 0.06665926008221308,
        },
        {
            input: [
                function (i) {
                    return (i % 15 === 0 && 'foobar') || (i % 3 === 1 && 'foo') || (i % 5 === 0 && 'bar') || i;
                },
                100,
                10000,
            ],
            expected: 0.6000403999596,
        },
    ],
    options: {
        type: 'floating point',
    },
};
