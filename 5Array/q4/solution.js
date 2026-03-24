function addAdjacentNumbers(arr) {
    let addedArray = [];
    for (let i = 0; i < arr.length - 1; i++) {
        addedArray.push(arr[i] + arr[i + 1]);
    }
    return addedArray;
}

module.exports = addAdjacentNumbers;

// examples

console.log(addAdjacentNumbers([1, 2, 3])); // [3, 5]
console.log(addAdjacentNumbers([10, 20, 30])); // [30, 50]
