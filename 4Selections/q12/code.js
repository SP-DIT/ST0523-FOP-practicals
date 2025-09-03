/**
 * [Using Nested IfElse statements to classify temperature]
 * Complete the function checkTemperature that checks how hot or cold the temperature is.
 *
 * @example - How the function will be invoked:
 * checkTemperature(50);  // "Hot"
 * checkTemperature(30);  // "Warm"
 * checkTemperature(10);  // "Cold"
 * checkTemperature(0);   // "Freezing"
 *
 * @explanation
 * - If the temperature is 0 or below, return "Freezing".
 * - Else, check if it is less than 20 → return "Cold".
 * - Else, check if it is less than 40 → return "Warm".
 * - Otherwise, return "Hot".
 *
 * @steps
 * 1. Write an ifelse statment
 * 2. Set the first condition to check if the score is lower than 0. If it is, return it as "Freezing"
 * 3. Write a nested if else statment and set the condition to check if the temperature is lower than 20. If it is, return it as "Cold"
 * 4. Write a nested if else statment and set the condition to check if the temperature is lower than 40. If it is, return it as "Warm"
 * 5. Otherwise, return it as "Hot"
 * 
 * @note
 * This question requires using nested if else statements.
 */
function checkTemperature(temp) {
    // if (temp <= 0) {
    //     return "Freezing";
    // } else {
    //     if (temp < 20) {
    //         return "Cold";
    //     } else {
    //         if (temp < 40) {
    //             return "Warm";
    //         } else {
    //             return "Hot";
    //         }
    //     }
    // }
}

// Your own test cases:
// e.g.
console.log(checkTemperature(50)); 
console.log(checkTemperature(30)); 
console.log(checkTemperature(10)); 
console.log(checkTemperature(0));  

// To test your code against the test cases: node run.js p4 q11
// To test your code against custom input: node ./3Functions/q11/code.js

module.exports = checkTemperature;
