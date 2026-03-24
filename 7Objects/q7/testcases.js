module.exports = {
    testcases: [
        {
            input: [
                { name: 'Product A', price: 10 },
                { name: 'Product B', price: 20 },
                { name: 'Product C', price: 30 },
            ],
            expected: 50,
            isPublic: true,
            description: 'Cheapest of 10,20,30 is free so total is 50',
        },
        {
            input: [
                { name: 'Product X', price: 15 },
                { name: 'Product Y', price: 25 },
                { name: 'Product Z', price: 5 },
            ],
            expected: 40,
            isPublic: true,
            description: 'Cheapest of 15,25,5 is free so total is 40',
        },
        {
            input: [
                { name: 'P1', price: 10 },
                { name: 'P2', price: 10 },
                { name: 'P3', price: 10 },
            ],
            expected: 20,
            isPublic: true,
            description: 'When all prices are equal, one item is still free',
        },
        {
            input: [
                { name: 'A', price: 0 },
                { name: 'B', price: 20 },
                { name: 'C', price: 30 },
            ],
            expected: 50,
            isPublic: false,
            description: 'Free item can be zero-priced and total remains sum of others',
        },
        {
            input: [
                { name: 'A', price: 0 },
                { name: 'B', price: 0 },
                { name: 'C', price: 10 },
            ],
            expected: 10,
            isPublic: false,
            description: 'Two zero-priced items still produce correct total',
        },
        {
            input: [
                { name: 'A', price: 5 },
                { name: 'B', price: 5 },
                { name: 'C', price: 9 },
            ],
            expected: 14,
            isPublic: false,
            description: 'Tie on cheapest price removes only one cheapest item',
        },
        {
            input: [
                { name: 'A', price: 1 },
                { name: 'B', price: 2 },
                { name: 'C', price: 3 },
            ],
            expected: 5,
            isPublic: false,
            description: 'Small ascending prices compute correctly',
        },
        {
            input: [
                { name: 'A', price: 3 },
                { name: 'B', price: 1 },
                { name: 'C', price: 2 },
            ],
            expected: 5,
            isPublic: false,
            description: 'Order does not matter when identifying the cheapest',
        },
        {
            input: [
                { name: 'A', price: 100 },
                { name: 'B', price: 50 },
                { name: 'C', price: 75 },
            ],
            expected: 175,
            isPublic: false,
            description: 'Handles larger integer prices correctly',
        },
        {
            input: [
                { name: 'A', price: 999 },
                { name: 'B', price: 1 },
                { name: 'C', price: 500 },
            ],
            expected: 1499,
            isPublic: false,
            description: 'Very small cheapest item is removed from large totals',
        },
        {
            input: [
                { name: 'A', price: 12.5 },
                { name: 'B', price: 7.25 },
                { name: 'C', price: 10 },
            ],
            expected: 22.5,
            isPublic: false,
            description: 'Handles decimal prices and removes decimal minimum',
        },
        {
            input: [
                { name: 'A', price: 19.99 },
                { name: 'B', price: 19.99 },
                { name: 'C', price: 9.99 },
            ],
            expected: 39.98,
            isPublic: false,
            description: 'Handles decimal ties and decimal minimum correctly',
        },
        {
            input: [
                { name: 'A', price: 0.5 },
                { name: 'B', price: 0.2 },
                { name: 'C', price: 0.1 },
            ],
            expected: 0.7,
            isPublic: false,
            description: 'Handles small decimal prices correctly',
        },
        {
            input: [
                { name: 'A', price: 1000 },
                { name: 'B', price: 1000 },
                { name: 'C', price: 999.99 },
            ],
            expected: 2000,
            isPublic: false,
            description: 'Large values with decimal minimum compute correctly',
        },
        {
            input: [
                { name: 'A', price: 45 },
                { name: 'B', price: 45 },
                { name: 'C', price: 10 },
            ],
            expected: 90,
            isPublic: false,
            description: 'Two larger equal prices and one cheaper item',
        },
        {
            input: [
                { name: 'A', price: 10 },
                { name: 'B', price: 45 },
                { name: 'C', price: 45 },
            ],
            expected: 90,
            isPublic: false,
            description: 'Cheapest in first position is removed correctly',
        },
        {
            input: [
                { name: 'A', price: 45 },
                { name: 'B', price: 10 },
                { name: 'C', price: 45 },
            ],
            expected: 90,
            isPublic: false,
            description: 'Cheapest in middle position is removed correctly',
        },
        {
            input: [
                { name: 'A', price: 8 },
                { name: 'B', price: 8 },
                { name: 'C', price: 9 },
            ],
            expected: 17,
            isPublic: false,
            description: 'Tie at minimum with a slightly larger third price',
        },
        {
            input: [
                { name: 'A', price: 4 },
                { name: 'B', price: 9 },
                { name: 'C', price: 4 },
            ],
            expected: 13,
            isPublic: false,
            description: 'Cheapest tie appears in first and third product',
        },
        {
            input: [
                { name: 'A', price: 250 },
                { name: 'B', price: 120 },
                { name: 'C', price: 130 },
            ],
            expected: 380,
            isPublic: false,
            description: 'General mixed-price case computes final promotion total',
        },
    ],
    options: {
        type: 'floating point',
        precision: 6,
    },
};
