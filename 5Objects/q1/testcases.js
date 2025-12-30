module.exports = {
    testcases: [
        // Public test cases (first 3)
        {
            input: [],
            expected: { name: 'Pikachu', type: 'Electric', level: 5, isShiny: false },
            isPublic: true,
            description: 'Should return Pikachu object with correct properties',
        },
        {
            input: [],
            expected: { name: 'Pikachu', type: 'Electric', level: 5, isShiny: false },
            isPublic: true,
            description: 'Object should have name property set to Pikachu',
        },
        {
            input: [],
            expected: { name: 'Pikachu', type: 'Electric', level: 5, isShiny: false },
            isPublic: true,
            description: 'Object should have all required properties with correct values',
        },
        // Hidden test cases
        {
            input: [],
            expected: { name: 'Pikachu', type: 'Electric', level: 5, isShiny: false },
            isPublic: false,
            description: 'Object name should be exactly "Pikachu"',
        },
        {
            input: [],
            expected: { name: 'Pikachu', type: 'Electric', level: 5, isShiny: false },
            isPublic: false,
            description: 'Object type should be exactly "Electric"',
        },
        {
            input: [],
            expected: { name: 'Pikachu', type: 'Electric', level: 5, isShiny: false },
            isPublic: false,
            description: 'Object level should be exactly 5',
        },
        {
            input: [],
            expected: { name: 'Pikachu', type: 'Electric', level: 5, isShiny: false },
            isPublic: false,
            description: 'Object isShiny should be exactly false',
        },
        {
            input: [],
            expected: { name: 'Pikachu', type: 'Electric', level: 5, isShiny: false },
            isPublic: false,
            description: 'Object should have exactly 4 properties',
        },
        {
            input: [],
            expected: { name: 'Pikachu', type: 'Electric', level: 5, isShiny: false },
            isPublic: false,
            description: 'All property names should match exactly',
        },
        {
            input: [],
            expected: { name: 'Pikachu', type: 'Electric', level: 5, isShiny: false },
            isPublic: false,
            description: 'All property values should have correct data types',
        },
        {
            input: [],
            expected: { name: 'Pikachu', type: 'Electric', level: 5, isShiny: false },
            isPublic: false,
            description: 'Function should return an object',
        },
        {
            input: [],
            expected: { name: 'Pikachu', type: 'Electric', level: 5, isShiny: false },
            isPublic: false,
            description: 'Function should return the same object structure each time',
        },
        {
            input: [],
            expected: { name: 'Pikachu', type: 'Electric', level: 5, isShiny: false },
            isPublic: false,
            description: 'Object properties should be accessible',
        },
        {
            input: [],
            expected: { name: 'Pikachu', type: 'Electric', level: 5, isShiny: false },
            isPublic: false,
            description: 'Name property should be a string',
        },
        {
            input: [],
            expected: { name: 'Pikachu', type: 'Electric', level: 5, isShiny: false },
            isPublic: false,
            description: 'Type property should be a string',
        },
        {
            input: [],
            expected: { name: 'Pikachu', type: 'Electric', level: 5, isShiny: false },
            isPublic: false,
            description: 'Level property should be a number',
        },
        {
            input: [],
            expected: { name: 'Pikachu', type: 'Electric', level: 5, isShiny: false },
            isPublic: false,
            description: 'IsShiny property should be a boolean',
        },
        {
            input: [],
            expected: { name: 'Pikachu', type: 'Electric', level: 5, isShiny: false },
            isPublic: false,
            description: 'Object structure should be consistent',
        },
        {
            input: [],
            expected: { name: 'Pikachu', type: 'Electric', level: 5, isShiny: false },
            isPublic: false,
            description: 'All values should match specification exactly',
        },
        {
            input: [],
            expected: { name: 'Pikachu', type: 'Electric', level: 5, isShiny: false },
            isPublic: false,
            description: 'Function should work without parameters',
        },
    ],
    options: {
        type: 'JSON',
    },
};
