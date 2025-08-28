/**
 * Complete the function divideTwoValue that takes two values and returns the division of the two values.
 * You can be sure that the values will be either numbers or strings that can be converted to numbers.
 *
 * @example - How the function will be invoked:
 * divideTwoValue(6, 2); // 3
 * divideTwoValue('6', '2'); // 3
 * divideTwoValue('6', 2); // 3
 * divideTwoValue(6, '2'); // 3
 *
 * @explanation
 * In the first example, 6 / 2 = 3
 * In the second example, '6' / '2' = 3, the values are converted to numbers before dividing
 * In the third example, '6' + 2 = 3, the values are converted to numbers before dividing
 * In the fourth example, 6 + '2' = 3, the values are converted to numbers before dividing
 *
 * @steps
 * 1. Divide the parameters a and b to the function signature
 * 2. Compute the division and store it in a variable
 * 3. Return the variable
 */
function divideTwoValue(a, b) {
    // a = Number(a);
    // b = Number(b);
    
    // result = a / b;
    // return(result);
}

// Your own test cases
// e.g.
console.log(divideTwoValue(6, 2));

// To test your code against the test cases: node run.js p3 q9
// To test your code against custom input: node ./3Functions/q1/code.js

module.exports = divideTwoValue;
