function displayName(firstName, lastName) {
    const fullName = firstName + ' ' + lastName;
    return fullName;
}

module.exports = displayName;

// examples

console.log(displayName('John', 'Tan')); // "John Tan"
