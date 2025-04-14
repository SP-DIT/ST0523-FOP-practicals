/**
 * You are writing a program to help someone remember the year of their nth trip
 *
 * You are given 2 inputs
 * 1. The place and the year a person travelled to that country, in no particular order
 *    - Each place is a single word
 *    - Each year is a 4-digit number
 *    - Separated by a space
 * 2. A list of queries, each query is a string that contains the name of the place and a number indicating the nth trip to that place
 *    - You can safely assume that the queries are valid and the nth trip to a place is always valid
 *
 * You are to return an array of numbers where each number is the year of the nth trip to that place
 *
 * @param {string[]} trips - An array of strings where each string is the name of the place and the year of the trip
 * @param {string[]} queries - An array of strings where each string is the name of the place and the nth trip to that place
 * @returns {number[]} - An array of numbers where each number is the year of the nth trip to that place
 *
 * @example
 * tripYear(['Paris 2019', 'Paris 2020', 'London 2021'], ['Paris 1', 'Paris 2', 'London 1']);
 * Output: [2019, 2020, 2021]
 *
 * tripYear(['Iceland 2016', 'Sweden 2015', 'Iceland 1982', 'Norway 1999'], ['Sweden 1', 'Iceland 1', ' Iceland 2']);
 * Output: [2015, 1982, 2016]
 *
 * tripYear(['Japan 2003', 'Japan 2002', 'Japan 2001'], ['Japan 1', 'Japan 2', 'Japan 3']);
 * Output: [2001, 2002, 2003]
 *
 * @explanation
 * For the first example:
 * - The first query is 'Paris 1', the first trip to Paris was in 2019
 * - The second query is 'Paris 2', the second trip to Paris was in 2020
 * - The third query is 'London 1', the first trip to London was in 2021
 *
 * For the second example:
 * - The first query is 'Sweden 1', the first trip to Sweden was in 2015
 * - The second query is 'Iceland 1', the first trip to Iceland was in 1982
 * - The third query is 'Iceland 2', the second trip to Iceland was in 2016
 *
 * For the third example:
 * - The first query is 'Japan 1', the first trip to Japan was in 2001
 * - The second query is 'Japan 2', the second trip to Japan was in 2002
 * - The third query is 'Japan 3', the third trip to Japan was in 2003
 *
 * @hint
 * You can use .sort() to sort the array
 */
function tripYear(trips, queries) {
    // Write your code here
    let countries = {};
    const countriesList = [];
    for (let i = 0; i < trips.length; i++) {
        const trip = trips[i];
        const tripArray = trip.split(' ');
        const country = tripArray[0];
        const year = tripArray[1];
        if (!countries[country]) {
            countries[country] = [];
            countriesList.push(country);
        }
        countries[country].push(+year);
    }
    for (let i = 0; i < countriesList.length; i++) {
        countries[countriesList[i]].sort((a, b) => a - b);
    }

    let result = [];
    for (let i = 0; i < queries.length; i++) {
        const query = queries[i];
        const queryArray = query.split(' ');
        const country = queryArray[0];
        const nthTrip = queryArray[1] - 1;
        result.push(countries[country][nthTrip]);
    }
    return result;
}

// Your own test cases
// e.g.;

console.log(tripYear(['Paris 2019', 'Paris 2020', 'London 2021'], ['Paris 1', 'Paris 2', 'London 1']));

// To test your code against the test cases: node run.js q3
// To test your code against custom input: node ./q3/code.js

module.exports = tripYear;
