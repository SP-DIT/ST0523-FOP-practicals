/**
 * Complete the function areaOfTriangle that takes two values (base and height) and returns the area of the triangle.
 * You must call a helper function `multiply` inside `areaOfTriangle` to compute part of the formula.
 * you do not need to convert strings to numbers for this question.
 *
 * @example - How the function will be invoked:
 * areaOfTriangle(10, 5); // 25
 * areaOfTriangle(6, 4); // 12
 *
 * @explanation
 * In the first example, (10 x 5) / 2 = 25
 * In the second example, (6 x 4) / 2 = 12
 *
 * @steps
 * 1. Define a helper function called multiply(x, y) that returns x * y
 * 2. Inside areaOfTriangle, call multiply with base and height
 * 3. Divide the result by 2
 * 4. Return the result
 */
function multiply(x, y) {
    // return x * y;
}

function areaOfTriangle(base, height) {
    // product = multiply(base, height);
    // return product / 2;
}

// Your own test cases
// e.g.
console.log(areaOfTriangle(10, 5));

// To test your code against the test cases: node run.js p3 q7
// To test your code against custom input: node ./3Functions/q1/code.js

module.exports = areaOfTriangle;
