const typeChart = require('../typeChart');

module.exports = {
    testcases: [
        // Public test cases (first 3)
        {
            input: ['electric', ['water', 'flying'], typeChart],
            expected: 4,
            isPublic: true,
            description: 'Electric vs Water/Flying: 2 * 2 = 4',
        },
        {
            input: ['fire', ['grass', 'rock'], typeChart],
            expected: 1,
            isPublic: true,
            description: 'Fire vs Grass/Rock: 2 * 0.5 = 1',
        },
        {
            input: ['fighting', ['normal', 'ghost'], typeChart],
            expected: 0,
            isPublic: true,
            description: 'Fighting vs Normal/Ghost: 2 * 0 = 0',
        },
        // Hidden test cases
        {
            input: ['water', ['fire', 'ground'], typeChart],
            expected: 4,
            isPublic: false,
            description: 'Water vs Fire/Ground: 2 * 2 = 4',
        },
        {
            input: ['grass', ['water', 'rock'], typeChart],
            expected: 4,
            isPublic: false,
            description: 'Grass vs Water/Rock: 2 * 2 = 4',
        },
        {
            input: ['fire', ['grass', 'ice'], typeChart],
            expected: 4,
            isPublic: false,
            description: 'Fire vs Grass/Ice: 2 * 2 = 4',
        },
        {
            input: ['electric', ['water'], typeChart],
            expected: 2,
            isPublic: false,
            description: 'Electric vs Water: 2 = 2',
        },
        {
            input: ['fighting', ['normal'], typeChart],
            expected: 2,
            isPublic: false,
            description: 'Fighting vs Normal: 2 = 2',
        },
        {
            input: ['water', ['grass'], typeChart],
            expected: 0.5,
            isPublic: false,
            description: 'Water vs Grass: 0.5 = 0.5',
        },
        {
            input: ['fire', ['water', 'rock'], typeChart],
            expected: 0.25,
            isPublic: false,
            description: 'Fire vs Water/Rock: 0.5 * 0.5 = 0.25',
        },
        {
            input: ['electric', ['grass', 'electric'], typeChart],
            expected: 0.25,
            isPublic: false,
            description: 'Electric vs Grass/Electric: 0.5 * 0.5 = 0.25',
        },
        {
            input: ['normal', ['rock', 'steel'], typeChart],
            expected: 0.25,
            isPublic: false,
            description: 'Normal vs Rock/Steel: 0.5 * 0.5 = 0.25',
        },
        {
            input: ['grass', ['fire', 'poison'], typeChart],
            expected: 0.25,
            isPublic: false,
            description: 'Grass vs Fire/Poison: 0.5 * 0.5 = 0.25',
        },
        {
            input: ['psychic', ['fighting'], typeChart],
            expected: 2,
            isPublic: false,
            description: 'Psychic vs Fighting: 2 = 2',
        },
        {
            input: ['ground', ['electric', 'fire'], typeChart],
            expected: 4,
            isPublic: false,
            description: 'Ground vs Electric/Fire: 2 * 2 = 4',
        },
        {
            input: ['flying', ['grass', 'fighting'], typeChart],
            expected: 4,
            isPublic: false,
            description: 'Flying vs Grass/Fighting: 2 * 2 = 4',
        },
        {
            input: ['ice', ['grass', 'dragon'], typeChart],
            expected: 4,
            isPublic: false,
            description: 'Ice vs Grass/Dragon: 2 * 2 = 4',
        },
        {
            input: ['bug', ['grass', 'psychic'], typeChart],
            expected: 4,
            isPublic: false,
            description: 'Bug vs Grass/Psychic: 2 * 2 = 4',
        },
        {
            input: ['rock', ['fire', 'flying'], typeChart],
            expected: 4,
            isPublic: false,
            description: 'Rock vs Fire/Flying: 2 * 2 = 4',
        },
        {
            input: ['steel', ['ice'], typeChart],
            expected: 2,
            isPublic: false,
            description: 'Steel vs Ice: 2 = 2',
        },
    ],
};
