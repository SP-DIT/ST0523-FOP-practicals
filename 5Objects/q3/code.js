function createPokemonObjectV2(name, type1, type2, level, isShiny) {
    // your code here
}

module.exports = createPokemonObjectV2;

// examples

console.log(createPokemonObjectV2('Pidgey', 'Normal', 'Flying', 15, false)); // { name: 'Pidgey', type: ['Normal', 'Flying'], level: 15, isShiny: false }
console.log(createPokemonObjectV2('Onix', 'Rock', null, 30, true)); // { name: 'Onix', type: ['Rock'], level: 30, isShiny: true }
console.log(createPokemonObjectV2('Eevee', 'Normal', null, 5, false)); // { name: 'Eevee', type: ['Normal'], level: 5, isShiny: false }
