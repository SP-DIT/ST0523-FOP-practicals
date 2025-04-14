/**
 * Find the first n numbers whose digits sum to the target k.
 *
 * @param {number} n - The number of elements to find.
 * @param {number} k - The target sum of the digits.
 *
 * @returns {number[]} - An array of the first n numbers whose digits sum to the target k.
 *
 * @example
 * digitsSumToTarget(5, 5); // [5, 14, 23, 32, 41]
 * digitsSumToTarget(3, 10); // [19, 28, 37]
 *
 * @explanation
 * In the first example, the first 5 numbers whose digits sum to 5 are 5, 14, 23, 32, and 41.
 *  5 = 5
 *  14 = 1 + 4 = 5
 *  23 = 2 + 3 = 5
 *  32 = 3 + 2 = 5
 *  41 = 4 + 1 = 5
 *
 * In the second example, the first 3 numbers whose digits sum to 10 are 19, 28, and 37.
 *  19 = 1 + 9 = 10
 *  28 = 2 + 8 = 10
 *  37 = 3 + 7 = 10
 *
 * Hint: Refer to the digitSum function in ../4Loops/q6/code.js
 */
function digitSum(n) {
    let sum = 0;
    for (let i = 0; i < (n + '').length; i++) {
        const digit = Math.floor(n / 10 ** i) % 10;
        sum += digit;
    }
    return sum;
}

function digitsSumToTarget(n, k) {
    // Write your code here
    let result = [];
    let num = 0;
    while (result.length < n) {
        if (digitSum(num) === k) {
            result.push(num);
        }
        num++;
    }
    return result;
}

// Your own test cases
// e.g.;

// console.log(digitsSumToTarget([5, 5])); // [5, 14, 23, 32, 41]

// To test your code against the test cases: node run.js q1
// To test your code against custom input: node ./q1/code.js

module.exports = digitsSumToTarget;
