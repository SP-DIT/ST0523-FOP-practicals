// q1 fix the bug - The code below tries to access the "name" property of the "person" object using square bracket notation, but it throws an error. Fix the bug.
function getName(person) {
    return person[name];
}

console.log(getName({ name: "Alice", age: 30 })); // Output: "Alice"

// q2 fix the bug - The code below tries to access the "age" property of the "person" object using dot notation, but it throws an error. Fix the bug.
function getAge(person) {
    return person."age";
}

console.log(getAge({ name: "Alice", age: 30 })); // Output: 30

// q3 fix the bug - the code below tries to access the property "1st" of the "competition" object, but it throws an error. Fix the bug.
function getFirstWinner(competition) {
    return competition.1st;
}

console.log(getFirstWinner({ "1st": "Alice", "2nd": "Bob", "3rd": "Charlie" })); // Output: "Alice"

// q4 fix the bug - The code below tries to calculate the BMI (Body Mass Index) of a person using the formula BMI = weight / (height * height), but it throws an error. Fix the bug.
function calculateBMI(person) {
    return person[0] / (person[1] * person[1]);
}

console.log(calculateBMI({ weight: 70, height: 1.75 })); // Output: 22.86

// q5 fix the bug - The code below tries to find the minimum, maximum, and average score of 3 students, but it throws an error. Fix the bug.
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

console.log(calculateScores({ name: "Alice", score: 85 }, { name: "Bob", score: 90 }, { name: "Charlie", score: 80 })); // Output: { min: 80, max: 90, average: 85 }

// Q6 Print welcome message - Given an object representing a user's booking information (e.g. { name: "Alice", destination: "Paris" })
// write a function that prints a welcome message using the user's name and the destination of their booking.
// The message should be in the format: "Welcome, [name]! Your booking to [destination] is confirmed."
function printWelcomeMessage(booking) {
    // Your code here
}

console.log(printWelcomeMessage({ name: "Alice", destination: "Paris" })); // Output: "Welcome, Alice! Your booking to Paris is confirmed."
console.log(printWelcomeMessage({ name: "Bob", destination: "New York" })); // Output: "Welcome, Bob! Your booking to New York is confirmed."

//Q7 Buy 2 get 1 free - Given 2 objects representing products in a store (e.g. { name: "Product A", price: 10 }, { name: "Product B", price: 20 }, { name: "Product C", price: 30 }),
// write a function that calculates the total price of the products with a "buy 2 get 1 free" promotion.
// The item with the lowest price should be free, and the total price should be the sum of the prices of the other two items.
// The function should return the total price after applying the promotion.

function buy2Get1Free(product1, product2, product3) {
    // Your code here
}

console.log(buy2Get1Free({ name: "Product A", price: 10 }, { name: "Product B", price: 20 }, { name: "Product C", price: 30 })); // Output: 50
console.log(buy2Get1Free({ name: "Product X", price: 15 }, { name: "Product Y", price: 25 }, { name: "Product Z", price: 5 })); // Output: 40

// Q8 Create customer object - Write a function that takes in a person's name and age,
// and returns an object representing that person with properties "name", "age", and their age category.
// The age category should be determined as follows:
//      - "Child" if age is 0-12
//      - "Teenager" if age is 13-19
//      - "Adult" if age is 20-64
//      - "Senior" if age is 65 and above
function createCustomer(name, age) {
    // Your code here
}

console.log(createCustomer("Alice", 10)); // Output: { name: "Alice", age: 10, category: "Child" }
console.log(createCustomer("Bob", 16)); // Output: { name: "Bob", age: 16, category: "Teenager" }
console.log(createCustomer("Charlie", 30)); // Output: { name: "Charlie", age: 30, category: "Adult" }
console.log(createCustomer("David", 70)); // Output: { name: "David", age: 70, category: "Senior" }

// Q9 Change password - write a function that updates the user's password
// if the given old password matches the current password, otherwise return the original account object.
// You are given 3 parameters:
//      1. an object representing a user's account information (e.g. { username: "Alice", password: "oldPassword123" }),
//      2. the old password, and
//      3. the new password,

function changePassword(account, oldPassword, newPassword) {
    // Your code here
}

