/**
 * [Mutiply all values of an array by 2]
 * Complete the function doubleElements that takes an array and returns a new array
 * where each element is doubled.
 *
 * @example - How the function will be invoked:
 * doubleElements([1, 2, 3]); // [2, 4, 6]
 * doubleElements([5, 10, 15]); // [10, 20, 30]
 *
 * @explanation
 * In the first example, [1, 2, 3] → each number is doubled → [2, 4, 6]
 * In the second example, [5, 10, 15] → each number is doubled → [10, 20, 30]
 *
 * @steps
 * 1. Create an empty array result
 * 2. Loop through each element in the input array
 * 3. Multiply the element by 2 and push it into result
 * 4. Return the result array
 */
function doubleElements(arr) {
    // const result = [];
    // for (let i = 0; i < arr.length; i++) {
    //     result.push(arr[i] * 2);
    // }
    // return result;
}

// Your own test cases
console.log(doubleElements([1, 2, 3]));
console.log(doubleElements([5, 10, 15]));

// To test your code against the test cases: node run.js p6 q10
// To test your code against custom input: node ./3Functions/q10/code.js

module.exports = doubleElements;
