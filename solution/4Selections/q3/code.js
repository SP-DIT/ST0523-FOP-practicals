/**
 * A common problem in mathematics is to determine which quadrant a given point lies in.
 * There are four quadrants, numbered from 1 to 4 as shown in the diagram below:
 *
 *            |
 *      2     |    1
 *  (-12, 5)  |  (12, 5)
 *            |
 * ----------------------
 *            |
 *      3     |    4
 *  (-12, -5) | (12, -5)
 *            |
 *
 * Given a coordinate, determine which quadrant it is in.
 *
 * You can be sure that x != 0 and y != 0
 */
function whichQuadrant(x, y) {
    // Write your code here
    if (x > 0 && y > 0) {
        return 1;
    } else if (x < 0 && y > 0) {
        return 2;
    } else if (x < 0 && y < 0) {
        return 3;
    } else if (x > 0 && y < 0) {
        return 4;
    }
}

// Your own test cases
// e.g.;

console.log(whichQuadrant(12, 5)); // 1

// To test your code against the test cases: node run.js p4 q3
// To test your code against custom input: node ./4Selections/q3/code.js

module.exports = whichQuadrant;
