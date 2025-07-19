/**
 * Based on the driving Highway Code 69A
 * When approaching a junction:
 * 1. If you are going straight across the junction, you must give way to traffic going straight from the right
 * 2. If you are turning right, you must give way to traffic going straight from all directions.
 * 3. If you are turning left, you must give way to traffic going straight from the right.
 *
 * For the purpose of this question, we will assume that the incoming vehicle is always going straight.
 *
 * See visualization here: https://sso.agc.gov.sg/SL/RTA1961-R11?ProvIds=P1IV-#pr69A-
 *
 * xxxxxxxx|       |xxxxxxxx
 * xxxxxxxx| north |xxxxxxxx
 * xxxxxxxx|   |   |xxxxxxxx
 * xxxxxxxx|   V   |xxxxxxxx
 * xxxxxxxx|       |xxxxxxxx
 * --------/       \--------
 *
 * west -->          <-- east
 *
 * --------\       /--------
 * xxxxxxxx|       |xxxxxxxx
 * xxxxxxxx|   ^   |xxxxxxxx
 * xxxxxxxx|   |   |xxxxxxxx
 * xxxxxxxx| south |xxxxxxxx
 * xxxxxxxx|       |xxxxxxxx
 *
 * Given your current position, your targetPosition, and the incoming vehicle's position, write a function that returns "Proceed" if you can proceed, and "Stop" otherwise.
 *
 * @param {string} currentPosition - Your current position. Can be 'north', 'south', 'east', or 'west'.
 * @param {string} targetPosition - Your target position. Can be 'north', 'south', 'east', or 'west'.
 * @param {string} incomingVehicle - The incoming vehicle's position. Can be 'north', 'south', 'east', or 'west'.
 * @returns {string} - 'Proceed' if you can proceed, 'Stop' otherwise.
 *
 * You can assume that
 * 1. currentPosition != targetPosition (Not staying stationary) and
 * 2. currentPosition != incomingVehicle (Not on the same lane with the incoming vehicle)
 *
 * @example
 * canProceed('south', 'north', 'east'); // 'Stop', (1) going straight, must give way to traffic going straight from right.
 * canProceed('south', 'north', 'west'); // 'Proceed', (1) going straight, no vehicle coming from the right.
 *
 * canProceed('south', 'east', 'north'); // 'Stop', (2) turning right, must give way to traffic going straight from all directions.
 *
 * canProceed('north', 'east', 'west'); // 'Stop', (3) turning left, must give way to traffic going straight from the right.
 * canProceed('north', 'east', 'south'); // 'Proceed', (3) turning left, no vehicle coming from the right.
 *
 * Hint: Right directions:
 *  north -> west
 *  west -> south
 *  south -> east
 *  east -> north
 */
function canProceed(currentPosition, targetPosition, incomingVehiclePosition) {}

// Your own test cases
// e.g.;

console.log(canProceed('south', 'north', 'east')); // 'Stop'

// To test your code against the test cases: node run.js p4 q5
// To test your code against custom input: node ./4Selections/q5/code.js

module.exports = canProceed;
