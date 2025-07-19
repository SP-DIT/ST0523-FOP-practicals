module.exports = {
    testcases: [
        {
            input: [{ name: 'John', class: '1A01' }, '1A02'],
            expected: { name: 'John', class: '1A02' },
        },
        {
            input: [{ name: 'John', class: '1A01' }, '1A03'],
            expected: { name: 'John', class: '1A03' },
        },
        {
            input: [{ name: 'Alice', class: '1A01' }, '1B04'],
            expected: { name: 'Alice', class: '1B04' },
        },
        {
            input: [{ name: 'Alice', class: '1A01' }, '1B05'],
            expected: { name: 'Alice', class: '1B05' },
        },
        {
            input: [{ name: 'Charlie', class: '1A01' }, '1C01'],
            expected: { name: 'Charlie', class: '1C01' },
        },
    ],
    options: {
        type: 'JSON',
    },
};
