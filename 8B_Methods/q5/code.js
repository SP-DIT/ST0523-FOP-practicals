function createQueueSystem() {
    // Your code here
}

module.exports = createQueueSystem;

// Example usage:
const queue = createQueueSystem();
console.log(queue.takeANumber()); // 1
console.log(queue.takeANumber()); // 2
console.log(queue.getCurrentQueue()); // [1, 2]
console.log(queue.serveNextCustomer()); // 1
console.log(queue.getCurrentQueue()); // [2]
console.log(queue.takeANumber()); // 3
console.log(queue.getCurrentQueue()); // [2, 3]
