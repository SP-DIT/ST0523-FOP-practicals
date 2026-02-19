function aSquareMinusBSquare(a, b) {
    // Calculate a² - b²
    // a² = a * a, b² = b * b
    const aSquare = a * a;
    const bSquare = b * b;
    const result = aSquare - bSquare;
    return result;
}

function multipleSquareMinusSquare(a, b, c, d) {
    // Calculate (a² - b²)² - (c² - d²)²
    // First calculate a² - b² and c² - d²
    const firstExpression = aSquareMinusBSquare(a, b);
    const secondExpression = aSquareMinusBSquare(c, d);

    // Finally subtract: (a² - b²)² - (c² - d²)²
    const result = aSquareMinusBSquare(firstExpression, secondExpression);
    return result;
}

module.exports = multipleSquareMinusSquare;

// examples - these should work when the solution is implemented

console.log(multipleSquareMinusSquare(4, 3, 2, 1)); // 40
console.log(multipleSquareMinusSquare(3, 2, 2, 1)); // 16
console.log(multipleSquareMinusSquare(5, 1, 3, 0)); // 495
