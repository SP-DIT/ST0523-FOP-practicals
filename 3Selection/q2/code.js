function canRide(height, age, weight) {
    if (height >= 120 || age >= 12 || weight >= 40) {
        return true;
    } else {
        return false;
    }
}

module.exports = canRide;

// examples

console.log(canRide(168, 17, 60)); // true
console.log(canRide(110, 17, 60)); // false
console.log(canRide(168, 10, 60)); // false
console.log(canRide(168, 17, 30)); // false
