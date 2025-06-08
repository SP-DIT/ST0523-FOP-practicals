/**
 * Continuing from the reverse Fibonacci problem, a student suggests that the solution
 * can be implemented using a for-loop instead of a while-loop.
 *
 * Can you help the student complete the function to correctly calculate the position
 * of a given Fibonacci number `k` using a for-loop?
 *
 * You can continue to assume that `k` is a valid Fibonacci number starting from the 3rd term onward.
 */

function reverseFibonacci(k) {
    // Start with the first two Fibonacci numbers: 0 (1st) and 1 (2nd)
    let n1 = 1; // (n-1)th Fibonacci number, starting as the 2nd term
    let n2 = 0; // (n-2)th Fibonacci number, starting as the 1st term
    let index = 3; // Start from the 3rd Fibonacci number

    // Compute Fibonacci numbers iteratively until we reach k, add 1 to n at the end of each loop
    for (let n = n1 + n2; n !== k; n++) {
        n2 = n1; // Move forward: n2 becomes the previous n1
        n1 = n; // n1 becomes the current Fibonacci number
        index++; // Increment the index to reflect the current position
    }

    // Return the position of the Fibonacci number k
    return index;
}

// Your own test cases
// e.g.;

console.log(reverseFibonacci(8)); //7

module.exports = reverseFibonacci;
