function deleteUser(accounts, usernameToDelete) {
    const updatedAccounts = [];

    for (let i = 0; i < accounts.length; i++) {
        if (accounts[i].username !== usernameToDelete) {
            updatedAccounts.push(accounts[i]);
        }
    }

    return updatedAccounts;
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
