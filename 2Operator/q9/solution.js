function aSquareMinusBSquare(a, b) {
    // Calculate a² - b²
    // a² = a * a, b² = b * b
    const aSquare = a * a;
    const bSquare = b * b;
    const result = aSquare - bSquare;
    return result;
}

module.exports = aSquareMinusBSquare;

// examples - these should work when the solution is implemented

console.log(aSquareMinusBSquare(10, 1)); // 99
console.log(aSquareMinusBSquare(5, 3)); // 16
console.log(aSquareMinusBSquare(4, 2)); // 12
