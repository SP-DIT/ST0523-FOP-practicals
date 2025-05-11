/**
 * You are given a circular poster of radius R, and you are to cover up an existing rectangular poster of dimensions W x H.
 *
 * Determine if the circular poster can cover up the rectangular poster completely.
 *
 * A circular poster can cover up a rectangular poster if
 * the diameter of the circular poster is greater than or equal to the diagonal of the rectangular poster.
 * You can find the diagonal using the pythagorean theorem
 *
 * @param {number} R - The radius of the circular poster
 * @param {number} W - The width of the rectangular poster
 * @param {number} H - The height of the rectangular poster
 *
 * @returns {boolean} - Whether the circular poster can cover up the rectangular poster completely
 *
 * @example
 * canCoverPoster(2.5, 3, 4); // true
 * canCoverPoster(5, 3, 4); // true
 * canCoverPoster(4, 1, 30); // false
 *
 */
function canCoverPoster(R, W, H) {}

console.log(canCoverPoster(2.5, 3, 4)); // true

// To test your code against the test cases: node run.js p3 q4
// To test your code against custom input: node ./3Functions/q4/code.js

module.exports = canCoverPoster;
