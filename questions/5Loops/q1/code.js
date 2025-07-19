/**
 * Generate the multiple table of a given number n, up to m times.
 *
 * @param {number} n - The number to generate the multiplication table for
 * @param {number} m - The number of multiples to generate
 * @returns {string} - The multiplication table of n up to m times
 *
 * The format of the string should be as follows:
 *  - Each line should be in the format "n * i = result", each term separated by a space.
 *  - Each line should end with a newline character (\n), including the last line.
 *
 * @example
 * multiplicationTable(2, 3);
 *      => 2 * 1 = 2
 *         2 * 2 = 4
 *         2 * 3 = 6
 *      => "2 * 1 = 2\n2 * 2 = 4\n2 * 3 = 6\n"
 *
 * multiplicationTable(3, 5);
 *     => 3 * 1 = 3
 *        3 * 2 = 6
 *        3 * 3 = 9
 *        3 * 4 = 12
 *        3 * 5 = 15
 *     => "3 * 1 = 3\n3 * 2 = 6\n3 * 3 = 9\n3 * 4 = 12\n3 * 5 = 15\n"
 *
 */
function multiplicationTable(n, m) {}

// Your own test cases
// e.g.;

console.log(multiplicationTable(2, 3));

// To test your code against the test cases: node run.js p5 q1
// To test your code against custom input: node ./5Loops/q1/code.js

module.exports = multiplicationTable;
