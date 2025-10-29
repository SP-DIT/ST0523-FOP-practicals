function reverseArray(array) {
    const result = [];
    for (let i = array.length - 1; i >= 0; i--) {
        result.push(array[i]);
    }
    return result;
}

module.exports = reverseArray;

// examples

console.log(reverseArray([1, 2, 3])); // [3, 2, 1]
console.log(reverseArray(['a', 'b', 'c', 'd'])); // ["d", "c", "b", "a"]