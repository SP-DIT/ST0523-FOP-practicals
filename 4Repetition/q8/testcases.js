module.exports = {
    testcases: [
        // Public test cases (first 3)
        {
            input: ['hello', 3],
            expected: 'hellohellohello',
            isPublic: true,
            description: 'Repeat "hello" 3 times -> "hellohellohello"',
        },
        {
            input: ['*#', 4],
            expected: '*#*#*#*#',
            isPublic: true,
            description: 'Repeat "*#" 4 times -> "*#*#*#*#"',
        },
        {
            input: ['a', 5],
            expected: 'aaaaa',
            isPublic: true,
            description: 'Repeat single character "a" 5 times -> "aaaaa"',
        },

        // Hidden test cases
        {
            input: ['', 3],
            expected: '',
            isPublic: false,
            description: 'Empty string repeated any number of times should remain empty',
        },
        {
            input: ['hello', 0],
            expected: '',
            isPublic: false,
            description: 'Any string repeated 0 times should return empty string',
        },
        {
            input: ['test', 1],
            expected: 'test',
            isPublic: false,
            description: 'String repeated 1 time should return itself',
        },
        {
            input: ['x', 0],
            expected: '',
            isPublic: false,
            description: 'Single character repeated 0 times should return empty string',
        },
        {
            input: ['ab', 6],
            expected: 'abababababab',
            isPublic: false,
            description: 'Two characters repeated 6 times',
        },
        {
            input: ['123', 2],
            expected: '123123',
            isPublic: false,
            description: 'Numbers as string repeated 2 times',
        },
        {
            input: [' ', 4],
            expected: '    ',
            isPublic: false,
            description: 'Space character repeated 4 times',
        },
        {
            input: ['hi!', 3],
            expected: 'hi!hi!hi!',
            isPublic: false,
            description: 'String with punctuation repeated 3 times',
        },
        {
            input: ['word', 2],
            expected: 'wordword',
            isPublic: false,
            description: 'Four letter word repeated 2 times',
        },
        {
            input: ['z', 10],
            expected: 'zzzzzzzzzz',
            isPublic: false,
            description: 'Single character repeated 10 times',
        },
        {
            input: ['no', 7],
            expected: 'nonononononono',
            isPublic: false,
            description: 'Two letter word repeated 7 times',
        },
        {
            input: ['ABC', 4],
            expected: 'ABCABCABCABC',
            isPublic: false,
            description: 'Uppercase letters repeated 4 times',
        },
        {
            input: ['1', 8],
            expected: '11111111',
            isPublic: false,
            description: 'Single digit repeated 8 times',
        },
        {
            input: ['code', 5],
            expected: 'codecodecodecodecode',
            isPublic: false,
            description: 'Four letter word repeated 5 times',
        },
        {
            input: ['!@', 3],
            expected: '!@!@!@',
            isPublic: false,
            description: 'Special characters repeated 3 times',
        },
        {
            input: ['xy', 1],
            expected: 'xy',
            isPublic: false,
            description: 'Two characters repeated 1 time should return itself',
        },
        {
            input: ['long', 6],
            expected: 'longlonglonglonglonglong',
            isPublic: false,
            description: 'Four letter word repeated 6 times',
        },
    ],
    options: {
        type: 'JSON',
    },
};
