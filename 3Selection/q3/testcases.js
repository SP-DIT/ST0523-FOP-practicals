module.exports = {
    testcases: [
        // Public test cases (first 3)
        {
            input: [81],
            expected: 'A',
            isPublic: true,
            description: 'Score 81 should return grade A',
        },
        {
            input: [77],
            expected: 'B',
            isPublic: true,
            description: 'Score 77 should return grade B',
        },
        {
            input: [63],
            expected: 'C',
            isPublic: true,
            description: 'Score 63 should return grade C',
        },
        // Hidden test cases
        {
            input: [49],
            expected: 'F',
            isPublic: false,
            description: 'Score 49 below 50 should return grade F',
        },
        {
            input: [80],
            expected: 'A',
            isPublic: false,
            description: 'Boundary score 80 should return grade A',
        },
        {
            input: [79],
            expected: 'B',
            isPublic: false,
            description: 'Score 79 should return grade B',
        },
        {
            input: [70],
            expected: 'B',
            isPublic: false,
            description: 'Boundary score 70 should return grade B',
        },
        {
            input: [69],
            expected: 'C',
            isPublic: false,
            description: 'Score 69 should return grade C',
        },
        {
            input: [60],
            expected: 'C',
            isPublic: false,
            description: 'Boundary score 60 should return grade C',
        },
        {
            input: [59],
            expected: 'D',
            isPublic: false,
            description: 'Score 59 should return grade D',
        },
        {
            input: [50],
            expected: 'D',
            isPublic: false,
            description: 'Boundary score 50 should return grade D',
        },
        {
            input: [0],
            expected: 'F',
            isPublic: false,
            description: 'Score 0 should return grade F',
        },
        {
            input: [100],
            expected: 'A',
            isPublic: false,
            description: 'Perfect score 100 should return grade A',
        },
        {
            input: [99],
            expected: 'A',
            isPublic: false,
            description: 'Score 99 should return grade A',
        },
        {
            input: [89],
            expected: 'A',
            isPublic: false,
            description: 'Score 89 should return grade A',
        },
        {
            input: [75],
            expected: 'B',
            isPublic: false,
            description: 'Score 75 should return grade B',
        },
        {
            input: [65],
            expected: 'C',
            isPublic: false,
            description: 'Score 65 should return grade C',
        },
        {
            input: [55],
            expected: 'D',
            isPublic: false,
            description: 'Score 55 should return grade D',
        },
        {
            input: [-5],
            expected: 'F',
            isPublic: false,
            description: 'Negative score should return grade F',
        },
        {
            input: [79.9],
            expected: 'B',
            isPublic: false,
            description: 'Decimal score 79.9 should return grade B',
        },
    ],
};
