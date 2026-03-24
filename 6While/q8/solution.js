function swap(array, i, j) {
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}

function selectionSort(array) {
    let i = 0;

    while (i < array.length) {
        let minIndex = i;
        let j = i + 1;

        while (j < array.length) {
            if (array[j] < array[minIndex]) {
                minIndex = j;
            }
            j = j + 1;
        }

        swap(array, i, minIndex);
        i = i + 1;
    }

    return array;
}

// examples

console.log(selectionSort([4, 3, 2, 5, 1])); // [1, 2, 3, 4, 5]
console.log(selectionSort([10, 9, 8, 7, 6])); // [6, 7, 8, 9, 10]
console.log(selectionSort([1, 2, 3, 4, 5])); // [1, 2, 3, 4, 5]

module.exports = selectionSort;
