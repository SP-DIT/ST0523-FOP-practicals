module.exports = {
    testcases: [
        {
            input: [
                {
                    type: 'circle',
                    radius: 5,
                },
            ],
            expected: Math.PI * 5 * 5,
        },
        {
            input: [
                {
                    type: 'rectangle',
                    width: 5,
                    length: 10,
                },
            ],
            expected: 50,
        },
        {
            input: [
                {
                    type: 'triangle',
                    base: 5,
                    height: 10,
                },
            ],
            expected: 25,
        },
        {
            input: [
                {
                    type: 'square',
                    side: 5,
                },
            ],
            expected: 25,
        },
        {
            input: [
                {
                    type: 'circle',
                    radius: 7,
                },
            ],
            expected: Math.PI * 7 * 7,
        },
        {
            input: [
                {
                    type: 'rectangle',
                    width: 9,
                    length: 12,
                },
            ],
            expected: 108,
        },
        {
            input: [
                {
                    type: 'triangle',
                    base: 35,
                    height: 22,
                },
            ],
            expected: 385,
        },
        {
            input: [
                {
                    type: 'square',
                    side: 77,
                },
            ],
            expected: 5929,
        },
    ],
    options: {},
};
