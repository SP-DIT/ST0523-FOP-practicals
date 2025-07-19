/**
 * You are given a function that returns student IDs (as integers) from a database in a paginated manner.
 *
 * - This function takes **one parameter**: the page number (starting from 0).
 * - Each page contains **at most 5 student IDs**.
 * - If the function returns an **empty array**, it means there are no more records to fetch.
 * - The returned student IDs are **not necessarily sorted** and **may contain gaps**.
 *
 * You are also given a **target student ID**, and your task is to determine if this ID exists in the dataset.
 *
 * A student ID is a positive integer between 0 and 100000.
 * A page number is a positive integer between 0 and 20000.
 * The total number of records can range from 0 to 100000.
 *
 * Complete the function "findStudent" to search for the student ID across the paginated results.
 *
 * @param {(page: number) => number[]} getStudentIds - A function that returns an array of student IDs for the given page.
 * @param {number} targetStudentId - The student ID to search for.
 * @returns {boolean} - Returns true if the student ID is found; otherwise, false.
 *
 * @example
 * // Case 1: target is found on the 4th page
 * getStudentIds(0) => [1, 2, 3, 4, 5]
 * getStudentIds(1) => [6, 7, 8, 9, 10]
 * getStudentIds(2) => [11, 12, 13, 14, 15]
 * getStudentIds(3) => [16, 17, 18, 19, 20]
 * findStudentId(getStudentIds, 18) => true
 *
 * // Case 2: target is not found
 * getStudentIds(0) => [3, 8, 4, 1, 5]
 * getStudentIds(1) => [6, 9, 2]
 * getStudentIds(2) => []  // End of records
 * findStudentId(getStudentIds, 7) => false
 */

function findStudent(getStudentIds, targetStudentId) {
    let page = 0;
    while (true) {
        const records = getStudentIds(page);
        if (records.includes(targetStudentId)) return true;
        else if (records.length === 0) return false;
        page += 1;
    }
}

// Your own test cases
// e.g.;

function mockGetStudentIds(pageNumber) {
    const students = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
    return students.slice(pageNumber * 5, pageNumber * 5 + 5);
}

console.log(findStudent(mockGetStudentIds, 18)); // true

module.exports = findStudent;
