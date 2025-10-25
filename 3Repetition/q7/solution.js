function repeat(string, n) {
    // Helper function from Question 5 to repeat a string n times
    if (n === 0) return '';

    let result = '';
    for (let i = 0; i < n; i++) {
        result = result + string;
    }
    return result;
}

function rightAngledTriangle(height) {
    // Create an isosceles right-angled triangle of given height
    if (height === 0) return '';

    let result = '';

    for (let row = 1; row <= height; row++) {
        // Each row has 'row' number of asterisks separated by spaces
        if (row === 1) {
            result = result + '*';
        } else {
            result = result + repeat('* ', row - 1) + '*';
        }

        // Add newline after each row except the last one
        if (row < height) {
            result = result + '\n';
        }
    }

    return result;
}

module.exports = rightAngledTriangle;

// examples
console.log(rightAngledTriangle(3));
console.log(rightAngledTriangle(4));
