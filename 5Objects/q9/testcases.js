const typeChart = require('../typeChart');

module.exports = {
    testcases: [
        // Public test cases (first 3)
        {
            input: [
                [
                    { name: 'Flamethrower', type: 'fire' },
                    { name: 'Water Gun', type: 'water' },
                    { name: 'Mega Punch', type: 'fighting' },
                    { name: 'Thunderbolt', type: 'electric' },
                    { name: 'Tackle', type: 'normal' },
                ],
                { name: 'Ogerpon', type: ['grass', 'rock'], level: 40 },
                typeChart,
            ],
            expected: { name: 'Mega Punch', type: 'fighting' },
            isPublic: true,
            description: 'Fighting is most effective (4x) against Grass/Rock among 5 moves',
        },
        {
            input: [
                [
                    { name: 'Flamethrower', type: 'fire' },
                    { name: 'Water Gun', type: 'water' },
                ],
                { name: 'Bulbasaur', type: ['grass'], level: 10 },
                typeChart,
            ],
            expected: { name: 'Flamethrower', type: 'fire' },
            isPublic: true,
            description: 'Fire is most effective (2x) against Grass with 2 moves',
        },
        {
            input: [
                [
                    { name: 'Flamethrower', type: 'fire' },
                    { name: 'Mega Punch', type: 'fighting' },
                    { name: 'Vine Whip', type: 'grass' },
                ],
                { name: 'Pidgey', type: ['flying'], level: 5 },
                typeChart,
            ],
            expected: { name: 'Flamethrower', type: 'fire' },
            isPublic: true,
            description: 'Fire is most effective (1x) among the options',
        },
        // Private test cases
        {
            input: [
                [
                    { name: 'Thunderbolt', type: 'electric' },
                    { name: 'Ice Beam', type: 'ice' },
                    { name: 'Rock Slide', type: 'rock' },
                    { name: 'Dragon Claw', type: 'dragon' },
                ],
                { name: 'Charizard', type: ['fire', 'flying'], level: 36 },
                typeChart,
            ],
            expected: { name: 'Rock Slide', type: 'rock' },
            isPublic: false,
            description: 'Rock is 4x effective against Fire/Flying among 4 moves',
        },
        {
            input: [
                [{ name: 'Water Gun', type: 'water' }],
                { name: 'Rhyhorn', type: ['ground', 'rock'], level: 28 },
                typeChart,
            ],
            expected: { name: 'Water Gun', type: 'water' },
            isPublic: false,
            description: 'Water is the only move available',
        },
        {
            input: [
                [
                    { name: 'Surf', type: 'water' },
                    { name: 'Psychic', type: 'psychic' },
                    { name: 'Shadow Ball', type: 'ghost' },
                    { name: 'Thunderbolt', type: 'electric' },
                    { name: 'Ice Beam', type: 'ice' },
                    { name: 'Flamethrower', type: 'fire' },
                ],
                { name: 'Alakazam', type: ['psychic'], level: 45 },
                typeChart,
            ],
            expected: { name: 'Shadow Ball', type: 'ghost' },
            isPublic: false,
            description: 'Ghost is 2x effective against Psychic among 6 moves',
        },
        {
            input: [
                [
                    { name: 'Ice Beam', type: 'ice' },
                    { name: 'Dragon Claw', type: 'dragon' },
                    { name: 'Flamethrower', type: 'fire' },
                    { name: 'Thunderbolt', type: 'electric' },
                ],
                { name: 'Dragonite', type: ['dragon', 'flying'], level: 50 },
                typeChart,
            ],
            expected: { name: 'Ice Beam', type: 'ice' },
            isPublic: false,
            description: 'Ice is 4x effective against Dragon/Flying among 4 moves',
        },
        {
            input: [
                [{ name: 'Tackle', type: 'normal' }],
                { name: 'Pikachu', type: ['electric'], level: 25 },
                typeChart,
            ],
            expected: { name: 'Tackle', type: 'normal' },
            isPublic: false,
            description: 'Normal is the only move available',
        },
        {
            input: [
                [
                    { name: 'Bug Buzz', type: 'bug' },
                    { name: 'Dark Pulse', type: 'dark' },
                    { name: 'Fighting Spirit', type: 'fighting' },
                    { name: 'Fire Punch', type: 'fire' },
                    { name: 'Ice Beam', type: 'ice' },
                ],
                { name: 'Meowscarada', type: ['grass', 'dark'], level: 36 },
                typeChart,
            ],
            expected: { name: 'Bug Buzz', type: 'bug' },
            isPublic: false,
            description: 'Bug is 4x effective against Grass/Dark among 5 moves',
        },
        {
            input: [
                [
                    { name: 'Focus Blast', type: 'fighting' },
                    { name: 'Dragon Pulse', type: 'dragon' },
                    { name: 'Steel Wing', type: 'steel' },
                    { name: 'Ice Beam', type: 'ice' },
                    { name: 'Flamethrower', type: 'fire' },
                    { name: 'Bug Buzz', type: 'bug' },
                ],
                { name: 'Hydreigon', type: ['dark', 'dragon'], level: 60 },
                typeChart,
            ],
            expected: { name: 'Focus Blast', type: 'fighting' },
            isPublic: false,
            description: 'Fighting is 2x effective against Dark among 6 moves',
        },
        {
            input: [
                [
                    { name: 'Earthquake', type: 'ground' },
                    { name: 'Rock Slide', type: 'rock' },
                ],
                { name: 'Steelix', type: ['steel', 'ground'], level: 42 },
                typeChart,
            ],
            expected: { name: 'Earthquake', type: 'ground' },
            isPublic: false,
            description: 'Earthquake is most effective (2x) with 2 moves',
        },
        {
            input: [
                [
                    { name: 'Thunder Punch', type: 'electric' },
                    { name: 'Fire Punch', type: 'fire' },
                    { name: 'Ice Punch', type: 'ice' },
                    { name: 'Tackle', type: 'normal' },
                ],
                { name: 'Gyarados', type: ['water', 'flying'], level: 30 },
                typeChart,
            ],
            expected: { name: 'Thunder Punch', type: 'electric' },
            isPublic: false,
            description: 'Electric is 4x effective against Water/Flying among 4 moves',
        },
        {
            input: [
                [
                    { name: 'Psychic', type: 'psychic' },
                    { name: 'Shadow Ball', type: 'ghost' },
                ],
                { name: 'Machamp', type: ['fighting'], level: 40 },
                typeChart,
            ],
            expected: { name: 'Psychic', type: 'psychic' },
            isPublic: false,
            description: 'Psychic is 2x effective against Fighting with 2 moves',
        },
        {
            input: [
                [
                    { name: 'Flamethrower', type: 'fire' },
                    { name: 'Bug Bite', type: 'bug' },
                    { name: 'Poison Jab', type: 'poison' },
                    { name: 'Water Gun', type: 'water' },
                    { name: 'Tackle', type: 'normal' },
                ],
                { name: 'Scizor', type: ['bug', 'steel'], level: 50 },
                typeChart,
            ],
            expected: { name: 'Flamethrower', type: 'fire' },
            isPublic: false,
            description: 'Fire is 4x effective against Bug/Steel among 5 moves',
        },
        {
            input: [
                [
                    { name: 'Surf', type: 'water' },
                    { name: 'Energy Ball', type: 'grass' },
                    { name: 'Ice Beam', type: 'ice' },
                ],
                { name: 'Garchomp', type: ['dragon', 'ground'], level: 55 },
                typeChart,
            ],
            expected: { name: 'Ice Beam', type: 'ice' },
            isPublic: false,
            description: 'Ice is 2x effective against Dragon/Ground',
        },
        {
            input: [
                [
                    { name: 'Air Slash', type: 'flying' },
                    { name: 'Steel Wing', type: 'steel' },
                    { name: 'Brave Bird', type: 'flying' },
                    { name: 'Dragon Claw', type: 'dragon' },
                    { name: 'Thunderbolt', type: 'electric' },
                    { name: 'Ice Beam', type: 'ice' },
                ],
                { name: 'Tyranitar', type: ['rock', 'dark'], level: 55 },
                typeChart,
            ],
            expected: { name: 'Steel Wing', type: 'steel' },
            isPublic: false,
            description: 'Steel is 2x effective against Rock/Dark among 6 moves',
        },
        {
            input: [
                [
                    { name: 'Knock Off', type: 'dark' },
                    { name: 'Flamethrower', type: 'fire' },
                    { name: 'Ice Beam', type: 'ice' },
                ],
                { name: 'Gengar', type: ['ghost', 'poison'], level: 38 },
                typeChart,
            ],
            expected: { name: 'Knock Off', type: 'dark' },
            isPublic: false,
            description: 'Dark is 2x effective against Ghost/Poison',
        },
        {
            input: [
                [
                    { name: 'Ice Beam', type: 'ice' },
                    { name: 'Crunch', type: 'dark' },
                    { name: 'Flamethrower', type: 'fire' },
                    { name: 'Thunderbolt', type: 'electric' },
                ],
                { name: 'Salamence', type: ['dragon', 'flying'], level: 55 },
                typeChart,
            ],
            expected: { name: 'Ice Beam', type: 'ice' },
            isPublic: false,
            description: 'Ice is 4x effective against Dragon/Flying among 4 moves',
        },
        {
            input: [
                [
                    { name: 'Earthquake', type: 'ground' },
                    { name: 'Stone Edge', type: 'rock' },
                    { name: 'Megahorn', type: 'bug' },
                ],
                { name: 'Lucario', type: ['fighting', 'steel'], level: 40 },
                typeChart,
            ],
            expected: { name: 'Earthquake', type: 'ground' },
            isPublic: false,
            description: 'Ground is most effective (1x) among the options',
        },
        {
            input: [
                [
                    { name: 'Hyper Beam', type: 'normal' },
                    { name: 'Thunderbolt', type: 'electric' },
                    { name: 'Flamethrower', type: 'fire' },
                ],
                { name: 'Swampert', type: ['water', 'ground'], level: 36 },
                typeChart,
            ],
            expected: { name: 'Hyper Beam', type: 'normal' },
            isPublic: false,
            description: 'Normal is the only neutral move (1x) among the options',
        },
    ],
    options: {
        type: 'JSON',
    },
};
