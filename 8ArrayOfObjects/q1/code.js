function calculateCartTotal(cart) {
    // Your code here
}

module.exports = calculateCartTotal;

// examples

console.log(
    calculateCartTotal([
        { price: 999.99, quantity: 2 },
        { price: 49.99, quantity: 5 },
    ]),
); // 2249.93
console.log(
    calculateCartTotal([
        { price: 19.99, quantity: 3 },
        { price: 5.99, quantity: 10 },
    ]),
); // 119.89
