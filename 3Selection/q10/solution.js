// WISHFUL THINKING APPROACH: Let's break this complex problem into smaller parts

// Helper function: Check if a single string is chicken or banana
function isChickenOrBanana(word) {
    return word === 'chicken' || word === 'banana';
}

// Helper function: Check if all three strings are the same and are special words
function areAllSameSpecialWord(a, b, c) {
    return a === b && b === c && (a === 'chicken' || a === 'banana');
}

// Helper function: Convert to excited version
function getExcitedVersion(word) {
    if (word === 'chicken') {
        return 'CHICKEN!';
    } else if (word === 'banana') {
        return 'BANANA!';
    }
}

// Helper function: Check if any of the strings is chicken or banana
function hasChickenOrBanana(a, b, c) {
    return isChickenOrBanana(a) || isChickenOrBanana(b) || isChickenOrBanana(c);
}

// Helper function: Find the first chicken or banana in order
function findFirstChickenOrBanana(a, b, c) {
    if (isChickenOrBanana(a)) {
        return a;
    } else if (isChickenOrBanana(b)) {
        return b;
    } else {
        return c;
    }
}

function chickenBanana(a, b, c) {
    // I wish I had a function to check if all three are the same special word
    if (areAllSameSpecialWord(a, b, c)) {
        // I wish I had a function to get the excited version
        return getExcitedVersion(a);
    }

    // I wish I had a function to check if any contains chicken or banana
    if (hasChickenOrBanana(a, b, c)) {
        // I wish I had a function to find the first chicken or banana
        return findFirstChickenOrBanana(a, b, c);
    }

    // If none of the above conditions are met
    return 'none';
}

module.exports = chickenBanana;

// examples

console.log(chickenBanana('chicken', 'chicken', 'chicken')); // "CHICKEN!"
console.log(chickenBanana('banana', 'banana', 'banana')); // "BANANA!"
console.log(chickenBanana('chicken', 'banana', 'apple')); // "chicken"
console.log(chickenBanana('apple', 'chicken', 'banana')); // "chicken"
console.log(chickenBanana('apple', 'banana', 'chicken')); // "banana"
console.log(chickenBanana('banana', 'apple', 'chicken')); // "banana"
console.log(chickenBanana('apple', 'orange', 'pear')); // "none"
