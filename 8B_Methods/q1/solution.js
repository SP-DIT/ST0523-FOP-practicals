function createCircle(radius) {
    return {
        radius: radius,
        getArea: function () {
            return Math.PI * this.radius * this.radius;
        },
        getCircumference: function () {
            return 2 * Math.PI * this.radius;
        },
    };
}

module.exports = createCircle;

// Example usage:
const circle = createCircle(5);
console.log(circle.getArea()); // 78.53981633974483
console.log(circle.getCircumference()); // 31.41592653589793
