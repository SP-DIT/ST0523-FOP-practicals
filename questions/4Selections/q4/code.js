/**
 * You are hosting an event where you are serving chicken.
 * You have ordered a certain number of chickens for the event.
 * You also have the number of attendees at the event.
 *
 * You are to decide if you have enough, lack, or a surplus of chickens.
 *
 * - If you have enough, return 'Enough'
 * - If there's a lack, return "You lack x chicken[s]", where x is the number of chickens you lack.
 * - If there's a surplus, return "You have a surplus of x chicken[s]", where x is the number of surplus chickens.
 *
 * Note: chicken is singular if x is 1, and plural otherwise.
 *
 * @param {number} required - The number of chickens required for the event.
 * @param {number} available - The number of chickens available.
 * @returns {string} - The result of the comparison.
 *
 * @example
 * chickens(10, 10); // 'Enough'
 * chickens(10, 5); // 'You lack 5 chickens'
 * chickens(10, 9); // 'You lack 1 chicken'
 * chickens(10, 15); // 'You have a surplus of 5 chickens'
 * chickens(10, 11); // 'You have a surplus of 1 chicken'
 *
 */
function chickens(required, available) {}

// Your own test cases
// e.g.;

console.log(chickens(12, 5)); // 'You lack 7 chickens'

// To test your code against the test cases: node run.js p4 q4
// To test your code against custom input: node ./4Selections/q4/code.js

module.exports = chickens;
