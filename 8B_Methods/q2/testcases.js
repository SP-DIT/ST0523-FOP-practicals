module.exports = {
    testcases: [
        // Public test cases (first 3)
        {
            input: [100],
            commands: [
                { method: 'deposit', params: [50] },
                { method: 'withdraw', params: [30] },
                { method: 'getBalance', params: [] },
            ],
            expected: [
                { value: undefined, options: {} },
                { value: undefined, options: {} },
                { value: 120, options: {} },
            ],
            isPublic: true,
            description: 'Account with initial balance 100: deposit 50, withdraw 30, getBalance should return 120',
        },
        {
            input: [0],
            commands: [
                { method: 'deposit', params: [100] },
                { method: 'getBalance', params: [] },
            ],
            expected: [
                { value: undefined, options: {} },
                { value: 100, options: {} },
            ],
            isPublic: true,
            description: 'Account with initial balance 0: deposit 100, getBalance should return 100',
        },
        {
            input: [500],
            commands: [
                { method: 'withdraw', params: [200] },
                { method: 'getBalance', params: [] },
            ],
            expected: [
                { value: undefined, options: {} },
                { value: 300, options: {} },
            ],
            isPublic: true,
            description: 'Account with initial balance 500: withdraw 200, getBalance should return 300',
        },
        // Hidden test cases
        {
            input: [1000],
            commands: [
                { method: 'deposit', params: [500] },
                { method: 'deposit', params: [250] },
                { method: 'getBalance', params: [] },
            ],
            expected: [
                { value: undefined, options: {} },
                { value: undefined, options: {} },
                { value: 1750, options: {} },
            ],
            isPublic: false,
            description: 'Multiple deposits: 1000 + 500 + 250 = 1750',
        },
        {
            input: [1000],
            commands: [
                { method: 'withdraw', params: [100] },
                { method: 'withdraw', params: [200] },
                { method: 'getBalance', params: [] },
            ],
            expected: [
                { value: undefined, options: {} },
                { value: undefined, options: {} },
                { value: 700, options: {} },
            ],
            isPublic: false,
            description: 'Multiple withdrawals: 1000 - 100 - 200 = 700',
        },
        {
            input: [250],
            commands: [
                { method: 'deposit', params: [100] },
                { method: 'withdraw', params: [50] },
                { method: 'deposit', params: [75] },
                { method: 'getBalance', params: [] },
            ],
            expected: [
                { value: undefined, options: {} },
                { value: undefined, options: {} },
                { value: undefined, options: {} },
                { value: 375, options: {} },
            ],
            isPublic: false,
            description: 'Mixed operations: 250 + 100 - 50 + 75 = 375',
        },
        {
            input: [50],
            commands: [
                { method: 'deposit', params: [25.5] },
                { method: 'getBalance', params: [] },
            ],
            expected: [
                { value: undefined, options: {} },
                { value: 75.5, options: {} },
            ],
            isPublic: false,
            description: 'Deposit with decimal: 50 + 25.50 = 75.50',
        },
        {
            input: [100],
            commands: [
                { method: 'withdraw', params: [33.33] },
                { method: 'getBalance', params: [] },
            ],
            expected: [
                { value: undefined, options: {} },
                { value: 66.67, options: {} },
            ],
            isPublic: false,
            description: 'Withdraw with decimal: 100 - 33.33 = 66.67',
        },
        {
            input: [0],
            commands: [{ method: 'getBalance', params: [] }],
            expected: [{ value: 0, options: {} }],
            isPublic: false,
            description: 'Zero initial balance: getBalance should return 0',
        },
        {
            input: [1000],
            commands: [
                { method: 'deposit', params: [0] },
                { method: 'getBalance', params: [] },
            ],
            expected: [
                { value: undefined, options: {} },
                { value: 1000, options: {} },
            ],
            isPublic: false,
            description: 'Deposit 0: balance should remain 1000',
        },
        {
            input: [1000],
            commands: [
                { method: 'withdraw', params: [0] },
                { method: 'getBalance', params: [] },
            ],
            expected: [
                { value: undefined, options: {} },
                { value: 1000, options: {} },
            ],
            isPublic: false,
            description: 'Withdraw 0: balance should remain 1000',
        },
        {
            input: [5000],
            commands: [
                { method: 'deposit', params: [1000] },
                { method: 'withdraw', params: [2000] },
                { method: 'deposit', params: [500] },
                { method: 'withdraw', params: [1500] },
                { method: 'getBalance', params: [] },
            ],
            expected: [
                { value: undefined, options: {} },
                { value: undefined, options: {} },
                { value: undefined, options: {} },
                { value: undefined, options: {} },
                { value: 3000, options: {} },
            ],
            isPublic: false,
            description: 'Complex sequence: 5000 + 1000 - 2000 + 500 - 1500 = 3000',
        },
        {
            input: [10000],
            commands: [
                { method: 'deposit', params: [5000] },
                { method: 'deposit', params: [3000] },
                { method: 'deposit', params: [2000] },
                { method: 'getBalance', params: [] },
            ],
            expected: [
                { value: undefined, options: {} },
                { value: undefined, options: {} },
                { value: undefined, options: {} },
                { value: 20000, options: {} },
            ],
            isPublic: false,
            description: 'Large deposits: 10000 + 5000 + 3000 + 2000 = 20000',
        },
        {
            input: [10000],
            commands: [
                { method: 'withdraw', params: [2000] },
                { method: 'withdraw', params: [3000] },
                { method: 'withdraw', params: [1000] },
                { method: 'getBalance', params: [] },
            ],
            expected: [
                { value: undefined, options: {} },
                { value: undefined, options: {} },
                { value: undefined, options: {} },
                { value: 4000, options: {} },
            ],
            isPublic: false,
            description: 'Large withdrawals: 10000 - 2000 - 3000 - 1000 = 4000',
        },
        {
            input: [100.99],
            commands: [
                { method: 'deposit', params: [50.01] },
                { method: 'getBalance', params: [] },
            ],
            expected: [
                { value: undefined, options: {} },
                { value: 151, options: {} },
            ],
            isPublic: false,
            description: 'Decimal addition: 100.99 + 50.01 = 151',
        },
        {
            input: [1],
            commands: [
                { method: 'deposit', params: [1] },
                { method: 'deposit', params: [1] },
                { method: 'deposit', params: [1] },
                { method: 'getBalance', params: [] },
            ],
            expected: [
                { value: undefined, options: {} },
                { value: undefined, options: {} },
                { value: undefined, options: {} },
                { value: 4, options: {} },
            ],
            isPublic: false,
            description: 'Small amounts: 1 + 1 + 1 + 1 = 4',
        },
        {
            input: [200],
            commands: [
                { method: 'withdraw', params: [50] },
                { method: 'deposit', params: [100] },
                { method: 'withdraw', params: [75] },
                { method: 'deposit', params: [25] },
                { method: 'getBalance', params: [] },
            ],
            expected: [
                { value: undefined, options: {} },
                { value: undefined, options: {} },
                { value: undefined, options: {} },
                { value: undefined, options: {} },
                { value: 200, options: {} },
            ],
            isPublic: false,
            description: 'Balanced operations: 200 - 50 + 100 - 75 + 25 = 200',
        },
        {
            input: [999.99],
            commands: [
                { method: 'deposit', params: [0.01] },
                { method: 'getBalance', params: [] },
            ],
            expected: [
                { value: undefined, options: {} },
                { value: 1000, options: {} },
            ],
            isPublic: false,
            description: 'Precision test: 999.99 + 0.01 = 1000',
        },
        {
            input: [750],
            commands: [
                { method: 'getBalance', params: [] },
                { method: 'deposit', params: [250] },
                { method: 'getBalance', params: [] },
                { method: 'withdraw', params: [500] },
                { method: 'getBalance', params: [] },
            ],
            expected: [
                { value: 750, options: {} },
                { value: undefined, options: {} },
                { value: 1000, options: {} },
                { value: undefined, options: {} },
                { value: 500, options: {} },
            ],
            isPublic: false,
            description: 'Multiple balance checks: 750 -> 1000 -> 500',
        },
        {
            input: [5.5],
            commands: [
                { method: 'deposit', params: [4.5] },
                { method: 'withdraw', params: [2.5] },
                { method: 'deposit', params: [2.5] },
                { method: 'getBalance', params: [] },
            ],
            expected: [
                { value: undefined, options: {} },
                { value: undefined, options: {} },
                { value: undefined, options: {} },
                { value: 10, options: {} },
            ],
            isPublic: false,
            description: 'Decimal operations: 5.5 + 4.5 - 2.5 + 2.5 = 10',
        },
    ],
    options: {
        type: 'commands',
    },
};
