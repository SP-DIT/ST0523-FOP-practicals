function isDivisibleBy(x, y) {
    return x % y === 0;
}

function fizzbuzz(x) {
    if (isDivisibleBy(x, 3) && isDivisibleBy(x, 5)) {
        return 'fizzbuzz';
    } else if (isDivisibleBy(x, 3)) {
        return 'fizz';
    } else if (isDivisibleBy(x, 5)) {
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
