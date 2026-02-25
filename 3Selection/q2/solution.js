function canRide(height, age, weight) {
    return height >= 120 && age >= 12 && weight >= 40;
}

module.exports = canRide;

// examples

console.log(canRide(168, 17, 60)); // true
console.log(canRide(110, 17, 60)); // false
console.log(canRide(168, 10, 60)); // false
console.log(canRide(168, 17, 30)); // false
