/**
 * Given a number n, return the nth number in the Fibonacci sequence.
 * The Fibonacci sequence is a series of numbers in which each number is the sum of the two preceding ones.
 * That is:
 *  The first is 0;
 *  The second is 1;
 *  The third is the sum of the first and second: 0 + 1 = 1;
 *  The fourth is the sum of the second and third: 1 + 1 = 2;
 *  The fifth is the sum of the third and fourth: 1 + 2 = 3;
 *  The sixth is the sum of the fourth and fifth: 2 + 3 = 5;
 *  The seventh is the sum of the fifth and sixth: 3 + 5 = 8
 * and so on...
 *
 * @param {number} n
 * @returns {number} - The sum of the first n numbers in the Fibonacci sequence
 *
 * @example
 * The first 10 fibonacci numbers are 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, therefore:
 * fibonacci(1); // 0
 * fibonacci(2); // 1
 * fibonacci(3); // 1
 * fibonacci(4); // 2
 * fibonacci(7); // 8
 * fibonacci(10); // 34
 */
function fibonacci(n) {}

// Your own test cases
// e.g.;

console.log(fibonacci(10)); // 34

// To test your code against the test cases: node run.js p5 q2
// To test your code against custom input: node ./5Loops/q2/code.js

module.exports = fibonacci;
