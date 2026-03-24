function calculateGCD(a, b) {
    if (a <= 0 || b <= 0) {
        return -1;
    }

    let x = a;
    let y = b;

    if (x < y) {
        let temp = x;
        x = y;
        y = temp;
    }

    while (y !== 0) {
        let remainder = x % y;
        x = y;
        y = remainder;
    }

    return x;
}

// examples

console.log(calculateGCD(48, 18)); // should return 6
console.log(calculateGCD(56, 98)); // should return 14
console.log(calculateGCD(101, 10)); // should return 1

module.exports = calculateGCD;
