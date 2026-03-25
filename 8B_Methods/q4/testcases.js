module.exports = {
    testcases: [
        // Public test cases (first 3)
        {
            input: [100],
            commands: [
                { method: 'takeDamage', params: [30] },
                { method: 'heal', params: [20] },
                { method: 'getHealth', params: [] },
                { method: 'isAlive', params: [] },
            ],
            expected: [
                { value: 70, options: {} },
                { value: 90, options: {} },
                { value: 90, options: {} },
                { value: true, options: {} },
            ],
            isPublic: true,
            description: 'Character(100): takeDamage(30)=70, heal(20)=90, getHealth()=90, isAlive()=true',
        },
        {
            input: [100],
            commands: [
                { method: 'takeDamage', params: [80] },
                { method: 'heal', params: [120] },
                { method: 'getHealth', params: [] },
            ],
            expected: [
                { value: 20, options: {} },
                { value: 100, options: {} },
                { value: 100, options: {} },
            ],
            isPublic: true,
            description: 'Character(100): takeDamage(80)=20, heal(120) caps at maxHealth 100',
        },
        {
            input: [100],
            commands: [
                { method: 'takeDamage', params: [999] },
                { method: 'getHealth', params: [] },
                { method: 'isAlive', params: [] },
            ],
            expected: [
                { value: 0, options: {} },
                { value: 0, options: {} },
                { value: false, options: {} },
            ],
            isPublic: true,
            description: 'Character(100): takeDamage(999) sets health to 0, isAlive()=false',
        },
        // Hidden test cases
        {
            input: [50],
            commands: [
                { method: 'getHealth', params: [] },
                { method: 'isAlive', params: [] },
            ],
            expected: [
                { value: 50, options: {} },
                { value: true, options: {} },
            ],
            isPublic: false,
            description: 'Initial health check: maxHealth 50',
        },
        {
            input: [100],
            commands: [
                { method: 'takeDamage', params: [25] },
                { method: 'takeDamage', params: [25] },
                { method: 'getHealth', params: [] },
            ],
            expected: [
                { value: 75, options: {} },
                { value: 50, options: {} },
                { value: 50, options: {} },
            ],
            isPublic: false,
            description: 'Multiple damage: 100 - 25 - 25 = 50',
        },
        {
            input: [100],
            commands: [
                { method: 'heal', params: [50] },
                { method: 'getHealth', params: [] },
            ],
            expected: [
                { value: 100, options: {} },
                { value: 100, options: {} },
            ],
            isPublic: false,
            description: 'Healing at full health stays at maxHealth',
        },
        {
            input: [100],
            commands: [
                { method: 'takeDamage', params: [100] },
                { method: 'getHealth', params: [] },
                { method: 'isAlive', params: [] },
            ],
            expected: [
                { value: 0, options: {} },
                { value: 0, options: {} },
                { value: false, options: {} },
            ],
            isPublic: false,
            description: 'Exact lethal damage: 100 damage kills character with 100 health',
        },
        {
            input: [100],
            commands: [
                { method: 'takeDamage', params: [50] },
                { method: 'heal', params: [30] },
                { method: 'heal', params: [30] },
                { method: 'getHealth', params: [] },
            ],
            expected: [
                { value: 50, options: {} },
                { value: 80, options: {} },
                { value: 100, options: {} },
                { value: 100, options: {} },
            ],
            isPublic: false,
            description: 'Multiple heals: 50 + 30 + 30 caps at 100',
        },
        {
            input: [200],
            commands: [
                { method: 'takeDamage', params: [150] },
                { method: 'isAlive', params: [] },
                { method: 'heal', params: [100] },
                { method: 'getHealth', params: [] },
            ],
            expected: [
                { value: 50, options: {} },
                { value: true, options: {} },
                { value: 150, options: {} },
                { value: 150, options: {} },
            ],
            isPublic: false,
            description: 'Large health pool: 200 - 150 + 100 = 150',
        },
        {
            input: [100],
            commands: [
                { method: 'takeDamage', params: [0] },
                { method: 'getHealth', params: [] },
            ],
            expected: [
                { value: 100, options: {} },
                { value: 100, options: {} },
            ],
            isPublic: false,
            description: 'Zero damage: health remains at 100',
        },
        {
            input: [100],
            commands: [
                { method: 'heal', params: [0] },
                { method: 'getHealth', params: [] },
            ],
            expected: [
                { value: 100, options: {} },
                { value: 100, options: {} },
            ],
            isPublic: false,
            description: 'Zero healing: health remains at 100',
        },
        {
            input: [100],
            commands: [
                { method: 'takeDamage', params: [99] },
                { method: 'getHealth', params: [] },
                { method: 'isAlive', params: [] },
            ],
            expected: [
                { value: 1, options: {} },
                { value: 1, options: {} },
                { value: true, options: {} },
            ],
            isPublic: false,
            description: 'Nearly dead: 1 HP remaining, still alive',
        },
        {
            input: [100],
            commands: [
                { method: 'takeDamage', params: [99] },
                { method: 'takeDamage', params: [1] },
                { method: 'isAlive', params: [] },
            ],
            expected: [
                { value: 1, options: {} },
                { value: 0, options: {} },
                { value: false, options: {} },
            ],
            isPublic: false,
            description: 'Two-hit kill: 99 + 1 damage kills character',
        },
        {
            input: [150],
            commands: [
                { method: 'takeDamage', params: [100] },
                { method: 'heal', params: [75] },
                { method: 'takeDamage', params: [50] },
                { method: 'getHealth', params: [] },
                { method: 'isAlive', params: [] },
            ],
            expected: [
                { value: 50, options: {} },
                { value: 125, options: {} },
                { value: 75, options: {} },
                { value: 75, options: {} },
                { value: true, options: {} },
            ],
            isPublic: false,
            description: 'Combat sequence: 150 - 100 + 75 - 50 = 75',
        },
        {
            input: [1],
            commands: [
                { method: 'takeDamage', params: [1] },
                { method: 'isAlive', params: [] },
            ],
            expected: [
                { value: 0, options: {} },
                { value: false, options: {} },
            ],
            isPublic: false,
            description: 'Minimum health: 1 HP killed by 1 damage',
        },
        {
            input: [100],
            commands: [
                { method: 'takeDamage', params: [60] },
                { method: 'heal', params: [20] },
                { method: 'takeDamage', params: [40] },
                { method: 'getHealth', params: [] },
            ],
            expected: [
                { value: 40, options: {} },
                { value: 60, options: {} },
                { value: 20, options: {} },
                { value: 20, options: {} },
            ],
            isPublic: false,
            description: 'Mixed operations: 100 - 60 + 20 - 40 = 20',
        },
        {
            input: [500],
            commands: [
                { method: 'takeDamage', params: [200] },
                { method: 'takeDamage', params: [200] },
                { method: 'heal', params: [300] },
                { method: 'getHealth', params: [] },
            ],
            expected: [
                { value: 300, options: {} },
                { value: 100, options: {} },
                { value: 400, options: {} },
                { value: 400, options: {} },
            ],
            isPublic: false,
            description: 'Large numbers: 500 - 200 - 200 + 300 = 400',
        },
        {
            input: [100],
            commands: [
                { method: 'takeDamage', params: [50] },
                { method: 'isAlive', params: [] },
                { method: 'takeDamage', params: [50] },
                { method: 'isAlive', params: [] },
            ],
            expected: [
                { value: 50, options: {} },
                { value: true, options: {} },
                { value: 0, options: {} },
                { value: false, options: {} },
            ],
            isPublic: false,
            description: 'Status check during combat: alive at 50, dead at 0',
        },
        {
            input: [100],
            commands: [
                { method: 'takeDamage', params: [10] },
                { method: 'heal', params: [5] },
                { method: 'takeDamage', params: [10] },
                { method: 'heal', params: [5] },
                { method: 'getHealth', params: [] },
            ],
            expected: [
                { value: 90, options: {} },
                { value: 95, options: {} },
                { value: 85, options: {} },
                { value: 90, options: {} },
                { value: 90, options: {} },
            ],
            isPublic: false,
            description: 'Alternating damage and healing: ends at 90',
        },
        {
            input: [250],
            commands: [
                { method: 'takeDamage', params: [100] },
                { method: 'takeDamage', params: [100] },
                { method: 'takeDamage', params: [100] },
                { method: 'getHealth', params: [] },
                { method: 'isAlive', params: [] },
            ],
            expected: [
                { value: 150, options: {} },
                { value: 50, options: {} },
                { value: 0, options: {} },
                { value: 0, options: {} },
                { value: false, options: {} },
            ],
            isPublic: false,
            description: 'Overkill: 250 - 300 = 0 (capped), dead',
        },
    ],
    options: {
        type: 'commands',
    },
};
