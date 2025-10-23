# Repetition Practical

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

## 1. Sum Numbers from 1 to N

Complete the following function that sums numbers from 1 to n.

This is a fundamental looping problem that introduces the concept of accumulating values over multiple iterations. One way to solve this problem is to iterate through numbers from 1 to n and sum up the values.

```js
function sumFrom1ToN(n) {
    // your code here
}

console.log(sumFrom1ToN(4)); // 10
console.log(sumFrom1ToN(6)); // 21
```

## 2. Sum Even Numbers

Complete the following function that sums only even numbers from 1 to n.

> **Practice Wishful Thinking:** This builds on the previous problem but adds conditional logic. Use wishful thinking to break this down:
>
> -   Wish for a function `isEven(number)` that checks if a number is even
> -   Focus on the main algorithm: loop through numbers 1 to n, and only add to your sum if the number is even
> -   Write your solution using the imaginary `isEven` helper first, then implement the helper function afterward
>
> This approach lets you focus on the overall summation logic before worrying about the details of even number detection.

```js
function isEven(x) {
    // Refer back to Practical 2 on how to detect even numbers
}

function sumEvenNumbers(n) {
    // your code here
}

console.log(sumEvenNumbers(5)); // 6 (2 + 4)
console.log(sumEvenNumbers(10)); // 30 (2 + 4 + 6 + 8 + 10)
```

## 3. Count Multiples of Three

Complete the following function that counts how many numbers between 1 and n are divisible by 3.

> **Practice Wishful Thinking:** What functions can you wish for to aid you in solving this problem?

```js
function countMultiplesOfThree(n) {
    // your code here
}

console.log(countMultiplesOfThree(10)); // 3 (3, 6, 9)
console.log(countMultiplesOfThree(20)); // 6 (3, 6, 9, 12, 15, 18)
```

## 4. Count Multiples of X

Like Question 3, but this time it is generalized to count any multiples of `x`.

> **Practice Wishful Thinking:** What functions can you wish for to aid you in solving this problem?

```js
function countMultiplesOfX(n, x) {
    // your code here
}

console.log(countMultiplesOfX(10, 3)); // 3 (3, 6, 9)
console.log(countMultiplesOfX(20, 5)); // 4 (5, 10, 15, 20)
```

## 5. String Repetition

Complete the following function that builds a new string by repeating a given string multiple times.

```js
function repeat(string, n) {
    // your code here
}

console.log(repeat('hello', 3)); // Expected output: "hellohellohello"
console.log(repeat('*#', 4)); // Expected output: "*#*#*#*#"
```

## 6. Count Vowels

Complete the function that counts how many vowels (a, e, i, o, u) are in a string.

This introduces string processing with loops. You'll need to examine each character in the string and check if it's a vowel.

> **Practice Wishful Thinking:** The function `charAt(str, i)` is provided for you, what other functions do you need to help you with this problem? Perhaps one to check if a character is a vowel?

```js
// The `charAt` function is provided for you. It returns the character at a specific position.
// Examples:
//   charAt('abc', 0) returns 'a'
//   charAt('donkey', 3) returns 'k'
function charAt(str, i) {
    return str[i];
}

function countVowels(str) {
    // your code here
}

console.log(countVowels('apple')); // 2
console.log(countVowels('javascript')); // 3
console.log(countVowels('sky')); // 0
```

## 7. Right-Angled Triangle

Complete the following function that returns an isosceles right-angled triangle of varying height.

```
height = 1
*

height = 2
*
* *

height = 3
*
* *
* * *

height = 4
*
* *
* * *
* * * *
```

> **Practice Wishful Thinking:** How might the `repeat` function from Question 5 help you solve this problem?

```js
function rightAngledTriangle(height) {
    // your code here
}

console.log(rightAngledTriangle(3));
console.log(rightAngledTriangle(4));
```

## 8. Diamond

Complete the following function that returns a diamond shape.

```
width = 1
*

width = 2
 *
* *
 *

width = 3
  *
 * *
* * *
 * *
  *

width = 4
   *
  * *
 * * *
* * * *
 * * *
  * *
   *
```

Using width = 3 as an example, the actual string representation (with special characters) would be:

```js
'  *\n * *\n* * *\n * *\n  *';
```

> **Practice Wishful Thinking:** Consider what smaller functions you might need to help you piece together this shape. What patterns do you notice in the diamond structure?

```js
function diamond(width) {
    // your code here
}

console.log(diamond(3));
console.log(diamond(4));
```

## 9. Sum of Digits

Complete the following function that returns the sum of all digits in a given number. The number of digits that `n` contains is provided to aid you in writing your loop.

**Examples:**

-   12345 → 1 + 2 + 3 + 4 + 5 = 15
-   2025 → 2 + 0 + 2 + 5 = 9

> **Practice Wishful Thinking:** Break this problem down by imagining you already have helper functions to solve the subproblems:
>
> -   Wish for a function `getLastDigit(number)` that extracts the rightmost digit (hint: use `% 10`)
> -   Wish for a function `removeLastDigit(number)` that removes the rightmost digit (hint: use `Math.floor(number / 10)`)
>
> Write your main solution using these imaginary helpers first, focusing on the overall algorithm: repeatedly extract the last digit, add it to your sum, then remove it from the number. Once you understand this pattern, implement each helper function.

```js
function digitSum(n, numberOfDigits) {
    // your code here
}

console.log(digitSum(12345, 5)); // 15
console.log(digitSum(9876, 4)); // 30
console.log(digitSum(1001, 4)); // 2
```

## 10. Challenge: Fibonacci Sequence

The Fibonacci function can be expressed mathematically as follows:

$$
\begin{equation}
       fibonacci(n) =
        \begin{cases}
            0 & \text{if } n = 1 \\
            1 & \text{if } n = 2 \\
            fibonacci(n - 1) + fibonacci(n - 2) & \text{if } n > 2
        \end{cases}
    \end{equation}
$$

This is a recursive definition where, apart from the base cases of `n = 1` and `n = 2` (which evaluate to 0 and 1 respectively), we wishfully think that the `fibonacci` function works as intended for smaller values.

```js
function fibonacci(n) {
    // your code here
}

console.log(fibonacci(3)); // 1
console.log(fibonacci(6)); // 5
```
