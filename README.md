# Objects Practical

> Press `CTRL + SHIFT + V` to preview the rendered pdf

## 1. Create Pikachu Object

Create a function that returns an object representing the pokemon "Pikachu" with specific properties (name, type, level, isShiny).

```js
function createPikachuObject() {
    // your code here
}

console.log(createPikachuObject()); // { name: 'Pikachu', type: 'electric', level: 5, isShiny: false }
```

## 2. Create Generic Pokemon Object

Create a function that takes parameters and returns a pokemon object with those properties.

This problem requires you to create objects dynamically using function parameters, building on the previous question's structure.

```js
function createPokemonObject(name, type, level, isShiny) {
    // your code here
}

console.log(createPokemonObject('Charmander', 'fire', 58, false)); // { name: 'Charmander', type: 'fire', level: 58, isShiny: false }
console.log(createPokemonObject('Bulbasaur', 'grass/Poison', 10, true)); // { name: 'Bulbasaur', type: 'grass/Poison', level: 10, isShiny: true }
console.log(createPokemonObject('Gyarados', 'water/flying', 20, false)); // { name: 'Gyarados', type: 'water/flying', level: 20, isShiny: false }
```

## 3. Create Pokemon Object with Array Types

Create a function that takes parameters for `name`, `type1`, `type2`, `level`, and `isShiny`. The `type` property should be an array containing both types, or only `type1` if `type2` is `null`. You can safely assume that `type1` will never be null.

```js
function createPokemonObjectV2(name, type1, type2, level, isShiny) {
    // your code here
}

console.log(createPokemonObjectV2('Pidgey', 'normal', 'flying', 15, false)); // { name: 'Pidgey', type: ['normal', 'flying'], level: 15, isShiny: false }
console.log(createPokemonObjectV2('Onix', 'rock', null, 30, true)); // { name: 'Onix', type: ['rock'], level: 30, isShiny: true }
console.log(createPokemonObjectV2('Eevee', 'normal', null, 5, false)); // { name: 'Eevee', type: ['normal'], level: 5, isShiny: false }
```

## 4. Get Pokemon Information

Create a function that takes a pokemon object and returns formatted information as a String about its name and level.

```js
function getPokemonInfo(pokemon) {
    // your code here
}

console.log(getPokemonInfo({ name: 'Pikachu', type: ['electric'], level: 5, isShiny: false })); // Pikachu is at level 5.
console.log(getPokemonInfo({ name: 'Bulbasaur', type: ['grass', 'Poison'], level: 10, isShiny: true })); // Bulbasaur is at level 10.
console.log(getPokemonInfo({ name: 'Gyarados', type: ['water', 'flying'], level: 20, isShiny: false })); // Gyarados is at level 20.
```

## 5. Describe Pokemon

Create a function that provides a detailed description of a pokemon, including whether it's shiny and handling multiple types.

```js
function describePokemon(pokemon) {
    // your code here
}

console.log(describePokemon({ name: 'Pikachu', type: ['electric'], level: 5, isShiny: false })); // The pokemon is a Pikachu. It is a electric type pokemon at level 5.
console.log(describePokemon({ name: 'Bulbasaur', type: ['grass', 'Poison'], level: 10, isShiny: true })); // The pokemon is a shiny Bulbasaur. It is a grass/Poison type pokemon at level 10.
console.log(describePokemon({ name: 'Gyarados', type: ['water', 'flying'], level: 20, isShiny: false })); // The pokemon is a Gyarados. It is a water/flying type pokemon at level 20.
```

## 6. Get Type Effectiveness

Create a function that looks up the effectiveness multiplier between two pokemon types using a type chart object.

This problem introduces nested object access - you need to navigate through the type chart structure to find the effectiveness value.

> **Note:** Interpreting the typeChart
> The typeChart is a nested object, which tells you the effectiveness of an attacking type against a defending type.
> The first key corresponds to the attacking type, and the second key corresponds to the defending type.
> So `typeChart["fire"]["water"]` would check the effectiveness of using `fire` to attack `water`.
>
> In question 6, the given typeChart is a condensed version

