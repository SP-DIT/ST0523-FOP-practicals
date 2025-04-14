/**
 * Sum the digits of a number
 *
 * @param {number} n - The number to sum the digits of
 *
 * @returns {number} - The sum of the digits of the number
 *
 * @example
 * digitSum(12345); // 1 + 2 + 3 + 4 + 5 = 15
 * digitSum(0); // 0
 * digitSum(2025); // 2 + 0 + 2 + 5 = 9
 *
 * Hint: You can access the nth digit of a number by dividing it by 10**(n-1) and taking the remainder when divided by 10.
 */
function digitSum(n) {
    let sum = 0;
    for (let i = 0; i < (n + '').length; i++) {
        const digit = Math.floor(n / 10 ** i) % 10;
        sum += digit;
    }
    return sum;
}

// Your own test cases
// e.g.;

console.log(digitSum(12345));

// To test your code against the test cases: node run.js q5
// To test your code against custom input: node ./q5/code.js

module.exports = digitSum;