console.log(changePassword({ username: "Alice", password: "oldPassword123" }, "oldPassword123", "newSecurePassword456")); // Output: { username: "Alice", password: "newSecurePassword456" }
console.log(changePassword({ username: "Bob", password: "myOldPass789" }, "wrongOldPass", "newPass123")); // Output: { username: "Bob", password: "myOldPass789" }
console.log(changePassword({ username: "Charlie", password: "charliePass456" }, "charliePass456", "charlieNewPass789")); // Output: { username: "Charlie", password: "charlieNewPass789" }

// Q10 Calculate total cart price - Given an array of objects representing items in a shopping cart (e.g. [{ price: 999.99, quantity: 2 }, { price: 49.99, quantity: 5 }]),
// write a function that calculates the total price of all items in the cart by summing the total price of each item (price multiplied by quantity).
// The function should return the total price of the cart.
function calculateCartTotal(cart) {
    // Your code here
}

console.log(calculateCartTotal([{ price: 999.99, quantity: 2 }, { price: 49.99, quantity: 5 }])); // Output: 2249.93
console.log(calculateCartTotal([{ price: 19.99, quantity: 3 }, { price: 5.99, quantity: 10 }])); // Output: 119.89

// Q11 objects to table - Given an array of objects representing students (e.g. [{ name: "Alice", age: 20, grade: "A" }, { name: "Bob", age: 22, grade: "B" }]),
// write a function that converts the array of objects into a HTML table format as a string.
// The table should have a header row with the property names and subsequent rows with the corresponding values for each student.
function objectsToTable(objects) {
    // Your code here
}

console.log(objectsToTable([{ name: "Alice", age: 20, grade: "A" }, { name: "Bob", age: 22, grade: "B" }])); // Output: "<table><tr><th>name</th><th>age</th><th>grade</th></tr><tr><td>Alice</td><td>20</td><td>A</td></tr><tr><td>Bob</td><td>22</td><td>B</td></tr></table>"
console.log(objectsToTable([{ name: "Charlie", age: 19, grade: "A" }, { name: "David", age: 21, grade: "C" }])); // Output: "<table><tr><th>name</th><th>age</th><th>grade</th></tr><tr><td>Charlie</td><td>19</td><td>A</td></tr><tr><td>David</td><td>21</td><td>C</td></tr></table>"

// Q12 Login - Given an array of user accounts (e.g. [{ username: "Alice", password: "password123" }, { username: "Bob", password: "myPass456" }]) and a login attempt (e.g. { username: "Alice", password: "password123" }),
// write a function that checks if the login attempt is successful by comparing the username and password with the accounts in the array.
// The function should return "Success" if the login attempt is successful, "Wrong Password" if the username exists but the password is incorrect, and "User Not Found" if the username does not exist in the accounts array.
function login(accounts, loginAttempt) {
    // Your code here
}

console.log(login([{ username: "Alice", password: "password123" }, { username: "Bob", password: "myPass456" }], { username: "Alice", password: "password123" })); // Output: "Success"
console.log(login([{ username: "Alice", password: "password123" }, { username: "Bob", password: "myPass456" }], { username: "Bob", password: "wrongPass" })); // Output: "Wrong Password"
console.log(login([{ username: "Alice", password: "password123" }, { username: "Bob", password: "myPass456" }], { username: "Charlie", password: "charliePass789" })); // Output: "User Not Found"

// Q13 Delete user - Given an array of user accounts (e.g. [{ username: "Alice", password: "password123" }, { username: "Bob", password: "myPass456" }]) and a username to delete (e.g. "Alice"),
// write a function that removes the user with the specified username from the accounts array.
// The function should return the updated array of user accounts after deletion.
function deleteUser(accounts, usernameToDelete) {
    // Your code here
}

console.log(deleteUser([{ username: "Alice", password: "password123" }, { username: "Bob", password: "myPass456" }], "Alice")); // Output: [{ username: "Bob", password: "myPass456" }]
console.log(deleteUser([{ username: "Charlie", password: "charliePass789" }, { username: "David", password: "davidPass456" }], "Charlie")); // Output: [{ username: "David", password: "davidPass456" }]
console.log(deleteUser([{ username: "Eve", password: "evePass123" }, { username: "Frank", password: "frankPass456" }], "Grace")); // Output: [{ username: "Eve", password: "evePass123" }, { username: "Frank", password: "frankPass456" }]