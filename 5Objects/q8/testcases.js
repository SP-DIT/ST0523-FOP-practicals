const typeChart = require('../typeChart');

module.exports = {
    testcases: [
        // Public test cases (first 3)
        {
            input: [
                { name: 'Flamethrower', type: 'fire' },
                { name: 'Bulbasaur', type: ['grass'], level: 10 },
                typeChart,
            ],
            expected: "It's super effective!",
            isPublic: true,
            description: 'Fire move against Grass defender should be super effective',
        },
        {
            input: [{ name: 'Water Gun', type: 'water' }, { name: 'Bulbasaur', type: ['grass'], level: 10 }, typeChart],
            expected: "It's not very effective...",
            isPublic: true,
            description: 'Water move against Grass defender should be not very effective',
        },
        {
            input: [{ name: 'Tackle', type: 'normal' }, { name: 'Pidgey', type: ['flying'], level: 5 }, typeChart],
            expected: 'Normal',
            isPublic: true,
            description: 'Normal move against Flying defender should be neutral',
        },
        // Private test cases
        {
            input: [
                { name: 'Flamethrower', type: 'fire' },
                { name: 'Ogerpon', type: ['grass', 'rock'], level: 40 },
                typeChart,
            ],
            expected: 'Normal',
            isPublic: false,
            description: 'Fire against Grass/Rock dual-type (2x * 0.5x = 1x)',
        },
        {
            input: [
                { name: 'Thunderbolt', type: 'electric' },
                { name: 'Magnezone', type: ['electric', 'steel'], level: 30 },
                typeChart,
            ],
            expected: "It's not very effective...",
            isPublic: false,
            description: 'Electric against Electric/Steel dual-type (0.5x * 1x = 0.5x)',
        },
        {
            input: [
                { name: 'Ice Beam', type: 'ice' },
                { name: 'Dragonite', type: ['dragon', 'flying'], level: 50 },
                typeChart,
            ],
            expected: "It's super effective!",
            isPublic: false,
            description: 'Ice against Dragon/Flying dual-type (2x * 2x = 4x)',
        },
        {
            input: [
                { name: 'Earthquake', type: 'ground' },
                { name: 'Pikachu', type: ['electric'], level: 25 },
                typeChart,
            ],
            expected: "It's super effective!",
            isPublic: false,
            description: 'Ground move against Electric defender should be super effective (2x)',
        },
        {
            input: [
                { name: 'Shadow Ball', type: 'ghost' },
                { name: 'Spiritomb', type: ['ghost', 'dark'], level: 45 },
                typeChart,
            ],
            expected: 'Normal',
            isPublic: false,
            description: 'Ghost against Ghost/Dark dual-type (2x * 0.5x = 1x)',
        },
        {
            input: [
                { name: 'Karate Chop', type: 'fighting' },
                { name: 'Gengar', type: ['ghost', 'poison'], level: 35 },
                typeChart,
            ],
            expected: "It's not very effective...",
            isPublic: false,
            description: 'Fighting against Ghost/Poison dual-type (0x * 0.5x = 0x)',
        },
        {
            input: [
                { name: 'Dragon Claw', type: 'dragon' },
                { name: 'Dialga', type: ['steel', 'dragon'], level: 55 },
                typeChart,
            ],
            expected: 'Normal',
            isPublic: false,
            description: 'Dragon against Steel/Dragon dual-type (0.5x * 2x = 1x)',
        },
        {
            input: [
                { name: 'Psychic', type: 'psychic' },
                { name: 'Machamp', type: ['fighting'], level: 40 },
                typeChart,
            ],
            expected: "It's super effective!",
            isPublic: false,
            description: 'Psychic move against Fighting defender (2x)',
        },
        {
            input: [
                { name: 'Rock Slide', type: 'rock' },
                { name: 'Poliwrath', type: ['water', 'fighting'], level: 36 },
                typeChart,
            ],
            expected: "It's not very effective...",
            isPublic: false,
            description: 'Rock against Water/Fighting dual-type (1x * 0.5x = 0.5x)',
        },
        {
            input: [
                { name: 'Poison Jab', type: 'poison' },
                { name: 'Steelix', type: ['steel', 'ground'], level: 42 },
                typeChart,
            ],
            expected: "It's not very effective...",
            isPublic: false,
            description: 'Poison against Steel/Ground dual-type (0x * 0.5x = 0x)',
        },
        {
            input: [
                { name: 'Dark Pulse', type: 'dark' },
                { name: 'Hydreigon', type: ['dark', 'dragon'], level: 60 },
                typeChart,
            ],
            expected: "It's not very effective...",
            isPublic: false,
            description: 'Dark against Dark/Dragon (0.5x * 1x = 0.5x)',
        },
        {
            input: [
                { name: 'Steel Wing', type: 'steel' },
                { name: 'Aggron', type: ['steel', 'rock'], level: 55 },
                typeChart,
            ],
            expected: 'Normal',
            isPublic: false,
            description: 'Steel against Steel/Rock dual-type (0.5x * 2x = 1x)',
        },
        {
            input: [
                { name: 'Bug Buzz', type: 'bug' },
                { name: 'Sableye', type: ['dark', 'ghost'], level: 36 },
                typeChart,
            ],
            expected: 'Normal',
            isPublic: false,
            description: 'Bug against Dark/Ghost dual-type (2x * 0.5x = 1x)',
        },
        {
            input: [
                { name: 'Flare Blitz', type: 'fire' },
                { name: 'Scizor', type: ['bug', 'steel'], level: 50 },
                typeChart,
            ],
            expected: "It's super effective!",
            isPublic: false,
            description: 'Fire against Bug/Steel (2x * 2x = 4x)',
        },
        {
            input: [
                { name: 'Surf', type: 'water' },
                { name: 'Rhyhorn', type: ['ground', 'rock'], level: 28 },
                typeChart,
            ],
            expected: "It's super effective!",
            isPublic: false,
            description: 'Water against Ground/Rock dual-type (2x * 2x = 4x)',
        },
        {
            input: [
                { name: 'Dark Pulse', type: 'dark' },
                { name: 'Gengar', type: ['ghost', 'poison'], level: 38 },
                typeChart,
            ],
            expected: "It's super effective!",
            isPublic: false,
            description: 'Dark against Ghost/Poison dual-type (2x * 1x = 2x)',
        },
        {
            input: [
                { name: 'Quick Attack', type: 'normal' },
                { name: 'Lucario', type: ['fighting', 'steel'], level: 40 },
                typeChart,
            ],
            expected: "It's not very effective...",
            isPublic: false,
            description: 'Normal against Fighting/Steel dual-type (1x * 0.5x = 0.5x)',
        },
    ],
};
