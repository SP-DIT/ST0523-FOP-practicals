function countGuesses(secretNumber) {
    if (secretNumber < 1 || secretNumber > 100) {
        return 0;
    }

    let low = 1;
    let high = 100;
    let guess = 50;
    let count = 0;

    while (low <= high) {
        count = count + 1;

        if (guess === secretNumber) {
            return count;
        }

        if (guess < secretNumber) {
            low = guess + 1;
        } else {
            high = guess - 1;
        }

        guess = Math.floor((low + high) / 2);
    }

    return count;
}

// examples

console.log(countGuesses(1)); // should return 6 (50, 25, 12, 6, 3, 1)
console.log(countGuesses(100)); // should return 7 (50, 75, 88, 94, 97, 99, 100)
console.log(countGuesses(50)); // should return 1 (50)

module.exports = countGuesses;
