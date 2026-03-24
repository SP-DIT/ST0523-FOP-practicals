function buy2Get1Free(product1, product2, product3) {
    const total = product1.price + product2.price + product3.price;
    let cheapest = product1.price;

    if (product2.price < cheapest) {
        cheapest = product2.price;
    }

    if (product3.price < cheapest) {
        cheapest = product3.price;
    }

    return total - cheapest;
}

module.exports = buy2Get1Free;

// examples

console.log(
    buy2Get1Free({ name: 'Product A', price: 10 }, { name: 'Product B', price: 20 }, { name: 'Product C', price: 30 }),
); // 50
console.log(
    buy2Get1Free({ name: 'Product X', price: 15 }, { name: 'Product Y', price: 25 }, { name: 'Product Z', price: 5 }),
); // 40
