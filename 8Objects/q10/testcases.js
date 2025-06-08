module.exports = {
    testcases: [
        {
            input: ['John', '01/01/2000', 'Alice', 'Bob', 'Charlie'],
            expected: {
                name: 'John',
                birthday: '01/01/2000',
                friends: ['Alice', 'Bob', 'Charlie'],
            },
        },
        {
            input: ['Alice', '02/02/2001', 'Bob', 'Charlie', 'David'],
            expected: {
                name: 'Alice',
                birthday: '02/02/2001',
                friends: ['Bob', 'Charlie', 'David'],
            },
        },
        {
            input: ['Bob', '03/03/2002', 'Charlie', 'David', 'Eve'],
            expected: {
                name: 'Bob',
                birthday: '03/03/2002',
                friends: ['Charlie', 'David', 'Eve'],
            },
        },
        {
            input: ['Charlie', '04/04/2003', 'David', 'Eve', 'Frank'],
            expected: {
                name: 'Charlie',
                birthday: '04/04/2003',
                friends: ['David', 'Eve', 'Frank'],
            },
        },
    ],
    options: {
        type: 'JSON',
    },
};
