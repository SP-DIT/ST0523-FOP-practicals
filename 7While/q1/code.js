/**
 * You’ve previously learned about the Fibonacci sequence, where each number is the sum of the two preceding ones:
 *
 * 1st Fibonacci number = 0
 * 2nd Fibonacci number = 1
 * 3rd Fibonacci number = 0 + 1 = 1
 * 4th Fibonacci number = 1 + 1 = 2
 * 5th Fibonacci number = 1 + 2 = 3
 * 6th Fibonacci number = 2 + 3 = 5
 * 7th Fibonacci number = 3 + 5 = 8
 * ...and so on.
 *
 * In this task, you're given a partially completed function that you need to fix.
 * The function should determine the *position* of a given number `k` in the Fibonacci sequence.
 *
 * For example:
 *   - If the input is 5, the function should return 6 (since 5 is the 6th Fibonacci number).
 *   - If the input is 8, the function should return 7.
 *
 * @param {number} k - A valid Fibonacci number (starting from the 3rd Fibonacci number onwards)
 * @return {number} The position of `k` in the Fibonacci sequence
 */

function reverseFibonacci(k) {
    // Start with the first two Fibonacci numbers: 0 (1st) and 1 (2nd)
    let n1 = 1; // Represents the (n-1)th Fibonacci number
    let n2 = 0; // Represents the (n-2)th Fibonacci number
    let n = n1 + n2; // Start from the 3rd Fibonacci number
    let index = 0; // Tracks the position of the current Fibonacci number (n)

    // Continue generating Fibonacci numbers until we reach the target number k
    while (n !== k) {
        n2 = n1; // Move forward: n2 becomes the previous n1
        n1 = n; // n1 becomes the current Fibonacci number
        n = n1 + n2; // Calculate the next Fibonacci number
        index++; // Increment the index to reflect the new position
    }

    // Return the position of the Fibonacci number k
    return index;
}

// Your own test cases
// e.g.;

console.log(reverseFibonacci(8)); //7

module.exports = reverseFibonacci;
