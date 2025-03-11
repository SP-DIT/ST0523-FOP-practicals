/**
 * You are given an encoded message in a string.
 * The original message is encoded by
 * 1. first placing the characters in a square matrix,
 * 2. and then the matrix is rotated 90 degress clockwise.
 * 3. Then the characters are read off row by row to form the encoded message
 *
 * Your task is to decode the message by reversing the steps and return it as a string.
 *
 * @param {string} message - The encoded message, the length of the message is a perfect square.
 * @returns {string} - The decoded message.
 *
 * @example
 * decodeMessage('RSTEEOTCP'); // 'TOPSECRET'
 * decodeMessage('eedARBtVrolsiesuAoReerles'); // 'RosesAreRedVioletsAreBlue'
 * decodeMessage('EarSvyeqeBsuneMa'); // 'SquaresMayBeEven'
 *
 * @explanation
 * For the first example:
 * - The original message is 'TOPSECRET'
 * - Placing the characters in a square matrix:
 *      T O P
 *      S E C
 *      R E T
 * - Rotating the matrix 90 degrees clockwise:
 *      R S T
 *      E E O
 *      T C P
 * - Reading off row by row gives 'RSTEEOTCP'
 *
 * For the second example:
 * - The original message is 'RosesAreRedVioletsAreBlue'
 * - Placing the characters in a square matrix:
 *      R o s e s
 *      A r e R e
 *      d V i o l
 *      e t s A r
 *      e B l u e
 * - Rotating the matrix 90 degrees clockwise:
 *      e e d A R
 *      B t V r o
 *      l s i e s
 *      u A o R e
 *      e r l e s
 * - Reading off row by row gives 'eedARBtVrolsiesuAoReerles'
 *
 * @hint - Also applies for bigger matrices
 * original:
 *
 * [0][0], [0][1], [0][2]
 * [1][0], [1][1], [1][2]
 * [2][0], [2][1], [2][2]
 *
 * Rotated 90deg counter-clockwise:
 *
 * [0][2], [1][2], [2][2],
 * [0][1], [1][1], [2][1],
 * [0][0], [1][0], [2][0],
 */
function decodeMessage(message) {}

// Your own test cases
// e.g.;

console.log(decodeMessage('RSTEEOTCP'));

// To test your code against the test cases: node run.js q1
// To test your code against custom input: node ./q1/code.js

module.exports = decodeMessage;
