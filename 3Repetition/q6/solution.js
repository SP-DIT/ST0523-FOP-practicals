// The `charAt` function is provided for you. It returns the character at a specific position.
// Examples:
//   charAt('abc', 0) returns 'a'
//   charAt('donkey', 3) returns 'k'
function charAt(str, i) {
    return str[i];
}

function isVowel(char) {
    // Check if a character is a vowel (a, e, i, o, u) - case insensitive
    return char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u' ||
           char === 'A' || char === 'E' || char === 'I' || char === 'O' || char === 'U';
}

function countVowels(str) {
    // Count how many vowels are in the string
    let count = 0;
    
    for (let i = 0; i < str.length; i++) {
        let currentChar = charAt(str, i);
        if (isVowel(currentChar)) {
            count++;
        }
    }
    
    return count;
}

module.exports = countVowels;

// examples
console.log(countVowels('apple')); // 2
console.log(countVowels('javascript')); // 3
console.log(countVowels('sky')); // 0