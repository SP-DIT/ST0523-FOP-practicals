const typeChart = require('../typeChart');

function getOverallTypeEffectiveness(attackingType, defendingTypes, typeChart) {
    // your code here
}

function evaluateMoveEffectiveness(move, defender, typeChart) {
    // your code here
}

module.exports = evaluateMoveEffectiveness;

// examples

console.log(
    evaluateMoveEffectiveness(
        { name: 'Flamethrower', type: 'fire' },
        { name: 'Bulbasaur', type: ['grass'], level: 10 },
        typeChart,
    ),
); // "It's super effective!" Fire is 2x against Grass

console.log(
    evaluateMoveEffectiveness(
        { name: 'Water Gun', type: 'water' },
        { name: 'Bulbasaur', type: ['grass'], level: 10 },
        typeChart,
    ),
); // "It's not very effective..." Water is 0.5x against Grass

console.log(
    evaluateMoveEffectiveness(
        { name: 'Tackle', type: 'normal' },
        { name: 'Pidgey', type: ['flying'], level: 5 },
        typeChart,
    ),
); // "Normal" Normal is 1x against Flying

console.log(
    evaluateMoveEffectiveness(
        { name: 'Flamethrower', type: 'fire' },
        { name: 'Ogerpon', type: ['grass', 'rock'], level: 40 },
        typeChart,
    ),
); // "It's not very effective..." Fire is 0.5x against Grass and 0.5x against Rock, so 0.5 * 0.5 = 0.25
