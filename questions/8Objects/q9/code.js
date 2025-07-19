/**
 * You are given an object that contains information about a student.
 * Each object includes the student's name and class.
 *
 * In a previous question, we managed to return a string that contains the information of the student in a specific format.
 *
 * In this question, you are to add a method (modified in-place) "getFormattedStudentInformation" that prints the student's information.
 *
 * Note that this function should work even after the class has been changed.
 *
 * @param {Object} student - An object containing the student's information (e.g., name and class)
 * @return {Object} the same student object but with the new getFormattedStudentInformation function.
 *
 * @example
 * getStudentName({ name: "John", class: "1A01" }) // returns { name: "John", class: "1A01", getFormattedStudentInformation: [function] }
 * Note: Try accessing the name using both dot notation and bracket notation.
 */
function addFunction(student) {}

// Your own test cases
// e.g.;

const student = { name: 'John', class: '1A01' };
const studentWithFunction = addFunction(student);

// Check 1: The original student should also be updated
if (student !== studentWithFunction) console.log('ERROR! You should be returning the same student object!');

// Check 2: The function returns the string correctly.
const studentInformation = student.getFormattedStudentInformation();
if (studentInformation !== 'John is from class 1A01') console.log('ERROR! Wrong student info!', studentInformation);

// Check 3: The function returns correct even after the class is updated
student.class = '1A02';
if (studentInformation !== 'John is from class 1A02')
    console.log('ERROR! Wrong student info after updating!', studentInformation);

module.exports = addFunction;
