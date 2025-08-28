/**
 * Complete the function areaOfRectangle that takes two values (width and height) and returns the area of the rectangle.
 * You must call a helper function `multiply` inside `areaOfRectangle` to compute the product.
 * You do not need to convert the strings to numbers for this question.
 *
 * @example - How the function will be invoked:
 * areaOfRectangle(4, 5); // 20
 * areaOfRectangle(20, 4); // 80
 *
 * @explanation
 * In the first example, 4 x 5 = 20
 * In the second example, 20 x 4 = 80
 *
 * @steps
 * 1. Define a helper function called multiply(x, y) that returns x * y
 * 2. Inside areaOfRectangle, call multiply with width and height
 * 3. Return the result
 */
function multiply(x, y) {
    // return x * y;
}

function areaOfRectangle(width, height) {
    // return multiply(width, height);
}

// Your own test cases
// e.g.
console.log(areaOfRectangle(4, 5));

// To test your code against the test cases: node run.js p3 q7
// To test your code against custom input: node ./3Functions/q1/code.js

module.exports = areaOfRectangle;
