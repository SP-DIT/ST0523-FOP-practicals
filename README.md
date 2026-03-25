# Practical 8 - Array of Objects

## 1. Calculate Total Cart Price

Given an array of cart items where each item has:

-   `price`
-   `quantity`

Return the cart total by summing `price * quantity` for every item.

```js
function calculateCartTotal(cart) {
    // Your code here
}

console.log(
    calculateCartTotal([
        { price: 999.99, quantity: 2 },
        { price: 49.99, quantity: 5 },
    ]),
); // Output: 2249.93
console.log(
    calculateCartTotal([
        { price: 19.99, quantity: 3 },
        { price: 5.99, quantity: 10 },
    ]),
); // Output: 119.89
```

## 2. Convert Objects to HTML Table String

Given an array of student objects, return a single HTML table string with:

-   One header row (`<th>`) for property names
-   One data row (`<td>`) per student

### Hint

-   Build the output string piece by piece.
-   Start with `"<table>"`, append header, append rows, then close with `"</table>"`.

```js
function objectsToTable(objects) {
    // Your code here
}

console.log(
    objectsToTable([
        { name: 'Alice', age: 20, grade: 'A' },
        { name: 'Bob', age: 22, grade: 'B' },
    ]),
);
// Output: "<table><tr><th>name</th><th>age</th><th>grade</th></tr><tr><td>Alice</td><td>20</td><td>A</td></tr><tr><td>Bob</td><td>22</td><td>B</td></tr></table>"
console.log(
    objectsToTable([
        { name: 'Charlie', age: 19, grade: 'A' },
        { name: 'David', age: 21, grade: 'C' },
    ]),
);
// Output: "<table><tr><th>name</th><th>age</th><th>grade</th></tr><tr><td>Charlie</td><td>19</td><td>A</td></tr><tr><td>David</td><td>21</td><td>C</td></tr></table>"
```

## 3. Login Validation

Given:

-   an array of accounts (`username`, `password`)
-   one login attempt (`username`, `password`)

Return:

-   `"Success"` if both username and password match
-   `"Wrong Password"` if username exists but password is wrong
-   `"User Not Found"` if username does not exist

```js
function login(accounts, loginAttempt) {
    // Your code here
}

console.log(
    login(
        [
            { username: 'Alice', password: 'password123' },
            { username: 'Bob', password: 'myPass456' },
        ],
        { username: 'Alice', password: 'password123' },
    ),
); // Output: "Success"
console.log(
    login(
        [
            { username: 'Alice', password: 'password123' },
            { username: 'Bob', password: 'myPass456' },
        ],
        { username: 'Bob', password: 'wrongPass' },
    ),
); // Output: "Wrong Password"
console.log(
    login(
        [
            { username: 'Alice', password: 'password123' },
            { username: 'Bob', password: 'myPass456' },
        ],
        { username: 'Charlie', password: 'charliePass789' },
    ),
); // Output: "User Not Found"
```

## 4. Delete User

Given an array of account objects and a username, return a new accounts array with that user removed.

### Hint

-   Think: "Filter"

```js
function deleteUser(accounts, usernameToDelete) {
    // Your code here
}

console.log(
    deleteUser(
        [
            { username: 'Alice', password: 'password123' },
            { username: 'Bob', password: 'myPass456' },
        ],
        'Alice',
    ),
); // Output: [{ username: "Bob", password: "myPass456" }]
console.log(
    deleteUser(
        [
            { username: 'Charlie', password: 'charliePass789' },
            { username: 'David', password: 'davidPass456' },
        ],
        'Charlie',
    ),
); // Output: [{ username: "David", password: "davidPass456" }]
console.log(
    deleteUser(
        [
            { username: 'Eve', password: 'evePass123' },
            { username: 'Frank', password: 'frankPass456' },
        ],
        'Grace',
    ),
); // Output: [{ username: "Eve", password: "evePass123" }, { username: "Frank", password: "frankPass456" }]
```

## 5. Find the Shape with the Largest Area

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

## 6. Calculate Total Contribution from Young Male Volunteers

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

## 7. Set Weight Category for Each Patient

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

## 8. Calculate Score Statistics

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
