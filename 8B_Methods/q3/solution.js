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
        transfer: function (amount, anotherAccount) {
            this.withdraw(amount);
            anotherAccount.deposit(amount);
        },
    };
}

module.exports = createBankAccount;

// Example usage:
const account1 = createBankAccount(200);
const account2 = createBankAccount(50);
account1.transfer(100, account2);
console.log(account1.getBalance()); // 100
console.log(account2.getBalance()); // 150
