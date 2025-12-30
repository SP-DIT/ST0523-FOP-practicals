function createPokemonObject(name, type, level, isShiny) {
    // your code here
}

module.exports = createPokemonObject;

// examples

console.log(createPokemonObject('Charmander', 'Fire', 58, false)); // { name: 'Charmander', type: 'Fire', level: 58, isShiny: false }
console.log(createPokemonObject('Bulbasaur', 'Grass/Poison', 10, true)); // { name: 'Bulbasaur', type: 'Grass/Poison', level: 10, isShiny: true }
console.log(createPokemonObject('Gyarados', 'Water/Flying', 20, false)); // { name: 'Gyarados', type: 'Water/Flying', level: 20, isShiny: false }
