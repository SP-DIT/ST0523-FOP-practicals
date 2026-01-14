function setWeightCategory(patients) {
    for (let i = 0; i < patients.length; i++) {
        const patient = patients[i];
        const bmi = patient.weight / (patient.height * patient.height);

        if (bmi < 18.5) {
            patient.category = 'Underweight';
        } else if (bmi < 25) {
            patient.category = 'Normal';
        } else if (bmi < 30) {
            patient.category = 'Overweight';
        } else {
            patient.category = 'Obesity';
        }
    }
    return patients;
}

module.exports = setWeightCategory;

// Example usage:
console.log(
    setWeightCategory([
        { name: 'Alice', weight: 50, height: 1.6 },
        { name: 'Bob', weight: 80, height: 1.75 },
        { name: 'Charlie', weight: 55, height: 1.8 },
    ]),
);
// [
//   { name: 'Alice', weight: 50, height: 1.6, category: 'Normal' },
//   { name: 'Bob', weight: 80, height: 1.75, category: 'Overweight' },
//   { name: 'Charlie', weight: 55, height: 1.8, category: 'Underweight' },
// ]

console.log(
    setWeightCategory([
        { name: 'David', weight: 90, height: 1.9 },
        { name: 'Eva', weight: 45, height: 1.5 },
        { name: 'Frank', weight: 70, height: 1.7 },
    ]),
);
// [
//   { name: 'David', weight: 90, height: 1.9, category: 'Normal' },
//   { name: 'Eva', weight: 45, height: 1.5, category: 'Underweight' },
//   { name: 'Frank', weight: 70, height: 1.7, category: 'Overweight' },
// ]
