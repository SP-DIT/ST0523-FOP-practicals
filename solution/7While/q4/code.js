/**
 * Complete the function  `countNumberOfRolls` that uses the `rollDice` function.
 * Keep rolling the dice and adding up the results until the total sum is 30 or more.
 *
 * @param {() => number} rollDice - a function that returns a number between 1 and 6, like rolling a dice.
 * @returns the number of rolls it took to make the total sum reach at least 30.
 *
 * @example
 * If the dice always rolls 1, you need 30 rolls to reach 30.
 * If the dice always rolls 6, you need 5 rolls to reach 30.
 * If the dice rolls in the pattern 1, 2, 3, 4, 5, 6, 1, 2, 3, 4..., you need 10 rolls to reach 30.
 *
 * @note The dice rolls may not be random. The test cases can control the values returned by `rollDice`.
 */

function countNumberOfRolls(rollDice) {
    let count = 0;
    let sum = 0;
    while (sum < 30) {
        sum += rollDice();
        count++;
    }
    return count;
}

// Your own test cases
// e.g.;

function sampleRollDice() {
    const roll = Math.floor(Math.random() * 6) + 1;
    console.log(roll);
    return roll;
}

console.log(countNumberOfRolls(sampleRollDice));

module.exports = countNumberOfRolls;
