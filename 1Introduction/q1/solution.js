function makeMessage(name, yearOfBirth, currentYear) {
    const age = currentYear - yearOfBirth;
    return name + ' ( ' + age + ')';
}

module.exports = makeMessage;

// examples

console.log(makeMessage('John', 1994, 2025)); // "John (31)"
