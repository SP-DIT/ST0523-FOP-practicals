/**
 * Find the longest common prefix of four strings.
 *
 * @param {string} string1 - The first string.
 * @param {string} string2 - The second string.
 * @param {string} string3 - The third string.
 * @param {string} string4 - The fourth string.
 *
 * @returns {number} - The length of the longest common prefix of the four strings.
 *
 * @example
 * longestCommonPrefix('hello', 'hello', 'hello', 'hello'); // 5
 * longestCommonPrefix('hello', 'world', 'hello', 'world'); // 0
 * longestCommonPrefix('abcde', 'abcef', 'abefg', 'abcge'); // 2
 *
 * @explaination
 * For the first example, the longest common prefix is 'hello', which has a length of 5.
 * For the second example, there are no common prefix, so the length is 0.
 * For the third example, the longest common prefix is 'ab', which has a length of 2.
 */
function longestCommonPrefix(string1, string2, string3, string4) {}

// Your own test cases
// e.g.;

console.log(longestCommonPrefix('hello', 'world', 'hello', 'world'));

// To test your code against the test cases: node run.js p5 q4
// To test your code against custom input: node ./5Loops/q4/code.js

module.exports = longestCommonPrefix;
