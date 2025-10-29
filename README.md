# Array Practical

## Debugging Your Code

There are two main methods you can use to debug and test your solutions:

### Method 1: Manual Testing with Example Inputs

You can modify the example inputs in each code file and run the file individually to see the output. For example:

In `code.js`, you can modify the example at the bottom:

```js
// Change the inputs to test different cases
console.log(isEven(8)); // Test with different values
console.log(isEven(7)); // Add more test cases
```

Then run the specific file:

```bash
node code.js
```

### Method 2: Automated Testing with Test Cases

Use the `run.js` file in the root directory to test your solutions against the provided test cases:

```bash
# Test a specific question (e.g., Practical 2, Question 1)
node run.js p2 q1

# Test other questions by changing the parameters
node run.js p2 q2
node run.js p2 q3
```

Where `pX` represents the practical number and `qY` represents the question number. This will run your code against predefined test cases and show you which tests pass or fail, helping you identify issues in your implementation.

#### Understanding Test Output

When you run tests, you'll see different types of test cases:

**Public Test Cases:** These show you the exact input and expected output when they fail, helping you understand what your function should return.

Example of a failing public test case:

```
Test case 1:    Failed ❌
        Input:
          [ 2 ]
        Expected:
          true
        Got:
          false
```

This tells you:

-   **Input:** What arguments were passed to your function: `2`
-   **Expected:** What your function should return: `true`
-   **Got:** What your function actually returned: `false`
-   **Debugging hint:** Check your even number logic - 2 should be even

For complex outputs (objects, arrays, etc.), the formatting will automatically expand to show the full structure:

```
Test case 5:    Failed ❌
        Input:
          [
            { name: 'Alice', age: 25 },
            { name: 'Bob', age: 30 }
          ]
        Expected:
          [
            { name: 'Alice', age: 25, status: 'young' },
            { name: 'Bob', age: 30, status: 'adult' }
          ]
        Got:
          [
            { name: 'Alice', age: 25 },
            { name: 'Bob', age: 30 }
          ]
```

**Private Test Cases:** These only show pass/fail status without revealing the inputs or expected outputs, testing edge cases and ensuring your solution works comprehensively.

Example:

```
Test case 15:   Failed ❌
Test case 16:   Passed ✅
```

**Summary Table:** Shows overall performance across all test cases:

```
┌─────────┬──────────┬────────┬────────┬────────────────┐
│ (index) │ question │ passed │ failed │ totalQuestions │
├─────────┼──────────┼────────┼────────┼────────────────┤
│ 0       │ 'q2'     │ 18     │ 2      │ 20             │
└─────────┴──────────┴────────┴────────┴────────────────┘
```

Use the detailed error messages from public test cases to identify and fix issues, then ensure your solution handles all edge cases tested by private test cases.

## 1. Sum of Array Elements

Complete the function that returns the sum of all elements in an array.

This is a fundamental array processing problem that introduces the concept of iterating through an array and accumulating values. You'll need to loop through each element in the array and add them to a running total.

```js
function sumArray(array) {
    // your code here
}

console.log(sumArray([1, 2, 3, 4, 5])); // 15
console.log(sumArray([10, 20, 30])); // 60
```

## 2. Find Maximum in Array

Complete the function that returns the largest number in the array.

This problem teaches you how to track and compare values while iterating through an array. You'll need to keep track of the largest value seen so far as you examine each element.

```js
function findMaxInArray(array) {
    // your code here
}

console.log(findMaxInArray([3, 7, 2, 9, 5])); // 9
console.log(findMaxInArray([-10, -5, -1])); // -1
```

## 3. Count Even Numbers in Array

Complete the function that returns how many numbers in the array are even.

> **Practice Wishful Thinking:** This builds on basic array iteration but adds conditional logic. Use wishful thinking to break this down:
>
> -   Wish for a function `isEven(number)` that checks if a number is even
> -   Focus on the main algorithm: loop through the array, and only increment your counter if the current number is even
> -   Write your solution using the imaginary `isEven` helper first, then implement the helper function afterward
>
> This approach lets you focus on the counting logic before worrying about the details of even number detection.

```js
function countEvenNumbers(array) {
    // your code here
}

console.log(countEvenNumbers([1, 2, 3, 4, 5])); // 2
console.log(countEvenNumbers([10, 15, 20, 25])); // 2
```

## 4. Calculate Array Average

Complete the function that returns the average value of all numbers in the array.

