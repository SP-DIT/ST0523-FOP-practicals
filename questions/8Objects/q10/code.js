/**
 * Create an object with the following properties:
 * - name: The name of the person
 * - birthday: The birthday of the person
 * - friends: An array of the person's friends
 *
 * @param {string} name - The name of the person
 * @param {string} birthday - The birthday of the person
 * @param {string} friend1 - The first friend of the person
 * @param {string} friend2 - The second friend of the person
 * @param {string} friend3 - The third friend of the person
 *
 * @returns {Object} - An object with the properties name, birthday, and friends
 *
 * @example
 * makeObject('John', '01/01/2000', 'Alice', 'Bob', 'Charlie'); // { name: 'John', birthday: '01/01/2000', friends: [ 'Alice', 'Bob', 'Charlie' ] }
 * makeObject('Alice', '02/02/2001', 'Bob', 'Charlie', 'David'); // { name: 'Alice', birthday: '02/02/2001', friends: [ 'Bob', 'Charlie', 'David' ] }
 *
 */
function makeObject(name, birthday, friend1, friend2, friend3) {}

// Your own test cases
// e.g.;

console.log(makeObject('John', '01/01/2000', 'Alice', 'Bob', 'Charlie')); // { name: 'John', birthday: '01/01/2000', friends: [ 'Alice', 'Bob', 'Charlie' ] }

module.exports = makeObject;
