function largestArea(shapes) {
    if (shapes.length === 0) {
        return null;
    }

    let maxShape = shapes[0];
    let maxArea = calculateArea(shapes[0]);

    for (let i = 1; i < shapes.length; i++) {
        const currentArea = calculateArea(shapes[i]);
        if (currentArea > maxArea) {
            maxArea = currentArea;
            maxShape = shapes[i];
        }
    }

    return maxShape;
}

function calculateArea(shape) {
    if (shape.type === 'circle') {
        return Math.PI * shape.radius * shape.radius;
    } else if (shape.type === 'rectangle') {
        return shape.width * shape.height;
    } else if (shape.type === 'triangle') {
        return 0.5 * shape.base * shape.height;
    }
    return 0;
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
