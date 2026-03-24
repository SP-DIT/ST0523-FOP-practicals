function getName(person) {
    return person['name'];
}

module.exports = getName;

// examples

console.log(getName({ name: 'Alice', age: 30 })); // "Alice"
console.log(getName({ name: 'Bob', age: 25 })); // "Bob"
