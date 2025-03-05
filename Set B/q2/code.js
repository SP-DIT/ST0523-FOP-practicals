/**
 * Estimate pi using the Leibniz formula
 *
 * The Leibniz formula for pi is an infinite series that converges to pi.
 * The formula is:
 * pi = 4 * (1 - 1/3 + 1/5 - 1/7 + 1/9 - ...)
 * The denominator of each fraction is the odd numbers starting from 1.
 * Note: The sign alternates between + and -
 *
 * @param {number} numberOfFractions - number of fractions to compute
 * @returns {number} - The estimated value of pi
 *
 * @example
 * pi(6);   // 2.9760461760461765   => 4 * (1 - 1/3 + 1/5 - 1/7 + 1/9 - 1/11)
 * pi(8);   // 3.017071817071818    => 4 * (1 - 1/3 + 1/5 - 1/7 + 1/9 - 1/11 + 1/13 - 1/15)
 * pi(10);  // 3.0418396189294032   => 4 * (1 - 1/3 + 1/5 - 1/7 + 1/9 - 1/11 + 1/13 - 1/15 + 1/17 - 1/19)
 */
function pi(numberOfFractions) {}

module.exports = pi;

// Your own test cases
// e.g.;

// console.log(pi(6));
