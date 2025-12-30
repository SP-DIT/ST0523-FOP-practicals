module.exports = {
    testcases: [
        // Public test cases (first 3)
        {
            input: ['Pidgey', 'Normal', 'Flying', 15, false],
            expected: { name: 'Pidgey', type: ['Normal', 'Flying'], level: 15, isShiny: false },
            isPublic: true,
            description: 'Should create dual-type Pidgey object with array types',
        },
        {
            input: ['Onix', 'Rock', null, 30, true],
            expected: { name: 'Onix', type: ['Rock'], level: 30, isShiny: true },
            isPublic: true,
            description: 'Should create single-type Onix when type2 is null',
        },
        {
            input: ['Eevee', 'Normal', null, 5, false],
            expected: { name: 'Eevee', type: ['Normal'], level: 5, isShiny: false },
            isPublic: true,
            description: 'Should create single-type Eevee when type2 is null',
        },
        // Hidden test cases
        {
            input: ['Charizard', 'Fire', 'Flying', 36, true],
            expected: { name: 'Charizard', type: ['Fire', 'Flying'], level: 36, isShiny: true },
            isPublic: false,
            description: 'Should create dual-type Charizard',
        },
        {
            input: ['Pikachu', 'Electric', null, 25, false],
            expected: { name: 'Pikachu', type: ['Electric'], level: 25, isShiny: false },
            isPublic: false,
            description: 'Should create single-type Pikachu',
        },
        {
            input: ['Gyarados', 'Water', 'Flying', 20, false],
            expected: { name: 'Gyarados', type: ['Water', 'Flying'], level: 20, isShiny: false },
            isPublic: false,
            description: 'Should create dual-type Gyarados',
        },
        {
            input: ['Snorlax', 'Normal', null, 50, true],
            expected: { name: 'Snorlax', type: ['Normal'], level: 50, isShiny: true },
            isPublic: false,
            description: 'Should create single-type shiny Snorlax',
        },
        {
            input: ['Gengar', 'Ghost', 'Poison', 25, true],
            expected: { name: 'Gengar', type: ['Ghost', 'Poison'], level: 25, isShiny: true },
            isPublic: false,
            description: 'Should create dual-type shiny Gengar',
        },
        {
            input: ['Alakazam', 'Psychic', null, 75, false],
            expected: { name: 'Alakazam', type: ['Psychic'], level: 75, isShiny: false },
            isPublic: false,
            description: 'Should create single-type Alakazam',
        },
        {
            input: ['Dragonite', 'Dragon', 'Flying', 55, true],
            expected: { name: 'Dragonite', type: ['Dragon', 'Flying'], level: 55, isShiny: true },
            isPublic: false,
            description: 'Should create dual-type shiny Dragonite',
        },
        {
            input: ['Magikarp', 'Water', null, 5, false],
            expected: { name: 'Magikarp', type: ['Water'], level: 5, isShiny: false },
            isPublic: false,
            description: 'Should create single-type Magikarp',
        },
        {
            input: ['Geodude', 'Rock', 'Ground', 14, false],
            expected: { name: 'Geodude', type: ['Rock', 'Ground'], level: 14, isShiny: false },
            isPublic: false,
            description: 'Should create dual-type Geodude',
        },
        {
            input: ['Psyduck', 'Water', null, 16, true],
            expected: { name: 'Psyduck', type: ['Water'], level: 16, isShiny: true },
            isPublic: false,
            description: 'Should create single-type shiny Psyduck',
        },
        {
            input: ['Machamp', 'Fighting', null, 40, false],
            expected: { name: 'Machamp', type: ['Fighting'], level: 40, isShiny: false },
            isPublic: false,
            description: 'Should create single-type Machamp',
        },
        {
            input: ['Lapras', 'Water', 'Ice', 30, true],
            expected: { name: 'Lapras', type: ['Water', 'Ice'], level: 30, isShiny: true },
            isPublic: false,
            description: 'Should create dual-type shiny Lapras',
        },
        {
            input: ['Ditto', 'Normal', null, 48, false],
            expected: { name: 'Ditto', type: ['Normal'], level: 48, isShiny: false },
            isPublic: false,
            description: 'Should create single-type Ditto',
        },
        {
            input: ['Venusaur', 'Grass', 'Poison', 32, true],
            expected: { name: 'Venusaur', type: ['Grass', 'Poison'], level: 32, isShiny: true },
            isPublic: false,
            description: 'Should create dual-type shiny Venusaur',
        },
        {
            input: ['Blastoise', 'Water', null, 36, false],
            expected: { name: 'Blastoise', type: ['Water'], level: 36, isShiny: false },
            isPublic: false,
            description: 'Should create single-type Blastoise',
        },
        {
            input: ['Crobat', 'Poison', 'Flying', 42, true],
            expected: { name: 'Crobat', type: ['Poison', 'Flying'], level: 42, isShiny: true },
            isPublic: false,
            description: 'Should create dual-type shiny Crobat',
        },
        {
            input: ['Mewtwo', 'Psychic', null, 100, false],
            expected: { name: 'Mewtwo', type: ['Psychic'], level: 100, isShiny: false },
            isPublic: false,
            description: 'Should create single-type legendary Mewtwo',
        },
    ],
    options: {
        type: 'JSON',
    },
};
