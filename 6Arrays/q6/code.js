/**
 * [Square a function using loops]
 * Complete the function squares that takes a number n and returns an array of the first n square numbers.
 * A square number is a number multiplied by itself.
 *
 * @example - How the function will be invoked:
 * squares(5); // [1, 4, 9, 16, 25]
 * squares(3); // [1, 4, 9]
 *
 * @explanation
 * In the first example, n = 5, so the squares are: 1*1 = 1, 2*2 = 4, 3*3 = 9, 4*4 = 16, 5*5 = 25
 * In the second example, n = 3, so the squares are: 1*1 = 1, 2*2 = 4, 3*3 = 9
 *
 * @steps
 * 1. Create an empty array result
 * 2. Loop from 1 up to n
 * 3. In each loop, compute i * i and push it to the array
 * 4. Return the result array
 */
function squares(n) {
    // const result = [];
    // for (let i = 1; i <= n; i++) {
    //     result.push(i * i);
    // }
    // return result;
}

// Your own test cases
console.log(squares(5)); 
console.log(squares(3));

// To test your code against the test cases: node run.js p6 q6
// To test your code against custom input: node ./3Functions/q6/code.js

module.exports = squares;
