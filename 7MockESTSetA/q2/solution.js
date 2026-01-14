function totalTimeYoungMaleVolunteers(volunteers) {
    let total = 0;
    for (let i = 0; i < volunteers.length; i++) {
        const volunteer = volunteers[i];
        if (volunteer.gender === 'male' && volunteer.age < 30) {
            total = total + volunteer.contribution;
        }
    }
    return total;
}

module.exports = totalTimeYoungMaleVolunteers;

// Example usage:
console.log(
    totalTimeYoungMaleVolunteers([
        { name: 'John', age: 25, gender: 'male', contribution: 5 },
        { name: 'Jane', age: 22, gender: 'female', contribution: 8 },
        { name: 'Mike', age: 28, gender: 'male', contribution: 10 },
        { name: 'Emily', age: 32, gender: 'female', contribution: 7 },
        { name: 'Tom', age: 32, gender: 'male', contribution: 7 },
    ]),
); // 15
// John (5) + Mike (10) = 15

console.log(
    totalTimeYoungMaleVolunteers([
        { name: 'Alice', age: 27, gender: 'female', contribution: 6 },
        { name: 'Bob', age: 24, gender: 'male', contribution: 9 },
        { name: 'Charlie', age: 29, gender: 'male', contribution: 4 },
        { name: 'Diana', age: 31, gender: 'female', contribution: 10 },
        { name: 'Elliot', age: 12, gender: 'male', contribution: 10 },
    ]),
); // 23
// Bob (9) + Charlie (4) + Elliot (10) = 23
