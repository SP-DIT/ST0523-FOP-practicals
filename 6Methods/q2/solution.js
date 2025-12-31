function createBankAccount(initialBalance) {
    return {
        balance: initialBalance,
        deposit: function (amount) {
            this.balance = this.balance + amount;
        },
        withdraw: function (amount) {
            this.balance = this.balance - amount;
        },
        getBalance: function () {
            return this.balance;
        },
    };
}

module.exports = createBankAccount;

// Example usage:
const account = createBankAccount(100);
account.deposit(50);
account.withdraw(30);
console.log(account.getBalance()); // 120
