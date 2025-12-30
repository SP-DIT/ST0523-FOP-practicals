function describePokemon(pokemon) {
    // your code here
}

module.exports = describePokemon;

// examples

console.log(describePokemon({ name: 'Pikachu', type: ['Electric'], level: 5, isShiny: false })); // The pokemon is a Pikachu. It is a Electric type pokemon at level 5.
console.log(describePokemon({ name: 'Bulbasaur', type: ['Grass', 'Poison'], level: 10, isShiny: true })); // The pokemon is a shiny Bulbasaur. It is a Grass/Poison type pokemon at level 10.
console.log(describePokemon({ name: 'Gyarados', type: ['Water', 'Flying'], level: 20, isShiny: false })); // The pokemon is a Gyarados. It is a Water/Flying type pokemon at level 20.
