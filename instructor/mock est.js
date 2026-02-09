// q1 return a string describing the class's performance based on the class's average score.
// You are given an array of student objects, where each student has a name and a score.
// The performance categories are as follows:
// - "Excellent" for average scores 90 and above
// - "Good" for average scores above and equal to 75 and below 90
// - "Average" for average scores above and equal to 50 and below 75
// - "Poor" for average scores below 50

function classPerformance(students) {}

console.log(
    classPerformance([
        { name: 'Alice', score: 95 },
        { name: 'Bob', score: 85 },
        { name: 'Charlie', score: 78 },
    ]),
); // "Good", average score is 86

console.log(
    classPerformance([
        { name: 'David', score: 45 },
        { name: 'Eve', score: 55 },
        { name: 'Frank', score: 60 },
        { name: 'Grace', score: 70 },
    ]),
); // "Average", average score is 57.5

// q2 Return the names of all overweight students (based on BMI) from an array of student objects.
// Each student object contains a name, weight (in kg), and height (in meters).
// A student is considered overweight if their BMI (Body Mass Index) is 25 or higher.
// BMI is calculated as weight divided by the square of height (BMI = weight / (height * height)).

function findOverweightStudents(students) {}

console.log(
    findOverweightStudents([
        { name: 'Alice', weight: 68, height: 1.65 },
        { name: 'Bob', weight: 85, height: 1.75 },
        { name: 'Charlie', weight: 54, height: 1.6 },
    ]),
); // ["Bob"], Bob's BMI is 27.76

console.log(
    findOverweightStudents([
        { name: 'David', weight: 90, height: 1.8 },
        { name: 'Eve', weight: 70, height: 1.7 },
        { name: 'Frank', weight: 60, height: 1.75 },
        { name: 'Grace', weight: 50, height: 1.6 },
        { name: 'Hannah', weight: 80, height: 1.6 },
    ]),
); // ["David", "Hannah"], David's BMI is 27.78, Hannah's BMI is 31.25

// q3 Given an array of student objects, each with a name and an array of scores, assign them a final grade based on their average score.
// The grading scale is as follows:
// - "A" for average scores 85 and above
// - "B" for average scores above and equal to 70 and below 85
// - "C" for average scores above and equal to 50 and below 70
// - "D" for average scores below 50
// Return a new array of objects where each object containing only the student's name and their final grade.

function assignFinalGrades(students) {}

console.log(
    assignFinalGrades([
        { name: 'Alice', scores: [90, 85, 88] },
        { name: 'Bob', scores: [70, 75, 72] },
        { name: 'Charlie', scores: [50, 55, 60] },
    ]),
);
// [
//   { name: "Alice", grade: "A" },
//   { name: "Bob", grade: "B" },
//   { name: "Charlie", grade: "C" }
// ]
// Explanation: Alice's average is 87.67 (A), Bob's average is 72.33 (B), Charlie's average is 55 (C)
// Note the scores property is removed in the output.

console.log(
    assignFinalGrades([
        { name: 'David', scores: [40, 45, 50, 45, 40, 60] },
        { name: 'Eve', scores: [80, 85, 90, 75, 100] },
        { name: 'Frank', scores: [60, 65] },
        { name: 'Grace', scores: [30, 35, 40] },
    ]),
);
// [
//   { name: "David", grade: "D" },
//   { name: "Eve", grade: "A" },
//   { name: "Frank", grade: "C" },
//   { name: "Grace", grade: "D" }
// ]
// Explanation: David's average is 46.67 (D), Eve's average is 86 (A), Frank's average is 62.5 (C), Grace's average is 35 (D)
// Note the scores property is removed in the output.

// q4 Create an object that keeps track of a player's position on a 10x10 2D grid.
// The player starts at position (0, 0), top left hand corner of the grid.
/**
 * Grid:
 * (0,0) (1,0) (2,0) ... (9,0)
 * (0,1) (1,1) (2,1) ... (9,1)
 * ...
 * (0,9) (1,9) (2,9) ... (9,9)
 */
// Implement methods to move the player up, down, left, and right by a specified number of steps. The function should return the player's new position after each move.
// When the player moves beyond the grid boundaries, they should wrap around to the opposite side of the grid.

// For example, moving up from (0, 0) should result in (0, 9), and moving left from (0, 0) should result in (9, 0).
function Player() {}

const player = new Player();
console.log(player.moveUp(1)); // (0, 9), moving up from (0, 0) wraps around to (0, 9)
console.log(player.moveLeft(1)); // (9, 9), moving left from (0, 9) wraps around to (9, 9)
console.log(player.moveDown(2)); // (9, 1), moving down 2 steps from (9, 9) to (9, 1)
console.log(player.moveRight(3)); // (2, 1), moving right 3 steps from (9, 1) to (2, 1)
console.log(player.moveRight(3)); // (5, 1), moving right 3 steps from (2, 1) to (5, 1)
console.log(player.moveDown(3)); // (5, 4), moving down 3 steps from (5, 1) to (5, 4)
