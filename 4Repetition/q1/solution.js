function sumToN(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

// examples

console.log(sumToN(5)); // 1+2+3+4+5 = 15
console.log(sumToN(7)); // 1+2+3+4+5+6+7 = 28

module.exports = sumToN;
