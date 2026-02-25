module.exports = {
    testcases: [
        // Public test cases (first 3)
        {
            input: [4],
            expected: 12,
            isPublic: true,
            description: 'Example from README: multiplyBy3(4) should be 12',
        },
        {
            input: [0],
            expected: 0,
            isPublic: true,
            description: 'Zero multiplied by 3 should be 0',
        },
        {
            input: [1],
            expected: 3,
            isPublic: true,
            description: 'One multiplied by 3 should be 3',
        },

        // Private test cases
        {
            input: [2],
            expected: 6,
            isPublic: false,
            description: '2 multiplied by 3 should be 6',
        },
        {
            input: [3],
            expected: 9,
            isPublic: false,
            description: '3 multiplied by 3 should be 9',
        },
        {
            input: [5],
            expected: 15,
            isPublic: false,
            description: '5 multiplied by 3 should be 15',
        },
        {
            input: [6],
            expected: 18,
            isPublic: false,
            description: '6 multiplied by 3 should be 18',
        },
        {
            input: [7],
            expected: 21,
            isPublic: false,
            description: '7 multiplied by 3 should be 21',
        },
        {
            input: [8],
            expected: 24,
            isPublic: false,
            description: '8 multiplied by 3 should be 24',
        },
        {
            input: [9],
            expected: 27,
            isPublic: false,
            description: '9 multiplied by 3 should be 27',
        },
        {
            input: [10],
            expected: 30,
            isPublic: false,
            description: '10 multiplied by 3 should be 30',
        },
        {
            input: [11],
            expected: 33,
            isPublic: false,
            description: '11 multiplied by 3 should be 33',
        },
        {
            input: [12],
            expected: 36,
            isPublic: false,
            description: '12 multiplied by 3 should be 36',
        },
        {
            input: [13],
            expected: 39,
            isPublic: false,
            description: '13 multiplied by 3 should be 39',
        },
        {
            input: [14],
            expected: 42,
            isPublic: false,
            description: '14 multiplied by 3 should be 42',
        },
        {
            input: [15],
            expected: 45,
            isPublic: false,
            description: '15 multiplied by 3 should be 45',
        },
        {
            input: [-1],
            expected: -3,
            isPublic: false,
            description: '-1 multiplied by 3 should be -3',
        },
        {
            input: [-2],
            expected: -6,
            isPublic: false,
            description: '-2 multiplied by 3 should be -6',
        },
        {
            input: [-5],
            expected: -15,
            isPublic: false,
            description: '-5 multiplied by 3 should be -15',
        },
        {
            input: [100],
            expected: 300,
            isPublic: false,
            description: '100 multiplied by 3 should be 300',
        },
    ],
};
