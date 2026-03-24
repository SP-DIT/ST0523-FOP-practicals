function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i <= arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

module.exports = sumArray;

// examples

console.log(sumArray([1, 2, 3])); // 6
console.log(sumArray([10, 20, 30])); // 60
