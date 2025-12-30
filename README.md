# Objects Practical

> Press `CTRL + SHIFT + V` to preview the rendered pdf

## 1. Create Pikachu Object

Create a function that returns an object representing the pokemon "Pikachu" with specific properties.

You'll need to create and return an object with multiple properties of different data types.

```js
function createPikachuObject() {
    // your code here
}

console.log(createPikachuObject()); // { name: 'Pikachu', type: 'Electric', level: 5, isShiny: false }
```

## 2. Create Generic Pokemon Object

Create a function that takes parameters and returns a pokemon object with those properties.

This problem requires you to create objects dynamically using function parameters, building on the previous question's structure.

```js
function createPokemonObject(name, type, level, isShiny) {
    // your code here
}

console.log(createPokemonObject('Charmander', 'Fire', 58, false)); // { name: 'Charmander', type: 'Fire', level: 58, isShiny: false }
console.log(createPokemonObject('Bulbasaur', 'Grass/Poison', 10, true)); // { name: 'Bulbasaur', type: 'Grass/Poison', level: 10, isShiny: true }
console.log(createPokemonObject('Gyarados', 'Water/Flying', 20, false)); // { name: 'Gyarados', type: 'Water/Flying', level: 20, isShiny: false }
```

## 3. Create Pokemon Object with Array Types

Create a function that takes parameters for name, type1, type2, level, and isShiny. The `type` property should be an array containing both types, or only type1 if type2 is null.

```js
function createPokemonObjectV2(name, type1, type2, level, isShiny) {
    // your code here
}

console.log(createPokemonObjectV2('Pidgey', 'Normal', 'Flying', 15, false)); // { name: 'Pidgey', type: ['Normal', 'Flying'], level: 15, isShiny: false }
console.log(createPokemonObjectV2('Onix', 'Rock', null, 30, true)); // { name: 'Onix', type: ['Rock'], level: 30, isShiny: true }
console.log(createPokemonObjectV2('Eevee', 'Normal', null, 5, false)); // { name: 'Eevee', type: ['Normal'], level: 5, isShiny: false }
```

## 4. Get Pokemon Information

Create a function that takes a pokemon object and returns formatted information about its name and level.

```js
function getPokemonInfo(pokemon) {
    // your code here
}

console.log(getPokemonInfo({ name: 'Pikachu', type: ['Electric'], level: 5, isShiny: false })); // Pikachu is at level 5.
console.log(getPokemonInfo({ name: 'Bulbasaur', type: ['Grass', 'Poison'], level: 10, isShiny: true })); // Bulbasaur is at level 10.
console.log(getPokemonInfo({ name: 'Gyarados', type: ['Water', 'Flying'], level: 20, isShiny: false })); // Gyarados is at level 20.
```

## 5. Describe Pokemon

Create a function that provides a detailed description of a pokemon, including whether it's shiny and handling multiple types.

```js
function describePokemon(pokemon) {
    // your code here
}

console.log(describePokemon({ name: 'Pikachu', type: ['Electric'], level: 5, isShiny: false })); // The pokemon is a Pikachu. It is a Electric type pokemon at level 5.
console.log(describePokemon({ name: 'Bulbasaur', type: ['Grass', 'Poison'], level: 10, isShiny: true })); // The pokemon is a shiny Bulbasaur. It is a Grass/Poison type pokemon at level 10.
console.log(describePokemon({ name: 'Gyarados', type: ['Water', 'Flying'], level: 20, isShiny: false })); // The pokemon is a Gyarados. It is a Water/Flying type pokemon at level 20.
```

## 6. Get Type Effectiveness

Create a function that looks up the effectiveness multiplier between two pokemon types using a type chart object.

This problem introduces nested object access - you need to navigate through the type chart structure to find the effectiveness value.

```js
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
```

## 7. Calculate Overall Type Effectiveness

Create a function that calculates the overall effectiveness when attacking a pokemon with multiple types.

> **Practice Wishful Thinking:** You already have a `getTypeEffectiveness` function from question 6 that can look up effectiveness between two single types. Use wishful thinking to break this problem down:
>
> -   Reuse your `getTypeEffectiveness(attackingType, singleDefendingType, typeChart)` function from question 6
> -   This is an accumulation problem: loop through each defending type and multiply the effectiveness values together
> -   Start with a multiplier of 1, then multiply by each individual type effectiveness
>
> Write your solution using the `getTypeEffectiveness` helper first, focusing on the multiplication logic.

```js
function getOverallTypeEffectiveness(attackingType, defendingTypes, typeChart) {
    // your code here
}

console.log(getOverallTypeEffectiveness('Electric', ['Water', 'Flying'], typeChart)); // 4. Electric is 2x against Water and 2x against Flying, so 2 * 2 = 4
console.log(getOverallTypeEffectiveness('Fire', ['Grass', 'Rock'], typeChart)); // 1. Rock is 0.5x against Fire and Grass is 2x against Fire, so 0.5 * 2 = 1
console.log(getOverallTypeEffectiveness('Fighting', ['Normal', 'Ghost'], typeChart)); // 0. Fighting is 2x against Normal and 0x against Ghost, so 2 * 0 = 0
```

## 8. Evaluate Move Effectiveness

Create a function that takes a `move` object, a `defending pokemon` object, and returns an effectiveness message.

> **Practice Wishful Thinking:** You already have the `getOverallTypeEffectiveness` function from question 7. Use wishful thinking to consider how it can be used to help solve this problem.

```js
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
```

## 9. Find Most Effective Move

Create a function that takes an array of move objects and a defending pokemon, then returns the most effective move.

> **Practice Wishful Thinking:** You already have the `evaluateMoveEffectiveness` function from question 8. Use wishful thinking, together with considering whether this is a accumulation/filtering/mapping question to consider how it can be used to help solve this problem.

```js
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
```
