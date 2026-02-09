function classPerformance(students) {
    // Your code here
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
