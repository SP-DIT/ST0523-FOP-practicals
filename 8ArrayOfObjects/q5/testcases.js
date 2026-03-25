module.exports = {
    testcases: [
        // Public test cases (first 3)
        {
            input: [
                [
                    { type: 'circle', radius: 2 },
                    { type: 'rectangle', width: 4, height: 5 },
                    { type: 'triangle', base: 6, height: 6 },
                    { type: 'rectangle', width: 3, height: 5 },
                ],
            ],
            expected: { type: 'rectangle', width: 4, height: 5 },
            isPublic: true,
            description: 'Rectangle with width 4 and height 5 has the largest area (20)',
        },
        {
            input: [
                [
                    { type: 'circle', radius: 6 },
                    { type: 'rectangle', width: 4, height: 5 },
                    { type: 'circle', radius: 10 },
                    { type: 'triangle', base: 6, height: 7 },
                    { type: 'triangle', base: 3, height: 7 },
                ],
            ],
            expected: { type: 'circle', radius: 10 },
            isPublic: true,
            description: 'Circle with radius 10 has the largest area (≈314.16)',
        },
        {
            input: [
                [
                    { type: 'triangle', base: 10, height: 20 },
                    { type: 'rectangle', width: 7, height: 8 },
                    { type: 'circle', radius: 4 },
                ],
            ],
            expected: { type: 'triangle', base: 10, height: 20 },
            isPublic: true,
            description: 'Triangle with base 10 and height 20 has the largest area (100)',
        },
        // Hidden test cases
        {
            input: [[{ type: 'circle', radius: 5 }]],
            expected: { type: 'circle', radius: 5 },
            isPublic: false,
            description: 'Single circle should be returned',
        },
        {
            input: [[{ type: 'rectangle', width: 10, height: 10 }]],
            expected: { type: 'rectangle', width: 10, height: 10 },
            isPublic: false,
            description: 'Single rectangle should be returned',
        },
        {
            input: [[{ type: 'triangle', base: 8, height: 6 }]],
            expected: { type: 'triangle', base: 8, height: 6 },
            isPublic: false,
            description: 'Single triangle should be returned',
        },
        {
            input: [
                [
                    { type: 'circle', radius: 1 },
                    { type: 'circle', radius: 2 },
                    { type: 'circle', radius: 3 },
                ],
            ],
            expected: { type: 'circle', radius: 3 },
            isPublic: false,
            description: 'Largest circle among multiple circles',
        },
        {
            input: [
                [
                    { type: 'rectangle', width: 5, height: 5 },
                    { type: 'rectangle', width: 4, height: 6 },
                    { type: 'rectangle', width: 3, height: 9 },
                ],
            ],
            expected: { type: 'rectangle', width: 3, height: 9 },
            isPublic: false,
            description: 'Largest rectangle among multiple rectangles',
        },
        {
            input: [
                [
                    { type: 'triangle', base: 4, height: 5 },
                    { type: 'triangle', base: 6, height: 3 },
                    { type: 'triangle', base: 5, height: 4 },
                ],
            ],
            expected: { type: 'triangle', base: 4, height: 5 },
            isPublic: false,
            description: 'Largest triangle among multiple triangles',
        },
        {
            input: [
                [
                    { type: 'circle', radius: 0.5 },
                    { type: 'rectangle', width: 1, height: 1 },
                    { type: 'triangle', base: 2, height: 2 },
                ],
            ],
            expected: { type: 'triangle', base: 2, height: 2 },
            isPublic: false,
            description: 'Small dimensions test',
        },
        {
            input: [
                [
                    { type: 'circle', radius: 100 },
                    { type: 'rectangle', width: 200, height: 150 },
                    { type: 'triangle', base: 500, height: 400 },
                ],
            ],
            expected: { type: 'triangle', base: 500, height: 400 },
            isPublic: false,
            description: 'Large dimensions test',
        },
        {
            input: [
                [
                    { type: 'rectangle', width: 10, height: 10 },
                    { type: 'rectangle', width: 10, height: 10 },
                ],
            ],
            expected: { type: 'rectangle', width: 10, height: 10 },
            isPublic: false,
            description: 'Equal areas - should return first occurrence',
        },
        {
            input: [
                [
                    { type: 'circle', radius: 5 },
                    { type: 'circle', radius: 5 },
                    { type: 'circle', radius: 5 },
                ],
            ],
            expected: { type: 'circle', radius: 5 },
            isPublic: false,
            description: 'All equal circles - should return first',
        },
        {
            input: [
                [
                    { type: 'triangle', base: 10, height: 10 },
                    { type: 'rectangle', width: 7, height: 7 },
                    { type: 'circle', radius: 3.5 },
                ],
            ],
            expected: { type: 'triangle', base: 10, height: 10 },
            isPublic: false,
            description: 'Triangle area (50) larger than rectangle (49) and circle (≈38.48)',
        },
        {
            input: [
                [
                    { type: 'circle', radius: 7 },
                    { type: 'rectangle', width: 12, height: 13 },
                    { type: 'triangle', base: 20, height: 15 },
                ],
            ],
            expected: { type: 'rectangle', width: 12, height: 13 },
            isPublic: false,
            description: 'Rectangle area (156) between circle (≈153.94) and triangle (150)',
        },
        {
            input: [
                [
                    { type: 'circle', radius: 8 },
                    { type: 'triangle', base: 16, height: 25 },
                    { type: 'rectangle', width: 15, height: 13 },
                    { type: 'circle', radius: 5 },
                    { type: 'rectangle', width: 10, height: 10 },
                    { type: 'triangle', base: 12, height: 12 },
                    { type: 'circle', radius: 6 },
                    { type: 'rectangle', width: 8, height: 15 },
                    { type: 'triangle', base: 10, height: 18 },
                    { type: 'circle', radius: 7 },
                ],
            ],
            expected: { type: 'circle', radius: 8 },
            isPublic: false,
            description: 'Circle area (≈201.06) larger than triangle (200) and rectangle (195) - 10 shapes',
        },
        {
            input: [
                [
                    { type: 'rectangle', width: 1, height: 100 },
                    { type: 'rectangle', width: 10, height: 9 },
                    { type: 'circle', radius: 5 },
                    { type: 'triangle', base: 15, height: 10 },
                    { type: 'circle', radius: 4 },
                    { type: 'rectangle', width: 8, height: 11 },
                    { type: 'triangle', base: 12, height: 8 },
                    { type: 'circle', radius: 3 },
                    { type: 'rectangle', width: 9, height: 10 },
                    { type: 'triangle', base: 14, height: 12 },
                ],
            ],
            expected: { type: 'rectangle', width: 1, height: 100 },
            isPublic: false,
            description: 'Thin tall rectangle has largest area (100) - 10 shapes',
        },
        {
            input: [
                [
                    { type: 'triangle', base: 1, height: 1 },
                    { type: 'circle', radius: 0.4 },
                    { type: 'rectangle', width: 0.6, height: 0.7 },
                    { type: 'triangle', base: 0.8, height: 0.9 },
                    { type: 'circle', radius: 0.35 },
                    { type: 'rectangle', width: 0.5, height: 0.8 },
                    { type: 'triangle', base: 0.7, height: 0.7 },
                    { type: 'circle', radius: 0.3 },
                    { type: 'rectangle', width: 0.55, height: 0.65 },
                    { type: 'triangle', base: 0.9, height: 0.8 },
                ],
            ],
            expected: { type: 'circle', radius: 0.4 },
            isPublic: false,
            description: 'Very small shapes - circle slightly larger - 10 shapes',
        },
        {
            input: [
                [
                    { type: 'triangle', base: 30, height: 40 },
                    { type: 'circle', radius: 19 },
                    { type: 'rectangle', width: 35, height: 35 },
                    { type: 'triangle', base: 25, height: 35 },
                    { type: 'circle', radius: 15 },
                    { type: 'rectangle', width: 30, height: 30 },
                    { type: 'triangle', base: 28, height: 30 },
                    { type: 'circle', radius: 17 },
                    { type: 'rectangle', width: 32, height: 32 },
                    { type: 'triangle', base: 32, height: 38 },
                ],
            ],
            expected: { type: 'rectangle', width: 35, height: 35 },
            isPublic: false,
            description: 'Rectangle (1225) beats triangle (600) and circle (≈1134.11) - 10 shapes',
        },
        {
            input: [
                [
                    { type: 'circle', radius: 2.5 },
                    { type: 'rectangle', width: 3.2, height: 6.1 },
                    { type: 'triangle', base: 7.8, height: 5.2 },
                    { type: 'circle', radius: 2.2 },
                    { type: 'rectangle', width: 4.5, height: 4.2 },
                    { type: 'triangle', base: 6.5, height: 4.8 },
                    { type: 'circle', radius: 1.8 },
                    { type: 'rectangle', width: 3.8, height: 5.1 },
                    { type: 'triangle', base: 5.9, height: 6.3 },
                    { type: 'circle', radius: 2.3 },
                ],
            ],
            expected: { type: 'triangle', base: 7.8, height: 5.2 },
            isPublic: false,
            description: 'Decimal dimensions test - 10 shapes',
        },
    ],
    options: {
        type: 'JSON',
    },
};
