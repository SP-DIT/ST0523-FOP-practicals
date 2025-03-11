/**
 * There are multiple delivery trucks that need to be assigned to different locations.
 * Each delivery truck is identified by the driver's name,
 * and each location is identified by either North, South, East or West
 * Each delivery truck can be assigned to multiple packets to be delivered to different locations.
 *
 * You are building a system that keep tracks of the delivery trucks and their assigned locations.
 * This system has the following commands:
 * 1. assign [DRIVER_NAME] [LOCATION] - This command assigns a packet for [LOCATION] to [DRIVER_NAME].
 * 2. queryDriver [DRIVER_NAME] - This command returns the total number of packets assigned to the driver.
 * 3. queryLocation [LOCATION] - This command returns the total number of packets assigned to the location.
 * 4. query [DRIVER_NAME] [LOCATION] - This command returns the total number of packets assigned to the driver for the location.
 *
 * If no packet has been assigned to a driver or location, the query command should return 0.
 *
 * @param {string[]} commands - An array of strings where each string is a command.
 * @returns {number[]} - An array of numbers where each number is the output of the query command.
 *
 * @example
 * deliveryAssignment([
 *  'assign Alice North',
 *  'assign Bob South',
 *  'assign Alice South',
 *  'queryDriver Alice',
 *  'queryLocation South',
 *  'query Alice South',
 *  'queryDriver Charlie',
 *  'assign Charlie South',
 *  'queryDriver Charlie',
 * ]); // [2, 2, 1, 0, 1]
 *
 * @explanation
 * For the first example:
 * - The first command assigns a packet for North to Alice.
 * - The second command assigns a packet for South to Bob.
 * - The third command assigns a packet for South to Alice.
 * - The fourth command returns the total number of packets assigned to Alice, which is 2.
 * - The fifth command returns the total number of packets assigned to South, which is 2.
 * - The sixth command returns the total number of packets assigned to Alice for South, which is 1.
 * - The seventh command returns 0 since Charlie has not been assigned any packets.
 * - The eighth command assigns a packet for South to Charlie.
 * - The ninth command returns the total number of packets assigned to Charlie, which is 1.
 *
 * @hint
 * You can use 3 different objects
 * 1. To keep track of how many order a driver has - e.g. drivers['Alice']
 * 2. To keep track of how many order a location has - e.g. locations['South']
 * 3. To keep track of how many order a (driver, location) pair has - e.g. combo['Alice']['South']
 */
function deliveryAssignment(commands) {
    // Write your code here
    let drivers = {};
    let locations = {};
    let result = [];
    for (let i = 0; i < commands.length; i++) {
        const command = commands[i];
        const commandsArray = command.split(' ');
        const action = commandsArray[0];

        if (action === 'assign') {
            const driver = commandsArray[1];
            const location = commandsArray[2];
            if (!drivers[driver]) drivers[driver] = {};
            if (!locations[location]) locations[location] = {};
            drivers[driver][location] = (drivers[driver][location] || 0) + 1;
            locations[location][driver] = (locations[location][driver] || 0) + 1;
        } else if (action === 'queryDriver') {
            const driver = commandsArray[1];
            result.push(Object.values(drivers[driver] || {}).reduce((acc, val) => acc + val, 0));
        } else if (action === 'queryLocation') {
            const location = commandsArray[1];
            result.push(Object.values(locations[location] || {}).reduce((acc, val) => acc + val, 0));
        } else if (action === 'query') {
            const driver = commandsArray[1];
            const location = commandsArray[2];
            if (drivers[driver] && drivers[driver][location]) {
                result.push(drivers[driver][location]);
            } else {
                result.push(0);
            }
        }
    }
    return result;
}

// Your own test cases
// e.g.;

console.log(deliveryAssignment(['assign Alice North', 'assign Bob South', 'query Alice North']));

// To test your code against the test cases: node run.js q4
// To test your code against custom input: node ./q4/code.js

module.exports = deliveryAssignment;
