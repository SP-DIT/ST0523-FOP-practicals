# Mock EST Set B - Practice Questions

> Press `CTRL + SHIFT + V` to preview the rendered pdf

## 1. Class Performance Evaluation

Given an array of student objects, where each student has a `name` and a `score`, return a string describing the class's performance based on the class's average score.

The performance categories are as follows:

-   `"Excellent"` for average scores 90 and above
-   `"Good"` for average scores above or equal to 75 and below 90
-   `"Average"` for average scores above or equal to 50 and below 75
-   `"Poor"` for average scores below 50

```js
function classPerformance(students) {
    // Your code here
}

// Example usage:
console.log(
    classPerformance([
        { name: 'Alice', score: 95 },
        { name: 'Bob', score: 85 },
        { name: 'Charlie', score: 78 },
    ]),
); // "Good"
// Average score is 86: (95 + 85 + 78) / 3 = 86

console.log(
    classPerformance([
        { name: 'David', score: 45 },
        { name: 'Eve', score: 55 },
        { name: 'Frank', score: 60 },
        { name: 'Grace', score: 70 },
    ]),
); // "Average"
// Average score is 57.5: (45 + 55 + 60 + 70) / 4 = 57.5
```

---

## 2. Find Overweight Students

Return the names of all overweight students (based on BMI) from an array of student objects.

Each student object contains:

-   `name`: string
-   `weight`: number (in kg)
-   `height`: number (in meters)

A student is considered overweight if their BMI (Body Mass Index) is 25 or higher.

**BMI Calculation:**

$$
BMI = \frac{weight}{height \times height}
$$

```js
function findOverweightStudents(students) {
    // Your code here
}

// Example usage:
console.log(
    findOverweightStudents([
        { name: 'Alice', weight: 68, height: 1.65 },
        { name: 'Bob', weight: 85, height: 1.75 },
        { name: 'Charlie', weight: 54, height: 1.6 },
    ]),
); // ["Bob"]
// Bob's BMI is 27.76: 85 / (1.75 × 1.75) = 27.76

console.log(
    findOverweightStudents([
        { name: 'David', weight: 90, height: 1.8 },
        { name: 'Eve', weight: 70, height: 1.7 },
        { name: 'Frank', weight: 60, height: 1.75 },
        { name: 'Grace', weight: 50, height: 1.6 },
        { name: 'Hannah', weight: 80, height: 1.6 },
    ]),
); // ["David", "Hannah"]
// David's BMI is 27.78: 90 / (1.8 × 1.8) = 27.78
// Hannah's BMI is 31.25: 80 / (1.6 × 1.6) = 31.25
```

---

## 3. Assign Final Grades to Students

Given an array of student objects, each with a `name` and an array of `scores`, assign them a final grade based on their average score.

The grading scale is as follows:

-   `"A"` for average scores 85 and above
-   `"B"` for average scores above or equal to 70 and below 85
-   `"C"` for average scores above or equal to 50 and below 70
-   `"D"` for average scores below 50

Return a new array of objects where each object contains only the student's `name` and their final `grade` (the `scores` property should be removed).

> Hint: Instead of "removing" scores, create a new object with the 2 required properties instead.

```js
function assignFinalGrades(students) {
    // Your code here
}

// Example usage:
console.log(
    assignFinalGrades([
        { name: 'Alice', scores: [90, 85, 88] },
        { name: 'Bob', scores: [70, 75, 72] },
        { name: 'Charlie', scores: [50, 55, 60] },
    ]),
);
// [
//   { name: "Alice", grade: "A" },
//   { name: "Bob", grade: "B" },
//   { name: "Charlie", grade: "C" }
// ]
// Explanation:
// - Alice's average is 87.67: (90 + 85 + 88) / 3 ≈ 87.67 → "A"
// - Bob's average is 72.33: (70 + 75 + 72) / 3 ≈ 72.33 → "B"
// - Charlie's average is 55: (50 + 55 + 60) / 3 = 55 → "C"

console.log(
    assignFinalGrades([
        { name: 'David', scores: [40, 45, 50, 45, 40, 60] },
        { name: 'Eve', scores: [80, 85, 90, 75, 100] },
        { name: 'Frank', scores: [60, 65] },
        { name: 'Grace', scores: [30, 35, 40] },
    ]),
);
// [
//   { name: "David", grade: "D" },
//   { name: "Eve", grade: "A" },
//   { name: "Frank", grade: "C" },
//   { name: "Grace", grade: "D" }
// ]
// Explanation:
// - David's average is 46.67: (40 + 45 + 50 + 45 + 40 + 60) / 6 ≈ 46.67 → "D"
// - Eve's average is 86: (80 + 85 + 90 + 75 + 100) / 5 = 86 → "A"
// - Frank's average is 62.5: (60 + 65) / 2 = 62.5 → "C"
// - Grace's average is 35: (30 + 35 + 40) / 3 = 35 → "D"
```

