function createCharacter(maxHealth) {
    // Your code here
}

module.exports = createCharacter;

// Example usage:
const character = createCharacter(100); // maxHealth of 100
console.log(character.takeDamage(30)); // 70, character takes 30 damage and has 70 health left
console.log(character.heal(20)); // 90, character heals 20 and has 90 health
console.log(character.getHealth()); // 90, current health is 90
console.log(character.isAlive()); // true, character is alive
console.log(character.takeDamage(80)); // 10, character takes 80 damage and has 10 health left
console.log(character.heal(120)); // 100, character heals 120 but health caps at maxHealth of 100
console.log(character.takeDamage(999)); // 0, character takes 999 damage and health drops to 0
console.log(character.isAlive()); // false, character is dead
