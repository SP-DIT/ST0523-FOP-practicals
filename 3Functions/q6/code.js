/**
 * foobar is a function that takes a number and returns a string or number.
 * If the number is divisible by 3, return "foo"
 * If the number is divisible by 5, return "bar"
 * If the number is divisible by both 3 and 5, return "foobar"
 *
 * This is/was a popular interview question.
 *
 * @param {number} number - The number
 * @returns {string | number} - "foo" if number is divisible by 3, "bar" if number is divisible by 5, "foobar" if number is divisible by both 3 and 5, otherwise return the number.
 *
 * Hint: Use && and || short circuiting
 * @example
 * A && B - If A is true, return B, otherwise return A
 * A || B - If A is true, return A, otherwise return B
 *
 * | A | B | A && B |
 * ------------------
 * | T | T |   T    |
 * | T | F |   F    | - When A is True, it depends on whatever B is
 * | F | T |   F    |
 * | F | F |   F    | - When A is False, it doesn't matter what B is
 *
 * | A | B | A || B |
 * ------------------
 * | T | T |   T    |
 * | T | F |   T    | - When A is True, it doesn't matter what B is
 * | F | T |   T    |
 * | F | F |   F    | - When A is False, it depends on whatever B is
 *
 * Try working out this table:
 * | A | C | (A && B) || (C && D) || E |
 * -------------------------------------
 * | T | T |            ?              |
 * | T | F |            ?              |
 * | F | T |            ?              |
 * | F | F |            ?              |
 *
 * - Each ? should be either B, D, or E
 * - Assume B, D, or E are all True
 */
function foobar(number) {
    return (number % 15 === 0 && 'foobar') || (number % 3 === 0 && 'foo') || (number % 5 === 0 && 'bar') || number;
}

console.log(foobar(3));

// To test your code against the test cases: node run.js q6
// To test your code against custom input: node ./q6/code.js

module.exports = foobar;
