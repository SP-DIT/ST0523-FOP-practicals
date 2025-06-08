/**
 * Calculate the area of a shape
 *
 * There are four types of shapes:
 * 1. Circle, e.g. { type: 'circle', radius: 5 }
 * 2. Rectangle, e.g. { type: 'rectangle', length: 5, width: 10 }
 * 3. Triangle, e.g. { type: 'triangle', base: 5, height: 10 }
 * 4. Square, e.g. { type: 'square', side: 5 }
 *
 * The area of a shape is calculated as follows:
 * 1. Circle: π * r^2
 * 2. Rectangle: length * width
 * 3. Triangle: 0.5 * base * height
 * 4. Square: side * side
 *
 * @param {Object} shape
 * @returns {number} - The area of the shape
 *
 * @example
 * calculateArea({ type: 'circle', radius: 5 }); // 78.54
 * calculateArea({ type: 'rectangle', length: 5, width: 10 }); // 50
 * calculateArea({ type: 'triangle', base: 5, height: 10 }); // 25
 * calculateArea({ type: 'square', side: 5 }); // 25
 */
function calculateArea(shape) {}

// Your own test cases
// e.g.;

console.log(calculateArea({ type: 'circle', radius: 5 })); // 78.54

module.exports = calculateArea;
