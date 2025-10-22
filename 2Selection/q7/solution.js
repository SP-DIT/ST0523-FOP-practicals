function bigger(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}

function biggest(a, b, c, d) {
    // do not use if-statements here
    return bigger(bigger(bigger(a, b), c), d);
}

module.exports = { bigger, biggest };

// examples

console.log(biggest(1, 2, 3, 4)); // 4
console.log(biggest(3, 2, 5, 1)); // 5
console.log(biggest(9, 9, 9, 9)); // 9
