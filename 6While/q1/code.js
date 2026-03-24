function countPositiveNumbers(array) {
    let count = 0;
    let i = 0;
    while (i < array.length) {
        i = i + 1;
        if (array[i] > 0) {
            count = count + 1;
        }
    }
    return count;
}

module.exports = countPositiveNumbers;

// examples

console.log(countPositiveNumbers([-1, 0, 1, 2, 3])); // should return 3
console.log(countPositiveNumbers([-5, -4, -3, -2, -1])); // should return 0
console.log(countPositiveNumbers([1, 2, 3, 4, 5])); // should return 5
