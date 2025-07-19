/**
 * Calculates how many consecutive numbers, starting from 1, are needed to reach or exceed a target sum.
 *
 * This function adds numbers in the sequence 1 + 2 + 3 + ... until the sum is greater than or equal to the target.
 *
 * @param {number} target - The sum you want to reach or exceed by adding consecutive numbers starting from 1.
 * @returns {number} The number of terms required to reach or exceed the target sum.
 *
 * @example
 * howManyTermsToSumToTarget(10); // Returns 4
 * // 1 + 2 + 3 + 4 = 10
 *
 * howManyTermsToSumToTarget(21); // Returns 6
 * // 1 + 2 + 3 + 4 + 5 + 6 = 21
 */

function howManyTermsToSumToTarget(target) {
    let sum = 0;
    let terms = 1;
    while (sum < target) {
        sum += terms;
        terms += 1;
    }
    return terms - 1;
}

// Your own test cases
// e.g.;

console.log(howManyTermsToSumToTarget(21));

module.exports = howManyTermsToSumToTarget;
