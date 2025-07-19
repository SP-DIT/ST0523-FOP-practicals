/**
 * You are given an object that contains information about a student.
 * Each object includes the student's name and class.
 *
 * Complete the function to return the name of the student.
 *
 * @param {Object} student - An object containing the student's information (e.g., name and class)
 * @return {string} The name of the student
 *
 * @example
 * getStudentName({ name: "John", class: "1A01" }) // returns "John"
 *
 * Note: Try accessing the name using both dot notation and bracket notation.
 */
function getStudentName(student) {
    return student.name;
}

// Your own test cases
// e.g.;

console.log(getStudentName({ name: 'John', class: '1A01' })); // John

module.exports = getStudentName;
