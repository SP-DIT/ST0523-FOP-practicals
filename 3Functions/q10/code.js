/**
 * Complete the function addTwoNumbers that takes two values and returns their sum.
 * You must call a helper function `toNumber` inside `addTwoNumbers` to convert the values before adding them.
 *
 * @example - How the function will be invoked:
 * addTwoNumbers(2, 3); // 5
 * addTwoNumbers('2', '3'); // 5
 * addTwoNumbers('2', 3); // 5
 * addTwoNumbers(2, '3'); // 5
 *
 * @explanation
 * In the first example, 2 + 3 = 5
 * In the second example, '2' + '3' = 5, the values are converted to numbers before adding
 * In the third example, '2' + 3 = 5, the values are converted to numbers before adding
 * In the fourth example, 2 + '3' = 5, the values are converted to numbers before adding
 *
 * @steps
 * 1. Define a helper function called toNumber(x) that converts x to a number and returns it
 * 2. Inside addTwoNumbers, call toNumber on both a and b
 * 3. Add the two converted numbers
 * 4. Return the result
 */
function toNumber(x) {
    // return Number(x);
}

function addTwoValue(a, b) {
    // let num1 = toNumber(a);
    // let num2 = toNumber(b);

    // return num1 + num2;
}

// Your own test cases
// e.g.
console.log(addTwoValue(2, 3));

// To test your code against the test cases: node run.js p3 q7
// To test your code against custom input: node ./3Functions/q1/code.js

module.exports = addTwoValue;
