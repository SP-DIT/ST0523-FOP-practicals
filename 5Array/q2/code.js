function keepOddNumbers(arr) {
    let oddNumbers = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            oddNumbers = arr[i];
        }
    }
    return oddNumbers;
}

module.exports = keepOddNumbers;

// examples

console.log(keepOddNumbers([1, 2, 3, 4, 5])); // [1, 3, 5]
console.log(keepOddNumbers([10, 15, 20, 25])); // [15, 25]
