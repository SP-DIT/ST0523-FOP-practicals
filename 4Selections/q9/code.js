/**
 * [Using IfElse and ElseIf statements to check if a number is positive, negative or zero]
 * Complete the function checkSign that checks if a number is positive, negative, or zero.
 *
 * @example - How the function will be invoked:
 * checkSign(5);  // Positive
 * checkSign(-3); // Negative
 * checkSign(0);  // Zero
 *
 * @explanation
 * - In the first example, the number is greater than 0 and it returns "Positive"
 * - If the second example, the number is smaller than 0 and it returns "Negative"
 * - In the thrid example, the number is either positive or negative and it returns "Zero"
 *
 * @steps
 * 1. Write an ifelse and elseif statment
 * 2. Set the first condition to check if the number is greater than 0 and return positive numbers as "Positive"
 * 3. Set the Second condition to check if the number is lesser than 0 and return negative numbers as "Negative"
 * 4. Set the last block to return 0 as "Zero"
 * 
 * @note
 * This question requires using if, else if, and else.
 */
function checkSign(n) {
    // if (n > 0) {
    //     return "Positive";
    // } else if (n < 0) {
    //     return "Negative";
    // } else {
    //     return "Zero";
    // }
}

// Your own test cases:
// e.g.
console.log(checkSign(5));   
console.log(checkSign(-3));  
console.log(checkSign(0));   

// To test your code against the test cases: node run.js p4 q9
// To test your code against custom input: node ./3Functions/q9/code.js

module.exports = checkSign;
