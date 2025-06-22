/**
 * You are given two objects representing the information of students.
 * Each object contains the student's `name` and `class`.
 *
 * While it is possible for two students to have the same name, the school ensures that
 * no two students in the **same class** share the same name.
 *
 * This means that although there might be two students named "John" in the school,
 * they will never be in the same class.
 *
 * Complete the function to check if the two objects refer to the same student.
 * You can assume that two students are the same **only if both their `name` and `class` are the same**.
 *
 * @param {Object} student1 - The information (name and class) of the first student
 * @param {Object} student2 - The information (name and class) of the second student
 * @return {boolean} `true` if they are the same student, `false` otherwise
 *
 * @example
 * checkIsSameStudent({ name: "John", class: "1A01" }, { name: "Alice", class: "1A02" }) // false — different name, different class
 * checkIsSameStudent({ name: "John", class: "1A01" }, { name: "John", class: "1A02" })  // false — same name, different class
 * checkIsSameStudent({ name: "John", class: "1A01" }, { name: "Alice", class: "1A01" }) // false — different name, same class
 * checkIsSameStudent({ name: "John", class: "1A01" }, { name: "John", class: "1A01" })  // true — both name and class match
 */

function checkIsSameStudent(student1, student2) {
    return student1.name === student2.name && student1.class === student2.class;
}

// Your own test cases
// e.g.;

console.log(checkIsSameStudent({ name: 'John', class: '1A01' }, { name: 'Alice', class: '1A02' })); // false

module.exports = checkIsSameStudent;
