function calculateChickens(numberOfAnimals, numberOfLegs) {
    let numberOfChickens = 0;
    let numberOfCows = numberOfAnimals - numberOfChickens;
    while (numberOfChickens * 2 + numberOfCows * 4 > numberOfLegs) {
        numberOfChickens = numberOfChickens + 1;
        numberOfCows = numberOfCows - 1;
    }
    return numberOfChickens;
}

// examples

console.log(calculateChickens(5, 14)); // 3 (3 chickens and 2 cows, 3*2 + 2*4 = 6 + 8 = 14)
console.log(calculateChickens(10, 28)); // 6 (6 chickens and 4 cows, 6*2 + 4*4 = 12 + 16 = 28)

module.exports = calculateChickens;
