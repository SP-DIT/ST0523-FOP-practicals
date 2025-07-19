module.exports = {
    testcases: [
        {
            input: [
                { name: 'John', class: '1A01' },
                { name: 'Alice', class: '1A02' },
            ],
            expected: false,
        },
        {
            input: [
                { name: 'John', class: '1A01' },
                { name: 'John', class: '1A02' },
            ],
            expected: false,
        },
        {
            input: [
                { name: 'John', class: '1A01' },
                { name: 'Alice', class: '1A01' },
            ],
            expected: false,
        },
        {
            input: [
                { name: 'John', class: '1A01' },
                { name: 'John', class: '1A01' },
            ],
            expected: true,
        },
    ],
    options: {
        type: 'JSON',
    },
};
