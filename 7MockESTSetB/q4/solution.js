function Player() {
    let x = 0;
    let y = 0;

    return {
        moveUp: function (steps) {
            y = (y - steps + 100) % 10;
            return [x, y];
        },

        moveDown: function (steps) {
            y = (y + steps) % 10;
            return [x, y];
        },

        moveLeft: function (steps) {
            x = (x - steps + 100) % 10;
            return [x, y];
        },

        moveRight: function (steps) {
            x = (x + steps) % 10;
            return [x, y];
        },
    };
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
