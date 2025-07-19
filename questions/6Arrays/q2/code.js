/**
 * Counts how many times an element matches the one before it in the array.
 *
 * @param {string[]} strings - An array of strings, the last one will always be an empty string.
 * @returns {number} - The number of matching pairs.
 *
 * @example
 * adjacentMatchCount(['A', 'A', 'A', 'A', ' ']); // 3
 * adjacentMatchCount(['A', 'A', 'B', 'B', 'C', 'C', 'D', 'D', 'E', 'E', ' ']); // 5
 * adjacentMatchCount(['A', 'B', 'C', 'D', 'D', ' ']); // 1
 *
 * @explanation
 * Putting the original and shifted side by side:
 * For the first example:
 *  Original:    ['A', 'A', 'A', 'A', ' ']
 *  Shifted:     [' ', 'A', 'A', 'A', 'A']
 *
 *  Elements at position 1, 2, and 3 matches its previous element.
 *
 * For the second example:
 *  Original:   ['A', 'A', 'B', 'B', 'C', 'C', 'D', 'D', 'E', 'E', ' ']
 *  Shifted:    [' ', 'A', 'A', 'B', 'B', 'C', 'C', 'D', 'D', 'E', 'E']
 *
 *  Elements at position 1, 3, 5, 7, 9, and 11 matches its previous element
 */
function adjacentMatchCount(strings) {}

// Your own test cases
// e.g.;

console.log(adjacentMatchCount(['A', 'A', 'A', 'A', ' '])); // 3

// To test your code against the test cases: node run.js p6 q2
// To test your code against custom input: node ./6Arrays/q2/code.js

module.exports = adjacentMatchCount;
