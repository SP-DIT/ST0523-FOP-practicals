/**
 * [Sum all the values in an array]
 * Complete the function sumArray that takes an array of numbers and returns
 * the sum of all elements.
 *
 * @example - How the function will be invoked:
 * sumArray([5, 10, 15]); // 30
 * sumArray([1, 2, 3, 4]); // 10
 *
 * @explanation
 * In the first example, 5 + 10 + 15 = 30
 * In the second example, 1 + 2 + 3 + 4 = 10
 *
 * @steps
 * 1. Create a variable sum and set it to 0
 * 2. Loop through each element in the input array
 * 3. Add each element to sum
 * 4. Return sum
 */
function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

// Your own test cases
console.log(sumArray([5, 10, 15])); 
console.log(sumArray([1, 2, 3, 4])); 

// To test your code against the test cases: node run.js p6 q11
// To test your code against custom input: node ./3Functions/q11/code.js

module.exports = sumArray;
