module.exports = {
    testcases: [
        // Public test cases (first 3)
        {
            input: [12345, 5],
            expected: 15,
            isPublic: true,
            description: 'Sum of digits in 12345 should be 1+2+3+4+5=15',
        },
        {
            input: [9876, 4],
            expected: 30,
            isPublic: true,
            description: 'Sum of digits in 9876 should be 9+8+7+6=30',
        },
        {
            input: [1001, 4],
            expected: 2,
            isPublic: true,
            description: 'Sum of digits in 1001 should be 1+0+0+1=2',
        },
        // Hidden test cases
        {
            input: [0, 1],
            expected: 0,
            isPublic: false,
            description: 'Sum of digits in 0 should be 0',
        },
        {
            input: [5, 1],
            expected: 5,
            isPublic: false,
            description: 'Sum of digits in single digit 5 should be 5',
        },
        {
            input: [99, 2],
            expected: 18,
            isPublic: false,
            description: 'Sum of digits in 99 should be 9+9=18',
        },
        {
            input: [123, 3],
            expected: 6,
            isPublic: false,
            description: 'Sum of digits in 123 should be 1+2+3=6',
        },
        {
            input: [1000, 4],
            expected: 1,
            isPublic: false,
            description: 'Sum of digits in 1000 should be 1+0+0+0=1',
        },
        {
            input: [7777, 4],
            expected: 28,
            isPublic: false,
            description: 'Sum of digits in 7777 should be 7+7+7+7=28',
        },
        {
            input: [102030, 6],
            expected: 6,
            isPublic: false,
            description: 'Sum of digits in 102030 should be 1+0+2+0+3+0=6',
        },
        {
            input: [987654321, 9],
            expected: 45,
            isPublic: false,
            description: 'Sum of digits in 987654321 should be 9+8+7+6+5+4+3+2+1=45',
        },
        {
            input: [111111, 6],
            expected: 6,
            isPublic: false,
            description: 'Sum of digits in 111111 should be 1+1+1+1+1+1=6',
        },
        {
            input: [2025, 4],
            expected: 9,
            isPublic: false,
            description: 'Sum of digits in 2025 should be 2+0+2+5=9',
        },
        {
            input: [909090, 6],
            expected: 27,
            isPublic: false,
            description: 'Sum of digits in 909090 should be 9+0+9+0+9+0=27',
        },
        {
            input: [456789, 6],
            expected: 39,
            isPublic: false,
            description: 'Sum of digits in 456789 should be 4+5+6+7+8+9=39',
        },
        {
            input: [10203, 5],
            expected: 6,
            isPublic: false,
            description: 'Sum of digits in 10203 should be 1+0+2+0+3=6',
        },
        {
            input: [888, 3],
            expected: 24,
            isPublic: false,
            description: 'Sum of digits in 888 should be 8+8+8=24',
        },
        {
            input: [50607, 5],
            expected: 18,
            isPublic: false,
            description: 'Sum of digits in 50607 should be 5+0+6+0+7=18',
        },
        {
            input: [333333, 6],
            expected: 18,
            isPublic: false,
            description: 'Sum of digits in 333333 should be 3+3+3+3+3+3=18',
        },
        {
            input: [1234567890, 10],
            expected: 45,
            isPublic: false,
            description: 'Sum of digits in 1234567890 should be 1+2+3+4+5+6+7+8+9+0=45',
        },
    ],
    options: {
        type: 'JSON',
    },
};
