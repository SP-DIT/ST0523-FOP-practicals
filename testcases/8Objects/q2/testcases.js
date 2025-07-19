module.exports = {
    testcases: [
        {
            input: [{ name: 'John', class: '1A01' }],
            expected: 'John is in class 1A01',
        },
        {
            input: [{ name: 'Alice', class: '1A02' }],
            expected: 'Alice is in class 1A02',
        },
        {
            input: [{ name: 'Bob', class: '1B05' }],
            expected: 'Bob is in class 1B05',
        },
        {
            input: [{ name: 'Charlie', class: '1C99' }],
            expected: 'Charlie is in class 1C99',
        },
        {
            input: [{ name: 'Douglas', class: '1D87' }],
            expected: 'Douglas is in class 1D87',
        },
    ],
    options: {
        type: 'JSON',
    },
};
