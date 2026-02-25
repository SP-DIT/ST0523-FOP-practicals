function calculateTransportFare(fareType, modeOfTransport) {
    if (fareType === 'Student') {
        if (modeOfTransport === 'Bus') {
            return 0.5;
        } else if (modeOfTransport === 'Train') {
            return 0.75;
        }
    } else if (fareType === 'Senior') {
        if (modeOfTransport === 'Bus') {
            return 0.3;
        } else if (modeOfTransport === 'Train') {
            return 0.5;
        }
    } else if (fareType === 'Adult') {
        if (modeOfTransport === 'Bus') {
            return 1.5;
        } else if (modeOfTransport === 'Train') {
            return 3;
        }
    }
    return undefined;
}

module.exports = calculateTransportFare;

// examples

console.log(calculateTransportFare('Student', 'Bus')); // 0.5
console.log(calculateTransportFare('Senior', 'Bus')); // 0.3
console.log(calculateTransportFare('Adult', 'Train')); // 3
