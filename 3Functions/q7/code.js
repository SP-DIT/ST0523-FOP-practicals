/**
 * Complete the function subTwoValue that takes two values and returns the subtraction of the two values.
 * You can be sure that the values will be either numbers or strings that can be converted to numbers.
 *
 * @example - How the function will be invoked:
 * subTwoValue(2, 1); // 1
 * subTwoValue('2', '1'); // 1
 * subTwoValue('2', 1); // 1
 * subTwoValue(2, '1'); // 1
 *
 * @explanation
 * In the first example, 1 + 2 = 3
 * In the second example, '1' + '2' = 3, the values are converted to numbers before subtracting
 * In the third example, '1' + 2 = 3, the values are converted to numbers before subtracting
 * In the fourth example, 1 + '2' = 3, the values are converted to numbers before subtracting
 *
 * @steps
 * 1. Subtract the parameters a and b to the function signature
 * 2. Compute the subtraction and store it in a variable
 * 3. Return the variable
 */
function subTwoValue(a, b) {
    // a = Number(a);
    // b = Number(b);
    
    // result = a - b;
    // return(result);
}

// Your own test cases
// e.g.
console.log(subTwoValue(2, 1));

// To test your code against the test cases: node run.js p3 q7
// To test your code against custom input: node ./3Functions/q1/code.js

module.exports = subTwoValue;
