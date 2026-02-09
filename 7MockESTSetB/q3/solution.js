function assignFinalGrades(students) {
    let result = [];

    for (let i = 0; i < students.length; i++) {
        let student = students[i];
        let scores = student.scores;

        // Calculate average
        let sum = 0;
        for (let j = 0; j < scores.length; j++) {
            sum = sum + scores[j];
        }
        let average = sum / scores.length;

        // Determine grade
        let grade = '';
        if (average >= 85) {
            grade = 'A';
        } else if (average >= 70) {
            grade = 'B';
        } else if (average >= 50) {
            grade = 'C';
        } else {
            grade = 'D';
        }

        // Create new object with name and grade
        let newStudent = {
            name: student.name,
            grade: grade,
        };

        result.push(newStudent);
    }

    return result;
}

module.exports = assignFinalGrades;

// examples

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
