// Q1. create an object representing the pokemon "Pikachu"
// The object should have the following properties:
// - name: "Pikachu"
// - type: "Electric"
// - level: 5
// - isShiny: false

function createPikachuObject() {
    // your code here
}

console.log(createPikachuObject()); // { name: 'Pikachu', type: 'Electric', level: 5, isShiny: false }

// Q2. Let's make it more generic for any pokemon
// Create a function that takes in parameters for name, type, level, and isShiny
// and returns an object representing that pokemon.

function createPokemonObject(name, type, level, isShiny) {
    // your code here
}

console.log(createPokemonObject('Charmander', 'Fire', 58, false)); // { name: 'Charmander', type: 'Fire', level: 58, isShiny: false }
console.log(createPokemonObject('Bulbasaur', 'Grass/Poison', 10, true)); // { name: 'Bulbasaur', type: 'Grass/Poison', level: 10, isShiny: true }
console.log(createPokemonObject('Gyarados', 'Water/Flying', 20, false)); // { name: 'Gyarados', type: 'Water/Flying', level: 20, isShiny: false }

// Q3. Realize that types can be multiple (e.g., "Water/Flying").
// Create a function that takes in parameters for name, type1, type2, level, and isShiny
// type should be an array of types, but if type2 is null, it should only include type1.

function createPokemonObjectV2(name, type1, type2, level, isShiny) {
    // your code here
}

console.log(createPokemonObjectV2('Pidgey', 'Normal', 'Flying', 15, false)); // { name: 'Pidgey', type: ['Normal', 'Flying'], level: 15, isShiny: false }
console.log(createPokemonObjectV2('Onix', 'Rock', null, 30, true)); // { name: 'Onix', type: ['Rock'], level: 30, isShiny: true }
console.log(createPokemonObjectV2('Eevee', 'Normal', null, 5, false)); // { name: 'Eevee', type: ['Normal'], level: 5, isShiny: false }

// Q4. In the previous questions, the focus was on creating the object, now let's practice accessing the properties.
// Create a function that takes in a pokemon object and returns its name and level in the format: "<name> is at level <level>."
function getPokemonInfo(pokemon) {
    // your code here
}
console.log(getPokemonInfo({ name: 'Pikachu', type: ['Electric'], level: 5, isShiny: false })); // Pikachu is at level 5.
console.log(getPokemonInfo({ name: 'Bulbasaur', type: ['Grass', 'Poison'], level: 10, isShiny: true })); // Bulbasaur is at level 10.
console.log(getPokemonInfo({ name: 'Gyarados', type: ['Water', 'Flying'], level: 20, isShiny: false })); // Gyarados is at level 20.

// Q5. Combining object creation and property access
// Create a function that takes in a pokemon object and returns a string description
// in the format: "The pokemon is a [shiny] <name>. It is a <type(s)> type pokemon at level <level>."
function describePokemon(pokemon) {
    // your code here
}

console.log(describePokemon({ name: 'Pikachu', type: ['Electric'], level: 5, isShiny: false })); // The pokemon is a Pikachu. It is a Electric type pokemon at level 5.
console.log(describePokemon({ name: 'Bulbasaur', type: ['Grass', 'Poison'], level: 10, isShiny: true })); // The pokemon is a shiny Bulbasaur. It is a Grass/Poison type pokemon at level 10.
console.log(describePokemon({ name: 'Gyarados', type: ['Water', 'Flying'], level: 20, isShiny: false })); // The pokemon is a Gyarados. It is a Water/Flying type pokemon at level 20.

// Q6. You are given a condensed version of the pokemon type chart as an object.
// Create a function that takes in two types and returns the effectiveness multiplier

const condensedTypeChart = {
    Fire: { Fire: 0.5, Grass: 2, Water: 0.5, Electric: 1 },
    Water: { Fire: 2, Grass: 0.5, Water: 0.5, Electric: 1 },
    Grass: { Water: 2, Grass: 0.5, Fire: 0.5, Electric: 1 },
    Electric: { Water: 2, Grass: 0.5, Fire: 1, Electric: 0.5 },
};

function getTypeEffectiveness(attackingType, defendingType, typeChart) {
    // your code here
}
console.log(getTypeEffectiveness('Fire', 'Grass', condensedTypeChart)); // 2
console.log(getTypeEffectiveness('Fire', 'Water', condensedTypeChart)); // 0.5
console.log(getTypeEffectiveness('Electric', 'Fire', condensedTypeChart)); // 1

