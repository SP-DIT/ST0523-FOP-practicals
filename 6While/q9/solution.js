function coinChange(amount) {
    const coins = [100, 50, 20, 10];

    if (amount < 0) {
        return -1;
    }

    let numberOfCoins = 0;
    let i = 0;

    while (i < coins.length) {
        while (amount >= coins[i]) {
            amount = amount - coins[i];
            numberOfCoins = numberOfCoins + 1;
        }
        i = i + 1;
    }

    if (amount !== 0) {
        return -1;
    }

    return numberOfCoins;
}

// examples

console.log(coinChange(170)); // should return 3 (one 100, one 50, and one 20)
console.log(coinChange(30)); // should return 2 (one 20 and one 10)
console.log(coinChange(80)); // should return 3 (one 50, one 20, and one 10)

module.exports = coinChange;
