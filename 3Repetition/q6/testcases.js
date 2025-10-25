module.exports = {
    testcases: [
        // Public test cases (first 3)
        {
            input: ['apple'],
            expected: 2,
            isPublic: true,
            description: 'Count vowels in "apple" -> a, e = 2',
        },
        {
            input: ['javascript'],
            expected: 3,
            isPublic: true,
            description: 'Count vowels in "javascript" -> a, a, i = 3',
        },
        {
            input: ['sky'],
            expected: 0,
            isPublic: true,
            description: 'Count vowels in "sky" -> none = 0',
        },

        // Hidden test cases
        {
            input: [''],
            expected: 0,
            isPublic: false,
            description: 'Empty string should return 0',
        },
        {
            input: ['a'],
            expected: 1,
            isPublic: false,
            description: 'Single vowel "a" should return 1',
        },
        {
            input: ['b'],
            expected: 0,
            isPublic: false,
            description: 'Single consonant "b" should return 0',
        },
        {
            input: ['hello'],
            expected: 2,
            isPublic: false,
            description: 'Count vowels in "hello" -> e, o = 2',
        },
        {
            input: ['aeiou'],
            expected: 5,
            isPublic: false,
            description: 'All lowercase vowels "aeiou" should return 5',
        },
        {
            input: ['AEIOU'],
            expected: 5,
            isPublic: false,
            description: 'All uppercase vowels "AEIOU" should return 5',
        },
        {
            input: ['bcdfg'],
            expected: 0,
            isPublic: false,
            description: 'Only consonants "bcdfg" should return 0',
        },
        {
            input: ['Education'],
            expected: 5,
            isPublic: false,
            description: 'Mixed case "Education" -> E, u, a, i, o = 5',
        },
        {
            input: ['programming'],
            expected: 3,
            isPublic: false,
            description: 'Count vowels in "programming" -> o, a, i = 3',
        },
        {
            input: ['xyz'],
            expected: 0,
            isPublic: false,
            description: 'No vowels in "xyz" should return 0',
        },
        {
            input: ['beautiful'],
            expected: 5,
            isPublic: false,
            description: 'Count vowels in "beautiful" -> e, a, u, i, u = 5',
        },
        {
            input: ['rhythm'],
            expected: 0,
            isPublic: false,
            description: 'No vowels in "rhythm" should return 0',
        },
        {
            input: ['AaEeIiOoUu'],
            expected: 10,
            isPublic: false,
            description: 'Mixed case vowels should count all 10',
        },
        {
            input: ['queue'],
            expected: 4,
            isPublic: false,
            description: 'Count vowels in "queue" -> u, e, u, e = 4',
        },
        {
            input: ['I'],
            expected: 1,
            isPublic: false,
            description: 'Single uppercase vowel "I" should return 1',
        },
        {
            input: ['computer'],
            expected: 3,
            isPublic: false,
            description: 'Count vowels in "computer" -> o, u, e = 3',
        },
        {
            input: ['world'],
            expected: 1,
            isPublic: false,
            description: 'Count vowels in "world" -> o = 1',
        },
    ],
    options: {
        type: 'JSON',
    },
};
