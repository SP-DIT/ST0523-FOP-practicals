# Practical 5

## 1. Fix the Bug: Sum of Array Elements

The code below is trying to sum all the elements in an array, but it contains a bug. Fix the bug so the function returns the correct sum.

```js
function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i <= arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

console.log(sumArray([1, 2, 3])); // 6
console.log(sumArray([10, 20, 30])); // 60
```

## 2. Fix the Bug: Keep Odd Numbers

The code below is trying to filter out the odd numbers in the array and return an array of odd numbers, but it contains a bug.

> **Practice Wishful Thinking:** Imagine you already have a helper function `isOdd(number)` that returns `true` for odd values. Then focus on the main algorithm: iterate through the array and collect values that satisfy `isOdd`.

```js
function keepOddNumbers(arr) {
    let oddNumbers = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            oddNumbers = arr[i];
        }
    }
    return oddNumbers;
}

console.log(keepOddNumbers([1, 2, 3, 4, 5])); // [1, 3, 5]
console.log(keepOddNumbers([10, 15, 20, 25])); // [15, 25]
```

## 3. Fix the Bug: Multiply by Two

The code below is trying to multiply each element in the array by 2 and return an array of the results, but it contains bugs.

> **Practice Wishful Thinking:** Assume you have a helper `double(number)` that returns `number * 2`. Then write the loop so every element is processed and appended to the result.

```js
function multiplyByTwo(arr) {
    let multipliedArray = [];
    for (let i = 1; i < arr.length; i++) {
        multipliedArray.push(arr[1] * 2);
    }
    return multipliedArray;
}

console.log(multiplyByTwo([1, 2, 3])); // [2, 4, 6]
console.log(multiplyByTwo([10, 20, 30])); // [20, 40, 60]
```

## 4. Fix the Bug: Add Adjacent Numbers

The code below is trying to create a new array where each element is the sum of adjacent numbers in the input array. For example, if the input array is `[1, 2, 3]`, the output should be `[3, 5]` because `1 + 2 = 3` and `2 + 3 = 5`.

> **Practice Wishful Thinking:** Break this down by imagining a helper `sumPair(a, b)` that adds two numbers. Then focus on iterating over valid adjacent pairs only.

```js
function addAdjacentNumbers(arr) {
    let addedArray = [];
    for (let i = 0; i < arr.length; i++) {
        addedArray.push(arr[i] + arr[i + 1]);
    }
    return addedArray;
}

console.log(addAdjacentNumbers([1, 2, 3])); // [3, 5]
console.log(addAdjacentNumbers([10, 20, 30])); // [30, 50]
```

## 5. Find Maximum in Array

Complete the function that returns the largest number in the array.

This problem teaches you how to track and compare values while iterating through an array. You'll need to keep track of the largest value seen so far as you examine each element.

```js
function findMaxInArray(array) {
    // your code here
}

console.log(findMaxInArray([3, 7, 2, 9, 5])); // 9
console.log(findMaxInArray([-10, -5, -1])); // -1
```

## 6. Count Even Numbers in Array

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

## 7. Calculate Array Average

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

## 8. Filter Positive Numbers

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

## 9. Reverse Array

Complete the function that returns a new array with elements in reverse order.

This problem teaches you how to build a new array by accessing elements in a different order than they appear in the original array.

```js
function reverseArray(array) {
    // your code here
}

console.log(reverseArray([1, 2, 3])); // [3, 2, 1]
console.log(reverseArray(['a', 'b', 'c', 'd'])); // ["d", "c", "b", "a"]
```

## 10. Generate Multiplication Array

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

## 11. Calculate Differences from Maximum

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

## 12. Analyze Array Pattern

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
