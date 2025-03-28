/**
 * You are given a a list of modules and their mapping from module to tutors. That is, a module can have multiple tutors.
 *
 * You are to reverse the mapping such that each tutor is mapped to the modules they teach.
 *
 * @param {Array} modules - An array of all the modules in the mapping.
 * @param {Object} moduleToTutors - An object where each key is a module and the value is an array of tutors.
 * @returns {Object} - An object where each key is a tutor and the value is an array of modules they teach.
 *
 * @example
 * reverseMapping(['ST0523', 'ST0501', 'ST2413'], { 'ST0523': ['Alice', 'Bob'], 'ST0501': ['Alice', 'John', 'Charlie'], 'ST2413': ['John', 'Charlie'] });
 *      // returns:  { 'Alice': ['ST0523', 'ST0501'], 'Bob': ['ST0523'], 'John': ['ST0501', 'ST2413'], 'Charlie': ['ST0501', 'ST2413'] }
 *
 */
function reverseMapping(modules, moduleToTutors) {
    // Write your code here
    let tutorToModules = {};
    for (let i = 0; i < modules.length; i++) {
        const module = modules[i];
        const tutors = moduleToTutors[module];
        for (let j = 0; j < tutors.length; j++) {
            const tutor = tutors[j];
            if (tutorToModules[tutor]) {
                tutorToModules[tutor].push(module);
            } else {
                tutorToModules[tutor] = [module];
            }
        }
    }
    return tutorToModules;
}

// Your own test cases
// e.g.;

console.log(
    reverseMapping(['ST0523', 'ST0501', 'ST2413'], {
        ST0523: ['Alice', 'Bob'],
        ST0501: ['Alice', 'John', 'Charlie'],
        ST2413: ['John', 'Charlie'],
    }),
);

// To test your code against the test cases: node run.js q3
// To test your code against custom input: node ./q3/code.js

module.exports = reverseMapping;
