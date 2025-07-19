/**
 * The function `findNthPrimeNumber` is meant to return the nth prime number.
 * It uses the helper function `isPrimeNumber` to check if a number is prime.
 *
 * For example: 2 is the first prime, followed by 3, 5, 7, 11, ...
 *
 * @param {number} n - the position of the prime number to find (e.g. n = 1 returns 2).
 * @returns the nth prime number.
 *
 * @bug The while-loop has a bug that causes an infinite loop. Try to fix it!
 *
 */

function findNthPrimeNumber(n) {
    let numberOfPrimeFound = 1; // How many prime found so far
    let currentNumber = 2; // Current number to check, starting from first prime number
    while (numberOfPrimeFound < n) {
        // Trying to find `n` prime numbers
        currentNumber++; // Check the next number
        if (isPrimeNumber(currentNumber)) {
            // Check if the current number is a prime
            numberOfPrimeFound++; // if it is, increment the number of prime found so far
        }
    }
    return currentNumber; // Return the nth prime number
}

function isPrimeNumber(number) {
    for (let i = 2; i < number; i++) {
        if (number % i === 0) return false;
    }
    return true;
}

// Your own test cases
// e.g.;

console.log(findNthPrimeNumber(5)); // 11

module.exports = findNthPrimeNumber;
