function printWelcomeMessage(booking) {
    return 'Welcome, ' + booking.name + '! Your booking to ' + booking.destination + ' is confirmed.';
}

module.exports = printWelcomeMessage;

// examples

console.log(printWelcomeMessage({ name: 'Alice', destination: 'Paris' })); // "Welcome, Alice! Your booking to Paris is confirmed."
console.log(printWelcomeMessage({ name: 'Bob', destination: 'New York' })); // "Welcome, Bob! Your booking to New York is confirmed."
