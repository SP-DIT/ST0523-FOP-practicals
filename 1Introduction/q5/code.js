function displayName(firstName, lastName) {
    const full name = firstName + ' ' + lastName;
    return full name;
}

module.exports = displayName;

// examples

console.log(displayName('John', 'Tan')); // "John Tan"
