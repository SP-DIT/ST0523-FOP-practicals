module.exports = {
    testcases: [
        // Public test cases (first 3)
        {
            input: [
                [
                    { name: 'Alice', weight: 68, height: 1.65 },
                    { name: 'Bob', weight: 85, height: 1.75 },
                    { name: 'Charlie', weight: 54, height: 1.6 },
                ],
            ],
            expected: ['Bob'],
            isPublic: true,
            description: 'Bob with BMI 27.76 should be identified as overweight',
        },
        {
            input: [
                [
                    { name: 'David', weight: 90, height: 1.8 },
                    { name: 'Eve', weight: 70, height: 1.7 },
                    { name: 'Frank', weight: 60, height: 1.75 },
                    { name: 'Grace', weight: 50, height: 1.6 },
                    { name: 'Hannah', weight: 80, height: 1.6 },
                ],
            ],
            expected: ['David', 'Hannah'],
            isPublic: true,
            description: 'David and Hannah should be identified as overweight',
        },
        {
            input: [
                [
                    { name: 'John', weight: 55, height: 1.7 },
                    { name: 'Jane', weight: 60, height: 1.65 },
                    { name: 'Jack', weight: 58, height: 1.75 },
                ],
            ],
            expected: [],
            isPublic: true,
            description: 'No students are overweight, should return empty array',
        },
        // Hidden test cases
        {
            input: [[]],
            expected: [],
            isPublic: false,
            description: 'Empty array should return empty array',
        },
        {
            input: [[{ name: 'Solo', weight: 65, height: 1.61 }]],
            expected: ['Solo'],
            isPublic: false,
            description: 'Single student with BMI exactly 25 should be identified as overweight',
        },
        {
            input: [[{ name: 'Solo', weight: 63.9, height: 1.6 }]],
            expected: [],
            isPublic: false,
            description: 'Single student with BMI just below 25 should not be identified as overweight',
        },
        {
            input: [
                [
                    { name: 'A', weight: 100, height: 1.8 },
                    { name: 'B', weight: 95, height: 1.75 },
                    { name: 'C', weight: 90, height: 1.7 },
                ],
            ],
            expected: ['A', 'B', 'C'],
            isPublic: false,
            description: 'All students are overweight',
        },
        {
            input: [
                [
                    { name: 'A', weight: 72.25, height: 1.7 },
                    { name: 'B', weight: 72.24, height: 1.7 },
                ],
            ],
            expected: ['A'],
            isPublic: false,
            description: 'BMI boundary test: 25.00 vs 24.996',
        },
        {
            input: [
                [
                    { name: 'A', weight: 50, height: 1.8 },
                    { name: 'B', weight: 55, height: 1.75 },
                    { name: 'C', weight: 60, height: 1.7 },
                    { name: 'D', weight: 58, height: 1.65 },
                ],
            ],
            expected: [],
            isPublic: false,
            description: 'All students have healthy weight',
        },
        {
            input: [
                [
                    { name: 'Very Heavy', weight: 120, height: 1.7 },
                    { name: 'Heavy', weight: 100, height: 1.75 },
                    { name: 'Normal', weight: 70, height: 1.75 },
                    { name: 'Light', weight: 50, height: 1.6 },
                ],
            ],
            expected: ['Very Heavy', 'Heavy'],
            isPublic: false,
            description: 'Mixed weights: 2 overweight out of 4',
        },
        {
            input: [
                [
                    { name: 'S1', weight: 81, height: 1.8 },
                    { name: 'S2', weight: 80, height: 1.78 },
                    { name: 'S3', weight: 75, height: 1.7 },
                    { name: 'S4', weight: 70, height: 1.65 },
                    { name: 'S5', weight: 65, height: 1.6 },
                ],
            ],
            expected: ['S1', 'S2', 'S3', 'S4', 'S5'],
            isPublic: false,
            description: '5 students, all with BMI >= 25',
        },
        {
            input: [
                [
                    { name: 'S1', weight: 95, height: 1.9 },
                    { name: 'S2', weight: 90, height: 1.85 },
                    { name: 'S3', weight: 85, height: 1.8 },
                    { name: 'S4', weight: 80, height: 1.75 },
                    { name: 'S5', weight: 70, height: 1.65 },
                    { name: 'S6', weight: 61, height: 1.55 },
                ],
            ],
            expected: ['S1', 'S2', 'S3', 'S4', 'S5', 'S6'],
            isPublic: false,
            description: '6 students, all are overweight',
        },
        {
            input: [
                [
                    { name: 'S1', weight: 105, height: 2.0 },
                    { name: 'S2', weight: 98, height: 1.9 },
                    { name: 'S3', weight: 90, height: 1.8 },
                    { name: 'S4', weight: 82, height: 1.7 },
                    { name: 'S5', weight: 75, height: 1.6 },
                    { name: 'S6', weight: 68, height: 1.5 },
                    { name: 'S7', weight: 60, height: 1.4 },
                ],
            ],
            expected: ['S1', 'S2', 'S3', 'S4', 'S5', 'S6', 'S7'],
            isPublic: false,
            description: '7 students, all are overweight',
        },
        {
            input: [
                [
                    { name: 'S1', weight: 76.8, height: 1.6 },
                    { name: 'S2', weight: 86.45, height: 1.7 },
                    { name: 'S3', weight: 97.2, height: 1.8 },
                    { name: 'S4', weight: 109.1, height: 1.9 },
                    { name: 'S5', weight: 120, height: 2.0 },
                    { name: 'S6', weight: 60, height: 1.6 },
                    { name: 'S7', weight: 65, height: 1.7 },
                    { name: 'S8', weight: 70, height: 1.8 },
                ],
            ],
            expected: ['S1', 'S2', 'S3', 'S4', 'S5'],
            isPublic: false,
            description: '8 students with BMI exactly 30 threshold and below',
        },
        {
            input: [
                [
                    { name: 'S1', weight: 85, height: 1.75 },
                    { name: 'S2', weight: 84, height: 1.75 },
                    { name: 'S3', weight: 83, height: 1.75 },
                    { name: 'S4', weight: 82, height: 1.75 },
                    { name: 'S5', weight: 81, height: 1.75 },
                    { name: 'S6', weight: 80, height: 1.75 },
                    { name: 'S7', weight: 79, height: 1.75 },
                    { name: 'S8', weight: 78, height: 1.75 },
                    { name: 'S9', weight: 77, height: 1.75 },
                ],
            ],
            expected: ['S1', 'S2', 'S3', 'S4', 'S5', 'S6', 'S7', 'S8', 'S9'],
            isPublic: false,
            description: '9 students with same height, all weights above threshold',
        },
        {
            input: [
                [
                    { name: 'S1', weight: 90, height: 1.8 },
                    { name: 'S2', weight: 88, height: 1.78 },
                    { name: 'S3', weight: 86, height: 1.76 },
                    { name: 'S4', weight: 84, height: 1.74 },
                    { name: 'S5', weight: 82, height: 1.72 },
                    { name: 'S6', weight: 80, height: 1.7 },
                    { name: 'S7', weight: 78, height: 1.68 },
                    { name: 'S8', weight: 76, height: 1.66 },
                    { name: 'S9', weight: 74, height: 1.64 },
                    { name: 'S10', weight: 72, height: 1.62 },
                ],
            ],
            expected: ['S1', 'S2', 'S3', 'S4', 'S5', 'S6', 'S7', 'S8', 'S9', 'S10'],
            isPublic: false,
            description: '10 students, all with BMI around 27-28',
        },
        {
            input: [
                [
                    { name: 'Tall', weight: 95, height: 2.0 },
                    { name: 'Short', weight: 95, height: 1.5 },
                    { name: 'Average', weight: 95, height: 1.75 },
                ],
            ],
            expected: ['Short', 'Average'],
            isPublic: false,
            description: 'Same weight, different heights',
        },
        {
            input: [
                [
                    { name: 'S1', weight: 70, height: 1.5 },
                    { name: 'S2', weight: 70, height: 1.6 },
                    { name: 'S3', weight: 70, height: 1.7 },
                    { name: 'S4', weight: 70, height: 1.8 },
                ],
            ],
            expected: ['S1', 'S2'],
            isPublic: false,
            description: 'Same weight 70kg, varying heights',
        },
        {
            input: [[{ name: 'Edge', weight: 76.5625, height: 1.75 }]],
            expected: ['Edge'],
            isPublic: false,
            description: 'Single student with BMI exactly 25.0',
        },
        {
            input: [
                [
                    { name: 'First', weight: 100, height: 1.8 },
                    { name: 'Middle', weight: 65, height: 1.7 },
                    { name: 'Last', weight: 90, height: 1.7 },
                ],
            ],
            expected: ['First', 'Last'],
            isPublic: false,
            description: 'Overweight students at different positions in array',
        },
    ],
    options: {
        type: 'JSON',
    },
};
