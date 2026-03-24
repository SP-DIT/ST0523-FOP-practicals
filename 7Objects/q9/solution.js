function changePassword(account, oldPassword, newPassword) {
    if (account.password === oldPassword) {
        account.password = newPassword;
    }

    return account;
}

module.exports = changePassword;

// examples

console.log(changePassword({ username: 'Alice', password: 'oldPw123' }, 'oldPw123', 'newSecurePw456')); // { username: 'Alice', password: 'newSecurePw456' }
console.log(changePassword({ username: 'Bob', password: 'myOldPass789' }, 'wrongOldPass', 'newPass123')); // { username: 'Bob', password: 'myOldPass789' }
console.log(changePassword({ username: 'Charlie', password: 'charliePass456' }, 'charliePass456', 'charlieNewPass789')); // { username: 'Charlie', password: 'charlieNewPass789' }
