# Mock EST Set A - Practice Questions

> Press `CTRL + SHIFT + V` to preview the rendered pdf

## 1. Find the Shape with the Largest Area

Given an array of shape objects, find and return the shape with the largest area.

Each shape object has a `type` property that identifies whether it's a `'circle'`, `'rectangle'`, or `'triangle'`, along with the properties needed to calculate its area:

**Area Formulas:**

-   Circle: `π × radius × radius`
-   Rectangle: `width × height`
-   Triangle: `0.5 × base × height`

**Hints:**

-   Use `Math.PI` for the value of π

```js
function largestArea(shapes) {
    // Your code here
}

// Example usage:
console.log(
    largestArea([
        { type: 'circle', radius: 3 },
        { type: 'rectangle', width: 4, height: 5 },
        { type: 'triangle', base: 6, height: 7 },
        { type: 'rectangle', width: 3, height: 5 },
    ]),
); // { type: 'rectangle', width: 4, height: 5 }
// The first rectangle has the largest area: 20

console.log(
    largestArea([
        { type: 'circle', radius: 6 },
        { type: 'rectangle', width: 4, height: 5 },
        { type: 'circle', radius: 10 },
        { type: 'triangle', base: 6, height: 7 },
        { type: 'triangle', base: 3, height: 7 },
    ]),
); // { type: 'circle', radius: 10 }
// The second circle has the largest area: 314.16 (approximately)
```

---

## 2. Calculate Total Contribution from Young Male Volunteers

Given an array of volunteer objects, calculate the total contribution time from male volunteers who are below 30 years of age.

Each volunteer object has the following properties:

-   `name`: string
-   `age`: number
-   `gender`: string (`'male'` or `'female'`)
-   `contribution`: number (hours contributed)

```js
function totalTimeYoungMaleVolunteers(volunteers) {
    // Your code here
}

// Example usage:
console.log(
    totalTimeYoungMaleVolunteers([
        { name: 'John', age: 25, gender: 'male', contribution: 5 },
        { name: 'Jane', age: 22, gender: 'female', contribution: 8 },
        { name: 'Mike', age: 28, gender: 'male', contribution: 10 },
        { name: 'Emily', age: 32, gender: 'female', contribution: 7 },
        { name: 'Tom', age: 32, gender: 'male', contribution: 7 },
    ]),
); // 15
// John (5) + Mike (10) = 15

console.log(
    totalTimeYoungMaleVolunteers([
        { name: 'Alice', age: 27, gender: 'female', contribution: 6 },
        { name: 'Bob', age: 24, gender: 'male', contribution: 9 },
        { name: 'Charlie', age: 29, gender: 'male', contribution: 4 },
        { name: 'Diana', age: 31, gender: 'female', contribution: 10 },
        { name: 'Elliot', age: 12, gender: 'male', contribution: 10 },
    ]),
); // 23
// Bob (9) + Charlie (4) + Elliot (10) = 23
```

---

## 3. Set Weight Category for Each Patient

Given an array of patient objects with `name`, `weight` (in kg), and `height` (in meters), add a `category` property to each patient based on their BMI.

**BMI Calculation:**

$$
BMI = weight (kg) / (height (m) × height (m))
$$

| Category    | BMI Range       |
| ----------- | --------------- |
| Underweight | BMI < 18.5      |
| Normal      | 18.5 ≤ BMI < 25 |
| Overweight  | 25 ≤ BMI < 30   |
| Obesity     | BMI ≥ 30        |

```js
function setWeightCategory(patients) {
    // Your code here
}

// Example usage:
console.log(
    setWeightCategory([
        { name: 'Alice', weight: 50, height: 1.6 },
        { name: 'Bob', weight: 80, height: 1.75 },
        { name: 'Charlie', weight: 55, height: 1.8 },
    ]),
);
// [
//   { name: 'Alice', weight: 50, height: 1.6, category: 'Normal' },
//   { name: 'Bob', weight: 80, height: 1.75, category: 'Overweight' },
//   { name: 'Charlie', weight: 55, height: 1.8, category: 'Underweight' },
// ]

console.log(
    setWeightCategory([
        { name: 'David', weight: 90, height: 1.9 },
        { name: 'Eva', weight: 45, height: 1.5 },
        { name: 'Frank', weight: 70, height: 1.7 },
    ]),
);
// [
//   { name: 'David', weight: 90, height: 1.9, category: 'Normal' },
//   { name: 'Eva', weight: 45, height: 1.5, category: 'Underweight' },
//   { name: 'Frank', weight: 70, height: 1.7, category: 'Overweight' },
// ]
```

---

## 4. Calculate Score Statistics

Given an array of scores, return an object containing statistical information about the scores:

-   `highest`: the highest score in the array
-   `lowest`: the lowest score in the array
-   `average`: the average score

```js
function scoreStats(scores) {
    // Your code here
}

// Example usage:
console.log(scoreStats([85, 92, 78, 90, 88]));
// { highest: 92, lowest: 78, average: 86.6... }

console.log(scoreStats([70, 75, 80, 85, 90, 95]));
// { highest: 95, lowest: 70, average: 82.5... }

console.log(scoreStats([100, 98, 95, 97, 96]));
// { highest: 100, lowest: 95, average: 97.2... }
```

---

## 5. Create Number Sequence Object with State Management

Given an array of numbers, create a object that iterates through the numbers with the following methods:

-   `next()`: returns the next number in the sequence and advances the position. When the end is reached, it loops back to the beginning
-   `reset()`: resets the sequence back to the start (position 0)
-   `current()`: returns the current number without advancing the position

```js
function createNumberSequence(numbers) {
    // Your code here
}

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
```
