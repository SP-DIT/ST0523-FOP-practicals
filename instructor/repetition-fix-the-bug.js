// q1 fix the error in the code below
// The code is trying to sum from 1 to N (both inclusive)

function sumToN(n) {
    let sum = 0;
    for (let i = 0; i < n; i++) {
        sum += i;
    }
    return sum;
}

// Sample
console.log(sumToN(5)); // 1+2+3+4+5 = 15
console.log(sumToN(7)); // 1+2+3+4+5+6+7 = 28

// q2 fix the error in the code below
// the code is trying to find the factorial of a number n, which is the product of all positive integers less than or equal to n

function factorial(n) {
    let result = 1;
    for (let i = 0; i < n; i++) {
        result *= i;
    }
    return result;
}

// Sample
console.log(factorial(5)); // 5*4*3*2*1 = 120
console.log(factorial(7)); // 7*6*5*4*3*2*1 = 5040

// q3 fix the error in the code below
// the code is trying to check if a number is prime or not
// A number is prime if it is greater than 1 and has no positive divisors other than 1 and itself

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

// Sample
console.log(isPrime(2)); // true
console.log(isPrime(3)); // true
console.log(isPrime(4)); // false
console.log(isPrime(5)); // true
console.log(isPrime(10)); // false
