/**
 * Dates are represented differently in US and EU.
 *  In US, it is represented as MM/DD/YYYY
 *  In EU, it is represented as DD/MM/YYYY
 *
 * But they are generally represented as AA/BB/CCCC
 *
 * Given 3 parameter, AA, BB, and CCCC, determine whether it follows US, EU, or either.
 *
 * @param {number} AA - The first part of the date. A number between 1 and 30.
 * @param {number} BB - The second part of the date. A number between 1 and 30.
 * @param {number} CCCC - The third part of the date. A number between 1000 and 9999.
 * You can safely assume that its a valid date.
 *
 * @returns {string} - 'US' if it follows US format, 'EU' if it follows EU format, 'Either' if it can be either.
 *
 * @example
 * dateFormat(12, 30, 2025); // 'US'
 * dateFormat(30, 12, 2025); // 'EU'
 * dateFormat(12, 12, 2025); // 'Either'
 * dateFormat(1, 1, 2025); // 'Either'
 *
 */
function dateFormat(AA, BB, CCCC) {
    // Write your code here
    if (AA <= 12 && BB <= 12) {
        return 'Either';
    } else if (AA > 12) {
        return 'EU';
    } else {
        return 'US';
    }
}

// Your own test cases
// e.g.;

console.log(dateFormat(12, 30, 2025)); // "EU"

// To test your code against the test cases: node run.js p4 q2
// To test your code against custom input: node ./4Selections/q2/code.js

module.exports = dateFormat;
