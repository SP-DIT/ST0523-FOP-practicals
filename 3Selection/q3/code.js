function scoreToGrade(score) {
    let grade = 'F';
    if (score >= 80) {
        grade = 'A';
    }
    if (score >= 70) {
        grade = 'B';
    }
    if (score >= 60) {
        grade = 'C';
    }
    if (score >= 50) {
        grade = 'D';
    }
    return grade;
}

module.exports = scoreToGrade;

// examples

console.log(scoreToGrade(81)); // A
console.log(scoreToGrade(77)); // B
console.log(scoreToGrade(63)); // C
console.log(scoreToGrade(49)); // F
