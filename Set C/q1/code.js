/**
 * Given a array of number, check if they are either
 * 1. Ascending - each element is greater than the previous
 * 2. Non-descending - each element is greater than or equal to the previous
 * 3. Descending - each element is lesser than the previous
 * 4. Non-ascending - each element is lesser than or equal to the previous
 * 6. Constant - all elements are the same
 * 5. Unsorted - none of the above
 *
 * @param {number[]} array - An array of numbers.
 * @returns {string} - The type of the array.
 *
 * @example
 * checkArray([1, 2, 3, 4, 5]); // 'Ascending'
 * checkArray([5, 4, 3, 2, 1]); // 'Descending'
 * checkArray([1, 1, 1, 1, 1]); // 'Constant'
 * checkArray([1, 2, 2, 3, 4]); // 'Non-descending'
 * checkArray([5, 4, 4, 3, 2]); // 'Non-ascending'
 * checkArray([1, 2, 4, 3, 5]); // 'Unsorted'
 */
function checkArray(array) {}

module.exports = checkArray;
