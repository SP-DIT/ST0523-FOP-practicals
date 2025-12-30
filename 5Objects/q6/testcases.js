const condensedTypeChart = {
    fire: { fire: 0.5, grass: 2, water: 0.5, electric: 1 },
    water: { fire: 2, grass: 0.5, water: 0.5, electric: 1 },
    grass: { water: 2, grass: 0.5, fire: 0.5, electric: 1 },
    electric: { water: 2, grass: 0.5, fire: 1, electric: 0.5 },
};

module.exports = {
    testcases: [
        // Public test cases (first 3)
        {
            input: ['fire', 'grass', condensedTypeChart],
            expected: 2,
            isPublic: true,
            description: 'Fire should be super effective (2x) against Grass',
        },
        {
            input: ['fire', 'water', condensedTypeChart],
            expected: 0.5,
            isPublic: true,
            description: 'Fire should be not very effective (0.5x) against Water',
        },
        {
            input: ['electric', 'fire', condensedTypeChart],
            expected: 1,
            isPublic: true,
            description: 'Electric should be neutral (1x) against Fire',
        },
        // Hidden test cases
        {
            input: ['water', 'fire', condensedTypeChart],
            expected: 2,
            isPublic: false,
            description: 'Water should be super effective against Fire',
        },
        {
            input: ['water', 'grass', condensedTypeChart],
            expected: 0.5,
            isPublic: false,
            description: 'Water should be not very effective against Grass',
        },
        {
            input: ['water', 'water', condensedTypeChart],
            expected: 0.5,
            isPublic: false,
            description: 'Water should be not very effective against itself',
        },
        {
            input: ['water', 'electric', condensedTypeChart],
            expected: 1,
            isPublic: false,
            description: 'Water should be neutral against Electric',
        },
        {
            input: ['grass', 'water', condensedTypeChart],
            expected: 2,
            isPublic: false,
            description: 'Grass should be super effective against Water',
        },
        {
            input: ['grass', 'grass', condensedTypeChart],
            expected: 0.5,
            isPublic: false,
            description: 'Grass should be not very effective against itself',
        },
        {
            input: ['grass', 'fire', condensedTypeChart],
            expected: 0.5,
            isPublic: false,
            description: 'Grass should be not very effective against Fire',
        },
        {
            input: ['grass', 'electric', condensedTypeChart],
            expected: 1,
            isPublic: false,
            description: 'Grass should be neutral against Electric',
        },
        {
            input: ['electric', 'water', condensedTypeChart],
            expected: 2,
            isPublic: false,
            description: 'Electric should be super effective against Water',
        },
        {
            input: ['electric', 'grass', condensedTypeChart],
            expected: 0.5,
            isPublic: false,
            description: 'Electric should be not very effective against Grass',
        },
        {
            input: ['electric', 'electric', condensedTypeChart],
            expected: 0.5,
            isPublic: false,
            description: 'Electric should be not very effective against itself',
        },
        {
            input: ['fire', 'fire', condensedTypeChart],
            expected: 0.5,
            isPublic: false,
            description: 'Fire should be not very effective against itself',
        },
        {
            input: ['fire', 'electric', condensedTypeChart],
            expected: 1,
            isPublic: false,
            description: 'Fire should be neutral against Electric',
        },
        // Additional comprehensive test cases
        {
            input: ['grass', 'water', condensedTypeChart],
            expected: 2,
            isPublic: false,
            description: 'Grass vs Water effectiveness lookup',
        },
        {
            input: ['electric', 'water', condensedTypeChart],
            expected: 2,
            isPublic: false,
            description: 'Electric vs Water should be super effective',
        },
        {
            input: ['water', 'fire', condensedTypeChart],
            expected: 2,
            isPublic: false,
            description: 'Water vs Fire should be super effective',
        },
    ],
};
