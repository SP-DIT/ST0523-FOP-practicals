/**
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
 */
function findSlope(x1, y1, x2, y2) {
    return (y2 - y1) / (x2 - x1);
}

module.exports = findSlope;
