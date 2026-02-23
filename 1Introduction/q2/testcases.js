module.exports = {
    testcases: [
        // Public test cases (first 3)
        {
            input: [2],
            expected: 256,
            isPublic: true,
            description: 'Example from README: square3Time(2) should be 256',
        },
        {
            input: [3],
            expected: 6561,
            isPublic: true,
            description: 'Example from README: square3Time(3) should be 6561',
        },
        {
            input: [1],
            expected: 1,
            isPublic: true,
            description: 'Identity case: square3Time(1) should be 1',
        },

        // Private test cases
        {
            input: [0],
            expected: 0,
            isPublic: false,
            description: 'Zero remains zero after squaring 3 times',
        },
        {
            input: [-1],
            expected: 1,
            isPublic: false,
            description: 'Negative one becomes positive one with even exponent',
        },
        {
            input: [-2],
            expected: 256,
            isPublic: false,
            description: 'Negative two to the power of 8 should be 256',
        },
        {
            input: [-3],
            expected: 6561,
            isPublic: false,
            description: 'Negative three to the power of 8 should be 6561',
        },
        {
            input: [4],
            expected: 65536,
            isPublic: false,
            description: '4 squared three times should be 65536',
        },
        {
            input: [5],
            expected: 390625,
            isPublic: false,
            description: '5 squared three times should be 390625',
        },
        {
            input: [6],
            expected: 1679616,
            isPublic: false,
            description: '6 squared three times should be 1679616',
        },
        {
            input: [7],
            expected: 5764801,
            isPublic: false,
            description: '7 squared three times should be 5764801',
        },
        {
            input: [8],
            expected: 16777216,
            isPublic: false,
            description: '8 squared three times should be 16777216',
        },
        {
            input: [9],
            expected: 43046721,
            isPublic: false,
            description: '9 squared three times should be 43046721',
        },
        {
            input: [10],
            expected: 100000000,
            isPublic: false,
            description: '10 squared three times should be 100000000',
        },
        {
            input: [11],
            expected: 214358881,
            isPublic: false,
            description: '11 squared three times should be 214358881',
        },
        {
            input: [12],
            expected: 429981696,
            isPublic: false,
            description: '12 squared three times should be 429981696',
        },
        {
            input: [13],
            expected: 815730721,
            isPublic: false,
            description: '13 squared three times should be 815730721',
        },
        {
            input: [14],
            expected: 1475789056,
            isPublic: false,
            description: '14 squared three times should be 1475789056',
        },
        {
            input: [-4],
            expected: 65536,
            isPublic: false,
            description: 'Negative four to the power of 8 should be 65536',
        },
        {
            input: [15],
            expected: 2562890625,
            isPublic: false,
            description: '15 squared three times should be 2562890625',
        },
    ],
};
