module.exports = {
    testcases: [
        {
            input: [
                [
                    { username: 'Alice', password: 'password123' },
                    { username: 'Bob', password: 'myPass456' },
                ],
                'Alice',
            ],
            expected: [{ username: 'Bob', password: 'myPass456' }],
            isPublic: true,
            description: 'Removes first user from a two-account list',
        },
        {
            input: [
                [
                    { username: 'Charlie', password: 'charliePass789' },
                    { username: 'David', password: 'davidPass456' },
                ],
                'Charlie',
            ],
            expected: [{ username: 'David', password: 'davidPass456' }],
            isPublic: true,
            description: 'Removes matching user and keeps the non-matching one',
        },
        {
            input: [
                [
                    { username: 'Eve', password: 'evePass123' },
                    { username: 'Frank', password: 'frankPass456' },
                ],
                'Grace',
            ],
            expected: [
                { username: 'Eve', password: 'evePass123' },
                { username: 'Frank', password: 'frankPass456' },
            ],
            isPublic: true,
            description: 'Returns original list when username to delete is not found',
        },
        {
            input: [
                [
                    { username: 'A', password: 'a1' },
                    { username: 'B', password: 'b1' },
                    { username: 'C', password: 'c1' },
                ],
                'B',
            ],
            expected: [
                { username: 'A', password: 'a1' },
                { username: 'C', password: 'c1' },
            ],
            isPublic: false,
            description: 'Removes user in the middle of three accounts',
        },
        {
            input: [
                [
                    { username: 'A', password: 'a1' },
                    { username: 'B', password: 'b1' },
                    { username: 'C', password: 'c1' },
                ],
                'C',
            ],
            expected: [
                { username: 'A', password: 'a1' },
                { username: 'B', password: 'b1' },
            ],
            isPublic: false,
            description: 'Removes last user from list correctly',
        },
        {
            input: [[{ username: 'Solo', password: 'one' }], 'Solo'],
            expected: [],
            isPublic: false,
            description: 'Returns empty array when the only user is removed',
        },
        {
            input: [[{ username: 'Solo', password: 'one' }], 'Other'],
            expected: [{ username: 'Solo', password: 'one' }],
            isPublic: false,
            description: 'Keeps single account when username does not match',
        },
        {
            input: [[], 'Nobody'],
            expected: [],
            isPublic: false,
            description: 'Handles empty accounts array input',
        },
        {
            input: [
                [
                    { username: 'dup', password: '1' },
                    { username: 'keep', password: '2' },
                    { username: 'dup', password: '3' },
                ],
                'dup',
            ],
            expected: [{ username: 'keep', password: '2' }],
            isPublic: false,
            description: 'Removes all matching usernames when duplicates exist',
        },
        {
            input: [
                [
                    { username: 'Alice', password: '1' },
                    { username: 'Bob', password: '2' },
                ],
                'alice',
            ],
            expected: [
                { username: 'Alice', password: '1' },
                { username: 'Bob', password: '2' },
            ],
            isPublic: false,
            description: 'Username comparison is case-sensitive',
        },
        {
            input: [
                [
                    { username: 'user one', password: 'p1' },
                    { username: 'user two', password: 'p2' },
                ],
                'user one',
            ],
            expected: [{ username: 'user two', password: 'p2' }],
            isPublic: false,
            description: 'Handles usernames containing spaces',
        },
        {
            input: [
                [
                    { username: 'Ken ', password: 'p1' },
                    { username: 'Lia', password: 'p2' },
                ],
                'Ken',
            ],
            expected: [
                { username: 'Ken ', password: 'p1' },
                { username: 'Lia', password: 'p2' },
            ],
            isPublic: false,
            description: 'Does not trim whitespace in username comparison',
        },
        {
            input: [
                [
                    { username: 'Mia', password: 'pw', role: 'admin' },
                    { username: 'Noah', password: 'pw2', role: 'user' },
                ],
                'Mia',
            ],
            expected: [{ username: 'Noah', password: 'pw2', role: 'user' }],
            isPublic: false,
            description: 'Preserves extra properties on remaining account objects',
        },
        {
            input: [
                [
                    { username: 'Owen', password: 'o' },
                    { username: 'Pia', password: 'p' },
                    { username: 'Quin', password: 'q' },
                    { username: 'Ray', password: 'r' },
                ],
                'Pia',
            ],
            expected: [
                { username: 'Owen', password: 'o' },
                { username: 'Quin', password: 'q' },
                { username: 'Ray', password: 'r' },
            ],
            isPublic: false,
            description: 'Removes second user from a four-account list',
        },
        {
            input: [
                [
                    { username: 'Sara', password: 's' },
                    { username: 'Tina', password: 't' },
                    { username: 'Uma', password: 'u' },
                    { username: 'Vic', password: 'v' },
                ],
                'Wen',
            ],
            expected: [
                { username: 'Sara', password: 's' },
                { username: 'Tina', password: 't' },
                { username: 'Uma', password: 'u' },
                { username: 'Vic', password: 'v' },
            ],
            isPublic: false,
            description: 'Returns unchanged list when delete target is absent in longer array',
        },
        {
            input: [
                [
                    { username: 'x-user', password: 'x1' },
                    { username: 'y_user', password: 'y1' },
                ],
                'x-user',
            ],
            expected: [{ username: 'y_user', password: 'y1' }],
            isPublic: false,
            description: 'Handles hyphen and underscore usernames correctly',
        },
        {
            input: [
                [
                    { username: "O'Neil", password: 'p1' },
                    { username: 'Pat', password: 'p2' },
                ],
                "O'Neil",
            ],
            expected: [{ username: 'Pat', password: 'p2' }],
            isPublic: false,
            description: 'Handles apostrophe in username value',
        },
        {
            input: [
                [
                    { username: '123user', password: 'p1' },
                    { username: 'normal', password: 'p2' },
                ],
                '123user',
            ],
            expected: [{ username: 'normal', password: 'p2' }],
            isPublic: false,
            description: 'Handles numeric-looking usernames as strings',
        },
        {
            input: [
                [
                    { username: '', password: 'blank' },
                    { username: 'nonblank', password: 'nb' },
                ],
                '',
            ],
            expected: [{ username: 'nonblank', password: 'nb' }],
            isPublic: false,
            description: 'Can remove account with empty-string username',
        },
        {
            input: [
                [
                    { username: 'dup', password: 'a' },
                    { username: 'dup', password: 'b' },
                    { username: 'dup', password: 'c' },
                ],
                'dup',
            ],
            expected: [],
            isPublic: false,
            description: 'Returns empty array when all accounts match delete username',
        },
    ],
    options: {
        type: 'JSON',
    },
};
