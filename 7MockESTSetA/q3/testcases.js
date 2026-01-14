module.exports = {
    testcases: [
        // Public test cases (first 3)
        {
            input: [
                [
                    { name: 'Alice', weight: 50, height: 1.6 },
                    { name: 'Bob', weight: 80, height: 1.75 },
                    { name: 'Charlie', weight: 55, height: 1.8 },
                ],
            ],
            expected: [
                { name: 'Alice', weight: 50, height: 1.6, category: 'Normal' },
                { name: 'Bob', weight: 80, height: 1.75, category: 'Overweight' },
                { name: 'Charlie', weight: 55, height: 1.8, category: 'Underweight' },
            ],
            isPublic: true,
            description: 'Alice: Normal, Bob: Overweight, Charlie: Underweight',
        },
        {
            input: [
                [
                    { name: 'David', weight: 90, height: 1.9 },
                    { name: 'Eva', weight: 40, height: 1.5 },
                    { name: 'Frank', weight: 75, height: 1.7 },
                ],
            ],
            expected: [
                { name: 'David', weight: 90, height: 1.9, category: 'Normal' },
                { name: 'Eva', weight: 40, height: 1.5, category: 'Underweight' },
                { name: 'Frank', weight: 75, height: 1.7, category: 'Overweight' },
            ],
            isPublic: true,
            description: 'David: Normal (BMI ≈ 24.9), Eva: Underweight (BMI ≈ 17.8), Frank: Overweight (BMI ≈ 26.0)',
        },
        {
            input: [
                [
                    { name: 'Grace', weight: 100, height: 1.8 },
                    { name: 'Henry', weight: 60, height: 1.75 },
                ],
            ],
            expected: [
                { name: 'Grace', weight: 100, height: 1.8, category: 'Obesity' },
                { name: 'Henry', weight: 60, height: 1.75, category: 'Normal' },
            ],
            isPublic: true,
            description: 'Grace: Obesity, Henry: Normal',
        },
        // Hidden test cases
        {
            input: [[]],
            expected: [],
            isPublic: false,
            description: 'Empty array should return empty array',
        },
        {
            input: [[{ name: 'Ian', weight: 50, height: 1.7 }]],
            expected: [{ name: 'Ian', weight: 50, height: 1.7, category: 'Underweight' }],
            isPublic: false,
            description: 'Single patient - Underweight (BMI ≈ 17.3)',
        },
        {
            input: [[{ name: 'Jane', weight: 70, height: 1.7 }]],
            expected: [{ name: 'Jane', weight: 70, height: 1.7, category: 'Normal' }],
            isPublic: false,
            description: 'Single patient - Normal (BMI ≈ 24.2)',
        },
        {
            input: [[{ name: 'Kevin', weight: 80, height: 1.7 }]],
            expected: [{ name: 'Kevin', weight: 80, height: 1.7, category: 'Overweight' }],
            isPublic: false,
            description: 'Single patient - Overweight (BMI ≈ 27.7)',
        },
        {
            input: [[{ name: 'Laura', weight: 90, height: 1.7 }]],
            expected: [{ name: 'Laura', weight: 90, height: 1.7, category: 'Obesity' }],
            isPublic: false,
            description: 'Single patient - Obesity (BMI ≈ 31.1)',
        },
        {
            input: [[{ name: 'Mike', weight: 53.4, height: 1.7 }]],
            expected: [{ name: 'Mike', weight: 53.4, height: 1.7, category: 'Underweight' }],
            isPublic: false,
            description: 'Boundary test - Just below 18.5 (BMI ≈ 18.47)',
        },
        {
            input: [[{ name: 'Nina', weight: 53.5, height: 1.7 }]],
            expected: [{ name: 'Nina', weight: 53.5, height: 1.7, category: 'Normal' }],
            isPublic: false,
            description: 'Boundary test - Just at/above 18.5 (BMI ≈ 18.51)',
        },
        {
            input: [[{ name: 'Oscar', weight: 72.2, height: 1.7 }]],
            expected: [{ name: 'Oscar', weight: 72.2, height: 1.7, category: 'Normal' }],
            isPublic: false,
            description: 'Boundary test - Just below 25 (BMI ≈ 24.98)',
        },
        {
            input: [[{ name: 'Paula', weight: 72.3, height: 1.7 }]],
            expected: [{ name: 'Paula', weight: 72.3, height: 1.7, category: 'Overweight' }],
            isPublic: false,
            description: 'Boundary test - Just at/above 25 (BMI ≈ 25.01)',
        },
        {
            input: [[{ name: 'Quinn', weight: 86.6, height: 1.7 }]],
            expected: [{ name: 'Quinn', weight: 86.6, height: 1.7, category: 'Overweight' }],
            isPublic: false,
            description: 'Boundary test - Just below 30 (BMI ≈ 29.96)',
        },
        {
            input: [[{ name: 'Rachel', weight: 86.8, height: 1.7 }]],
            expected: [{ name: 'Rachel', weight: 86.8, height: 1.7, category: 'Obesity' }],
            isPublic: false,
            description: 'Boundary test - Just at/above 30 (BMI ≈ 30.03)',
        },
        {
            input: [
                [
                    { name: 'Sam', weight: 45, height: 1.6 },
                    { name: 'Tom', weight: 65, height: 1.7 },
                    { name: 'Uma', weight: 80, height: 1.75 },
                    { name: 'Vic', weight: 100, height: 1.8 },
                ],
            ],
            expected: [
                { name: 'Sam', weight: 45, height: 1.6, category: 'Underweight' },
                { name: 'Tom', weight: 65, height: 1.7, category: 'Normal' },
                { name: 'Uma', weight: 80, height: 1.75, category: 'Overweight' },
                { name: 'Vic', weight: 100, height: 1.8, category: 'Obesity' },
            ],
            isPublic: false,
            description: 'All four categories represented',
        },
        {
            input: [
                [
                    { name: 'Wes', weight: 50, height: 1.5 },
                    { name: 'Xena', weight: 50, height: 1.6 },
                    { name: 'Yuri', weight: 50, height: 1.7 },
                ],
            ],
            expected: [
                { name: 'Wes', weight: 50, height: 1.5, category: 'Normal' },
                { name: 'Xena', weight: 50, height: 1.6, category: 'Normal' },
                { name: 'Yuri', weight: 50, height: 1.7, category: 'Underweight' },
            ],
            isPublic: false,
            description: 'Same weight, different heights affect BMI',
        },
        {
            input: [
                [
                    { name: 'Zara', weight: 65, height: 2.0 },
                    { name: 'Alex', weight: 65, height: 1.8 },
                    { name: 'Blake', weight: 65, height: 1.6 },
                ],
            ],
            expected: [
                { name: 'Zara', weight: 65, height: 2.0, category: 'Underweight' },
                { name: 'Alex', weight: 65, height: 1.8, category: 'Normal' },
                { name: 'Blake', weight: 65, height: 1.6, category: 'Overweight' },
            ],
            isPublic: false,
            description: 'Same weight, varying heights result in different categories',
        },
        {
            input: [
                [
                    { name: 'Carl', weight: 120, height: 2.0 },
                    { name: 'Dana', weight: 40, height: 1.5 },
                    { name: 'Eric', weight: 85, height: 1.9 },
                ],
            ],
            expected: [
                { name: 'Carl', weight: 120, height: 2.0, category: 'Obesity' },
                { name: 'Dana', weight: 40, height: 1.5, category: 'Underweight' },
                { name: 'Eric', weight: 85, height: 1.9, category: 'Normal' },
            ],
            isPublic: false,
            description: 'Mix of extreme and normal values',
        },
        {
            input: [
                [
                    { name: 'Finn', weight: 55.5, height: 1.65 },
                    { name: 'Gina', weight: 72.3, height: 1.82 },
                    { name: 'Hugo', weight: 88.7, height: 1.77 },
                ],
            ],
            expected: [
                { name: 'Finn', weight: 55.5, height: 1.65, category: 'Normal' },
                { name: 'Gina', weight: 72.3, height: 1.82, category: 'Normal' },
                { name: 'Hugo', weight: 88.7, height: 1.77, category: 'Overweight' },
            ],
            isPublic: false,
            description: 'Decimal weights and heights',
        },
        {
            input: [
                [
                    { name: 'Iris', weight: 100, height: 1.5 },
                    { name: 'Jack', weight: 110, height: 1.6 },
                    { name: 'Kate', weight: 120, height: 1.7 },
                ],
            ],
            expected: [
                { name: 'Iris', weight: 100, height: 1.5, category: 'Obesity' },
                { name: 'Jack', weight: 110, height: 1.6, category: 'Obesity' },
                { name: 'Kate', weight: 120, height: 1.7, category: 'Obesity' },
            ],
            isPublic: false,
            description: 'All patients have obesity',
        },
    ],
    options: {
        type: 'JSON',
    },
};