// Q7. As before, the defendingType can be multiple types (e.g., ['Water', 'Flying']).
// Create a function that takes in an attacking type and an array of defending types
// and returns the overall effectiveness multiplier by multiplying the effectiveness against each type.
const typeChart = {
    normal: {
        normal: 1,
        fire: 1,
        water: 1,
        electric: 1,
        grass: 1,
        ice: 1,
        fighting: 1,
        poison: 1,
        ground: 1,
        flying: 1,
        psychic: 1,
        bug: 1,
        rock: 0.5,
        ghost: 0,
        dragon: 1,
        dark: 1,
        steel: 0.5,
    },
    fire: {
        normal: 1,
        fire: 0.5,
        water: 0.5,
        electric: 1,
        grass: 2,
        ice: 2,
        fighting: 1,
        poison: 1,
        ground: 1,
        flying: 1,
        psychic: 1,
        bug: 2,
        rock: 0.5,
        ghost: 1,
        dragon: 0.5,
        dark: 1,
        steel: 2,
    },
    water: {
        normal: 1,
        fire: 2,
        water: 0.5,
        electric: 1,
        grass: 0.5,
        ice: 1,
        fighting: 1,
        poison: 1,
        ground: 2,
        flying: 1,
        psychic: 1,
        bug: 1,
        rock: 2,
        ghost: 1,
        dragon: 0.5,
        dark: 1,
        steel: 1,
    },
    electric: {
        normal: 1,
        fire: 1,
        water: 2,
        electric: 0.5,
        grass: 0.5,
        ice: 1,
        fighting: 1,
        poison: 1,
        ground: 0,
        flying: 2,
        psychic: 1,
        bug: 1,
        rock: 1,
        ghost: 1,
        dragon: 0.5,
        dark: 1,
        steel: 1,
    },
    grass: {
        normal: 1,
        fire: 0.5,
        water: 2,
        electric: 1,
        grass: 0.5,
        ice: 1,
        fighting: 1,
        poison: 0.5,
        ground: 2,
        flying: 0.5,
        psychic: 1,
        bug: 0.5,
        rock: 2,
        ghost: 1,
        dragon: 0.5,
        dark: 1,
        steel: 0.5,
    },
    ice: {
        normal: 1,
        fire: 0.5,
        water: 0.5,
        electric: 1,
        grass: 2,
        ice: 0.5,
        fighting: 1,
        poison: 1,
        ground: 2,
        flying: 2,
        psychic: 1,
        bug: 1,
        rock: 1,
        ghost: 1,
        dragon: 2,
        dark: 1,
        steel: 0.5,
    },
    fighting: {
        normal: 2,
        fire: 1,
        water: 1,
        electric: 1,
        grass: 1,
        ice: 2,
        fighting: 1,
        poison: 0.5,
        ground: 1,
        flying: 0.5,
        psychic: 0.5,
        bug: 0.5,
        rock: 2,
        ghost: 0,
        dragon: 1,
        dark: 2,
        steel: 2,
    },
    poison: {
        normal: 1,
        fire: 1,
        water: 1,
        electric: 1,
        grass: 2,
        ice: 1,
        fighting: 1,
        poison: 0.5,
        ground: 0.5,
        flying: 1,
        psychic: 1,
        bug: 1,
        rock: 0.5,
        ghost: 0.5,
        dragon: 1,
        dark: 1,
        steel: 0,
    },
    ground: {
        normal: 1,
        fire: 2,
        water: 1,
        electric: 2,
        grass: 0.5,
        ice: 1,
        fighting: 1,
        poison: 2,
        ground: 1,
        flying: 0,
        psychic: 1,
        bug: 0.5,
        rock: 2,
        ghost: 1,
        dragon: 1,
        dark: 1,
        steel: 2,
    },
    flying: {
        normal: 1,
        fire: 1,
        water: 1,
        electric: 0.5,
        grass: 2,
        ice: 1,
        fighting: 2,
        poison: 1,
        ground: 1,
        flying: 1,
        psychic: 1,
        bug: 2,
        rock: 0.5,
        ghost: 1,
        dragon: 1,
        dark: 1,
        steel: 0.5,
    },
    psychic: {
        normal: 1,
        fire: 1,
        water: 1,
        electric: 1,
        grass: 1,
        ice: 1,
        fighting: 2,
        poison: 2,
        ground: 1,
        flying: 1,
        psychic: 0.5,
        bug: 1,
        rock: 1,
        ghost: 1,
        dragon: 1,
        dark: 0,
        steel: 0.5,
    },
    bug: {
        normal: 1,
        fire: 0.5,
        water: 1,
        electric: 1,
        grass: 2,
        ice: 1,
        fighting: 0.5,
        poison: 0.5,
        ground: 1,
        flying: 0.5,
        psychic: 2,
        bug: 1,
        rock: 1,
        ghost: 0.5,
        dragon: 1,
        dark: 2,
        steel: 0.5,
    },
    rock: {
        normal: 1,
        fire: 2,
        water: 1,
        electric: 1,
        grass: 1,
        ice: 2,
        fighting: 0.5,
        poison: 1,
        ground: 0.5,
        flying: 2,
        psychic: 1,
        bug: 2,
        rock: 1,
        ghost: 1,
        dragon: 1,
        dark: 1,
        steel: 0.5,
    },
    ghost: {
        normal: 0,
        fire: 1,
        water: 1,
        electric: 1,
        grass: 1,
        ice: 1,
        fighting: 1,
        poison: 1,
        ground: 1,
        flying: 1,
        psychic: 2,
        bug: 1,
        rock: 1,
        ghost: 2,
        dragon: 1,
        dark: 0.5,
        steel: 0.5,
    },
    dragon: {
        normal: 1,
        fire: 1,
        water: 1,
        electric: 1,
        grass: 1,
        ice: 1,
        fighting: 1,
        poison: 1,
        ground: 1,
        flying: 1,
        psychic: 1,
        bug: 1,
        rock: 1,
        ghost: 1,
        dragon: 2,
        dark: 1,
        steel: 0.5,
    },
    dark: {
        normal: 1,
        fire: 1,
        water: 1,
        electric: 1,
        grass: 1,
        ice: 1,
        fighting: 0.5,
        poison: 1,
        ground: 1,
        flying: 1,
        psychic: 2,
        bug: 1,
        rock: 1,
        ghost: 2,
        dragon: 1,
        dark: 0.5,
        steel: 0.5,
    },
    steel: {
        normal: 1,
        fire: 0.5,
        water: 0.5,
        electric: 0.5,
        grass: 1,
        ice: 2,
        fighting: 1,
        poison: 1,
        ground: 1,
        flying: 1,
        psychic: 1,
        bug: 1,
        rock: 2,
        ghost: 1,
        dragon: 1,
        dark: 1,
        steel: 0.5,
    },
};

