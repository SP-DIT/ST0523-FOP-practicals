function multiplication(n, k) {
    const result = [];
    for (let i = 1; i <= k; i++) {
        result.push(n * i);
    }
    return result;
}

module.exports = multiplication;

// examples

console.log(multiplication(2, 5)); // [2, 4, 6, 8, 10]
console.log(multiplication(3, 4)); // [3, 6, 9, 12]
console.log(multiplication(5, 3)); // [5, 10, 15]
console.log(multiplication(10, 0)); // []
