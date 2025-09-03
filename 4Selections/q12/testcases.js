module.exports = {
    testcases: [
        {
            input: [0],
            expected: "Freezing",
        },
        {
            input: [5],
            expected: "Cold",
        },
        {
            input: [20],
            expected: "Warm", 
        },
        {
            input: [40],
            expected: "Hot",
        },
        {
            input: [-10],
            expected: "Freezing",
        },
        {
            input: [10],
            expected: "Cold",
        },
        {
            input: [30],
            expected: "Warm", 
        },
        {
            input: [50],
            expected: "Hot",
        },
    ],
    options: {},
};
