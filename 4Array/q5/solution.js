function isPositive(number) {
    return number > 0;
}

function getPositiveNumbers(array) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        if (isPositive(array[i])) {
            result.push(array[i]);
        }
    }
    return result;
}

module.exports = getPositiveNumbers;

// examples

console.log(getPositiveNumbers([1, -3, 5, -2, 7])); // [1, 5, 7]
console.log(getPositiveNumbers([-5, -1, -9])); // []
