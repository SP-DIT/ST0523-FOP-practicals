function chickenBanana(a, b, c) {
    if (a === 'chicken' && b === 'chicken' && c === 'chicken') {
        return 'CHICKEN!';
    } else if (a === 'banana' && b === 'banana' && c === 'banana') {
        return 'BANANA!';
    } else if (
        a === 'chicken' ||
        b === 'chicken' ||
        c === 'chicken' ||
        a === 'banana' ||
        b === 'banana' ||
        c === 'banana'
    ) {
        if (a === 'chicken' || a === 'banana') {
            return a;
        } else if (b === 'chicken' || b === 'banana') {
            return b;
        } else {
            return c;
        }
    } else {
        return 'none';
    }
}

module.exports = chickenBanana;

// examples

console.log(chickenBanana('chicken', 'chicken', 'chicken')); // "CHICKEN!"
console.log(chickenBanana('banana', 'banana', 'banana')); // "BANANA!"
console.log(chickenBanana('chicken', 'banana', 'apple')); // "chicken"
console.log(chickenBanana('apple', 'chicken', 'banana')); // "chicken"
console.log(chickenBanana('apple', 'banana', 'chicken')); // "banana"
console.log(chickenBanana('banana', 'apple', 'chicken')); // "banana"
console.log(chickenBanana('apple', 'orange', 'pear')); // "none"
