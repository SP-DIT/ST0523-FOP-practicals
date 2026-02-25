function isALargest(a, b, c) {
    return a > b && a > c;
}

module.exports = isALargest;

// examples

console.log(isALargest(5, 3, 2)); // true
console.log(isALargest(5, 6, 2)); // false
console.log(isALargest(5, 3, 6)); // false
