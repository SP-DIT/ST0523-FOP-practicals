function Player() {
    // Your code here
}

module.exports = Player;

// examples

const player = new Player();

console.log(player.moveUp(1)); // (0, 9)
console.log(player.moveLeft(1)); // (9, 9)
console.log(player.moveDown(2)); // (9, 1)
console.log(player.moveRight(3)); // (2, 1)
console.log(player.moveRight(3)); // (5, 1)
console.log(player.moveDown(3)); // (5, 4)
