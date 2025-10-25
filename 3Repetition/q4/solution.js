function countMultiplesOfX(n, x) {
    // Count numbers between 1 and n (inclusive) divisible by x.
    // If n is 0 or x is 0, there are no valid multiples
    if (n === 0 || x === 0) return 0;

    // Use a for-loop to count multiples of x
    let count = 0;
    for (let i = 1; i <= n; i++) {
        if (i % x === 0) {
            count++;
        }
    }
    return count;
}

module.exports = countMultiplesOfX;

// examples
console.log(countMultiplesOfX(10, 3)); // 3 (3, 6, 9)
console.log(countMultiplesOfX(20, 5)); // 4 (5, 10, 15, 20)