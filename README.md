# Practical 7 - Objects

## 1. Fix the Bug: Access `name` with Bracket Notation

The function tries to read the `name` property from a `person` object using square bracket notation, but it throws an error.

Your task is to fix the bug so the function returns the person's name.

```js
function getName(person) {
    return person[name];
}

console.log(getName({ name: 'Alice', age: 30 })); // Output: "Alice"
```

## 2. Fix the Bug: Access `age` with Dot Notation

The function tries to read the `age` property from a `person` object using dot notation, but it throws a syntax error.

Your task is to fix the property access while keeping dot notation.

```js
function getAge(person) {
    return person."age";
}

console.log(getAge({ name: "Alice", age: 30 })); // Output: 30
```

## 3. Fix the Bug: Access Property `"1st"`

The function tries to access the `"1st"` property of a `competition` object using dot notation, which causes an error.

Your task is to fix the bug and return the first winner.

```js
function getFirstWinner(competition) {
    return competition.1st;
}

console.log(getFirstWinner({ "1st": "Alice", "2nd": "Bob", "3rd": "Charlie" })); // Output: "Alice"
```

## 4. Fix the Bug: Calculate BMI from Object Properties

The function should compute BMI using:

BMI = weight / (height \* height)

But the current code uses the wrong way to read values from the `person` object.

```js
function calculateBMI(person) {
    return person[0] / (person[1] * person[1]);
}

console.log(calculateBMI({ weight: 70, height: 1.75 })); // Output: 22.86
```

## 5. Fix the Bug: Min, Max, and Average Score

The function should return an object with:

-   `min`: smallest score
-   `max`: largest score
-   `average`: average of 3 scores

The current code has a bug when assigning the average.

```js
function calculateScores(student1, student2, student3) {
    const result = { min: 0, max: 0, average: 0 };

    if (student1.score < student2.score && student1.score < student3.score) {
        result.min = student1.score;
    } else if (student2.score < student3.score) {
        result.min = student2.score;
    } else {
        result.min = student3.score;
    }

    if (student1.score > student2.score && student1.score > student3.score) {
        result['max'] = student1.score;
    } else if (student2.score > student3.score) {
        result['max'] = student2.score;
    } else {
        result['max'] = student3.score;
    }

    result[average] = (student1.score + student2.score + student3.score) / 3;

    return result;
}

console.log(calculateScores({ name: 'Alice', score: 85 }, { name: 'Bob', score: 90 }, { name: 'Charlie', score: 80 })); // Output: { min: 80, max: 90, average: 85 }
```

## 6. Print Welcome Message

Given a booking object like `{ name: "Alice", destination: "Paris" }`, return a confirmation string in this format:

`"Welcome, [name]! Your booking to [destination] is confirmed."`

```js
function printWelcomeMessage(booking) {
    // Your code here
}

console.log(printWelcomeMessage({ name: 'Alice', destination: 'Paris' })); // Output: "Welcome, Alice! Your booking to Paris is confirmed."
console.log(printWelcomeMessage({ name: 'Bob', destination: 'New York' })); // Output: "Welcome, Bob! Your booking to New York is confirmed."
```

## 7. Buy 2 Get 1 Free

Given three product objects (each has `name` and `price`), apply a "buy 2 get 1 free" rule:

-   The cheapest item is free
-   Return the total of the other two prices

```js
function buy2Get1Free(product1, product2, product3) {
    // Your code here
}

console.log(
    buy2Get1Free({ name: 'Product A', price: 10 }, { name: 'Product B', price: 20 }, { name: 'Product C', price: 30 }),
); // Output: 50
console.log(
    buy2Get1Free({ name: 'Product X', price: 15 }, { name: 'Product Y', price: 25 }, { name: 'Product Z', price: 5 }),
); // Output: 40
```

## 8. Create Customer Object

Write a function that takes `name` and `age`, then returns:

-   `name`
-   `age`
-   `category` based on age range

Category rules:

-   `Child`: 0-12
-   `Teenager`: 13-19
-   `Adult`: 20-64
-   `Senior`: 65 and above

```js
function createCustomer(name, age) {
    // Your code here
}

console.log(createCustomer('Alice', 10)); // Output: { name: "Alice", age: 10, category: "Child" }
console.log(createCustomer('Bob', 16)); // Output: { name: "Bob", age: 16, category: "Teenager" }
console.log(createCustomer('Charlie', 30)); // Output: { name: "Charlie", age: 30, category: "Adult" }
console.log(createCustomer('David', 70)); // Output: { name: "David", age: 70, category: "Senior" }
```

## 9. Change Password

Update the account password only when `oldPassword` matches the current `account.password`.

-   If match: update to `newPassword`
-   If not match: return the original account object unchanged

```js
function changePassword(account, oldPassword, newPassword) {
    // Your code here
}

console.log(changePassword({ username: 'Alice', password: 'oldPw123' }, 'oldPw123', 'newSecurePw456'));
// Output: { username: "Alice", password: "newSecurePw456" }
console.log(changePassword({ username: 'Bob', password: 'myOldPass789' }, 'wrongOldPass', 'newPass123'));
// Output: { username: "Bob", password: "myOldPass789" }
console.log(changePassword({ username: 'Charlie', password: 'charliePass456' }, 'charliePass456', 'charlieNewPass789'));
// Output: { username: "Charlie", password: "charlieNewPass789" }
```
