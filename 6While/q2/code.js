function countDivisionsByTwo(number) {
    let count = 0;
    while (number % 2) {
        number = number / 2;
        count = count + 1;
    }
    return count;
}

// examples

console.log(countDivisionsByTwo(16)); // should return 4
console.log(countDivisionsByTwo(10)); // should return 1
console.log(countDivisionsByTwo(1)); // should return 0

module.exports = countDivisionsByTwo;
