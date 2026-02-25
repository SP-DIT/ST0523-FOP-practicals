function scoreToGrade(score) {
    if (score >= 80) {
        return 'A';
    } else if (score >= 70) {
        return 'B';
    } else if (score >= 60) {
        return 'C';
    } else if (score >= 50) {
        return 'D';
    }
    return 'F';
}

module.exports = scoreToGrade;

// examples

console.log(scoreToGrade(81)); // A
console.log(scoreToGrade(77)); // B
console.log(scoreToGrade(63)); // C
console.log(scoreToGrade(49)); // F
