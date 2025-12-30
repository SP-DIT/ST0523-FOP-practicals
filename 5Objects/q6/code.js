function getTypeEffectiveness(attackingType, defendingType, typeChart) {
    // your code here
}

module.exports = getTypeEffectiveness;

// examples

const condensedTypeChart = {
    fire: { fire: 0.5, grass: 2, water: 0.5, electric: 1 },
    water: { fire: 2, grass: 0.5, water: 0.5, electric: 1 },
    grass: { water: 2, grass: 0.5, fire: 0.5, electric: 1 },
    electric: { water: 2, grass: 0.5, fire: 1, electric: 0.5 },
};

console.log(getTypeEffectiveness('fire', 'grass', condensedTypeChart)); // 2
console.log(getTypeEffectiveness('fire', 'water', condensedTypeChart)); // 0.5
console.log(getTypeEffectiveness('electric', 'fire', condensedTypeChart)); // 1
