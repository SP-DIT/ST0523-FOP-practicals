function createNumberSequence(numbers) {
    let currentIndex = 0;

    return {
        current: function () {
            return numbers[currentIndex];
        },
        next: function () {
            currentIndex = currentIndex + 1;
            if (currentIndex >= numbers.length) {
                currentIndex = 0;
            }
            return numbers[currentIndex];
        },
        reset: function () {
            currentIndex = 0;
        },
    };
}

module.exports = createNumberSequence;

// Example usage:
const sequence = createNumberSequence([10, 20, 30]);

console.log(sequence.current()); // 10 - starts at first element
console.log(sequence.next()); // 20 - moves to next and returns it
console.log(sequence.next()); // 30 - moves to next and returns it
console.log(sequence.next()); // 10 - loops back to start
console.log(sequence.next()); // 20 - continues from start
sequence.reset();
console.log(sequence.current()); // 10 - back at the beginning after reset
console.log(sequence.next()); // 20 - continues from reset position
