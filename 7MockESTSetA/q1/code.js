function largestArea(shapes) {
    // Your code here
}

module.exports = largestArea;

// Example usage:
console.log(
    largestArea([
        { type: 'circle', radius: 3 },
        { type: 'rectangle', width: 4, height: 5 },
        { type: 'triangle', base: 6, height: 7 },
        { type: 'rectangle', width: 3, height: 5 },
    ]),
); // { type: 'rectangle', width: 4, height: 5 }
// The first rectangle has the largest area: 20

console.log(
    largestArea([
        { type: 'circle', radius: 6 },
        { type: 'rectangle', width: 4, height: 5 },
        { type: 'circle', radius: 10 },
        { type: 'triangle', base: 6, height: 7 },
        { type: 'triangle', base: 3, height: 7 },
    ]),
); // { type: 'circle', radius: 10 }
// The second circle has the largest area: 314.16 (approximately)
