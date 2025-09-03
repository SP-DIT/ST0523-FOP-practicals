/**
 * [Using IfElse and ElseIf statements to check if a number is positive, negative or zero]
 * Complete the function checkEvenOdd that checks if a number is even or odd.
 *
 * @example - How the function will be invoked:
 * checkEvenOdd(10); // Even
 * checkEvenOdd(7); // Odd
 *
 * @explanation
 * In the first example, 4 is even so the function returns "Even"
 * In the second example, 7 is odd so the function returns "Odd"
 *
 * @steps
 * 1. Write an ifelse statment
 * 2. Set the condition to check if the number is divisble by 2
 * 3. Return even numbers as "Even"
 * 4. Return even numbers as "Odd"
 */
function checkEvenOdd(n) {
    // if (n % 2 === 0) {
    //     return "Even";
    // } else {
    //     return "Odd";
    // }
}

// Your own test cases:
// e.g.
console.log(checkEvenOdd(4)); 
console.log(checkEvenOdd(7));  

// To test your code against the test cases: node run.js p4 q8
// To test your code against custom input: node ./3Functions/q8/code.js

module.exports = checkEvenOdd;
