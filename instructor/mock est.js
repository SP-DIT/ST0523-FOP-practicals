// q1 find the shape with the largest area
// area of circle = π * radius * radius
// area of rectangle = width * height
// area of triangle = 0.5 * base * height

function largestArea(shapes) {}

console.log(
    largestArea([
        { type: 'circle', radius: 3 },
        { type: 'rectangle', width: 4, height: 5 },
        { type: 'triangle', base: 6, height: 7 },
    ]),
); // { type: 'rectangle', width: 4, height: 5 }. Area = 20
console.log(
    largestArea([
        { type: 'circle', radius: 10 },
        { type: 'rectangle', width: 4, height: 5 },
        { type: 'triangle', base: 6, height: 7 },
    ]),
); // { type: 'circle', radius: 10 }. Area = 314.16

// q2 find the total amount of contribution by male volunteer below age 30

function totalTimeYoungMaleVolunteers(volunteers) {}

console.log(
    totalTimeYoungMaleVolunteers([
        { name: 'John', age: 25, gender: 'male', contribution: 5 },
        { name: 'Jane', age: 22, gender: 'female', contribution: 8 },
        { name: 'Mike', age: 28, gender: 'male', contribution: 10 },
        { name: 'Emily', age: 32, gender: 'female', contribution: 7 },
        { name: 'Tom', age: 32, gender: 'male', contribution: 7 },
    ]),
); // 15 (John + Mike, 5 + 10)

console.log(
    totalTimeYoungMaleVolunteers([
        { name: 'Alice', age: 27, gender: 'female', contribution: 6 },
        { name: 'Bob', age: 24, gender: 'male', contribution: 9 },
        { name: 'Charlie', age: 29, gender: 'male', contribution: 4 },
        { name: 'Diana', age: 31, gender: 'female', contribution: 10 },
        { name: 'Elliot', age: 12, gender: 'male', contribution: 10 },
    ]),
); // 23 (Bob + Charlie + Elliot, 9 + 4 + 10)

// q3 Set the weight category for each patient based on their BMI
// BMI = weight (kg) / (height (m) * height (m))
// Underweight: BMI < 18.5
// Normal: 18.5 <= BMI < 24.9
// Overweight: 25 <= BMI < 29.9
// Obesity: BMI >= 30

function setWeightCategory(patients) {}

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

// q4 Given an array of scores, return an object with the highest score, lowest score, and average score.

function scoreStats(scores) {}

console.log(scoreStats([85, 92, 78, 90, 88])); // { highest: 92, lowest: 78, average: 86.6 }
console.log(scoreStats([70, 75, 80, 85, 90, 95])); // { highest: 95, lowest: 70, average: 82.5 }
console.log(scoreStats([100, 98, 95, 97, 96])); // { highest: 100, lowest: 95, average: 97.2 }

// q5 given an array of numbers, create an object with the following methods:
// - next(): returns the next number in the array each time it is called. If the end of the array is reached, it should start again from the beginning.
// - reset(): resets the sequence back to the start of the array.
// - current(): returns the current number in the sequence without advancing.

function createNumberSequence(numbers) {}
const sequence = createNumberSequence([10, 20, 30]);

console.log(sequence.current()); // 10
console.log(sequence.next()); // 20
console.log(sequence.next()); // 30
console.log(sequence.next()); // 10; loops back to start
console.log(sequence.next()); // 20
sequence.reset();
console.log(sequence.current()); // 10; after reset
console.log(sequence.next()); // 20;
