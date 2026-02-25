function greetings(name) {
    let message = 'Hello, ';
    message = message + name;
    return message;
}

module.exports = greetings;

// examples

console.log(greetings('Ali')); // "Hello, Ali"
