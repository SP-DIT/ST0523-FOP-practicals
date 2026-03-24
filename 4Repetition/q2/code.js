function factorial(n) {
    let result = 1;
    for (let i = 0; i < n; i++) {
        result *= i;
    }
    return result;
}

// examples

console.log(factorial(5)); // 5*4*3*2*1 = 120
console.log(factorial(7)); // 7*6*5*4*3*2*1 = 5040

module.exports = factorial;
