// Q1. Given the radius of a circle, create an circle object with the following methods:
// - getArea: returns the area of the circle
// - getCircumference: returns the circumference of the circle
// Note:
//    - You should use Math.PI for the value of π and
//    - Use `this` to refer to the radius property within the methods (e.g. this.radius)

function createCircle(radius) {
    // Your code here
}

// Example usage:
const circle = createCircle(5);
console.log(circle.getArea()); // 78.539
console.log(circle.getCircumference()); // 31.4159

// Q2. Create a bank account object with the following methods:
// - deposit(amount): adds the amount to the balance
// - withdraw(amount): subtracts the amount from the balance if sufficient funds exist
// - getBalance(): returns the current balance

function createBankAccount(initialBalance) {
    // Your code here
}

// Example usage:
const account = createBankAccount(100);
account.deposit(50);
account.withdraw(30);
console.log(account.getBalance()); // 120

// Q3. Continuing from Q2, add a method:
// - transfer(amount, anotherAccount): transfers the amount to another bank account if sufficient funds exist
function createBankAccount(initialBalance) {
    // Your code here
}

// Example usage:
const account1 = createBankAccount(200);
const account2 = createBankAccount(50);
account1.transfer(100, account2);
console.log(account1.getBalance()); // 100
console.log(account2.getBalance()); // 150

// Q4. Given the maxHealth of a character, create a character object for an RPG game with the following methods:
// - takeDamage(amount): reduces the character's health by the amount, not going below 0, returns remaining health
// - heal(amount): increases the character's health by the amount, not exceeding maxHealth
// - getHealth(): returns the current health of the character
// - isAlive(): returns true if health is greater than 0, otherwise false

function createCharacter(maxHealth) {
    // Your code here
}

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

// Q5. When going to shops like mcdonalds or buying bubble tea,
// customers often are given a queue number and wait for their number to be called.
// Create a queue system object with the following methods:
// - takeANumber(): returns the next number in the queue
// - serveNextCustomer(): returns the number of the next customer to be served and removes them from the queue
// - getCurrentQueue(): returns the list of numbers currently in the queue

function createQueueSystem() {
    // Your code here
}

// Example usage:
const queue = createQueueSystem();
console.log(queue.takeANumber()); // 1
console.log(queue.takeANumber()); // 2
console.log(queue.getCurrentQueue()); // [1, 2]
console.log(queue.serveNextCustomer()); // 1
console.log(queue.getCurrentQueue()); // [2]
console.log(queue.takeANumber()); // 3
console.log(queue.getCurrentQueue()); // [2, 3]

// Q6. In many RPG games, there are typically item shops where players can buy items.
// Given a list of items with their name, price, and quantity, create a shop object with the following methods:
// - buyItem(itemName, quantity):
//      reduces the quantity of the item if sufficient stock exists and returns the total price,
//      otherwise return "Insufficient stock for [itemName]"
// - getAvailableItemList(): returns the list of items that are in stock with their current stock count.

function createShop(items) {
    // Your code here
}

// Example usage:
const shop = createShop([
    { name: 'Health Potion', price: 10, quantity: 5 },
    { name: 'Mana Potion', price: 15, quantity: 3 },
]);
console.log(shop.buyItem('Health Potion', 2)); // 20
console.log(shop.getAvailableItemList());
// [ { name: 'Health Potion', price: 10, quantity: 3 }, { name: 'Mana Potion', price: 15, quantity: 3 } ]
// Health Potion quantity reduced to 3
console.log(shop.buyItem('Mana Potion', 4)); // "Insufficient stock for Mana Potion"
console.log(shop.buyItem('Mana Potion', 3)); // 45
console.log(shop.getAvailableItemList());
// [ { name: 'Health Potion', price: 10, quantity: 3 } ]
// Mana Potion is now out of stock and omitted from the list
