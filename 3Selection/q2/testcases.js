module.exports = {
    testcases: [
        // Public test cases (first 3)
        {
            input: [168, 17, 60],
            expected: true,
            isPublic: true,
            description: 'Meets all requirements should return true',
        },
        {
            input: [110, 17, 60],
            expected: false,
            isPublic: true,
            description: 'Height below 120 should return false',
        },
        {
            input: [168, 10, 60],
            expected: false,
            isPublic: true,
            description: 'Age below 12 should return false',
        },
        // Hidden test cases
        {
            input: [168, 17, 30],
            expected: false,
            isPublic: false,
            description: 'Weight below 40 should return false',
        },
        {
            input: [120, 12, 40],
            expected: true,
            isPublic: false,
            description: 'Exact boundary values should return true',
        },
        {
            input: [119, 12, 40],
            expected: false,
            isPublic: false,
            description: 'Height one below boundary should return false',
        },
        {
            input: [120, 11, 40],
            expected: false,
            isPublic: false,
            description: 'Age one below boundary should return false',
        },
        {
            input: [120, 12, 39],
            expected: false,
            isPublic: false,
            description: 'Weight one below boundary should return false',
        },
        {
            input: [121, 12, 40],
            expected: true,
            isPublic: false,
            description: 'Height above boundary with others at boundary should return true',
        },
        {
            input: [120, 13, 40],
            expected: true,
            isPublic: false,
            description: 'Age above boundary with others at boundary should return true',
        },
        {
            input: [120, 12, 41],
            expected: true,
            isPublic: false,
            description: 'Weight above boundary with others at boundary should return true',
        },
        {
            input: [119, 11, 39],
            expected: false,
            isPublic: false,
            description: 'All three below boundary should return false',
        },
        {
            input: [200, 30, 100],
            expected: true,
            isPublic: false,
            description: 'Clearly eligible rider should return true',
        },
        {
            input: [0, 0, 0],
            expected: false,
            isPublic: false,
            description: 'Zero values should return false',
        },
        {
            input: [-1, 20, 50],
            expected: false,
            isPublic: false,
            description: 'Negative height should return false',
        },
        {
            input: [150, -1, 50],
            expected: false,
            isPublic: false,
            description: 'Negative age should return false',
        },
        {
            input: [150, 20, -1],
            expected: false,
            isPublic: false,
            description: 'Negative weight should return false',
        },
        {
            input: [119.9, 12, 40],
            expected: false,
            isPublic: false,
            description: 'Decimal height below 120 should return false',
        },
        {
            input: [120, 11.9, 40],
            expected: false,
            isPublic: false,
            description: 'Decimal age below 12 should return false',
        },
        {
            input: [120, 12, 39.9],
            expected: false,
            isPublic: false,
            description: 'Decimal weight below 40 should return false',
        },
    ],
};
