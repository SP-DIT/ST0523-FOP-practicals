function findMaxInArray(array) {
    let max = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
    }
    return max;
}

function absoluteValue(number) {
    if (number < 0) {
        return -number;
    } else {
        return number;
    }
}

function differencesFromMax(array) {
    const max = findMaxInArray(array);
    const result = [];
    for (let i = 0; i < array.length; i++) {
        const difference = absoluteValue(max - array[i]);
        result.push(difference);
    }
    return result;
}

module.exports = differencesFromMax;

// examples

console.log(differencesFromMax([1, 5, 3, 9, 2])); // [8, 4, 6, 0, 7] (differences from max value 9)
console.log(differencesFromMax([10, 10, 10])); // [0, 0, 0] (all elements equal the max)
console.log(differencesFromMax([3, 1, 4, 1, 5])); // [2, 4, 1, 4, 0] (differences from max value 5)