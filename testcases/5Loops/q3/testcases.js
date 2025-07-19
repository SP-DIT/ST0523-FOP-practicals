module.exports = {
    testcases: [
        {
            input: [1],
            expected: 4,
        },
        {
            input: [2],
            expected: 2.666666666666667,
        },
        {
            input: [3],
            expected: 3.466666666666667,
        },
        {
            input: [4],
            expected: 2.8952380952380956,
        },
        {
            input: [6],
            expected: 2.9760461760461765,
        },
        {
            input: [8],
            expected: 3.017071817071818,
        },
        {
            input: [10],
            expected: 3.0418396189294032,
        },
        {
            input: [25],
            expected: 3.1815766854350325,
        },
        {
            input: [50],
            expected: 3.121594652591011,
        },
        {
            input: [100],
            expected: 3.1315929035585537,
        },
        {
            input: [1000],
            expected: 3.140592653839794,
        },
        {
            input: [10000],
            expected: 3.1414926535900345,
        },
    ],
    options: {
        type: 'floating point',
        precision: 6,
    },
};
