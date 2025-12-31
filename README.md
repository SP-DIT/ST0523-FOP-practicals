# Objects with Methods Practical

> Press `CTRL + SHIFT + V` to preview the rendered pdf

## 1. Create Circle Object with Methods

Given the radius of a circle, create a circle object with methods to calculate its area and circumference.

This problem introduces you to creating objects with methods (functions stored as properties). You'll need to:

-   Create an object with a `radius` property
-   Add two methods:
-   `getArea()`: returns the area (π × radius²)
-   `getCircumference()`: returns the circumference (2 × π × radius)

**Hints**

-   Use the `this` keyword to access the object's `radius` property within the methods
-   Use `Math.PI` for the value of π

```js
function createCircle(radius) {
    // Your code here
}

// Example usage:
const circle = createCircle(5);
console.log(circle.getArea()); // 78.53981633974483
console.log(circle.getCircumference()); // 31.41592653589793
```

## 2. Create Bank Account Object

Given the `initialBalance`, create a bank account object with methods to `deposit`, `withdraw`, and `checkBalance`.

This problem builds on object methods by introducing state management. The object needs to:

-   `deposit(amount)`: adds to the balance
-   `withdraw(amount)`: subtracts from the balance
-   `getBalance()`: returns the current balance

**Hint:** All three methods will need to use `this.balance` to work with the account's balance.

```js
function createBankAccount(initialBalance) {
    // Your code here
}

// Example usage:
const account = createBankAccount(100);
account.deposit(50);
account.withdraw(30);
console.log(account.getBalance()); // 120
```

## 3. Add Transfer Method to Bank Account

Continuing from Question 2, add a transfer method that moves money between accounts.

-   `transfer(anotherAccount)`: Withdraw from current account and deposit into `anotherAccount`.

```js
function createBankAccount(initialBalance) {
    // Reuse your code from Q2 and add the additional method
}

// Example usage:
const account1 = createBankAccount(200);
const account2 = createBankAccount(50);
account1.transfer(100, account2);
console.log(account1.getBalance()); // 100
console.log(account2.getBalance()); // 150
```

## 4. Create RPG Character with Health System

Given the `maxHealth` of a character, create a character object for an RPG game with the following methods.

-   `takeDamage(amount)`: reduces health by the amount, but health cannot go below 0
-   `heal(amount)`: increases health by the amount, but health cannot exceed `maxHealth`
-   `getHealth()`: returns the current health
-   `isAlive()`: returns `true` if health is greater than 0, `false` otherwise

**Hint:** Use conditional statements to ensure health stays within valid bounds (0 to maxHealth).

```js
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
```

## 5. Create Queue System

Create a queue system object that manages customer queue numbers, similar to what you see at McDonald's or bubble tea shops.

-   `takeANumber()` - assigns the next queue number (starting from 1), adds it to the queue, and returns it
-   `serveNextCustomer()` - returns the first customer's number from the queue and removes them from the queue
-   `getCurrentQueue()` - returns the array of all queue numbers currently waiting

**Note:** This is a First In, First Out system - customers who arrive first should be served first.

```js
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
```

## 6. Create RPG Item Shop

Given a list of items with their name, price, and quantity, create a shop object that manages inventory and sales. The shop object should have the following methods:

-   `buyItem(itemName, quantity)` - if sufficient stock exists:
    -   Reduce the item's quantity
    -   Return the total price (item price × quantity purchased)
    -   If insufficient stock, return the string `"Insufficient stock for [itemName]"`
-   `getAvailableItemList()` - returns an array of items that have quantity greater than 0

> **Practice Wishful Thinking**
>
> 1. First think about what are the major steps
> 2. Then think about implementing each of the steps
> 3. Then consider how you might combine them together.

```js
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
//    [ { name: 'Health Potion', price: 10, quantity: 3 }, { name: 'Mana Potion', price: 15, quantity: 3 } ]
//    Health Potion quantity reduced to 3

console.log(shop.buyItem('Mana Potion', 4)); // "Insufficient stock for Mana Potion"
console.log(shop.buyItem('Mana Potion', 3)); // 45

console.log(shop.getAvailableItemList());
//    [ { name: 'Health Potion', price: 10, quantity: 3 } ]
//    Mana Potion is now out of stock and omitted from the list
```
