function findMaxInArray(array) {
    let max = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
    }
    return max;
}

module.exports = findMaxInArray;

// examples

console.log(findMaxInArray([3, 7, 2, 9, 5])); // 9
console.log(findMaxInArray([-10, -5, -1])); // -1
