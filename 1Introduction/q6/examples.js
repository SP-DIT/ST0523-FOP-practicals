// Example 1 - Uses 12 +

function wrapper(a, b, c, message) {
    return a + a + a + b + b + c + message + c + b + b + a + a + a; // all 12 times here
}

// Example 2 - Uses 7 +

function builder(a, b, c, d, e, f) {
    return a + b + c + d + e + f; // 5 times here
}

function wrapper(a, b, c, message) {
    return builder(a, a, a, b, b, c) + message + builder(c, b, b, a, a, a); // 2 times here
}
