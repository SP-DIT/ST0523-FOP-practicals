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
