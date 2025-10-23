function isEven(x) {
    return x % 2 === 0;
}

function sumEvenNumbers(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        if (isEven(i)) {
            sum = sum + i;
        }
    }
    return sum;
}

module.exports = sumEvenNumbers;

// examples

console.log(sumEvenNumbers(5)); // 6 (2 + 4)
console.log(sumEvenNumbers(10)); // 30 (2 + 4 + 6 + 8 + 10)