/**
 * 8 - Determine if a year is a leap year
 *      A leap year is a year that is divisible by 4
 *      except for years that are divisible by 100
 *      unless the year is also divisible by 400
 *      For example: 2000 is a leap year, 1900 is not
 *
 * Change the value of year accordingly to test your code
 */
const year = 2020;
const isLeapYear = (year % 4 === 0 && !(year % 100 === 0)) || year % 400 === 0; // Determine if the year is a leap year
console.log('Q8 ' + isLeapYear);

// Run the program with `node ./q8.js`
