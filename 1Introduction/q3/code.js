function add(x, y) {
    x + y;
}

function multiplyBy3(x) {
    return add(x, add(x, x));
}

module.exports = multiplyBy3;

// examples

console.log(multiplyBy3(4)); // 12
