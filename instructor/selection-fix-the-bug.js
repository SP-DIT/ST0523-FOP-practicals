// q1 fix the error in the code below
// The code is trying to find if a is the largest among a, b, and c.

function isALargest(a, b, c) {
    if (a > b > c) {
        return true;
    } else {
        return false;
    }
}

// Sample
console.log(isALargest(5, 3, 2)); // true
console.log(isALargest(5, 6, 2)); // false
console.log(isALargest(5, 3, 6)); // false

// q2 fix the error in the code below
// The code below tries to determine if someone is eligible to ride a roller coaster. The rider must fulfill all of the condition:
// - The age requirement is 12 years or older,
// - the height requirement is 120 cm,
// - and the weight requirement is 40 kg.
function canRide(height, age, weight) {
    if (height >= 120 || age >= 12 || weight >= 40) {
        return true;
    } else {
        return false;
    }
}

// Sample
console.log(canRide(168, 17, 60)); // true;
console.log(canRide(110, 17, 60)); // false;
console.log(canRide(168, 10, 60)); // false;
console.log(canRide(168, 17, 30)); // false;

// q3 fix the error in the code below
// The code below tries to convert score to grade.
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

// Sample
console.log(scoreToGrade(81)); // A
console.log(scoreToGrade(77)); // B
console.log(scoreToGrade(63)); // C
console.log(scoreToGrade(49)); // F

// q4 fix the error in the code below
// The code below tries to determine the public transport fare
/**
 * | Fare type | Bus | Train |
 * | --------- | --- | ----- |
 * | Student   | 0.5 | 0.75  |
 * | Senior    | 0.3 | 0.5   |
 * | Adult     | 1.5 | 3     |
 */

// prettier-ignore
function calculateTransportFare(fareType, modeOfTransport) {
    if (fareType = 'Student') {
        if (modeOfTransport = 'Bus') {
            return 0.5;
        } else if (modeOfTransport = 'Train') {
            return 0.75;
        }
    } else if (fareType = 'Senior') {
        if (modeOfTransport = 'Bus') {
            return 0.3;
        } else if (modeOfTransport = 'Train') {
            return 0.5;
        }
    } else if (fareType = 'Adult') {
        if (modeOfTransport = 'Bus') {
            return 1.5;
        } else if (modeOfTransport = 'Train') {
            return 3;
        }
    }
}

// Sample
console.log(calculateTransportFare('Student', 'Bus')); // 0.5
console.log(calculateTransportFare('Senior', 'Bus')); // 0.3
console.log(calculateTransportFare('Adult', 'Train')); // 3
