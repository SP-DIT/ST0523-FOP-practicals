function swap(array, i, j) {
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}

function selectionSort(array) {
    // Your code here
}

// examples

console.log(selectionSort([4, 3, 2, 5, 1])); // [1, 2, 3, 4, 5]
console.log(selectionSort([10, 9, 8, 7, 6])); // [6, 7, 8, 9, 10]
console.log(selectionSort([1, 2, 3, 4, 5])); // [1, 2, 3, 4, 5]

module.exports = selectionSort;
