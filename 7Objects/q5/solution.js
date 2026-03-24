function calculateScores(student1, student2, student3) {
    const result = { min: 0, max: 0, average: 0 };

    if (student1.score < student2.score && student1.score < student3.score) {
        result.min = student1.score;
    } else if (student2.score < student3.score) {
        result.min = student2.score;
    } else {
        result.min = student3.score;
    }

    if (student1.score > student2.score && student1.score > student3.score) {
        result['max'] = student1.score;
    } else if (student2.score > student3.score) {
        result['max'] = student2.score;
    } else {
        result['max'] = student3.score;
    }

    result.average = (student1.score + student2.score + student3.score) / 3;

    return result;
}

// examples

console.log(calculateScores({ name: 'Alice', score: 85 }, { name: 'Bob', score: 90 }, { name: 'Charlie', score: 80 })); // { min: 80, max: 90, average: 85 }
console.log(calculateScores({ name: 'Dan', score: 60 }, { name: 'Eve', score: 75 }, { name: 'Fay', score: 90 })); // { min: 60, max: 90, average: 75 }

module.exports = calculateScores;
