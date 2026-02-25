function square3Time(x) {
    return ((x ** 2) ** 2) ** 2;
}

module.exports = square3Time;

// examples

console.log(square3Time(2)); // 256
console.log(square3Time(3)); // 6561
