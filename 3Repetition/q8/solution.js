function repeat(string, n) {
    // Helper function to repeat a string n times
    if (n === 0) return '';
    
    let result = '';
    for (let i = 0; i < n; i++) {
        result = result + string;
    }
    return result;
}

function createRowPattern(row, width) {
    // Create a single row pattern with proper spacing and asterisks
    let spaces = repeat(' ', width - row);
    let asterisks = '';
    
    if (row === 1) {
        asterisks = '*';
    } else {
        asterisks = repeat('* ', row - 1) + '*';
    }
    
    return spaces + asterisks;
}

function createFirstHalf(width) {
    // Create the first half of the diamond (expanding rows 1 to width-1)
    if (width <= 1) return '';
    
    let result = '';
    for (let row = 1; row < width; row++) {
        result = result + createRowPattern(row, width);
        if (row < width - 1) {
            result = result + '\n';
        }
    }
    return result;
}

function createMiddleLine(width) {
    // Create the middle line (widest part of the diamond)
    return createRowPattern(width, width);
}

function createSecondHalf(width) {
    // Create the second half of the diamond (contracting rows width-1 down to 1)
    if (width <= 1) return '';
    
    let result = '';
    for (let row = width - 1; row >= 1; row--) {
        result = result + createRowPattern(row, width);
        if (row > 1) {
            result = result + '\n';
        }
    }
    return result;
}

function diamond(width) {
    // Create a diamond shape of given width
    if (width === 0) return '';
    if (width === 1) return '*';
    
    let result = '';
    
    // First half (expanding)
    let firstHalf = createFirstHalf(width);
    if (firstHalf !== '') {
        result = result + firstHalf + '\n';
    }
    
    // Middle line (widest part)
    result = result + createMiddleLine(width);
    
    // Second half (contracting)
    let secondHalf = createSecondHalf(width);
    if (secondHalf !== '') {
        result = result + '\n' + secondHalf;
    }
    
    return result;
}

module.exports = diamond;

// examples
console.log(diamond(3));
console.log(diamond(4));