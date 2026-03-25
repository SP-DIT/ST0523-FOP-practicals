function createBankAccount(initialBalance) {
    // Your code here
}

module.exports = createBankAccount;

// Example usage:
const account = createBankAccount(100);
account.deposit(50);
account.withdraw(30);
console.log(account.getBalance()); // 120
