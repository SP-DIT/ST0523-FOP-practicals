/**
 * [Reversing an array using for loops]
 * Complete the function reverseArray that takes an array and returns a new array with the elements in reverse order.
 *
 * @example - How the function will be invoked:
 * reverseArray([1, 2, 3, 4]); // [4, 3, 2, 1]
 * reverseArray(["a", "b", "c"]); // ["c", "b", "a"]
 *
 * @explanation
 * In the first example, [1, 2, 3, 4] reversed becomes [4, 3, 2, 1]
 * In the second example, ["a", "b", "c"] reversed becomes ["c", "b", "a"]
 *
 * @steps
 * 1. Create an empty array result
 * 2. Loop through the input array starting from the last element to the first
 * 3. Push each element into the result array
 * 4. Return the result array
 */
function reverseArray(arr) {
    // const result = [];
    // for (let i = arr.length - 1; i >= 0; i--) {
    //     result.push(arr[i]);
    // }
    // return result;
}

// Your own test cases
console.log(reverseArray([1, 2, 3, 4]));
console.log(reverseArray(["a", "b", "c"]));

// To test your code against the test cases: node run.js p6 q7
// To test your code against custom input: node ./3Functions/q7/code.js

module.exports = reverseArray;
