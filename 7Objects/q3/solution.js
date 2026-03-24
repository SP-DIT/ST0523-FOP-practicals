function getFirstWinner(competition) {
    return competition['1st'];
}

// examples

console.log(getFirstWinner({ '1st': 'Alice', '2nd': 'Bob', '3rd': 'Charlie' })); // "Alice"
console.log(getFirstWinner({ '1st': 'Dylan', '2nd': 'Eve', '3rd': 'Frank' })); // "Dylan"

module.exports = getFirstWinner;
