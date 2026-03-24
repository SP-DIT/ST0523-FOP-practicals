function calculateFinalBalance(startingBalance, targetBalance, withdrawalAmount) {
    if (withdrawalAmount <= 0) {
        return startingBalance;
    }

    let balance = startingBalance;

    while (balance - withdrawalAmount >= targetBalance) {
        balance = balance - withdrawalAmount;
    }

    return balance;
}

// examples

console.log(calculateFinalBalance(100, 20, 15)); // should return 25 (100 > 85 > 70 > 55 > 40 > 25, any further withdrawal would make it less than the target balance of 20)
console.log(calculateFinalBalance(50, 10, 12)); // should return 14 (50 > 38 > 26 > 14, any further withdrawal would make it less than the target balance of 10)
console.log(calculateFinalBalance(80, 30, 20)); // should return 40 (80 > 60 > 40, any further withdrawal would make it less than the target balance of 30)

module.exports = calculateFinalBalance;