function getOverallTypeEffectiveness(attackingType, defendingTypes, typeChart) {
    // your code here
}
console.log(getOverallTypeEffectiveness('Electric', ['Water', 'Flying'], typeChart)); // 4. Electric is 2x against Water and 2x against Flying, so 2 * 2 = 4
console.log(getOverallTypeEffectiveness('Fire', ['Grass', 'Rock'], typeChart)); // 1. Rock is 0.5x against Fire and Grass is 2x against Fire, so 0.5 * 2 = 1
console.log(getOverallTypeEffectiveness('Fighting', ['Normal', 'Ghost'], typeChart)); // 0. Fighting is 2x against Normal and 0x against Ghost, so 2 * 0 = 0

// Q7. You are not given 3 objects:
//  1. The move being used (name, type)
//  2. The defending pokemon (name, type(s), level)
//  3. The type chart (as given in Q7)
// If the move is super effective (multiplier > 2), return "It's super effective!"
// If the move is not very effective (multiplier < 1), return "It's not very effective..."
// Otherwise, return "Normal"

function evaluateMoveEffectiveness(move, defender, typeChart) {
    // your code here
}

console.log(
    evaluateMoveEffectiveness(
        { name: 'Flamethrower', type: 'Fire' },
        { name: 'Bulbasaur', type: ['Grass'], level: 10 },
        typeChart,
    ),
); // "It's super effective!" Fire is 2x against Grass
console.log(
    evaluateMoveEffectiveness(
        { name: 'Water Gun', type: 'Water' },
        { name: 'Bulbasaur', type: ['Grass'], level: 10 },
        typeChart,
    ),
); // "It's not very effective..." Water is 0.5x against Grass
console.log(
    evaluateMoveEffectiveness(
        { name: 'Tackle', type: 'Normal' },
        { name: 'Pidgey', type: ['Flying'], level: 5 },
        typeChart,
    ),
); // "Normal" Normal is 1x against Flying
console.log(
    evaluateMoveEffectiveness(
        { name: 'Flamethrower', type: 'Fire' },
        { name: 'Ogerpon', type: ['Grass', 'Rock'], level: 40 },
        typeChart,
    ),
); // "It's not very effective..." Fire is 0.5x against Grass and 0.5x against Rock, so 0.5 * 0.5 = 0.25

// Q8. Create a function that takes in 2 parameters:
// 1. An array of pokemon moves (each move is an object with name and type)
// 2. A defending pokemon (object with name, type(s), level)
// The function should return the most effective move against the defending pokemon
function getMostEffectiveMove(moves, defender, typeChart) {
    // your code here
}

console.log(
    getMostEffectiveMove(
        [
            { name: 'Flamethrower', type: 'Fire' },
            { name: 'Water Gun', type: 'Water' },
            { name: 'Mega Punch', type: 'Fighting' },
        ],
        { name: 'Ogerpon', type: ['Grass', 'Rock'], level: 40 },
        typeChart,
    ),
); // { name: 'Mega Punch', type: 'Fighting' }, Fighting is 2x against Grass and 2x against Rock, so 2 * 2 = 4

console.log(
    getMostEffectiveMove(
        [
            { name: 'Flamethrower', type: 'Fire' },
            { name: 'Water Gun', type: 'Water' },
            { name: 'Vine Whip', type: 'Grass' },
        ],
        { name: 'Bulbasaur', type: ['Grass'], level: 10 },
        typeChart,
    ),
); // { name: 'Flamethrower', type: 'Fire' } Fire is 2x against Grass

console.log(
    getMostEffectiveMove(
        [
            { name: 'Flamethrower', type: 'Fire' },
            { name: 'Mega Punch', type: 'Fighting' },
            { name: 'Vine Whip', type: 'Grass' },
        ],
        { name: 'Pidgey', type: ['Flying'], level: 5 },
        typeChart,
    ),
); // { name: 'Flamethrower', type: 'Fire' } Fire is 1x against Flying, Fighting is 0.5x against Flying, Grass is 0.5x against Flying
