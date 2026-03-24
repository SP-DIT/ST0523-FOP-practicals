function multiplyByTwo(arr) {
    let multipliedArray = [];
    for (let i = 0; i < arr.length; i++) {
        multipliedArray.push(arr[i] * 2);
    }
    return multipliedArray;
}

module.exports = multiplyByTwo;

// examples

console.log(multiplyByTwo([1, 2, 3])); // [2, 4, 6]
console.log(multiplyByTwo([10, 20, 30])); // [20, 40, 60]
