function createCharacter(maxHealth) {
    return {
        health: maxHealth,
        maxHealth: maxHealth,
        takeDamage: function (amount) {
            this.health = this.health - amount;
            if (this.health < 0) {
                this.health = 0;
            }
            return this.health;
        },
        heal: function (amount) {
            this.health = this.health + amount;
            if (this.health > this.maxHealth) {
                this.health = this.maxHealth;
            }
            return this.health;
        },
        getHealth: function () {
            return this.health;
        },
        isAlive: function () {
            return this.health > 0;
        },
    };
}

module.exports = createCharacter;

// Example usage:
const character = createCharacter(100);
console.log(character.takeDamage(30)); // 70
console.log(character.heal(20)); // 90
console.log(character.getHealth()); // 90
console.log(character.isAlive()); // true
console.log(character.takeDamage(80)); // 10
console.log(character.heal(120)); // 100
console.log(character.takeDamage(999)); // 0
console.log(character.isAlive()); // false
