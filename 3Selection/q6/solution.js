function isDivisibleBy(x, y) {
    return x % y === 0;
}

module.exports = isDivisibleBy;

// examples

console.log(isDivisibleBy(5, 3)); // false, 5 divided by 3 has remainder of 2
console.log(isDivisibleBy(10, 3)); // false, 10 divided by 3 has remainder of 1
console.log(isDivisibleBy(10, 4)); // false, 10 divided by 4 has remainder of 2
console.log(isDivisibleBy(13, 5)); // false, 13 divided by 5 has remainder of 3
console.log(isDivisibleBy(15, 5)); // true, 15 divided by 5 has remainder of 0
console.log(isDivisibleBy(21, 7)); // true, 21 divided by 7 has remainder of 0
