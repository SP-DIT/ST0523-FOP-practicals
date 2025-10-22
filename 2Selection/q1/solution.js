function isEven(x) {
    return x % 2 === 0;
}

module.exports = isEven;

// examples

console.log(isEven(2)); // true
console.log(isEven(3)); // false
console.log(isEven(4)); // true
console.log(isEven(5)); // false
