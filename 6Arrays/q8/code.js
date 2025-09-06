/**
 * [Filter out even numbers from arrays]
 * Complete the function filterEvens that takes an array and returns a new array containing only the even numbers.
 *
 * @example - How the function will be invoked:
 * filterEvens([1, 2, 3, 4, 5, 6]); // [2, 4, 6]
 * filterEvens([7, 9, 11]); // []
 *
 * @explanation
 * In the first example, [1, 2, 3, 4, 5, 6] contains evens 2, 4, 6
 * In the second example, [7, 9, 11] contains no even numbers, so the result is []
 *
 * @steps
 * 1. Create an empty array result
 * 2. Loop through each element in the input array
 * 3. If the element is divisible by 2, push it into result
 * 4. Return the result array
 */
function filterEvens(arr) {
    // const result = [];
    // for (let i = 0; i < arr.length; i++) {
    //     if (arr[i] % 2 === 0) {
    //         result.push(arr[i]);
    //     }
    // }
    // return result;
}

// Your own test cases
console.log(filterEvens([1, 2, 3, 4, 5, 6])); // [2, 4, 6]
console.log(filterEvens([7, 9, 11])); // []

// To test your code against the test cases: node run.js p6 q8
// To test your code against custom input: node ./3Functions/q8/code.js

module.exports = filterEvens;
