/**
 * You are given a mapping from module to tutors. That is, a module can have multiple tutors.
 *
 * You are to reverse the mapping such that each tutor is mapped to the modules they teach.
 *
 * @param {Object} moduleToTutors - An object where each key is a module and the value is an array of tutors.
 * @returns {Object} - An object where each key is a tutor and the value is an array of modules they teach.
 *
 * @example
 * reverseMapping({ 'ST0523': ['Alice', 'Bob'], 'ST0501': ['Alice', 'John', 'Charlie'], 'ST2413': ['John', 'Charlie'] });
 *      // returns:  { 'Alice': ['ST0523', 'ST0501'], 'Bob': ['ST0523'], 'John': ['ST0501', 'ST2413'], 'Charlie': ['ST0501', 'ST2413'] }
 *
 */
function reverseMapping(moduleToTutors) {}

module.exports = reverseMapping;

// Your own test cases
// e.g.;

// console.log(reverseMapping({ 'ST0523': ['Alice', 'Bob'], 'ST0501': ['Alice', 'John', 'Charlie'], 'ST2413': ['John', 'Charlie'] }));
