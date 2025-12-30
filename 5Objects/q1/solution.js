function createPikachuObject() {
    return {
        name: 'Pikachu',
        type: 'Electric',
        level: 5,
        isShiny: false,
    };
}

module.exports = createPikachuObject;

// examples

console.log(createPikachuObject()); // { name: 'Pikachu', type: 'Electric', level: 5, isShiny: false }
