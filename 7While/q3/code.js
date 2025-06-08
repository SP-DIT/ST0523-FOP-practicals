/**
 * Continuing from the previous question, we now introduce an additional requirement:
 * the input `k` may not always be a valid Fibonacci number.
 *
 * Modify the function to return the position of `k` in the Fibonacci sequence
 * (starting from the 3st term) if it is valid.
 *
 * If `k` is not a Fibonacci number, return -1.
 *
 * You may assume `k` is a non-negative integer greater than 1.
 */

function reverseFibonacci(k) {
    // Start with the first two Fibonacci numbers: 0 (1st) and 1 (2nd)
    let n1 = 1; // Represents the (n-1)th Fibonacci number
    let n2 = 0; // Represents the (n-2)th Fibonacci number
    let n = n1 + n2; // Start from the 3rd Fibonacci number
    let index = 3; // Tracks the position of the current Fibonacci number (n)

    // Continue generating Fibonacci numbers until we reach the target number k
    while (n != k) {
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
