function createBankAccount(initialBalance) {
    // Reuse your code from Q2 and add the additional method
}

module.exports = createBankAccount;

// Example usage:
const account1 = createBankAccount(200);
const account2 = createBankAccount(50);
account1.transfer(100, account2);
console.log(account1.getBalance()); // 100
console.log(account2.getBalance()); // 150
