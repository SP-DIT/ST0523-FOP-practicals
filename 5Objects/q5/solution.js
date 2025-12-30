function describePokemon(pokemon) {
    let shinyText = '';
    if (pokemon.isShiny === true) {
        shinyText = 'shiny ';
    }

    let typeString = '';
    if (pokemon.type.length === 1) {
        typeString = pokemon.type[0];
    } else {
        typeString = pokemon.type[0] + '/' + pokemon.type[1];
    }

    return (
        'The pokemon is a ' +
        shinyText +
        pokemon.name +
        '. It is a ' +
        typeString +
        ' type pokemon at level ' +
        pokemon.level +
        '.'
    );
}

module.exports = describePokemon;

// examples

console.log(describePokemon({ name: 'Pikachu', type: ['Electric'], level: 5, isShiny: false })); // The pokemon is a Pikachu. It is a Electric type pokemon at level 5.
console.log(describePokemon({ name: 'Bulbasaur', type: ['Grass', 'Poison'], level: 10, isShiny: true })); // The pokemon is a shiny Bulbasaur. It is a Grass/Poison type pokemon at level 10.
console.log(describePokemon({ name: 'Gyarados', type: ['Water', 'Flying'], level: 20, isShiny: false })); // The pokemon is a Gyarados. It is a Water/Flying type pokemon at level 20.
