/**
 * You are given an object representing a student's information.
 * Each student object contains a `name` and a `class` property.
 *
 * Complete the function to update the class of the student to a new class.
 *
 * @param {Object} student - An object containing the student's name and class
 * @param {string} newClassName - The new class to assign to the student
 * @return {Object} The updated student object
 *
 * @example
 * setStudentClass({ name: "John", class: "1A01" }, "1A02")
 * // returns: { name: "John", class: "1A02" }
 *
 */
function setStudentClass(student, newClassName) {
    student.class = newClassName;
    return student;
}

// Your own test cases
// e.g.;

console.log(setStudentClass({ name: 'John', class: '1A01' }, '1A02')); // {name: "John", class: "1A02"}

module.exports = setStudentClass;
