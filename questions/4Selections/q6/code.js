/**
 * You are given a function that supposedly takes in 2 integer and decide if the first number is bigger than the second.
 * If the first number is bigger, it will return a positive number
 * If the second number is bigger, it will return a negative number
 * Otherwise, it will return a zero.
 *
 * You are to test whether the function is working correctly.
 *
 * @param {(int, int) => int} fn - The function to be tested
 * @returns {boolean} - True if the function is working as intended, false otherwise.
 *
 * @example
 * isCorrect(function(a, b) { return a - b; }) // true
 * isCorrect(function(a, b) { return b - a; }) // false
 * isCorrect(function(a, b) { return a > b; }) // false
 *
 * @explanation
 * In the first function, if a is greater than b, it will return a positive number, if b is greater, it will return a negative number, if equal, it'll return 0.
 * In the second function, if a is greater than b, it will return a negative number where it should've returned a positive number.
 * In the third function, if b is greater than a, it will return false instead of a negative number.
 *
 * @note
 * This question focuses on calling functions and checking their returned value.
 * There is no obscure hidden edge cases.
 */
function isCorrect(fn) {}

// Your own test cases
// e.g.;

function sampleIsBigger(a, b) {
    return a - b;
}

console.log(isCorrect(sampleIsBigger)); // 'Stop'

// To test your code against the test cases: node run.js p4 q6
// To test your code against custom input: node ./4Selections/q6/code.js

module.exports = isCorrect;
