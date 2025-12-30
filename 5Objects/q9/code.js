const typeChart = require('../typeChart');

function getOverallTypeEffectiveness(attackingType, defendingTypes, typeChart) {
    // your code here
}

function getMostEffectiveMove(moves, defender, typeChart) {
    // your code here
}

module.exports = getMostEffectiveMove;

// examples

console.log(
    getMostEffectiveMove(
        [
            { name: 'Flamethrower', type: 'fire' },
            { name: 'Water Gun', type: 'water' },
            { name: 'Mega Punch', type: 'fighting' },
        ],
        { name: 'Ogerpon', type: ['grass', 'rock'], level: 40 },
        typeChart,
    ),
); // { name: 'Mega Punch', type: 'fighting' }, Fighting is 2x against Grass and 2x against Rock, so 2 * 2 = 4

console.log(
    getMostEffectiveMove(
        [
            { name: 'Flamethrower', type: 'fire' },
            { name: 'Water Gun', type: 'water' },
            { name: 'Vine Whip', type: 'grass' },
        ],
        { name: 'Bulbasaur', type: ['grass'], level: 10 },
        typeChart,
    ),
); // { name: 'Flamethrower', type: 'fire' } Fire is 2x against Grass

console.log(
    getMostEffectiveMove(
        [
            { name: 'Flamethrower', type: 'fire' },
            { name: 'Mega Punch', type: 'fighting' },
            { name: 'Vine Whip', type: 'grass' },
        ],
        { name: 'Pidgey', type: ['flying'], level: 5 },
        typeChart,
    ),
); // { name: 'Flamethrower', type: 'fire' } Fire is 1x against Flying, Fighting is 0.5x against Flying, Grass is 0.5x against Flying
