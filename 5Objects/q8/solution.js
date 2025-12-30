const typeChart = require('../typeChart');

function getOverallTypeEffectiveness(attackingType, defendingTypes, typeChart) {
    let multiplier = 1;
    for (let i = 0; i < defendingTypes.length; i++) {
        let effectiveness = typeChart[attackingType][defendingTypes[i]];
        multiplier = multiplier * effectiveness;
    }
    return multiplier;
}

function evaluateMoveEffectiveness(move, defender, typeChart) {
    let effectiveness = getOverallTypeEffectiveness(move.type, defender.type, typeChart);

    if (effectiveness > 1) {
        return "It's super effective!";
    } else if (effectiveness < 1) {
        return "It's not very effective...";
    } else {
        return 'Normal';
    }
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
); // "Normal" Fire is 2x against Grass and 0.5x against Rock, so 2 * 0.5 = 1
