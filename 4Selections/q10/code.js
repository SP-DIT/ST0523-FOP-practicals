/**
 * [Using IfElse and ElseIf statements to check age group]
 * Complete the function checkAgeGroup that checks a person's age and returns their age group.
 *
 * @example - How the function will be invoked:
 * checkAgeGroup(10);  // Child
 * checkAgeGroup(16);  // Teenager
 * checkAgeGroup(25);  // Adult
 *
 * @explanation
 * - In the first example, the age is less than 13 so it returns "Child"
 * - In the second example, the age is greater than 13 but lesser than 19 so it returns "Teenager"
 * - In the third example, the age is greater than 19 so it returns "Adult"
 *
 * @steps
 * 1. Write an ifelse and elseif statment
 * 2. Set the first condition to check if the number is lesser than 13 and return it as "Child"
 * 3. Set the Second condition to check if the number is greater than 19 and return it as "Adult"
 * 4. Set the last block to return remaining results as "Teenager"
 * 
 * @note
 * This question requires using if, else if, and else.
 */
function checkAgeGroup(n) {
    // if (n < 13) {
    //     return "Child";
    // } else if (n > 19) {
    //     return "Adult";
    // } else {
    //     return "Teenager";
    // }
}

// Your own test cases:
// e.g.
console.log(checkAgeGroup(10)); 
console.log(checkAgeGroup(16)); 
console.log(checkAgeGroup(25));

// To test your code against the test cases: node run.js p4 q10
// To test your code against custom input: node ./3Functions/q10/code.js

module.exports = checkAgeGroup;
