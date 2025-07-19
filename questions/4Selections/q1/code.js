/**
 * Let's revisit foobar again.
 *
 * foobar is a function that takes a number and returns a string or number.
 *  If the number is divisible by 3, return "foo"
 *  If the number is divisible by 5, return "bar"
 *  If the number is divisible by both 3 and 5, return "foobar"
 *
 * @param {number} number - The number
 * @returns {string | number} - "foo" if number is divisible by 3, "bar" if number is divisible by 5, "foobar" if number is divisible by both 3 and 5, otherwise return the number.
 *
 * This time, use if-else instead of && and ||.
 */
function foobar(number) {}

// Your own test cases
// e.g.;

console.log(foobar(3)); // "foo"
console.log(foobar(4)); // 4
console.log(foobar(5)); // "bar"

// To test your code against the test cases: node run.js p4 q1
// To test your code against custom input: node ./4Selections/q1/code.js

module.exports = foobar;
