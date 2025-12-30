function getPokemonInfo(pokemon) {
    return pokemon.name + ' is at level ' + pokemon.level + '.';
}

module.exports = getPokemonInfo;

// examples

console.log(getPokemonInfo({ name: 'Pikachu', type: ['Electric'], level: 5, isShiny: false })); // Pikachu is at level 5.
console.log(getPokemonInfo({ name: 'Bulbasaur', type: ['Grass', 'Poison'], level: 10, isShiny: true })); // Bulbasaur is at level 10.
console.log(getPokemonInfo({ name: 'Gyarados', type: ['Water', 'Flying'], level: 20, isShiny: false })); // Gyarados is at level 20.