```js
const condensedTypeChart = {
    fire: { fire: 0.5, grass: 2, water: 0.5, electric: 1 },
    water: { fire: 2, grass: 0.5, water: 0.5, electric: 1 },
    grass: { water: 2, grass: 0.5, fire: 0.5, electric: 1 },
    electric: { water: 2, grass: 0.5, fire: 1, electric: 0.5 },
};

function getTypeEffectiveness(attackingType, defendingType, typeChart) {
    // your code here
}

console.log(getTypeEffectiveness('fire', 'grass', condensedTypeChart)); // 2
console.log(getTypeEffectiveness('fire', 'water', condensedTypeChart)); // 0.5
console.log(getTypeEffectiveness('electric', 'fire', condensedTypeChart)); // 1
```

## 7. Calculate Overall Type Effectiveness

Create a function that calculates the overall effectiveness when attacking a pokemon with multiple types. The overall effectiveness is the multiplication of the effectiveness against the first type with the effectiveness against the second type. If the defending type has only 1 type, simply return the effectiveness against the first type.

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

console.log(getOverallTypeEffectiveness('electric', ['water', 'flying'], typeChart)); // 4. electric is 2x against water and 2x against flying, so 2 * 2 = 4
console.log(getOverallTypeEffectiveness('fire', ['grass', 'rock'], typeChart)); // 1. rock is 0.5x against fire and grass is 2x against fire, so 0.5 * 2 = 1
console.log(getOverallTypeEffectiveness('fighting', ['normal', 'ghost'], typeChart)); // 0. fighting is 2x against normal and 0x against ghost, so 2 * 0 = 0
```

## 8. Evaluate Move Effectiveness

Create a function that takes a `move` object, a `defending pokemon` object, and returns the effectiveness message as a String.

| effectiveness | message                      |
| ------------- | ---------------------------- |
| >= 2          | "It's super effective!"      |
| < 1           | "It's not very effective..." |
| Otherwise     | "Normal                      |

> **Practice Wishful Thinking:** You already have the `getOverallTypeEffectiveness` function from question 7. Use wishful thinking to consider how it can be used to help solve this problem.

```js
function evaluateMoveEffectiveness(move, defender, typeChart) {
    // your code here
}

console.log(
    evaluateMoveEffectiveness(
        { name: 'Flamethrower', type: 'fire' },
        { name: 'Bulbasaur', type: ['grass'], level: 10 },
        typeChart,
    ),
); // "It's super effective!" fire is 2x against grass

console.log(
    evaluateMoveEffectiveness(
        { name: 'water Gun', type: 'water' },
        { name: 'Bulbasaur', type: ['grass'], level: 10 },
        typeChart,
    ),
); // "It's not very effective..." water is 0.5x against grass

console.log(
    evaluateMoveEffectiveness(
        { name: 'Tackle', type: 'normal' },
        { name: 'Pidgey', type: ['flying'], level: 5 },
        typeChart,
    ),
); // "normal" normal is 1x against flying

console.log(
    evaluateMoveEffectiveness(
        { name: 'Flamethrower', type: 'fire' },
        { name: 'Ogerpon', type: ['grass', 'rock'], level: 40 },
        typeChart,
    ),
); // "It's not very effective..." fire is 0.5x against grass and 0.5x against rock, so 0.5 * 0.5 = 0.25
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
            { name: 'Flamethrower', type: 'fire' },
            { name: 'water Gun', type: 'water' },
            { name: 'Mega Punch', type: 'fighting' },
        ],
        { name: 'Ogerpon', type: ['grass', 'rock'], level: 40 },
        typeChart,
    ),
); // { name: 'Mega Punch', type: 'fighting' }, fighting is 2x against grass and 2x against rock, so 2 * 2 = 4

console.log(
    getMostEffectiveMove(
        [
            { name: 'Flamethrower', type: 'fire' },
            { name: 'water Gun', type: 'water' },
            { name: 'Vine Whip', type: 'grass' },
        ],
        { name: 'Bulbasaur', type: ['grass'], level: 10 },
        typeChart,
    ),
); // { name: 'Flamethrower', type: 'fire' } fire is 2x against grass

console.log(
    getMostEffectiveMove(
        [
            { name: 'Flamethrower', type: 'fire' },
            { name: 'Mega Punch', type: 'fighting' },
            { name: 'Vine Whip', type: 'grass' },
        ],
        { name: 'Pidgey', type: ['flying'], level: 5 },
        typeChart,
    ),
); // { name: 'Flamethrower', type: 'fire' } fire is 1x against flying, fighting is 0.5x against flying, grass is 0.5x against flying
```
