function deleteUser(accounts, usernameToDelete) {
    // Your code here
}

// examples

console.log(
    deleteUser(
        [
            { username: 'Alice', password: 'password123' },
            { username: 'Bob', password: 'myPass456' },
        ],
        'Alice',
    ),
); // [{ username: 'Bob', password: 'myPass456' }]
console.log(
    deleteUser(
        [
            { username: 'Charlie', password: 'charliePass789' },
            { username: 'David', password: 'davidPass456' },
        ],
        'Charlie',
    ),
); // [{ username: 'David', password: 'davidPass456' }]
console.log(
    deleteUser(
        [
            { username: 'Eve', password: 'evePass123' },
            { username: 'Frank', password: 'frankPass456' },
        ],
        'Grace',
    ),
); // [{ username: 'Eve', password: 'evePass123' }, { username: 'Frank', password: 'frankPass456' }]

module.exports = deleteUser;
