/**
 * Complete the function sumTwoValue that takes two values and returns the sum of the two values.
 * You can be sure that the values will be either numbers or strings that can be converted to numbers.
 *
 * @example - How the function will be invoked:
 * sumTwoValue(1, 2); // 3
 * sumTwoValue('1', '2'); // 3
 * sumTwoValue('1', 2); // 3
 * sumTwoValue(1, '2'); // 3
 *
 * @explanation
 * In the first example, 1 + 2 = 3
 * In the second example, '1' + '2' = 3, the values are converted to numbers before adding
 * In the third example, '1' + 2 = 3, the values are converted to numbers before adding
 * In the fourth example, 1 + '2' = 3, the values are converted to numbers before adding
 *
 * @steps
 * 1. Add the parameters a and b to the function signature
 * 2. Compute the sum and store it in a variable
 * 3. Return the variable
 */
function sumTwoValue(a, b) {
    // Write your code here
    return +a + +b;
}

// Your own test cases
// e.g.
console.log(sumTwoValue(1, 2));

// To test your code against the test cases: node run.js p3 q1
// To test your code against custom input: node ./3Functions/q1/code.js

module.exports = sumTwoValue;
