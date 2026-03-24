function sumArray(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum = sum + array[i];
    }
    return sum;
}

function getArrayLength(array) {
    return array.length;
}

function averageArray(array) {
    const totalSum = sumArray(array);
    const numberOfElements = getArrayLength(array);
    return totalSum / numberOfElements;
}

module.exports = averageArray;

// examples

console.log(averageArray([1, 2, 3, 4, 5])); // 3
console.log(averageArray([10, 20, 30])); // 20
