module.exports = {
    testcases: [
        {
            input: ['John', '1A01'],
            expected: { name: 'John', class: '1A01' },
        },
        {
            input: ['Alice', '1A99'],
            expected: { name: 'Alice', class: '1A99' },
        },
        {
            input: ['Bob', '1B03'],
            expected: { name: 'Bob', class: '1B03' },
        },
        {
            input: ['Charlie', '1C06'],
            expected: { name: 'Charlie', class: '1C06' },
        },
        {
            input: ['Douglas', '1D11'],
            expected: { name: 'Douglas', class: '1D11' },
        },
    ],
    options: {
        type: 'JSON',
    },
};
