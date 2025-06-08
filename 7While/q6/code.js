/**
 * You are given an array of positive integers representing a sequence of jumps.
 * Each element in the array indicates the index (0-based) to jump to next.
 *
 * You always start at index 0. From there, you jump to the index specified by the value at that position.
 * The sequence ends if:
 *   - you jump to an index that is out of bounds, or
 *   - you revisit an index you've already visited (i.e., a cycle is detected).
 *
 * Your task is to determine if the sequence of jumps forms a cycle.
 *
 * @param {number[]} jumps - An array of numbers where each element represents the next index to jump to.
 * @returns {boolean} - `true` if a cycle is detected, `false` otherwise.
 *
 * @example
 * detectCycle([1, 2, 0]); // true (0 → 1 → 2 → 0 → ...)
 * detectCycle([1, 2, 1]); // true (0 → 1 → 2 → 1 → ...)
 * detectCycle([2, 1, 4, 1, 9]); // false (0 → 2 → 4 → 9 [out of bounds])
 * detectCycle([2, 4, 1, 6, 3, 9, 5]); // false (0 → 2 → 1 → 4 → 3 → 6 → 5 → 9 [out of bounds])
 * detectCycle([2, 4, 1, 6, 3, 0, 5]); // true (0 → 2 → 1 → 4 → 3 → 6 → 5 → 0 → ...)
 */

function detectCycle(jumps) {}

// Your own test cases
// e.g.;

console.log(detectCycle([1, 2, 0])); // true

module.exports = detectCycle;
