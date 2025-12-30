module.exports = {
    testcases: [
        // Public test cases (first 3)
        {
            input: [{ name: 'Pikachu', type: ['Electric'], level: 5, isShiny: false }],
            expected: 'Pikachu is at level 5.',
            isPublic: true,
            description: 'Should format Pikachu info correctly',
        },
        {
            input: [{ name: 'Bulbasaur', type: ['Grass', 'Poison'], level: 10, isShiny: true }],
            expected: 'Bulbasaur is at level 10.',
            isPublic: true,
            description: 'Should format Bulbasaur info correctly',
        },
        {
            input: [{ name: 'Gyarados', type: ['Water', 'Flying'], level: 20, isShiny: false }],
            expected: 'Gyarados is at level 20.',
            isPublic: true,
            description: 'Should format Gyarados info correctly',
        },
        // Hidden test cases
        {
            input: [{ name: 'Charizard', type: ['Fire', 'Flying'], level: 36, isShiny: true }],
            expected: 'Charizard is at level 36.',
            isPublic: false,
            description: 'Should format Charizard info correctly',
        },
        {
            input: [{ name: 'Eevee', type: ['Normal'], level: 1, isShiny: false }],
            expected: 'Eevee is at level 1.',
            isPublic: false,
            description: 'Should format level 1 Eevee correctly',
        },
        {
            input: [{ name: 'Mewtwo', type: ['Psychic'], level: 100, isShiny: false }],
            expected: 'Mewtwo is at level 100.',
            isPublic: false,
            description: 'Should format level 100 Mewtwo correctly',
        },
        {
            input: [{ name: 'Snorlax', type: ['Normal'], level: 50, isShiny: true }],
            expected: 'Snorlax is at level 50.',
            isPublic: false,
            description: 'Should format shiny Snorlax correctly',
        },
        {
            input: [{ name: 'Alakazam', type: ['Psychic'], level: 75, isShiny: false }],
            expected: 'Alakazam is at level 75.',
            isPublic: false,
            description: 'Should format Alakazam correctly',
        },
        {
            input: [{ name: 'Dragonite', type: ['Dragon', 'Flying'], level: 55, isShiny: true }],
            expected: 'Dragonite is at level 55.',
            isPublic: false,
            description: 'Should format dual-type Dragonite correctly',
        },
        {
            input: [{ name: 'Magikarp', type: ['Water'], level: 5, isShiny: false }],
            expected: 'Magikarp is at level 5.',
            isPublic: false,
            description: 'Should format low-level Magikarp correctly',
        },
        {
            input: [{ name: 'Geodude', type: ['Rock', 'Ground'], level: 14, isShiny: false }],
            expected: 'Geodude is at level 14.',
            isPublic: false,
            description: 'Should format dual-type Geodude correctly',
        },
        {
            input: [{ name: 'Psyduck', type: ['Water'], level: 16, isShiny: true }],
            expected: 'Psyduck is at level 16.',
            isPublic: false,
            description: 'Should format shiny Psyduck correctly',
        },
        {
            input: [{ name: 'Machamp', type: ['Fighting'], level: 40, isShiny: false }],
            expected: 'Machamp is at level 40.',
            isPublic: false,
            description: 'Should format Fighting type Machamp correctly',
        },
        {
            input: [{ name: 'Gengar', type: ['Ghost', 'Poison'], level: 25, isShiny: true }],
            expected: 'Gengar is at level 25.',
            isPublic: false,
            description: 'Should format dual-type shiny Gengar correctly',
        },
        {
            input: [{ name: 'Onix', type: ['Rock', 'Ground'], level: 30, isShiny: true }],
            expected: 'Onix is at level 30.',
            isPublic: false,
            description: 'Should format shiny Onix correctly',
        },
        {
            input: [{ name: 'Lapras', type: ['Water', 'Ice'], level: 30, isShiny: true }],
            expected: 'Lapras is at level 30.',
            isPublic: false,
            description: 'Should format dual-type shiny Lapras correctly',
        },
        {
            input: [{ name: 'Ditto', type: ['Normal'], level: 48, isShiny: false }],
            expected: 'Ditto is at level 48.',
            isPublic: false,
            description: 'Should format Ditto correctly',
        },
        {
            input: [{ name: 'Venusaur', type: ['Grass', 'Poison'], level: 32, isShiny: true }],
            expected: 'Venusaur is at level 32.',
            isPublic: false,
            description: 'Should format dual-type shiny Venusaur correctly',
        },
        {
            input: [{ name: 'Blastoise', type: ['Water'], level: 36, isShiny: false }],
            expected: 'Blastoise is at level 36.',
            isPublic: false,
            description: 'Should format Blastoise correctly',
        },
        {
            input: [{ name: 'Crobat', type: ['Poison', 'Flying'], level: 42, isShiny: true }],
            expected: 'Crobat is at level 42.',
            isPublic: false,
            description: 'Should format dual-type shiny Crobat correctly',
        },
    ],
};
