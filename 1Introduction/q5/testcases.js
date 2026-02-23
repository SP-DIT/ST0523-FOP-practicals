module.exports = {
    testcases: [
        // Public test cases (first 3)
        {
            input: ['John', 'Tan'],
            expected: 'John Tan',
            isPublic: true,
            description: 'Example from README: displayName("John", "Tan") should be "John Tan"',
        },
        {
            input: ['Mary', 'Lee'],
            expected: 'Mary Lee',
            isPublic: true,
            description: 'Basic two-word full name should be joined with one space',
        },
        {
            input: ['Ali', 'Bin'],
            expected: 'Ali Bin',
            isPublic: true,
            description: 'Another simple case with standard names',
        },

        // Private test cases
        {
            input: ['A', 'B'],
            expected: 'A B',
            isPublic: false,
            description: 'Single-character names should be joined correctly',
        },
        {
            input: ['', ''],
            expected: ' ',
            isPublic: false,
            description: 'Both empty strings should still produce one separating space',
        },
        {
            input: ['Tom', ''],
            expected: 'Tom ',
            isPublic: false,
            description: 'Empty last name should preserve trailing separator',
        },
        {
            input: ['', 'Jerry'],
            expected: ' Jerry',
            isPublic: false,
            description: 'Empty first name should preserve leading separator',
        },
        {
            input: ['Tom Tan', 'Junior'],
            expected: 'Tom Tan Junior',
            isPublic: false,
            description: 'First name containing a space should be preserved',
        },
        {
            input: ['Anne-Marie', 'Ng'],
            expected: 'Anne-Marie Ng',
            isPublic: false,
            description: 'Hyphenated first name should be preserved',
        },
        {
            input: ["O'Neil", 'Smith'],
            expected: "O'Neil Smith",
            isPublic: false,
            description: 'Apostrophe in first name should be preserved',
        },
        {
            input: ['Li', '李'],
            expected: 'Li 李',
            isPublic: false,
            description: 'Unicode last name should be handled correctly',
        },
        {
            input: ['Élodie', 'Durand'],
            expected: 'Élodie Durand',
            isPublic: false,
            description: 'Accented characters should be preserved',
        },
        {
            input: ['  Bob', 'Tan  '],
            expected: '  Bob Tan  ',
            isPublic: false,
            description: 'Leading/trailing spaces in names should be preserved',
        },
        {
            input: ['Name123', 'X9'],
            expected: 'Name123 X9',
            isPublic: false,
            description: 'Alphanumeric names should concatenate as-is',
        },
        {
            input: [0, 1],
            expected: '0 1',
            isPublic: false,
            description: 'Numeric inputs should be coerced to strings via concatenation',
        },
        {
            input: [42, 'Tan'],
            expected: '42 Tan',
            isPublic: false,
            description: 'Numeric first name should be handled by string concatenation',
        },
        {
            input: ['John', true],
            expected: 'John true',
            isPublic: false,
            description: 'Boolean last name should be coerced to string',
        },
        {
            input: [false, 'Lim'],
            expected: 'false Lim',
            isPublic: false,
            description: 'Boolean first name should be coerced to string',
        },
        {
            input: [null, 'Tan'],
            expected: 'null Tan',
            isPublic: false,
            description: 'Null first name should be coerced to string',
        },
        {
            input: ['Jane', undefined],
            expected: 'Jane undefined',
            isPublic: false,
            description: 'Undefined last name should be coerced to string',
        },
    ],
};
