module.exports = {
    testcases: [
        // Public test cases (first 3)
        {
            input: [{ name: 'Pikachu', type: ['Electric'], level: 5, isShiny: false }],
            expected: 'The pokemon is a Pikachu. It is a Electric type pokemon at level 5.',
            isPublic: true,
            description: 'Should describe non-shiny Pikachu correctly',
        },
        {
            input: [{ name: 'Bulbasaur', type: ['Grass', 'Poison'], level: 10, isShiny: true }],
            expected: 'The pokemon is a shiny Bulbasaur. It is a Grass/Poison type pokemon at level 10.',
            isPublic: true,
            description: 'Should describe shiny dual-type Bulbasaur correctly',
        },
        {
            input: [{ name: 'Gyarados', type: ['Water', 'Flying'], level: 20, isShiny: false }],
            expected: 'The pokemon is a Gyarados. It is a Water/Flying type pokemon at level 20.',
            isPublic: true,
            description: 'Should describe non-shiny dual-type Gyarados correctly',
        },
        // Hidden test cases
        {
            input: [{ name: 'Charizard', type: ['Fire', 'Flying'], level: 36, isShiny: true }],
            expected: 'The pokemon is a shiny Charizard. It is a Fire/Flying type pokemon at level 36.',
            isPublic: false,
            description: 'Should describe shiny dual-type Charizard correctly',
        },
        {
            input: [{ name: 'Eevee', type: ['Normal'], level: 1, isShiny: false }],
            expected: 'The pokemon is a Eevee. It is a Normal type pokemon at level 1.',
            isPublic: false,
            description: 'Should describe non-shiny single-type Eevee correctly',
        },
        {
            input: [{ name: 'Mewtwo', type: ['Psychic'], level: 100, isShiny: false }],
            expected: 'The pokemon is a Mewtwo. It is a Psychic type pokemon at level 100.',
            isPublic: false,
            description: 'Should describe level 100 Mewtwo correctly',
        },
        {
            input: [{ name: 'Snorlax', type: ['Normal'], level: 50, isShiny: true }],
            expected: 'The pokemon is a shiny Snorlax. It is a Normal type pokemon at level 50.',
            isPublic: false,
            description: 'Should describe shiny single-type Snorlax correctly',
        },
        {
            input: [{ name: 'Alakazam', type: ['Psychic'], level: 75, isShiny: false }],
            expected: 'The pokemon is a Alakazam. It is a Psychic type pokemon at level 75.',
            isPublic: false,
            description: 'Should describe non-shiny Alakazam correctly',
        },
        {
            input: [{ name: 'Dragonite', type: ['Dragon', 'Flying'], level: 55, isShiny: true }],
            expected: 'The pokemon is a shiny Dragonite. It is a Dragon/Flying type pokemon at level 55.',
            isPublic: false,
            description: 'Should describe shiny dual-type Dragonite correctly',
        },
        {
            input: [{ name: 'Magikarp', type: ['Water'], level: 5, isShiny: false }],
            expected: 'The pokemon is a Magikarp. It is a Water type pokemon at level 5.',
            isPublic: false,
            description: 'Should describe non-shiny Magikarp correctly',
        },
        {
            input: [{ name: 'Geodude', type: ['Rock', 'Ground'], level: 14, isShiny: false }],
            expected: 'The pokemon is a Geodude. It is a Rock/Ground type pokemon at level 14.',
            isPublic: false,
            description: 'Should describe non-shiny dual-type Geodude correctly',
        },
        {
            input: [{ name: 'Psyduck', type: ['Water'], level: 16, isShiny: true }],
            expected: 'The pokemon is a shiny Psyduck. It is a Water type pokemon at level 16.',
            isPublic: false,
            description: 'Should describe shiny single-type Psyduck correctly',
        },
        {
            input: [{ name: 'Machamp', type: ['Fighting'], level: 40, isShiny: false }],
            expected: 'The pokemon is a Machamp. It is a Fighting type pokemon at level 40.',
            isPublic: false,
            description: 'Should describe non-shiny Fighting type Machamp correctly',
        },
        {
            input: [{ name: 'Gengar', type: ['Ghost', 'Poison'], level: 25, isShiny: true }],
            expected: 'The pokemon is a shiny Gengar. It is a Ghost/Poison type pokemon at level 25.',
            isPublic: false,
            description: 'Should describe shiny dual-type Gengar correctly',
        },
        {
            input: [{ name: 'Onix', type: ['Rock', 'Ground'], level: 30, isShiny: true }],
            expected: 'The pokemon is a shiny Onix. It is a Rock/Ground type pokemon at level 30.',
            isPublic: false,
            description: 'Should describe shiny dual-type Onix correctly',
        },
        {
            input: [{ name: 'Lapras', type: ['Water', 'Ice'], level: 30, isShiny: true }],
            expected: 'The pokemon is a shiny Lapras. It is a Water/Ice type pokemon at level 30.',
            isPublic: false,
            description: 'Should describe shiny dual-type Lapras correctly',
        },
        {
            input: [{ name: 'Ditto', type: ['Normal'], level: 48, isShiny: false }],
            expected: 'The pokemon is a Ditto. It is a Normal type pokemon at level 48.',
            isPublic: false,
            description: 'Should describe non-shiny Ditto correctly',
        },
        {
            input: [{ name: 'Venusaur', type: ['Grass', 'Poison'], level: 32, isShiny: true }],
            expected: 'The pokemon is a shiny Venusaur. It is a Grass/Poison type pokemon at level 32.',
            isPublic: false,
            description: 'Should describe shiny dual-type Venusaur correctly',
        },
        {
            input: [{ name: 'Blastoise', type: ['Water'], level: 36, isShiny: false }],
            expected: 'The pokemon is a Blastoise. It is a Water type pokemon at level 36.',
            isPublic: false,
            description: 'Should describe non-shiny Blastoise correctly',
        },
        {
            input: [{ name: 'Crobat', type: ['Poison', 'Flying'], level: 42, isShiny: true }],
            expected: 'The pokemon is a shiny Crobat. It is a Poison/Flying type pokemon at level 42.',
            isPublic: false,
            description: 'Should describe shiny dual-type Crobat correctly',
        },
    ],
};
