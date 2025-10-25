function getLastDigit(number) {
    return number % 10;
}

function removeLastDigit(number) {
    return Math.floor(number / 10);
}

function digitSum(n, numberOfDigits) {
    let sum = 0;
    let currentNumber = n;
    
    for (let i = 0; i < numberOfDigits; i++) {
        let lastDigit = getLastDigit(currentNumber);
        sum = sum + lastDigit;
        currentNumber = removeLastDigit(currentNumber);
    }
    
    return sum;
}

module.exports = digitSum;