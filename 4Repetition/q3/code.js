function isPrime(num) {
    if (num <= 1) {
        // 0, 1 and negative numbers are not prime
        return false;
    }

    for (let i = 2; i <= num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

// examples

console.log(isPrime(2)); // true
console.log(isPrime(3)); // true
console.log(isPrime(4)); // false
console.log(isPrime(5)); // true
console.log(isPrime(10)); // false

module.exports = isPrime;
