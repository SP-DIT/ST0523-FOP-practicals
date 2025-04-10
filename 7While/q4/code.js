/**
 * Given a string, find the length of the longest substring without repeating characters.
 *
 * @param {string} string - The input string.
 * @returns {number} - The length of the longest substring without repeating characters.
 *
 * @example
 * longestSubstringWithoutRepeats('abcabcbb'); // 3
 * longestSubstringWithoutRepeats('bbbbb'); // 1
 * longestSubstringWithoutRepeats('pwwkew'); // 3
 *
 * @explanation
 * For the first example, the longest substring without repeating characters is 'abc', which has a length of 3.
 * For the second example, the longest substring without repeating characters is 'b', which has a length of 1.
 * For the third example, the longest substring without repeating characters is 'wke or 'kew', both which has a length of 3.
 */
function longestSubstringWithoutRepeats(string) {
    // sliding window
    let start = 0;
    let maxLength = 0;
    let charIndexMap = {};
    for (let i = 0; i < string.length; i++) {
        const char = string[i];
        if (charIndexMap[char] !== undefined) {
            start = Math.max(start, charIndexMap[char] + 1);
        }
        charIndexMap[char] = i;
        maxLength = Math.max(maxLength, i - start + 1);
    }
    return maxLength;
}

// Your own test cases
// e.g.;

console.log(longestSubstringWithoutRepeats('abcabcbb'));

// To test your code against the test cases: node run.js q4
// To test your code against custom input: node ./q4/code.js

module.exports = longestSubstringWithoutRepeats;
