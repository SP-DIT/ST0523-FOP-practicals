/**
 * You are given a function that takes in a number and returns based on the following rules:
 * 1. If the number is divisible by 3, it will return "foo"
 * 2. If the number is divisible by 5, it will return "bar"
 * 3. If the number is divisible by 15, it will return "foobar"
 * 4. Otherwise, it will return the number.
 *
 * You are to test out the function by running it through from number x to y (both inclusive), and report the error rate
 *
 * The error rate is computed by (total number of error) / (total number of test cases)
 *
 * @param {(x) => string | number} foobar - The function
 * @param {int} x - Starting number to test from (inclusive), 1 < x < 100000
 * @param {int} y - Ending number to test to (inclusive), x < y < 100000
 * @return {decimal} the error rate of the foobar function, no rounding needed
 *
 * @example
 * isFooBarCorrect(function (x) { return x }, 1, 5) // 0.4
 * isFooBarCorrect(function (x) { return "foo" }, 6, 10) // 0.6
 * isFooBarCorrect(function (x) { return "bar" }, 11, 20) // 0.9
 *
 * @explanation
 * In the first example, the output would be 1,2,3,4,5, when it should be 1,2,"foo",4,"bar", so 2 out of 5 is wrong, hence 0.4 error rate.
 * In the second example, the output would be "foo","foo","foo","foo","foo", when it should be "foo",7,8,"foo","bar", 3 out of 5 is wrong, 0.6 error rate
 * In the last example, everything is bar, but only 20 should be bar, hence 9 out of 10 is wrong, 0.9 error rate.
 *
 */
function isFooBarCorrect(foobar, x, y) {
    let correct = 0;
    for (let i = x; i <= y; i++) {
        const actual = foobar(i);
        const expected = (i % 15 === 0 && 'foobar') || (i % 3 === 0 && 'foo') || (i % 5 === 0 && 'bar') || i;
        correct += +(actual === expected);
    }

    const total = y - x + 1;
    return (total - correct) / total;
}

// Your own test cases
// e.g.;

console.log(
    isFooBarCorrect(
        function (x) {
            return 'bar';
        },
        11,
        20,
    ),
);

// To test your code against the test cases: node run.js p5 q6
// To test your code against custom input: node ./5Loops/q6/code.js

module.exports = isFooBarCorrect;
