/**
 * You are given a function that returns student IDs (integers) from a database.
 *
 *      This function takes in 1 parameter, the page number, and the function will return the records of that page.
 *
 *      Each time, the function will only return at most 5 ids. If no record is returned, it has reached the end of the records.
 *
 *      The returned student ids are not necessarily sorted nor is it always contiguous (e.g. there might be gaps).
 *
 * You are also given a student ID, and you are to determine whether the student ID is found in the database.
 *
 * A student ID is a positive integer from 0 to 100000
 * A page is a positive integer from 0 to 20000, where 0 is the first page
 * The number of records can range from 0 to 100000
 *
 * @params {(page: integer) => integer[]} getStudentIds - The function that returns paginated records of student ids,
 * @params {integer} targetStudentId - The studentId to look for
 * @returns {boolean} true if student is found, false otherwise.
 *
 * @example
 * if the records are [1,2,3,4,....,18,19,20], and I want to look for student 18.
 * I have to call getStudentIds at least 4 times.
 * getStudentIds(0) => [1,2,3,4,5]
 * getStudentIds(1) => [6,7,8,9,10]
 * getStudentIds(2) => [11,12,13,14,15]
 * getStudentIds(3) => [16,17,18,19,20] // Found!
 *
 * if the records are [3,8,4,1,5,6,9,2], and I want to look for student 7.
 * I have to call the getStudentIds at least 2 times
 * getStudentIds(0) => [3,8,4,1,5]
 * getStudentIds(1) => [6,9,2] // Not Found!
 *
 */
function findStudent(getStudentIds, targetStudentId) {
    let records = [null, null, null, null, null];
    let page = 0;
    let found = false;
    while (!found && records.length === 5) {
        records = getStudentIds(page++);
        found = records.includes(targetStudentId);
    }
    return found;
}

// Your own test cases
// e.g.;

function mockGetStudentIds(pageNumber) {
    const students = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
    return students.slice(pageNumber * 5, pageNumber * 5 + 5);
}

console.log(findStudent(mockGetStudentIds, 18)); // true

// To test your code against the test cases: node run.js q5
// To test your code against custom input: node ./q5/code.js

module.exports = findStudent;
