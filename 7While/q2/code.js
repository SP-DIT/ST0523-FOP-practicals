/**
 * Change the function below to use a while-loop instead of a for-loop.
 * The function should generate 10 unique random numbers between 1 and 31 (not including 31).
 *
 * @returns an array of 10 unique random numbers.
 *
 * @note The test cases controls the values returned by Math.random.
 */
function generate10RandomNumber() {
    const array = [];
    for (let i = 0; i < 10; i++) {
        const randomNumber = Math.random() * 30 + 1;
        if (array.includes(randomNumber)) {
            // randomNumber already exists, don't add it
            // decrease i by 1 to repeat this iteration
            i--;
        } else {
            array.push(randomNumber);
        }
    }
    return array;
}

// Your own test cases
// e.g.;

console.log(generate10RandomNumber());

module.exports = generate10RandomNumber;
