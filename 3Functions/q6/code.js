/**
 * You are writing a simple script to help you simulate the playing of a card game
 *
 * The game is called in between, given 2 cards, you will draw a 3rd card and if the card's value is inbetween the 2 card, you win, otherwise you lose.
 *
 * You want to place a bet only if your chances of winning is >= 50%.
 *
 * You are to write a program that calls Math.random() twice to randomly generates 2 number between 1 and 52 and then decide whether to place a bet.
 *
 * You want to place a bet only if the probability of winning is 50%. If Math.random() generates 2 numbers that equals each other, return false.
 *
 * You can safely assume that the third card will not be the 2 cards that are already drawn (i.e. the deck is left with only 50 cards).
 *
 * @return {boolean} - True if the probability of winning is >= 50%, False otherwise
 *
 * @example
 * First card: 1
 * Second card: 52
 * return: true, since the probability of winning is 100%
 *
 * First card: 10
 * Second card: 8
 * return: false, since the probability of winning is only 2%, we will not bet.
 *
 * First card: 42
 * second card: 19
 * return: false, since the probability of winning is only 44%, we will not bet.
 *
 * First card: 50
 * second card: 12
 * return: true, since the probability of winning is 74%, we will bet.
 *
 * First card: 13
 * second card: 13
 * return: false, since this is impossible in real life.
 *
 * @hint
 * Math.floor(x) rounds down a number (e.g. Math.floor(5.933) = 5)
 *
 * Math.random() returns a number from 0 to 0.99999999999....
 * - How do you make the range go from 0 to 51.99999999999.....
 * - How do you make the range go from 0 to 51
 * - How do you make the range go from 1 to 52?
 *
 * Math.abs(x) returns the absolute number (e.g. Math.abs(-1) = 1)
 */
function inbetween() {}

// Overwrite Math.random to control it's behaviour;

const oldMathRandom = Math.random;
Math.random = function () {
    return 1; // math.random() will always return 1 when testing manually.
};

console.log(inbetween());

// To test your code against the test cases: node run.js p3 q6
// To test your code against custom input: node ./3Functions/q6/code.js

module.exports = inbetween;
