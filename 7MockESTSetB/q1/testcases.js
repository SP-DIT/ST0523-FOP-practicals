module.exports = {
    testcases: [
        // Public test cases (first 3)
        {
            input: [
                [
                    { name: 'Alice', score: 95 },
                    { name: 'Bob', score: 85 },
                    { name: 'Charlie', score: 78 },
                ],
            ],
            expected: 'Good',
            isPublic: true,
            description: 'Average score 86 should return "Good"',
        },
        {
            input: [
                [
                    { name: 'David', score: 45 },
                    { name: 'Eve', score: 55 },
                    { name: 'Frank', score: 60 },
                    { name: 'Grace', score: 70 },
                ],
            ],
            expected: 'Average',
            isPublic: true,
            description: 'Average score 57.5 should return "Average"',
        },
        {
            input: [
                [
                    { name: 'John', score: 95 },
                    { name: 'Jane', score: 92 },
                    { name: 'Jack', score: 88 },
                ],
            ],
            expected: 'Excellent',
            isPublic: true,
            description: 'Average score 91.67 should return "Excellent"',
        },
        // Hidden test cases
        {
            input: [
                [
                    { name: 'Student', score: 30 },
                    { name: 'Student2', score: 40 },
                    { name: 'Student3', score: 35 },
                ],
            ],
            expected: 'Poor',
            isPublic: false,
            description: 'Average score 35 should return "Poor"',
        },
        {
            input: [[{ name: 'Solo', score: 90 }]],
            expected: 'Excellent',
            isPublic: false,
            description: 'Single student with score 90 should return "Excellent"',
        },
        {
            input: [[{ name: 'Solo', score: 75 }]],
            expected: 'Good',
            isPublic: false,
            description: 'Single student with score 75 should return "Good"',
        },
        {
            input: [[{ name: 'Solo', score: 50 }]],
            expected: 'Average',
            isPublic: false,
            description: 'Single student with score 50 should return "Average"',
        },
        {
            input: [[{ name: 'Solo', score: 49 }]],
            expected: 'Poor',
            isPublic: false,
            description: 'Single student with score 49 should return "Poor"',
        },
        {
            input: [
                [
                    { name: 'A', score: 100 },
                    { name: 'B', score: 100 },
                    { name: 'C', score: 100 },
                ],
            ],
            expected: 'Excellent',
            isPublic: false,
            description: 'All perfect scores should return "Excellent"',
        },
        {
            input: [
                [
                    { name: 'A', score: 0 },
                    { name: 'B', score: 0 },
                    { name: 'C', score: 0 },
                ],
            ],
            expected: 'Poor',
            isPublic: false,
            description: 'All zero scores should return "Poor"',
        },
        {
            input: [
                [
                    { name: 'A', score: 89 },
                    { name: 'B', score: 90 },
                ],
            ],
            expected: 'Good',
            isPublic: false,
            description: 'Average exactly 89.5 should return "Good"',
        },
        {
            input: [
                [
                    { name: 'A', score: 74 },
                    { name: 'B', score: 75 },
                ],
            ],
            expected: 'Average',
            isPublic: false,
            description: 'Average exactly 74.5 should return "Average"',
        },
        {
            input: [
                [
                    { name: 'A', score: 49 },
                    { name: 'B', score: 50 },
                ],
            ],
            expected: 'Poor',
            isPublic: false,
            description: 'Average exactly 49.5 should return "Poor"',
        },
        {
            input: [
                [
                    { name: 'A', score: 100 },
                    { name: 'B', score: 0 },
                ],
            ],
            expected: 'Average',
            isPublic: false,
            description: 'Wide range scores (100 and 0) averaging 50 should return "Average"',
        },
        {
            input: [
                [
                    { name: 'A', score: 92 },
                    { name: 'B', score: 94 },
                    { name: 'C', score: 96 },
                    { name: 'D', score: 98 },
                    { name: 'E', score: 100 },
                ],
            ],
            expected: 'Excellent',
            isPublic: false,
            description: 'Multiple high scores averaging 96 should return "Excellent"',
        },
        {
            input: [
                [
                    { name: 'S1', score: 91 },
                    { name: 'S2', score: 93 },
                    { name: 'S3', score: 95 },
                    { name: 'S4', score: 90 },
                    { name: 'S5', score: 92 },
                    { name: 'S6', score: 94 },
                ],
            ],
            expected: 'Excellent',
            isPublic: false,
            description: '6 students with average 92.5 should return "Excellent"',
        },
        {
            input: [
                [
                    { name: 'S1', score: 78 },
                    { name: 'S2', score: 82 },
                    { name: 'S3', score: 76 },
                    { name: 'S4', score: 85 },
                    { name: 'S5', score: 80 },
                    { name: 'S6', score: 79 },
                    { name: 'S7', score: 83 },
                ],
            ],
            expected: 'Good',
            isPublic: false,
            description: '7 students with average 80.43 should return "Good"',
        },
        {
            input: [
                [
                    { name: 'S1', score: 55 },
                    { name: 'S2', score: 60 },
                    { name: 'S3', score: 65 },
                    { name: 'S4', score: 58 },
                    { name: 'S5', score: 62 },
                    { name: 'S6', score: 54 },
                    { name: 'S7', score: 66 },
                    { name: 'S8', score: 61 },
                ],
            ],
            expected: 'Average',
            isPublic: false,
            description: '8 students with average 60.13 should return "Average"',
        },
        {
            input: [
                [
                    { name: 'S1', score: 40 },
                    { name: 'S2', score: 45 },
                    { name: 'S3', score: 38 },
                    { name: 'S4', score: 42 },
                    { name: 'S5', score: 48 },
                    { name: 'S6', score: 41 },
                    { name: 'S7', score: 44 },
                    { name: 'S8', score: 39 },
                    { name: 'S9', score: 46 },
                ],
            ],
            expected: 'Poor',
            isPublic: false,
            description: '9 students with average 42.56 should return "Poor"',
        },
        {
            input: [
                [
                    { name: 'S1', score: 95 },
                    { name: 'S2', score: 88 },
                    { name: 'S3', score: 92 },
                    { name: 'S4', score: 97 },
                    { name: 'S5', score: 91 },
                    { name: 'S6', score: 89 },
                    { name: 'S7', score: 94 },
                    { name: 'S8', score: 96 },
                    { name: 'S9', score: 90 },
                    { name: 'S10', score: 93 },
                ],
            ],
            expected: 'Excellent',
            isPublic: false,
            description: '10 students with average 92.5 should return "Excellent"',
        },
    ],
};
