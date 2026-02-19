module.exports = {
    testcases: [
        // Public test cases (first 3)
        {
            input: ['#', '%', '*', 'message'],
            expected: '###%%*message*%%###',
            isPublic: true,
            description: 'Basic example from README: wrapper("#", "%", "*", "message") = "###%%*message*%%###"',
        },
        {
            input: ['@', 'B', '(', 'message'],
            expected: '@@@BB(message(BB@@@',
            isPublic: true,
            description: 'Second README example: wrapper("@", "B", "(", "message") = "@@@BB(message(BB@@@"',
        },
        {
            input: ['X', 'Y', 'Z', 'hello'],
            expected: 'XXXYYZhelloZYYXXX',
            isPublic: true,
            description: 'Simple letters: wrapper("X", "Y", "Z", "hello") = "XXXYYZhelloZYYXXX"',
        },

        // Private test cases
        {
            input: ['a', 'b', 'c', ''],
            expected: 'aaabbccbbaaa',
            isPublic: false,
            description: 'Empty message: wrapper("a", "b", "c", "") = "aaabbccbbaaa"',
        },
        {
            input: ['1', '2', '3', 'test'],
            expected: '111223test322111',
            isPublic: false,
            description: 'Numeric characters: wrapper("1", "2", "3", "test") = "111223test322111"',
        },
        {
            input: ['!', '?', '.', 'punctuation'],
            expected: '!!!??.punctuation.??!!!',
            isPublic: false,
            description: 'Punctuation chars: wrapper("!", "?", ".", "punctuation") = "!!!??.punctuation.??!!!"',
        },
        {
            input: [' ', '-', '|', 'spaces'],
            expected: '   --|spaces|--   ',
            isPublic: false,
            description: 'Space and symbols: wrapper(" ", "-", "|", "spaces") = "   --|spaces|--   "',
        },
        {
            input: ['A', 'A', 'A', 'same'],
            expected: 'AAAAAAsameAAAAAA',
            isPublic: false,
            description: 'All same characters: wrapper("A", "A", "A", "same") = "AAAAAAsameAAAAAA"',
        },
        {
            input: ['0', '1', '0', 'binary'],
            expected: '000110binary011000',
            isPublic: false,
            description: 'Binary-like pattern: wrapper("0", "1", "0", "binary") = "000110binary011000"',
        },
        {
            input: ['<', '>', '=', 'code'],
            expected: '<<<>>=code=>><<<',
            isPublic: false,
            description: 'Programming symbols: wrapper("<", ">", "=", "code") = "<<<>>=code=>><<<"',
        },
        {
            input: ['*', '+', '-', 'math'],
            expected: '***++-math-++***',
            isPublic: false,
            description: 'Math operators: wrapper("*", "+", "-", "math") = "***++-math-++***"',
        },
        {
            input: ['"', "'", '`', 'quotes'],
            expected: '"""\'\'`quotes`\'\'"""',
            isPublic: false,
            description: 'Quote characters: wrapper(""", "\'", "`", "quotes") = """\'\'`quotes`\'\'""""',
        },
        {
            input: ['[', ']', '{', 'brackets'],
            expected: '[[[]]{brackets{]][[[',
            isPublic: false,
            description: 'Bracket characters: wrapper("[", "]", "{", "brackets") = "[[[]]{brackets{]][[["',
        },
        {
            input: ['a', 'b', 'c', 'a'],
            expected: 'aaabbcacbbaaa',
            isPublic: false,
            description: 'Single char message: wrapper("a", "b", "c", "a") = "aaabbcacbbaaa"',
        },
        {
            input: ['z', 'y', 'x', 'reverse'],
            expected: 'zzzyyxreversexyyzzz',
            isPublic: false,
            description: 'Reverse alphabet: wrapper("z", "y", "x", "reverse") = "zzzyyxreversexyyzzz"',
        },
        {
            input: ['&', '$', '%', 'symbols'],
            expected: '&&&$$%symbols%$$&&&',
            isPublic: false,
            description: 'Special symbols: wrapper("&", "$", "%", "symbols") = "&&&$$%symbols%$$&&&"',
        },
        {
            input: ['7', '8', '9', '123'],
            expected: '777889123988777',
            isPublic: false,
            description: 'High digits: wrapper("7", "8", "9", "123") = "777889123988777"',
        },
        {
            input: ['/', '\\', '|', 'paths'],
            expected: '///\\\\|paths|\\\\///',
            isPublic: false,
            description: 'Path separators: wrapper("/", "\\", "|", "paths") = "///\\\\|paths|\\\\///"',
        },
        {
            input: ['~', '^', '_', 'tilde'],
            expected: '~~~^^_tilde_^^~~~',
            isPublic: false,
            description: 'Tilde and caret: wrapper("~", "^", "_", "tilde") = "~~~^^_tilde_^^~~~"',
        },
        {
            input: ['o', 'O', '0', 'circles'],
            expected: 'oooOO0circles0OOooo',
            isPublic: false,
            description: 'O variations: wrapper("o", "O", "0", "circles") = "oooOO0circles0OOooo"',
        },
    ],
    options: {
        type: 'JSON',
    },
};
