module.exports = {
    testcases: [
        // Public test cases (first 3)
        {
            input: ['Ali'],
            expected: 'Hello, Ali',
            isPublic: true,
            description: 'Example from README: greetings("Ali") should return "Hello, Ali"',
        },
        {
            input: ['John'],
            expected: 'Hello, John',
            isPublic: true,
            description: 'Basic name greeting for John',
        },
        {
            input: ['Mary'],
            expected: 'Hello, Mary',
            isPublic: true,
            description: 'Basic name greeting for Mary',
        },

        // Private test cases
        {
            input: ['A'],
            expected: 'Hello, A',
            isPublic: false,
            description: 'Single-letter name should be handled correctly',
        },
        {
            input: [''],
            expected: 'Hello, ',
            isPublic: false,
            description: 'Empty name should still keep greeting prefix',
        },
        {
            input: ['Tom Tan'],
            expected: 'Hello, Tom Tan',
            isPublic: false,
            description: 'Name with space should be concatenated correctly',
        },
        {
            input: ['Anne-Marie'],
            expected: 'Hello, Anne-Marie',
            isPublic: false,
            description: 'Name with hyphen should be preserved',
        },
        {
            input: ["O'Neil"],
            expected: "Hello, O'Neil",
            isPublic: false,
            description: 'Name with apostrophe should be preserved',
        },
        {
            input: ['Alice123'],
            expected: 'Hello, Alice123',
            isPublic: false,
            description: 'Alphanumeric name should be concatenated as-is',
        },
        {
            input: ['  Bob  '],
            expected: 'Hello,   Bob  ',
            isPublic: false,
            description: 'Leading/trailing spaces should be preserved',
        },
        {
            input: ['!@#$'],
            expected: 'Hello, !@#$',
            isPublic: false,
            description: 'Special characters should be preserved in greeting',
        },
        {
            input: ['李华'],
            expected: 'Hello, 李华',
            isPublic: false,
            description: 'Unicode name should be supported',
        },
        {
            input: ['Élodie'],
            expected: 'Hello, Élodie',
            isPublic: false,
            description: 'Accented characters should be preserved',
        },
        {
            input: ['VeryLongNameExample'],
            expected: 'Hello, VeryLongNameExample',
            isPublic: false,
            description: 'Long name should be handled correctly',
        },
        {
            input: ['Line\\nBreak'],
            expected: 'Hello, Line\\nBreak',
            isPublic: false,
            description: 'Escaped newline text should concatenate correctly',
        },
        {
            input: ['line\nbreak'],
            expected: 'Hello, line\nbreak',
            isPublic: false,
            description: 'Actual newline in name should be preserved',
        },
        {
            input: [0],
            expected: 'Hello, 0',
            isPublic: false,
            description: 'Numeric input 0 should convert to string in concatenation',
        },
        {
            input: [42],
            expected: 'Hello, 42',
            isPublic: false,
            description: 'Numeric input should concatenate as string',
        },
        {
            input: [true],
            expected: 'Hello, true',
            isPublic: false,
            description: 'Boolean true should concatenate as string',
        },
        {
            input: [false],
            expected: 'Hello, false',
            isPublic: false,
            description: 'Boolean false should concatenate as string',
        },
    ],
};
