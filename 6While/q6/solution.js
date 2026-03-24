function removeDuplicates(array) {
    if (array.length === 0) {
        return [];
    }

    let result = [array[0]];
    let i = 1;

    while (i < array.length) {
        if (array[i] !== array[i - 1]) {
            result.push(array[i]);
        }
        i = i + 1;
    }

    return result;
}

// examples

console.log(removeDuplicates([1, 1, 2, 2, 3])); // [1, 2, 3]
console.log(removeDuplicates([1, 2, 3, 4, 5])); // [1, 2, 3, 4, 5]
console.log(removeDuplicates([1, 1, 1, 1, 1])); // [1]

module.exports = removeDuplicates;
