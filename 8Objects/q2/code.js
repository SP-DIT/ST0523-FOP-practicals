/**
 * You are given an object that contains information about a student.
 * Each object includes the student's `name` and `class`.
 *
 * Complete the function to return a string that presents the student's information in the following format:
 *
 * "<name> is in class <class>"
 *
 * @param {Object} student - An object containing the student's information (e.g., `name` and `class`)
 * @return {string} A string containing the formatted student information
 *
 * @example
 * getFormattedStudentInformation({ name: "John", class: "1A01" }) // returns "John is in class 1A01"
 *
 */

function getFormattedStudentInformation(student) {
    return student.name + ' is in class ' + student.class;
}

// Your own test cases
// e.g.;

console.log(getFormattedStudentInformation({ name: 'John', class: '1A01' })); // "John is in class 1A01"

module.exports = getFormattedStudentInformation;
