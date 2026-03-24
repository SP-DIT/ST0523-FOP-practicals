function calculateBMI(person) {
    return person.weight / (person.height * person.height);
}

// examples

console.log(calculateBMI({ weight: 70, height: 1.75 })); // 22.86
console.log(calculateBMI({ weight: 80, height: 1.8 })); // 24.69

module.exports = calculateBMI;
