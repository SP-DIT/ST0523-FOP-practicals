/**
 * Reference: https://www.reddit.com/r/SingaporePoly/s/NUA8vrbBan
 *
 * This function calculates the GPA needed for the remaining credits to be fulfilled to achieve the target GPA
 * @param {number[]} moduleCredits - The number of credits for the ith module
 * @param {number[]} moduleGrades - The grade for the ith module, grade will be either 0, 0.5, 1, 1.5, ...., 3.5, 4
 * @param {number} totalCredits - The total number of credits to be fulfilled by graduation
 * @param {number} targetGPA - The target GPA
 *
 * @returns {number} - The GPA needed for the remaining credits to be fulfilled to achieve the target GPA, target GPA needs to be either 0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4
 *
 * @example
 * toGetTargetGPA([], [], 120, 3); // 3
 * toGetTargetGPA([6, 5], [3, 3], 120, 3.5); // 4
 * toGetTargetGPA([4,4,5,5], [1,2,2,3], 220, 3.14); // 3.5
 *
 * @explanation
 * In the first example,
 *      the student has not completed any module, and hence has a GPA of 0 and has not fulfilled any credits
 *      They hence need a GPA of 3 for the remaining 120 credits to achieve a target GPA of 3.
 * In the second example,
 *      the student has completed 2 modules, the first module is 6 credits, whereas the second module is 5 credits. The grade scored for both module is 3.
 *      Hence, the student has a GPA of 3 and has fulfilled 11 credits.
 *      They hence need a GPA of 4 for the remaining 120 - 11 = 109 credits to achieve a target GPA of 3.5.
 * In the third example,
 *      the student has completed 4 modules, with credits 4, 4, 5, 5, respectively.
 *      the student scored the grades of 1, 2, 2, 3 for the four modules respectively.
 *      Hence, the student has a GPA of (1 * 4 + 2 * 4 + 2 * 5 + 3 * 5) / (4 + 4 + 5 + 5) = 2.055555555...
 *      They hence need a GPA of 3.5 for the remaining 220 - 29 = 91 credits to achieve a target GPA of 3.14.
 *
 * @hint
 * You can round to .5 by first multiplying by 2, round it up, then divide by 2 again
 * e.g. 3.4 * 2 = 6.8
 *      rounded up = 7
 *      divide by 2 = 3.5
 */
function toGetTargetGPA(moduleCredits, moduleGrades, totalCredits, targetGPA) {
    let gradePoints = 0;
    let creditSum = 0;
    for (let i = 0; i < moduleCredits.length; i++) {
        const credit = moduleCredits[i];
        const grade = moduleGrades[i];
        gradePoints += credit * grade;
        creditSum += credit;
    }
    const neededTotalGrade = targetGPA * totalCredits;
    const remainingGrade = neededTotalGrade - gradePoints;
    const remainingCredit = totalCredits - creditSum;
    const neededGpa = Math.ceil((2 * remainingGrade) / remainingCredit) / 2;
    return neededGpa;
}

// Your own test cases
// e.g.;

console.log(toGetTargetGPA([6, 5], [3, 3], 120, 3.5));

// To test your code against the test cases: node run.js q5
// To test your code against custom input: node ./q5/code.js

module.exports = toGetTargetGPA;
