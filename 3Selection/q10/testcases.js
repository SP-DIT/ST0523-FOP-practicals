module.exports = {
    testcases: [
        // Public test cases (first 3)
        {
            input: ['chicken', 'chicken', 'chicken'],
            expected: 'CHICKEN!',
            isPublic: true,
            description: 'All three strings are "chicken", should return "CHICKEN!"',
        },
        {
            input: ['banana', 'banana', 'banana'],
            expected: 'BANANA!',
            isPublic: true,
            description: 'All three strings are "banana", should return "BANANA!"',
        },
        {
            input: ['chicken', 'banana', 'apple'],
            expected: 'chicken',
            isPublic: true,
            description: 'Mixed strings with "chicken" first, should return "chicken"',
        },
        // Hidden test cases
        {
            input: ['apple', 'chicken', 'banana'],
            expected: 'chicken',
            isPublic: false,
            description: 'Mixed strings with "chicken" second, should return "chicken"',
        },
        {
            input: ['apple', 'banana', 'chicken'],
            expected: 'banana',
            isPublic: false,
            description: 'Mixed strings with "banana" second, should return "banana"',
        },
        {
            input: ['banana', 'apple', 'chicken'],
            expected: 'banana',
            isPublic: false,
            description: 'Mixed strings with "banana" first, should return "banana"',
        },
        {
            input: ['apple', 'orange', 'pear'],
            expected: 'none',
            isPublic: false,
            description: 'No "chicken" or "banana", should return "none"',
        },
        {
            input: ['chicken', 'chicken', 'banana'],
            expected: 'chicken',
            isPublic: false,
            description: 'Mixed with "chicken" appearing first, should return "chicken"',
        },
        {
            input: ['banana', 'banana', 'chicken'],
            expected: 'banana',
            isPublic: false,
            description: 'Mixed with "banana" appearing first, should return "banana"',
        },
        {
            input: ['fruit', 'vegetable', 'meat'],
            expected: 'none',
            isPublic: false,
            description: 'No target strings present, should return "none"',
        },
        {
            input: ['orange', 'orange', 'chicken'],
            expected: 'chicken',
            isPublic: false,
            description: 'Only "chicken" in third position, should return "chicken"',
        },
        {
            input: ['grape', 'grape', 'banana'],
            expected: 'banana',
            isPublic: false,
            description: 'Only "banana" in third position, should return "banana"',
        },
        {
            input: ['chicken', 'apple', 'orange'],
            expected: 'chicken',
            isPublic: false,
            description: 'Only "chicken" in first position, should return "chicken"',
        },
        {
            input: ['banana', 'apple', 'orange'],
            expected: 'banana',
            isPublic: false,
            description: 'Only "banana" in first position, should return "banana"',
        },
        {
            input: ['apple', 'chicken', 'orange'],
            expected: 'chicken',
            isPublic: false,
            description: 'Only "chicken" in second position, should return "chicken"',
        },
        {
            input: ['apple', 'banana', 'orange'],
            expected: 'banana',
            isPublic: false,
            description: 'Only "banana" in second position, should return "banana"',
        },
        {
            input: ['banana', 'chicken', 'banana'],
            expected: 'banana',
            isPublic: false,
            description: '"banana" appears first, should return "banana"',
        },
        {
            input: ['chicken', 'banana', 'chicken'],
            expected: 'chicken',
            isPublic: false,
            description: '"chicken" appears first, should return "chicken"',
        },
        {
            input: ['', '', ''],
            expected: 'none',
            isPublic: false,
            description: 'Empty strings, should return "none"',
        },
        {
            input: ['food', 'drink', 'snack'],
            expected: 'none',
            isPublic: false,
            description: 'Different words, no target strings, should return "none"',
        },
    ],
    options: {
        type: 'JSON',
    },
};
