function bigger(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}

module.exports = bigger;

// examples

console.log(bigger(1, 2)); // 2
console.log(bigger(3, 2)); // 3
console.log(bigger(4, 4)); // 4
