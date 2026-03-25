module.exports = {
    testcases: [
        {
            input: [
                [
                    { price: 999.99, quantity: 2 },
                    { price: 49.99, quantity: 5 },
                ],
            ],
            expected: 999.99 * 2 + 49.99 * 5,
            isPublic: true,
            description: 'Calculates sample cart total with two items and decimal prices',
        },
        {
            input: [
                [
                    { price: 19.99, quantity: 3 },
                    { price: 5.99, quantity: 10 },
                ],
            ],
            expected: 19.99 * 3 + 5.99 * 10,
            isPublic: true,
            description: 'Calculates sample cart total with mixed quantities',
        },
        {
            input: [
                [
                    { price: 10, quantity: 1 },
                    { price: 20, quantity: 2 },
                    { price: 30, quantity: 3 },
                ],
            ],
            expected: 10 * 1 + 20 * 2 + 30 * 3,
            isPublic: true,
            description: 'Calculates total across three line items',
        },
        {
            input: [
                [
                    { price: 0, quantity: 5 },
                    { price: 10, quantity: 2 },
                ],
            ],
            expected: 0 * 5 + 10 * 2,
            isPublic: false,
            description: 'Handles zero-priced item correctly',
        },
        {
            input: [
                [
                    { price: 15, quantity: 0 },
                    { price: 9.5, quantity: 4 },
                ],
            ],
            expected: 15 * 0 + 9.5 * 4,
            isPublic: false,
            description: 'Handles zero quantity on one item correctly',
        },
        {
            input: [
                [
                    { price: 7.25, quantity: 2 },
                    { price: 3.5, quantity: 6 },
                ],
            ],
            expected: 7.25 * 2 + 3.5 * 6,
            isPublic: false,
            description: 'Handles decimal prices with integer quantities',
        },
        {
            input: [[{ price: 100, quantity: 10 }]],
            expected: 100 * 10,
            isPublic: false,
            description: 'Handles single item cart correctly',
        },
        {
            input: [
                [
                    { price: 1, quantity: 1 },
                    { price: 1, quantity: 1 },
                    { price: 1, quantity: 1 },
                ],
            ],
            expected: 1 * 1 + 1 * 1 + 1 * 1,
            isPublic: false,
            description: 'Handles repeated small values correctly',
        },
        {
            input: [
                [
                    { price: 250.75, quantity: 3 },
                    { price: 120.2, quantity: 1 },
                ],
            ],
            expected: 250.75 * 3 + 120.2 * 1,
            isPublic: false,
            description: 'Handles larger decimal prices correctly',
        },
        {
            input: [[{ price: 0.99, quantity: 100 }]],
            expected: 0.99 * 100,
            isPublic: false,
            description: 'Handles many units of a low-cost item',
        },
        {
            input: [
                [
                    { price: 12.34, quantity: 2 },
                    { price: 56.78, quantity: 3 },
                    { price: 9.1, quantity: 4 },
                ],
            ],
            expected: 12.34 * 2 + 56.78 * 3 + 9.1 * 4,
            isPublic: false,
            description: 'Handles mixed decimal prices across multiple items',
        },
        {
            input: [
                [
                    { price: 5, quantity: 5 },
                    { price: 10, quantity: 10 },
                    { price: 15, quantity: 15 },
                ],
            ],
            expected: 5 * 5 + 10 * 10 + 15 * 15,
            isPublic: false,
            description: 'Handles increasing prices and quantities correctly',
        },
        {
            input: [
                [
                    { price: 1234.56, quantity: 2 },
                    { price: 78.9, quantity: 7 },
                ],
            ],
            expected: 1234.56 * 2 + 78.9 * 7,
            isPublic: false,
            description: 'Handles high-value and mid-value line items together',
        },
        {
            input: [
                [
                    { price: 2.5, quantity: 4 },
                    { price: 4, quantity: 2 },
                    { price: 1.25, quantity: 8 },
                ],
            ],
            expected: 2.5 * 4 + 4 * 2 + 1.25 * 8,
            isPublic: false,
            description: 'Handles quarter-step decimal prices correctly',
        },
        {
            input: [
                [
                    { price: 8.88, quantity: 8 },
                    { price: 9.99, quantity: 9 },
                ],
            ],
            expected: 8.88 * 8 + 9.99 * 9,
            isPublic: false,
            description: 'Handles repeated decimal multiplication accurately',
        },
        {
            input: [
                [
                    { price: 11, quantity: 11 },
                    { price: 22, quantity: 2 },
                    { price: 33, quantity: 3 },
                ],
            ],
            expected: 11 * 11 + 22 * 2 + 33 * 3,
            isPublic: false,
            description: 'Handles cart with mixed two-digit values',
        },
        {
            input: [
                [
                    { price: 0.1, quantity: 1 },
                    { price: 0.2, quantity: 2 },
                    { price: 0.3, quantity: 3 },
                ],
            ],
            expected: 0.1 * 1 + 0.2 * 2 + 0.3 * 3,
            isPublic: false,
            description: 'Handles tiny decimal prices in floating point scenario',
        },
        {
            input: [
                [
                    { price: 49.5, quantity: 4 },
                    { price: 20, quantity: 5 },
                    { price: 5.5, quantity: 6 },
                ],
            ],
            expected: 49.5 * 4 + 20 * 5 + 5.5 * 6,
            isPublic: false,
            description: 'Handles mixed integer and decimal line items',
        },
        {
            input: [
                [
                    { price: 1.01, quantity: 99 },
                    { price: 2.02, quantity: 50 },
                ],
            ],
            expected: 1.01 * 99 + 2.02 * 50,
            isPublic: false,
            description: 'Handles non-round decimals with larger quantities',
        },
        {
            input: [
                [
                    { price: 75, quantity: 2 },
                    { price: 125, quantity: 3 },
                    { price: 200, quantity: 1 },
                    { price: 12.5, quantity: 8 },
                ],
            ],
            expected: 75 * 2 + 125 * 3 + 200 * 1 + 12.5 * 8,
            isPublic: false,
            description: 'Handles four-item cart total correctly',
        },
    ],
    options: {
        type: 'floating point',
        precision: 6,
    },
};
