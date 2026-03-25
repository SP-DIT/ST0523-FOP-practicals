function testTransfer(createBankAccount, balance1, balance2, transferAmount) {
    const account1 = createBankAccount(balance1);
    const account2 = createBankAccount(balance2);
    account1.transfer(transferAmount, account2);
    return [account1.getBalance(), account2.getBalance()];
}

module.exports = {
    testcases: [
        // Public test cases (first 3)
        {
            input: [200, 50, 100],
            expected: [100, 150],
            isPublic: true,
            description:
                'Transfer 100 from account1(200) to account2(50): account1 should have 100, account2 should have 150',
        },
        {
            input: [1000, 500, 250],
            expected: [750, 750],
            isPublic: true,
            description: 'Transfer 250 from account1(1000) to account2(500): both should have 750',
        },
        {
            input: [100, 0, 100],
            expected: [0, 100],
            isPublic: true,
            description:
                'Transfer entire balance 100 from account1(100) to account2(0): account1 should have 0, account2 should have 100',
        },
        // Hidden test cases
        {
            input: [500, 300, 150],
            expected: [350, 450],
            isPublic: false,
            description: 'Transfer 150: 500 - 150 = 350, 300 + 150 = 450',
        },
        {
            input: [2000, 1000, 500],
            expected: [1500, 1500],
            isPublic: false,
            description: 'Transfer 500: both end up with 1500',
        },
        {
            input: [750, 250, 500],
            expected: [250, 750],
            isPublic: false,
            description: 'Transfer 500: 750 - 500 = 250, 250 + 500 = 750',
        },
        {
            input: [1000, 500, 300],
            expected: [700, 800],
            isPublic: false,
            description: 'Transfer 300: account1=700, account2=800',
        },
        {
            input: [100, 100, 25.5],
            expected: [74.5, 125.5],
            isPublic: false,
            description: 'Transfer decimal amount: 100 - 25.50 = 74.50, 100 + 25.50 = 125.50',
        },
        {
            input: [500, 500, 0],
            expected: [500, 500],
            isPublic: false,
            description: 'Transfer 0 amount: both accounts remain unchanged at 500',
        },
        {
            input: [1000, 0, 1000],
            expected: [0, 1000],
            isPublic: false,
            description: 'Transfer entire large balance: account1 becomes 0, account2 becomes 1000',
        },
        {
            input: [300, 200, 100],
            expected: [200, 300],
            isPublic: false,
            description: 'Transfer 100: 300 - 100 = 200, 200 + 100 = 300',
        },
        {
            input: [1500, 1500, 500],
            expected: [1000, 2000],
            isPublic: false,
            description: 'Transfer 500: account1=1000, account2=2000',
        },
        {
            input: [50, 50, 10],
            expected: [40, 60],
            isPublic: false,
            description: 'Small transfer: 50 - 10 = 40, 50 + 10 = 60',
        },
        {
            input: [999.99, 0.01, 999.99],
            expected: [0, 1000],
            isPublic: false,
            description: 'Precision test: transfer 999.99, result should be exact',
        },
        {
            input: [100, 200, 40],
            expected: [60, 240],
            isPublic: false,
            description: 'Transfer 40: 100 - 40 = 60, 200 + 40 = 240',
        },
        {
            input: [5000, 5000, 2500],
            expected: [2500, 7500],
            isPublic: false,
            description: 'Large amounts: account1 sends 2500',
        },
        {
            input: [150.75, 250.25, 50.5],
            expected: [100.25, 300.75],
            isPublic: false,
            description: 'Decimal balances and transfer: 150.75 - 50.50 = 100.25, 250.25 + 50.50 = 300.75',
        },
        {
            input: [10, 10, 5],
            expected: [5, 15],
            isPublic: false,
            description: 'Small amounts: account1 sends 5',
        },
        {
            input: [800, 600, 500],
            expected: [300, 1100],
            isPublic: false,
            description: 'Transfer 500: 800 - 500 = 300, 600 + 500 = 1100',
        },
        {
            input: [400, 600, 100],
            expected: [300, 700],
            isPublic: false,
            description: 'Transfer 100: 400 - 100 = 300, 600 + 100 = 700',
        },
    ],
    options: {
        type: 'JSON',
        monkeyPatch: (createBankAccount) => testTransfer.bind(null, createBankAccount),
    },
};
