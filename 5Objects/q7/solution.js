const typeChart = require('../typeChart');

function getOverallTypeEffectiveness(attackingType, defendingTypes, typeChart) {
    let multiplier = 1;
    for (let i = 0; i < defendingTypes.length; i++) {
        let effectiveness = typeChart[attackingType][defendingTypes[i]];
        multiplier = multiplier * effectiveness;
    }
    return multiplier;
}

module.exports = getOverallTypeEffectiveness;

// examples

console.log(getOverallTypeEffectiveness('electric', ['water', 'flying'], typeChart)); // 4. Electric is 2x against Water and 2x against Flying, so 2 * 2 = 4
console.log(getOverallTypeEffectiveness('fire', ['grass', 'rock'], typeChart)); // 1. Rock is 0.5x against Fire and Grass is 2x against Fire, so 0.5 * 2 = 1
console.log(getOverallTypeEffectiveness('fighting', ['normal', 'ghost'], typeChart)); // 0. Fighting is 2x against Normal and 0x against Ghost, so 2 * 0 = 0