> **Practice Wishful Thinking:** You already have a `sumArray` function from question 1 that adds up all elements in an array. Use wishful thinking to break this problem down:
>
> -   Wish for a function `sumArray(array)` that calculates the total sum
> -   Wish for a function `getArrayLength(array)` that returns the number of elements
> -   Focus on the main logic: average = total sum ÷ number of elements
>
> Write your main function using these imaginary helpers first, then implement them (or reuse the `sumArray` function you already have from question 1).

```js
function averageArray(array) {
    // your code here
}

console.log(averageArray([1, 2, 3, 4, 5])); // 3
console.log(averageArray([10, 20, 30])); // 20
```

## 5. Filter Positive Numbers

Complete the function that returns a new array containing only the positive numbers.

This problem introduces array creation and filtering. You'll need to examine each element and decide whether to include it in the result array.

> **Practice Wishful Thinking:** Break this filtering problem down by thinking about what helper functions might be useful. Consider what condition you need to check for each element, and how you might separate that logic from the main filtering algorithm.

```js
function getPositiveNumbers(array) {
    // your code here
}

console.log(getPositiveNumbers([1, -3, 5, -2, 7])); // [1, 5, 7]
console.log(getPositiveNumbers([-5, -1, -9])); // []
```

## 6. Reverse Array

Complete the function that returns a new array with elements in reverse order.

This problem teaches you how to build a new array by accessing elements in a different order than they appear in the original array.

```js
function reverseArray(array) {
    // your code here
}

console.log(reverseArray([1, 2, 3])); // [3, 2, 1]
console.log(reverseArray(['a', 'b', 'c', 'd'])); // ["d", "c", "b", "a"]
```

## 7. Generate Multiplication Array

Complete the following function that returns an array containing the first k multiples of a given number n.

This problem combines array creation with mathematical calculations. You'll need to use a loop to generate each multiple and store it into an array using `.push()`.

> **Practice Wishful Thinking:** Consider what mathematical operations you need to perform repeatedly, and how you might break down the problem into smaller, manageable pieces.

```js
function multiplication(n, k) {
    // your code here
}

console.log(multiplication(2, 5)); // [2, 4, 6, 8, 10]
console.log(multiplication(3, 4)); // [3, 6, 9, 12]
console.log(multiplication(5, 3)); // [5, 10, 15]
console.log(multiplication(10, 0)); // []
```

## 8. Calculate Differences from Maximum

Complete the function that returns a new array where each element represents how far that element is from the maximum value in the original array.

This problem combines finding the maximum value with array transformation. For each element, you'll calculate the absolute difference between that element and the maximum value in the array.

> **Practice Wishful Thinking:** Consider how you might break this problem into steps. Think about what you need to find first, and then what calculations you need to perform on each element of the array.

```js
function differencesFromMax(array) {
    // your code here
}

console.log(differencesFromMax([1, 5, 3, 9, 2])); // [8, 4, 6, 0, 7] (differences from max value 9)
console.log(differencesFromMax([10, 10, 10])); // [0, 0, 0] (all elements equal the max)
console.log(differencesFromMax([3, 1, 4, 1, 5])); // [2, 4, 1, 4, 0] (differences from max value 5)
```

## 9. Analyze Array Pattern

Complete the following function that determines whether an array of numbers is:

-   **Ascending** – each element is greater than the previous
-   **Non-descending** – each element is greater than or equal to the previous
-   **Descending** – each element is smaller than the previous
-   **Non-ascending** – each element is smaller than or equal to the previous
-   **Constant** – all elements are equal
-   **Unsorted** – none of the above

This is a complex problem that requires you to analyze relationships between consecutive elements throughout the entire array.

> **Practice Wishful Thinking:** This problem involves checking multiple conditions. Consider what helper functions might be useful for checking different types of patterns. Think about the order of your checks carefully – some patterns are more specific than others.

```js
function checkArray(array) {
    // your code here
}

console.log(checkArray([1, 2, 3, 4, 5])); // 'Ascending'
console.log(checkArray([5, 4, 3, 2, 1])); // 'Descending'
console.log(checkArray([1, 1, 1, 1, 1])); // 'Constant'
console.log(checkArray([1, 2, 2, 3, 4])); // 'Non-descending'
console.log(checkArray([5, 4, 4, 3, 2])); // 'Non-ascending'
console.log(checkArray([1, 2, 4, 3, 5])); // 'Unsorted'
```
