/**
 * Continuing from the previous question.
 *
 * In class, you also learned that objects, arrays, and functions are "passed by reference".
 * This means that variables store the *reference* (memory address) to the object, not the actual object itself.
 *
 * In the previous question, you explored one solution which involved creating a **new object** with the updated data.
 * This question focuses on the other way:
 *
 * ❌ Do not create or return a new object.
 * ✅ Update the **original object directly** (in-place)
 *
 * You are given an object representing a student's information. Each object contains the student's `name` and `class`.
 *
 * Complete the function to update the student's `class` property to `newClassName` by directly modifying the original object.
 *
 * @param {Object} student - The student's information (name and class)
 * @param {string} newClassName - The new class to assign to the student
 * @return {Object} The same student object with the updated class
 *
 * @example
 * setStudentClassInPlace({ name: "John", class: "1A01" }, "1A02")
 * // returns: { name: "John", class: "1A02" } (same object, updated in-place)
 *
 */
function setStudentClassInPlace(student, newClassName) {}

// Your own test cases
// e.g.;

const originalStudent = { name: 'John', class: '1A01' };
const updatedStudent = setStudentClassInPlace({ name: 'John', class: '1A01' }, '1A02');

// Check 1: updatedStudent should be the SAME object as originalStudent
if (updatedStudent !== originalStudent) console.log('ERROR! Should return the original object!');

// Check 2: originalStudent should also be updated.
if (originalStudent.class !== '1A02') console.log('ERROR! Should modify originalStudent!');

console.log(updatedStudent);

module.exports = setStudentClassInPlace;
