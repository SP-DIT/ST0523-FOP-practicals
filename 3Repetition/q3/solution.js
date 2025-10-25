function countMultiplesOfThree(n) {
    // Count numbers between 1 and n (inclusive) divisible by 3.
    // If n is less than 1, there are none.
    if (typeof n !== 'number' || isNaN(n)) return 0;
    if (n < 1) return 0;

    // Using integer division is the simplest and efficient way.
    return Math.floor(n / 3);
}

module.exports = countMultiplesOfThree;

// examples
console.log(countMultiplesOfThree(10)); // 3 (3,6,9)
console.log(countMultiplesOfThree(20)); // 6 (3,6,9,12,15,18)
