module.exports = {
    testcases: [
        // Public test cases (first 3)
        {
            input: [[
                { name: 'Health Potion', price: 10, quantity: 5 },
                { name: 'Mana Potion', price: 15, quantity: 3 },
            ]],
            commands: [
                { method: 'buyItem', params: ['Health Potion', 2] },
                { method: 'getAvailableItemList', params: [] },
            ],
            expected: [
                { value: 20, options: {} },
                { value: [
                    { name: 'Health Potion', price: 10, quantity: 3 },
                    { name: 'Mana Potion', price: 15, quantity: 3 },
                ], options: { type: 'JSON' } },
            ],
            isPublic: true,
            description: 'Buy 2 Health Potions: cost 20, Health Potion quantity reduced to 3',
        },
        {
            input: [[
                { name: 'Health Potion', price: 10, quantity: 5 },
                { name: 'Mana Potion', price: 15, quantity: 3 },
            ]],
            commands: [
                { method: 'buyItem', params: ['Mana Potion', 4] },
            ],
            expected: [
                { value: 'Insufficient stock for Mana Potion', options: {} },
            ],
            isPublic: true,
            description: 'Buy 4 Mana Potions when only 3 available: return insufficient stock message',
        },
        {
            input: [[
                { name: 'Health Potion', price: 10, quantity: 5 },
                { name: 'Mana Potion', price: 15, quantity: 3 },
            ]],
            commands: [
                { method: 'buyItem', params: ['Mana Potion', 3] },
                { method: 'getAvailableItemList', params: [] },
            ],
            expected: [
                { value: 45, options: {} },
                { value: [
                    { name: 'Health Potion', price: 10, quantity: 5 },
                ], options: { type: 'JSON' } },
            ],
            isPublic: true,
            description: 'Buy all 3 Mana Potions: cost 45, Mana Potion removed from available list',
        },
        // Hidden test cases
        {
            input: [[
                { name: 'Sword', price: 100, quantity: 2 },
            ]],
            commands: [
                { method: 'getAvailableItemList', params: [] },
            ],
            expected: [
                { value: [
                    { name: 'Sword', price: 100, quantity: 2 },
                ], options: { type: 'JSON' } },
            ],
            isPublic: false,
            description: 'Initial available items list',
        },
        {
            input: [[
                { name: 'Sword', price: 100, quantity: 1 },
            ]],
            commands: [
                { method: 'buyItem', params: ['Sword', 1] },
                { method: 'getAvailableItemList', params: [] },
            ],
            expected: [
                { value: 100, options: {} },
                { value: [], options: { type: 'JSON' } },
            ],
            isPublic: false,
            description: 'Buy all items: available list becomes empty',
        },
        {
            input: [[
                { name: 'Arrow', price: 5, quantity: 20 },
            ]],
            commands: [
                { method: 'buyItem', params: ['Arrow', 10] },
                { method: 'buyItem', params: ['Arrow', 10] },
                { method: 'getAvailableItemList', params: [] },
            ],
            expected: [
                { value: 50, options: {} },
                { value: 50, options: {} },
                { value: [], options: { type: 'JSON' } },
            ],
            isPublic: false,
            description: 'Multiple purchases until stock depleted',
        },
        {
            input: [[
                { name: 'Potion', price: 10, quantity: 5 },
            ]],
            commands: [
                { method: 'buyItem', params: ['Potion', 6] },
                { method: 'getAvailableItemList', params: [] },
            ],
            expected: [
                { value: 'Insufficient stock for Potion', options: {} },
                { value: [
                    { name: 'Potion', price: 10, quantity: 5 },
                ], options: { type: 'JSON' } },
            ],
            isPublic: false,
            description: 'Insufficient stock: quantity unchanged',
        },
        {
            input: [[
                { name: 'Shield', price: 50, quantity: 3 },
                { name: 'Helmet', price: 30, quantity: 2 },
                { name: 'Boots', price: 20, quantity: 4 },
            ]],
            commands: [
                { method: 'buyItem', params: ['Helmet', 2] },
                { method: 'getAvailableItemList', params: [] },
            ],
            expected: [
                { value: 60, options: {} },
                { value: [
                    { name: 'Shield', price: 50, quantity: 3 },
                    { name: 'Boots', price: 20, quantity: 4 },
                ], options: { type: 'JSON' } },
            ],
            isPublic: false,
            description: 'Buy all of one item: removed from list, others remain',
        },
        {
            input: [[
                { name: 'Elixir', price: 25, quantity: 10 },
            ]],
            commands: [
                { method: 'buyItem', params: ['Elixir', 3] },
                { method: 'buyItem', params: ['Elixir', 4] },
                { method: 'getAvailableItemList', params: [] },
            ],
            expected: [
                { value: 75, options: {} },
                { value: 100, options: {} },
                { value: [
                    { name: 'Elixir', price: 25, quantity: 3 },
                ], options: { type: 'JSON' } },
            ],
            isPublic: false,
            description: 'Multiple purchases: 10 - 3 - 4 = 3 remaining',
        },
        {
            input: [[
                { name: 'Staff', price: 150, quantity: 1 },
            ]],
            commands: [
                { method: 'buyItem', params: ['Staff', 2] },
            ],
            expected: [
                { value: 'Insufficient stock for Staff', options: {} },
            ],
            isPublic: false,
            description: 'Try to buy 2 when only 1 available',
        },
        {
            input: [[
                { name: 'Gem', price: 200, quantity: 5 },
            ]],
            commands: [
                { method: 'buyItem', params: ['Gem', 5] },
                { method: 'buyItem', params: ['Gem', 1] },
            ],
            expected: [
                { value: 1000, options: {} },
                { value: 'Insufficient stock for Gem', options: {} },
            ],
            isPublic: false,
            description: 'Buy all then try to buy more: insufficient stock',
        },
        {
            input: [[
                { name: 'Dagger', price: 40, quantity: 3 },
                { name: 'Bow', price: 80, quantity: 2 },
            ]],
            commands: [
                { method: 'buyItem', params: ['Dagger', 1] },
                { method: 'buyItem', params: ['Bow', 1] },
                { method: 'getAvailableItemList', params: [] },
            ],
            expected: [
                { value: 40, options: {} },
                { value: 80, options: {} },
                { value: [
                    { name: 'Dagger', price: 40, quantity: 2 },
                    { name: 'Bow', price: 80, quantity: 1 },
                ], options: { type: 'JSON' } },
            ],
            isPublic: false,
            description: 'Buy from multiple items: both quantities reduced',
        },
        {
            input: [[
                { name: 'Scroll', price: 15, quantity: 0 },
            ]],
            commands: [
                { method: 'getAvailableItemList', params: [] },
            ],
            expected: [
                { value: [], options: { type: 'JSON' } },
            ],
            isPublic: false,
            description: 'Item with 0 quantity not in available list',
        },
        {
            input: [[
                { name: 'Ring', price: 75, quantity: 4 },
            ]],
            commands: [
                { method: 'buyItem', params: ['Ring', 1] },
                { method: 'buyItem', params: ['Ring', 1] },
                { method: 'buyItem', params: ['Ring', 1] },
                { method: 'buyItem', params: ['Ring', 1] },
                { method: 'getAvailableItemList', params: [] },
            ],
            expected: [
                { value: 75, options: {} },
                { value: 75, options: {} },
                { value: 75, options: {} },
                { value: 75, options: {} },
                { value: [], options: { type: 'JSON' } },
            ],
            isPublic: false,
            description: 'Buy one at a time until depleted',
        },
        {
            input: [[
                { name: 'Armor', price: 120, quantity: 3 },
                { name: 'Gloves', price: 25, quantity: 5 },
                { name: 'Cape', price: 35, quantity: 2 },
            ]],
            commands: [
                { method: 'buyItem', params: ['Gloves', 5] },
                { method: 'buyItem', params: ['Cape', 2] },
                { method: 'getAvailableItemList', params: [] },
            ],
            expected: [
                { value: 125, options: {} },
                { value: 70, options: {} },
                { value: [
                    { name: 'Armor', price: 120, quantity: 3 },
                ], options: { type: 'JSON' } },
            ],
            isPublic: false,
            description: 'Buy all of two items: only one remains available',
        },
        {
            input: [[
                { name: 'Wand', price: 60, quantity: 2 },
            ]],
            commands: [
                { method: 'buyItem', params: ['Wand', 1] },
                { method: 'getAvailableItemList', params: [] },
                { method: 'buyItem', params: ['Wand', 1] },
                { method: 'getAvailableItemList', params: [] },
            ],
            expected: [
                { value: 60, options: {} },
                { value: [
                    { name: 'Wand', price: 60, quantity: 1 },
                ], options: { type: 'JSON' } },
                { value: 60, options: {} },
                { value: [], options: { type: 'JSON' } },
            ],
            isPublic: false,
            description: 'Check availability between purchases',
        },
        {
            input: [[
                { name: 'Torch', price: 5, quantity: 100 },
            ]],
            commands: [
                { method: 'buyItem', params: ['Torch', 50] },
                { method: 'getAvailableItemList', params: [] },
            ],
            expected: [
                { value: 250, options: {} },
                { value: [
                    { name: 'Torch', price: 5, quantity: 50 },
                ], options: { type: 'JSON' } },
            ],
            isPublic: false,
            description: 'Large quantity purchase: 100 - 50 = 50',
        },
        {
            input: [[
                { name: 'Amulet', price: 90, quantity: 3 },
                { name: 'Necklace', price: 70, quantity: 2 },
            ]],
            commands: [
                { method: 'buyItem', params: ['InvalidItem', 1] },
            ],
            expected: [
                { value: 'Insufficient stock for InvalidItem', options: {} },
            ],
            isPublic: false,
            description: 'Try to buy non-existent item: insufficient stock',
        },
        {
            input: [[
                { name: 'Potion A', price: 10, quantity: 5 },
                { name: 'Potion B', price: 15, quantity: 3 },
                { name: 'Potion C', price: 20, quantity: 2 },
            ]],
            commands: [
                { method: 'buyItem', params: ['Potion B', 3] },
                { method: 'buyItem', params: ['Potion A', 2] },
                { method: 'getAvailableItemList', params: [] },
            ],
            expected: [
                { value: 45, options: {} },
                { value: 20, options: {} },
                { value: [
                    { name: 'Potion A', price: 10, quantity: 3 },
                    { name: 'Potion C', price: 20, quantity: 2 },
                ], options: { type: 'JSON' } },
            ],
            isPublic: false,
            description: 'Multiple items: Potion B depleted, A and C remain',
        },
        {
            input: [[
                { name: 'Weapon', price: 200, quantity: 1 },
                { name: 'Shield', price: 100, quantity: 3 },
            ]],
            commands: [
                { method: 'buyItem', params: ['Weapon', 1] },
                { method: 'buyItem', params: ['Shield', 2] },
                { method: 'getAvailableItemList', params: [] },
                { method: 'buyItem', params: ['Shield', 2] },
            ],
            expected: [
                { value: 200, options: {} },
                { value: 200, options: {} },
                { value: [
                    { name: 'Shield', price: 100, quantity: 1 },
                ], options: { type: 'JSON' } },
                { value: 'Insufficient stock for Shield', options: {} },
            ],
            isPublic: false,
            description: 'Complex scenario: multiple items, check availability, then insufficient stock',
        },
    ],
    options: {
        type: 'commands',
    },
};
