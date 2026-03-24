function isEven(number) {
    return number % 2 === 0;
}

function countEvenNumbers(array) {
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        if (isEven(array[i])) {
            count = count + 1;
        }
    }
    return count;
}

module.exports = countEvenNumbers;

// examples

console.log(countEvenNumbers([1, 2, 3, 4, 5])); // 2
console.log(countEvenNumbers([10, 15, 20, 25])); // 2
