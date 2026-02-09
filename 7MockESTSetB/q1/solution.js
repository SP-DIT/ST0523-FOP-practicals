function classPerformance(students) {
    let totalScore = 0;
    for (let i = 0; i < students.length; i++) {
        totalScore = totalScore + students[i].score;
    }

    let average = totalScore / students.length;

    if (average >= 90) {
        return 'Excellent';
    } else if (average >= 75) {
        return 'Good';
    } else if (average >= 50) {
        return 'Average';
    } else {
        return 'Poor';
    }
}

module.exports = classPerformance;

// examples

console.log(
    classPerformance([
        { name: 'Alice', score: 95 },
        { name: 'Bob', score: 85 },
        { name: 'Charlie', score: 78 },
    ]),
); // "Good"

console.log(
    classPerformance([
        { name: 'David', score: 45 },
        { name: 'Eve', score: 55 },
        { name: 'Frank', score: 60 },
        { name: 'Grace', score: 70 },
    ]),
); // "Average"
