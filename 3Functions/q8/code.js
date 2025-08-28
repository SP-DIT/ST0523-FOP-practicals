/**
 * Complete the function multiplyTwoValue that takes two values and returns the multiplication of the two values.
 * You can be sure that the values will be either numbers or strings that can be converted to numbers.
 *
 * @example - How the function will be invoked:
 * multiplyTwoValue(3, 2); // 6
 * multiplyTwoValue('3', '2'); // 6
 * multiplyTwoValue('3', 2); // 6
 * multiplyTwoValue(3, '2'); // 6
 *
 * @explanation
 * In the first example, 3 x 2 = 6
 * In the second example, '3' x '2' = 6, the values are converted to numbers before multiplying
 * In the third example, '3' x 2 = 6, the values are converted to numbers before multiplying
 * In the fourth example, 3 x '2' = 6, the values are converted to numbers before multiplying
 *
 * @steps
 * 1. multiply the parameters a and b to the function signature
 * 2. Compute the multiplication and store it in a variable
 * 3. Return the variable
 */
function multiplyTwoValue(a, b) {
    // a = Number(a);
    // b = Number(b);
    
    // result = a * b;
    // return(result);
}

// Your own test cases
// e.g.
console.log(multiplyTwoValue(3, 2));

// To test your code against the test cases: node run.js p3 q8
// To test your code against custom input: node ./3Functions/q1/code.js

module.exports = multiplyTwoValue;
