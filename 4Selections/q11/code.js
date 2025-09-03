/**
 * [Using Nested IfElse statements to check pass/fail with distinction grade]
 * Complete the function checkResult that checks a student's score.
 *
 * @example - How the function will be invoked:
 * checkResult(85);  // "Distinction"
 * checkResult(65);  // "Pass"
 * checkResult(40);  // "Fail"
 *
 * @explanation
 * - If the score is 50 or above, the student passes.
 * - Inside this block, check if the score is 80 or above. If yes, return "Pass with distinction".
 * - Otherwise, return "Pass".
 * - Else (score below 50), return "Fail".
 *
 * @steps
 * 1. Write an ifelse statment
 * 2. Set the first condition to check if the score is higher than 50, otherwise return it as "Fail"
 * 3. Write a nested if else statment and set the condition to check if the score is higher than 80
 * 4. If it is, return it as "Distinction". Otherwise, return it as "Pass"
 * 
 * @note
 * This question requires using nested if else statements.
 */
function checkResult(score) {
    // if (score >= 50) {
    //     if (score >= 80) {
    //         return "Distinction";
    //     } else {
    //         return "Pass";
    //     }
    // } else {
    //     return "Fail";
    // }
}

// Your own test cases:
// e.g.
console.log(checkResult(85)); 
console.log(checkResult(65)); 
console.log(checkResult(40));

// To test your code against the test cases: node run.js p4 q11
// To test your code against custom input: node ./3Functions/q11/code.js

module.exports = checkResult;
