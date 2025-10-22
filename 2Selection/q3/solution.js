function fizzbuzz(x) {
    if (x % 3 === 0 && x % 5 === 0) {
        return 'fizzbuzz';
    } else if (x % 3 === 0) {
        return 'fizz';
    } else if (x % 5 === 0) {
        return 'buzz';
    } else {
        return x;
    }
}

module.exports = fizzbuzz;

// examples

console.log(fizzbuzz(3)); // "fizz"
console.log(fizzbuzz(5)); // "buzz"
console.log(fizzbuzz(15)); // "fizzbuzz"
console.log(fizzbuzz(16)); // 16
console.log(fizzbuzz(9)); // "fizz"
console.log(fizzbuzz(10)); // "buzz"
console.log(fizzbuzz(30)); // "fizzbuzz"
