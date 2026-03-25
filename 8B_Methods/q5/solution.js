function createQueueSystem() {
    return {
        queue: [],
        nextNumber: 1,
        takeANumber: function () {
            this.queue.push(this.nextNumber);
            this.nextNumber = this.nextNumber + 1;
            return this.nextNumber - 1;
        },
        serveNextCustomer: function () {
            return this.queue.shift();
        },
        getCurrentQueue: function () {
            return this.queue;
        },
    };
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
