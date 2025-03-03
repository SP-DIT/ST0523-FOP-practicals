/**
 * This function calculates the GPA needed for the remaining credits to be fulfilled to achieve the target GPA
 * @param {number} gpa - The current GPA
 * @param {number} creditsFulfilled - The number of credits already fulfilled
 * @param {number} totalCredits - The total number of credits to be fulfilled by graduation
 * @param {number} targetGPA - The target GPA
 *
 * @returns {number} - The GPA needed for the remaining credits to be fulfilled to achieve the target GPA, target GPA needs to be either 0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4
 *
 * @example
 * toGetTargetGPA(0, 0, 120, 3); // 3
 * toGetTargetGPA(3, 11, 120, 3.5); // 4
 * toGetTargetGPA(2.07, 29, 220, 3.14); // 3.5
 *
 * @explanation
 * In the first example, the student has a GPA of 0 and has not fulfilled any credits. They need a GPA of 3 for the remaining 120 credits to achieve a target GPA of 3.
 * In the second example, the student has a GPA of 3 and has fulfilled 11 credits. They need a GPA of 4 for the remaining 120 - 11 = 109 credits to achieve a target GPA of 3.5.
 * In the third example, the student has a GPA of 2.07 and has fulfilled 29 credits. They need a GPA of 3.5 for the remaining 220 - 29 = 91 credits to achieve a target GPA of 3.14.
 *
 */
function toGetTargetGPA(gpa, creditsFulfilled, totalCredits, targetGPA) {
    // Calculate the GPA needed for the remaining credits to be fulfilled to achieve the target GPA
    const targetGPANeeded = (targetGPA * totalCredits - gpa * creditsFulfilled) / (totalCredits - creditsFulfilled);

    // target GPA needs to be either 0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4
    return Math.ceil(targetGPANeeded * 2) / 2;
}

module.exports = toGetTargetGPA;
