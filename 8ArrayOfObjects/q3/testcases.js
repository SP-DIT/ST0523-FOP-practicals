module.exports = {
    testcases: [
        {
            input: [
                [
                    { username: 'Alice', password: 'password123' },
                    { username: 'Bob', password: 'myPass456' },
                ],
                { username: 'Alice', password: 'password123' },
            ],
            expected: 'Success',
            isPublic: true,
            description: 'Returns Success when first account matches username and password',
        },
        {
            input: [
                [
                    { username: 'Alice', password: 'password123' },
                    { username: 'Bob', password: 'myPass456' },
                ],
                { username: 'Bob', password: 'wrongPass' },
            ],
            expected: 'Wrong Password',
            isPublic: true,
            description: 'Returns Wrong Password when username exists but password is incorrect',
        },
        {
            input: [
                [
                    { username: 'Alice', password: 'password123' },
                    { username: 'Bob', password: 'myPass456' },
                ],
                { username: 'Charlie', password: 'charliePass789' },
            ],
            expected: 'User Not Found',
            isPublic: true,
            description: 'Returns User Not Found when username does not exist',
        },
        {
            input: [
                [
                    { username: 'Diana', password: 'abcDEF123' },
                    { username: 'Evan', password: 'pass222' },
                ],
                { username: 'Diana', password: 'abcDEF123' },
            ],
            expected: 'Success',
            isPublic: false,
            description: 'Handles case-sensitive matching with exact same mixed-case password',
        },
        {
            input: [
                [
                    { username: 'Fiona', password: 'abcDEF123' },
                    { username: 'Gabe', password: 'otherPass' },
                ],
                { username: 'Fiona', password: 'ABCdef123' },
            ],
            expected: 'Wrong Password',
            isPublic: false,
            description: 'Password check is case-sensitive and should fail for different case',
        },
        {
            input: [[{ username: 'Hana', password: '' }], { username: 'Hana', password: '' }],
            expected: 'Success',
            isPublic: false,
            description: 'Allows empty-string password when both stored and attempt passwords match',
        },
        {
            input: [[{ username: 'Ian', password: '' }], { username: 'Ian', password: 'notEmpty' }],
            expected: 'Wrong Password',
            isPublic: false,
            description: 'Returns Wrong Password for non-empty attempt against empty stored password',
        },
        {
            input: [[{ username: '', password: 'blankUserPw' }], { username: '', password: 'blankUserPw' }],
            expected: 'Success',
            isPublic: false,
            description: 'Matches empty-string username when credentials are correct',
        },
        {
            input: [[{ username: '', password: 'blankUserPw' }], { username: '', password: 'wrong' }],
            expected: 'Wrong Password',
            isPublic: false,
            description: 'Returns Wrong Password for empty username with incorrect password',
        },
        {
            input: [[], { username: 'Jack', password: 'pw' }],
            expected: 'User Not Found',
            isPublic: false,
            description: 'Returns User Not Found when accounts array is empty',
        },
        {
            input: [
                [
                    { username: 'Ken', password: 'pw1' },
                    { username: 'Lia', password: 'pw2' },
                    { username: 'Mia', password: 'pw3' },
                ],
                { username: 'Mia', password: 'pw3' },
            ],
            expected: 'Success',
            isPublic: false,
            description: 'Finds a successful login for username at the end of the accounts list',
        },
        {
            input: [
                [
                    { username: 'Noah', password: 'pass-noah' },
                    { username: 'Owen', password: 'pass-owen' },
                    { username: 'Pia', password: 'pass-pia' },
                ],
                { username: 'Owen', password: 'wrong-owen' },
            ],
            expected: 'Wrong Password',
            isPublic: false,
            description: 'Returns Wrong Password when middle username exists with incorrect password',
        },
        {
            input: [
                [
                    { username: 'Quin', password: 'Q123' },
                    { username: 'Ray', password: 'R123' },
                    { username: 'Sara', password: 'S123' },
                ],
                { username: 'Tina', password: 'T123' },
            ],
            expected: 'User Not Found',
            isPublic: false,
            description: 'Returns User Not Found for non-existent username among multiple accounts',
        },
        {
            input: [[{ username: 'Uma', password: 'with space' }], { username: 'Uma', password: 'with space' }],
            expected: 'Success',
            isPublic: false,
            description: 'Handles passwords containing spaces when exact match is provided',
        },
        {
            input: [[{ username: 'Vic', password: 'trail ' }], { username: 'Vic', password: 'trail' }],
            expected: 'Wrong Password',
            isPublic: false,
            description: 'Does not trim trailing spaces during password comparison',
        },
        {
            input: [[{ username: 'Wen', password: 'p@ssword!' }], { username: 'Wen', password: 'p@ssword!' }],
            expected: 'Success',
            isPublic: false,
            description: 'Handles special characters in password for successful login',
        },
        {
            input: [[{ username: "Xia O'Neil", password: "xia'pw" }], { username: "Xia O'Neil", password: "xia'pw" }],
            expected: 'Success',
            isPublic: false,
            description: 'Handles apostrophes in both username and password strings',
        },
        {
            input: [[{ username: 'Yan_01', password: 'pw_01' }], { username: 'Yan_01', password: 'pw_01' }],
            expected: 'Success',
            isPublic: false,
            description: 'Handles underscore characters in credentials',
        },
        {
            input: [[{ username: 'Zed-User', password: 'pw-123' }], { username: 'Zed-User', password: 'pw-124' }],
            expected: 'Wrong Password',
            isPublic: false,
            description: 'Handles hyphenated credentials and detects incorrect password',
        },
        {
            input: [
                [
                    { username: 'a', password: '1' },
                    { username: 'b', password: '2' },
                    { username: 'c', password: '3' },
                    { username: 'd', password: '4' },
                ],
                { username: 'd', password: '4' },
            ],
            expected: 'Success',
            isPublic: false,
            description: 'Works with short one-character credentials at last position',
        },
    ],
};
