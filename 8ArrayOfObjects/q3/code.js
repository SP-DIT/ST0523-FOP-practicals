function login(accounts, loginAttempt) {
    // Your code here
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
