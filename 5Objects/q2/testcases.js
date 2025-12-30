module.exports = {
    testcases: [
        // Public test cases (first 3)
        {
            input: ['Charmander', 'Fire', 58, false],
            expected: { name: 'Charmander', type: 'Fire', level: 58, isShiny: false },
            isPublic: true,
            description: 'Should create Charmander object correctly',
        },
        {
            input: ['Bulbasaur', 'Grass/Poison', 10, true],
            expected: { name: 'Bulbasaur', type: 'Grass/Poison', level: 10, isShiny: true },
            isPublic: true,
            description: 'Should create Bulbasaur object with dual type and shiny true',
        },
        {
            input: ['Gyarados', 'Water/Flying', 20, false],
            expected: { name: 'Gyarados', type: 'Water/Flying', level: 20, isShiny: false },
            isPublic: true,
            description: 'Should create Gyarados object with dual type and shiny false',
        },
        // Hidden test cases
        {
            input: ['Pikachu', 'Electric', 5, false],
            expected: { name: 'Pikachu', type: 'Electric', level: 5, isShiny: false },
            isPublic: false,
            description: 'Should create Pikachu object correctly',
        },
        {
            input: ['Eevee', 'Normal', 1, true],
            expected: { name: 'Eevee', type: 'Normal', level: 1, isShiny: true },
            isPublic: false,
            description: 'Should create level 1 shiny Eevee',
        },
        {
            input: ['Mewtwo', 'Psychic', 100, false],
            expected: { name: 'Mewtwo', type: 'Psychic', level: 100, isShiny: false },
            isPublic: false,
            description: 'Should create level 100 Mewtwo',
        },
        {
            input: ['Snorlax', 'Normal', 50, true],
            expected: { name: 'Snorlax', type: 'Normal', level: 50, isShiny: true },
            isPublic: false,
            description: 'Should create shiny Snorlax at level 50',
        },
        {
            input: ['Alakazam', 'Psychic', 75, false],
            expected: { name: 'Alakazam', type: 'Psychic', level: 75, isShiny: false },
            isPublic: false,
            description: 'Should create Alakazam correctly',
        },
        {
            input: ['Dragonite', 'Dragon/Flying', 99, true],
            expected: { name: 'Dragonite', type: 'Dragon/Flying', level: 99, isShiny: true },
            isPublic: false,
            description: 'Should create high-level shiny Dragonite',
        },
        {
            input: ['Magikarp', 'Water', 5, false],
            expected: { name: 'Magikarp', type: 'Water', level: 5, isShiny: false },
            isPublic: false,
            description: 'Should create low-level Magikarp',
        },
        {
            input: ['Charizard', 'Fire/Flying', 36, true],
            expected: { name: 'Charizard', type: 'Fire/Flying', level: 36, isShiny: true },
            isPublic: false,
            description: 'Should create shiny Charizard with dual type',
        },
        {
            input: ['Blastoise', 'Water', 36, false],
            expected: { name: 'Blastoise', type: 'Water', level: 36, isShiny: false },
            isPublic: false,
            description: 'Should create Blastoise correctly',
        },
        {
            input: ['Venusaur', 'Grass/Poison', 32, true],
            expected: { name: 'Venusaur', type: 'Grass/Poison', level: 32, isShiny: true },
            isPublic: false,
            description: 'Should create shiny Venusaur with dual type',
        },
        {
            input: ['Geodude', 'Rock/Ground', 12, false],
            expected: { name: 'Geodude', type: 'Rock/Ground', level: 12, isShiny: false },
            isPublic: false,
            description: 'Should create Geodude with dual type',
        },
        {
            input: ['Psyduck', 'Water', 16, true],
            expected: { name: 'Psyduck', type: 'Water', level: 16, isShiny: true },
            isPublic: false,
            description: 'Should create shiny Psyduck',
        },
        {
            input: ['Machamp', 'Fighting', 40, false],
            expected: { name: 'Machamp', type: 'Fighting', level: 40, isShiny: false },
            isPublic: false,
            description: 'Should create Fighting type Machamp',
        },
        {
            input: ['Gengar', 'Ghost/Poison', 25, true],
            expected: { name: 'Gengar', type: 'Ghost/Poison', level: 25, isShiny: true },
            isPublic: false,
            description: 'Should create shiny Gengar with dual type',
        },
        {
            input: ['Onix', 'Rock/Ground', 14, false],
            expected: { name: 'Onix', type: 'Rock/Ground', level: 14, isShiny: false },
            isPublic: false,
            description: 'Should create Onix with dual type',
        },
        {
            input: ['Lapras', 'Water/Ice', 30, true],
            expected: { name: 'Lapras', type: 'Water/Ice', level: 30, isShiny: true },
            isPublic: false,
            description: 'Should create shiny Lapras with dual type',
        },
        {
            input: ['Ditto', 'Normal', 48, false],
            expected: { name: 'Ditto', type: 'Normal', level: 48, isShiny: false },
            isPublic: false,
            description: 'Should create Normal type Ditto',
        },
    ],
    options: {
        type: 'JSON',
    },
};
