function findOverweightStudents(students) {
    let overweightNames = [];

    for (let i = 0; i < students.length; i++) {
        let student = students[i];
        let bmi = student.weight / (student.height * student.height);

        if (bmi >= 25) {
            overweightNames.push(student.name);
        }
    }

    return overweightNames;
}

module.exports = findOverweightStudents;

// examples

console.log(
    findOverweightStudents([
        { name: 'Alice', weight: 68, height: 1.65 },
        { name: 'Bob', weight: 85, height: 1.75 },
        { name: 'Charlie', weight: 54, height: 1.6 },
    ]),
); // ["Bob"]

console.log(
    findOverweightStudents([
        { name: 'David', weight: 90, height: 1.8 },
        { name: 'Eve', weight: 70, height: 1.7 },
        { name: 'Frank', weight: 60, height: 1.75 },
        { name: 'Grace', weight: 50, height: 1.6 },
        { name: 'Hannah', weight: 80, height: 1.6 },
    ]),
); // ["David", "Hannah"]