---

## 4. Player Movement on a Grid

Create a constructor function called `Player` that keeps track of a player's position on a 10×10 2D grid.

The player starts at position `(0, 0)`, which is the top-left corner of the grid.

**Grid Layout:**

```
(0,0) (1,0) (2,0) ... (9,0)
(0,1) (1,1) (2,1) ... (9,1)
 ...   ...   ...  ...  ...
(0,9) (1,9) (2,9) ... (9,9)
```

Implement the following methods:

-   `moveUp(steps)` - moves the player up by the specified number of steps and returns the new position
-   `moveDown(steps)` - moves the player down by the specified number of steps and returns the new position
-   `moveLeft(steps)` - moves the player left by the specified number of steps and returns the new position
-   `moveRight(steps)` - moves the player right by the specified number of steps and returns the new position

**Important:** When the player moves beyond the grid boundaries, they should wrap around to the opposite side of the grid.

For example:

-   Moving up from `(0, 0)` should result in `(0, 9)`
-   Moving left from `(0, 0)` should result in `(9, 0)`
-   Moving right from `(9, 5)` should result in `(0, 5)`
-   Moving down from `(5, 9)` should result in `(5, 0)`

```js
function Player() {
    // Your code here
}

// Example usage:
const player = new Player();

console.log(player.moveUp(1)); // (0, 9)
// Starting at (0, 0), moving up 1 wraps to (0, 9)

console.log(player.moveLeft(1)); // (9, 9)
// From (0, 9), moving left 1 wraps to (9, 9)

console.log(player.moveDown(2)); // (9, 1)
// From (9, 9), moving down 2: 9 + 2 = 11, 11 % 10 = 1 → (9, 1)

console.log(player.moveRight(3)); // (2, 1)
// From (9, 1), moving right 3: 9 + 3 = 12, 12 % 10 = 2 → (2, 1)

console.log(player.moveRight(3)); // (5, 1)
// From (2, 1), moving right 3: 2 + 3 = 5 → (5, 1)

console.log(player.moveDown(3)); // (5, 4)
// From (5, 1), moving down 3: 1 + 3 = 4 → (5, 4)
```

**Player Movement Visualization:**

The following table shows the player's path through the grid based on the example movements above. Numbers represent the order of positions:

| y\\x  | 0   | 1   | 2   | 3   | 4   | 5   | 6   | 7   | 8   | 9   |
| ----- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| **0** | 1️⃣  |     |     |     |     |     |     |     |     |     |
| **1** |     |     | 5️⃣  |     |     | 6️⃣  |     |     |     | 4️⃣  |
| **2** |     |     |     |     |     |     |     |     |     |     |
| **3** |     |     |     |     |     |     |     |     |     |     |
| **4** |     |     |     |     |     | 7️⃣  |     |     |     |     |
| **5** |     |     |     |     |     |     |     |     |     |     |
| **6** |     |     |     |     |     |     |     |     |     |     |
| **7** |     |     |     |     |     |     |     |     |     |     |
| **8** |     |     |     |     |     |     |     |     |     |     |
| **9** | 2️⃣  |     |     |     |     |     |     |     |     | 3️⃣  |

**Movement Sequence:**

1. 1️⃣ **(0, 0)** - Starting position
2. 2️⃣ **(0, 9)** - After `moveUp(1)` - wrapped from top to bottom
3. 3️⃣ **(9, 9)** - After `moveLeft(1)` - wrapped from left edge to right edge
4. 4️⃣ **(9, 1)** - After `moveDown(2)` - moved down 2 steps
5. 5️⃣ **(2, 1)** - After `moveRight(3)` - wrapped from right edge past left edge
6. 6️⃣ **(5, 1)** - After `moveRight(3)` - moved right 3 steps (no wrapping)
7. 7️⃣ **(5, 4)** - After `moveDown(3)` - moved down 3 steps (final position)
