/*
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
*/

function createShop(items) {
    // Your code here
}

module.exports = createShop;

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
