function sumFrom1ToN(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum = sum + i;
    }
    return sum;
}

module.exports = sumFrom1ToN;

// examples

console.log(sumFrom1ToN(4)); // 10
console.log(sumFrom1ToN(6)); // 21
