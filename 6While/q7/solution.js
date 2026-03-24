function reverseString(str) {
    let reversed = '';
    let i = str.length - 1;

    while (i >= 0) {
        reversed = reversed + str[i];
        i = i - 1;
    }

    return reversed;
}

// examples

console.log(reverseString('hello')); // "olleh"
console.log(reverseString('world')); // "dlrow"

module.exports = reverseString;
