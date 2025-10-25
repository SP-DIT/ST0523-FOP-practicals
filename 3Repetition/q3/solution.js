function absolute(x) {
    // Return the absolute value of x without using built-in functions
    if (x < 0) {
        return -x;
    }
    return x;
}

function countMultiplesOfThree(n) {
    // Count numbers between 1 and n (inclusive) divisible by 3.
    // If negative, take the absolute value
    n = absolute(n);
    
    // If n is 0, there are no multiples
    if (n === 0) return 0;

    // Use a for-loop to count multiples of 3
    let count = 0;
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0) {
            count++;
        }
    }
    return count;
}

module.exports = countMultiplesOfThree;

// examples
console.log(countMultiplesOfThree(10)); // 3 (3,6,9)
console.log(countMultiplesOfThree(20)); // 6 (3,6,9,12,15,18)
