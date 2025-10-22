function biggest(a, b, c, d) {
    if (a >= b && a >= c && a >= d) {
        return a;
    } else if (b >= a && b >= c && b >= d) {
        return b;
    } else if (c >= a && c >= b && c >= d) {
        return c;
    } else {
        return d;
    }
}

module.exports = biggest;

// examples

console.log(biggest(1, 2, 3, 4)); // 4
console.log(biggest(3, 2, 5, 1)); // 5
console.log(biggest(9, 9, 9, 9)); // 9
