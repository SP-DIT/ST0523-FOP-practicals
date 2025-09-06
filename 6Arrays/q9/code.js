/**
 * [count how many times a value has appeared in an array]
 * Complete the function countOccurrences that takes an array and a target value,
 * and returns the number of times the target appears in the array.
 *
 * @example - How the function will be invoked:
 * countOccurrences([1, 2, 2, 3, 2, 4], 2); // 3
 * countOccurrences(["a", "b", "a", "c", "a"], "a"); // 3
 *
 * @explanation
 * In the first example, the number 2 appears 3 times in the array
 * In the second example, the string "a" appears 3 times in the array
 *
 * @steps
 * 1. Create a counter variable set to 0
 * 2. Loop through each element in the input array
 * 3. If the element equals the target, increase the counter by 1
 * 4. Return the counter
 */
function countOccurrences(arr, target) {
    // let count = 0;
    // for (let i = 0; i < arr.length; i++) {
    //     if (arr[i] === target) {
    //         count++;
    //     }
    // }
    // return count;
}

// Your own test cases
console.log(countOccurrences([1, 2, 2, 3, 2, 4], 2));
console.log(countOccurrences(["a", "b", "a", "c", "a"], "a")); 

// To test your code against the test cases: node run.js p6 q9
// To test your code against custom input: node ./3Functions/q9/code.js

module.exports = countOccurrences;
