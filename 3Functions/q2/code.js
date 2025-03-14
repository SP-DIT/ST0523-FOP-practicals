/**
 * Complete the function findSlope that takes two points on a line and returns the slope of the line.
 *
 * Finds the slope of a line given two points on the line
 * @param {number} x1 - x-coordinate of the first point
 * @param {number} y1 - y-coordinate of the first point
 * @param {number} x2 - x-coordinate of the second point
 * @param {number} y2 - y-coordinate of the second point
 * @returns {number} - The slope of the line
 *
 * @example
 * findSlope(1, 1, 2, 2); // 1
 * findSlope(2, 2, 4, 8); // 3
 * findSlope(3, 3, -4, -25); // 4
 *
 * @explanation
 * In the first example, the slope of the line passing through (1, 1) and (2, 2) is 1.
 * In the second example, the slope of the line passing through (2, 2) and (4, 8) is 3.
 * In the third example, the slope of the line passing through (3, 3) and (-4, -25) is 4.
 *
 * @steps
 * 1. Add the parameters x1, y1, x2, y2 to the function signature
 * 2. Compute the slope of the line passing through the points (x1, y1) and (x2, y2), store it in a variable
 * 3. Return the variable
 */
function findSlope(x1, y1, x2, y2) {
    // Write your code here
    return (y2 - y1) / (x2 - x1);
}

// Your own test cases
// e.g.;

console.log(findSlope(1, 1, 2, 2));

// To test your code against the test cases: node run.js q2
// To test your code against custom input: node ./q2/code.js

module.exports = findSlope;
