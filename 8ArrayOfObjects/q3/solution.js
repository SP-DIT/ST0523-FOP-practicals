function login(accounts, loginAttempt) {
    for (let i = 0; i < accounts.length; i++) {
        if (accounts[i].username === loginAttempt.username) {
            if (accounts[i].password === loginAttempt.password) {
                return 'Success';
            }
            return 'Wrong Password';
        }
    }

    return 'User Not Found';
}

module.exports = login;

// examples

console.log(
    login(
        [
            { username: 'Alice', password: 'password123' },
            { username: 'Bob', password: 'myPass456' },
        ],
        { username: 'Alice', password: 'password123' },
    ),
); // "Success"
console.log(
    login(
        [
            { username: 'Alice', password: 'password123' },
            { username: 'Bob', password: 'myPass456' },
        ],
        { username: 'Bob', password: 'wrongPass' },
    ),
); // "Wrong Password"
console.log(
    login(
        [
            { username: 'Alice', password: 'password123' },
            { username: 'Bob', password: 'myPass456' },
        ],
        { username: 'Charlie', password: 'charliePass789' },
    ),
); // "User Not Found"
