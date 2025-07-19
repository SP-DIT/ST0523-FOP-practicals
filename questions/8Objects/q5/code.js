/**
 * Continuing from the previous question.
 *
 * In class, you learned that objects, arrays, and functions are "passed by reference".
 * This means variables store the *reference* (memory address) of the object, not the actual object itself.
 *
 * In the earlier question, the update could have been done either by modifying the original object (in-place)
 * or by returning a new object.
 *
 * In this question, you are required to do it the the following way:
 *
 * ✅ Create and return a **brand new object** with the updated class.
 * ❌ Do not modify the original object.
 *
 * You are given an object representing a student's information. Each object contains the student's `name` and `class`.
 *
 * Complete the function to return a new object where the `class` is updated to `newClassName`,
 * while leaving the original object unchanged.
 *
 * @param {Object} student - The student's information (name and class)
 * @param {string} newClassName - The new class to assign to the student
 * @return {Object} A new student object with the updated class
 *
 * @example
 * setStudentClassNewObject({ name: "John", class: "1A01" }, "1A02")
 * // returns: { name: "John", class: "1A02" } (original object is not changed)
 *
 */
function setStudentClassNewObject(student, newClassName) {}

// Your own test cases
// e.g.;

const originalStudent = { name: 'John', class: '1A01' };
const updatedStudent = setStudentClassNewObject({ name: 'John', class: '1A01' }, '1A02');

// Check 1: updatedStudent should not be a DIFFERENT object from originalStudent
if (updatedStudent === originalStudent) console.log('ERROR! Should return a brand new object!');

// Check 2: originalStudent should not be updated.
if (originalStudent.class === '1A02') console.log('ERROR! Should not modify originalStudent!');

console.log(updatedStudent);

module.exports = setStudentClassNewObject;
