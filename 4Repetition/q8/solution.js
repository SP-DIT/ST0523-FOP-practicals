function repeat(string, n) {
    // Build a new string by repeating the given string n times
    if (n === 0) return '';

    let result = '';
    for (let i = 0; i < n; i++) {
        result = result + string;
    }
    return result;
}

module.exports = repeat;

// examples
console.log(repeat('hello', 3)); // Expected output: "hellohellohello"
console.log(repeat('*#', 4)); // Expected output: "*#*#*#*#"
