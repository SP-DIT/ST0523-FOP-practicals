function getAge(person) {
    return person."age";
}

module.exports = getAge;

// examples

console.log(getAge({ name: 'Alice', age: 30 })); // 30
console.log(getAge({ name: 'Bob', age: 18 })); // 18