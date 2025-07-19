/**
 * Given a student's name and class, return an object that includes:
 *  - the student's name and class
 *  - a function that returns a nicely formatted string with both pieces of information
 *
 * @param {string} studentName - The name of the student
 * @param {string} studentClass - The class the student is in
 * @return {Object} An object with the following properties:
 *    - `name`: the student's name (from the `studentName` parameter)
 *    - `class`: the student's class (from the `studentClass` parameter)
 *    - `getFormattedStudentInformation`: a function that returns a string in the format:
 *         "<name> is in class <class>"
 *
 * @example
 * makeStudentWithFunction("John", "1A01")
 * // returns: {
 * //   name: "John",
 * //   class: "1A01",
 * //   getFormattedStudentInformation: [Function]
 * // }
 *
 * makeStudentWithFunction("Mary", "1A02")
 * // returns: {
 * //   name: "Mary",
 * //   class: "1A02",
 * //   getFormattedStudentInformation: [Function]
 * // }
 *
 */

const getFormattedStudentInformation = require('../q2/code');

function makeStudentWithFunction(studentName, studentClass) {
    return {
        name: studentName,
        class: studentClass,
        getFormattedStudentInformation: function () {
            return this.name + ' is in class ' + this.class;
        },
    };
}

// Your own test cases
// e.g.;
const student = makeStudentWithFunction({ name: 'John', class: '1A01' });
console.log(student); // { name: "John", class: "1A01", getFormattedStudentInformation: [function] }
console.log(student.getFormattedStudentInformation()); // "John is in class 1A01"

module.exports = makeStudentWithFunction;
