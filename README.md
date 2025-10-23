# Practical 2

## Debugging Your Code

There are two main methods you can use to debug and test your solutions:

### Method 1: Manual Testing with Example Inputs

You can modify the example inputs in each code file and run the file individually to see the output. For example:

In `2Selection/q1/code.js`, you can modify the example at the bottom:

```js
// Change the inputs to test different cases
console.log(isEven(8)); // Test with different values
console.log(isEven(7)); // Add more test cases
```

Then run the specific file:

```bash
node 2Selection/q1/code.js
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

## 1. Is Even?

Apart from the usual `+`, `-`, `*`, `/` operators, there is also the modulo (`%`) operator that calculates the `remainder`.

Example:

```js
10 % 4 = 2
```

Because 10 when divided by 4, has a remainder of 2.

Implement the function `isEven(x)` that returns `true` if a number is even, and `false` otherwise.

> Hint: a number is even if the remainder when divided by 2 is 0.

```js
function isEven(x) {}

console.log(isEven(2)); // true
console.log(isEven(3)); // false
console.log(isEven(4)); // true
console.log(isEven(5)); // false
```

## 2. isDivisibleBy(x, y)

Let's generalize it further.

Implement the function `isDivisibleBy(x, y)` that returns `true` if `x` is divisible by `y`.

`x` is considered divisible by `y` if `x % y = 0`.

```js
function isDivisibleBy(x, y) {}

console.log(isDivisibleBy(5, 3)); // false, 5 divided by 3 has remainder of 2
console.log(isDivisibleBy(10, 3)); // false, 10 divided by 3 has remainder of 1
console.log(isDivisibleBy(10, 4)); // false, 10 divided by 4 has remainder of 2
console.log(isDivisibleBy(13, 5)); // false, 13 divided by 5 has remainder of 3
console.log(isDivisibleBy(15, 5)); // true, 15 divided by 5 has remainder of 0
console.log(isDivisibleBy(21, 7)); // true, 21 divided by 7 has remainder of 0
```

## 3. fizzbuzz

Implement the function `fizzbuzz(x)` that returns a value based on the following rule:

1. `fizz` - if the number is divisible by 3
2. `buzz` - if the number is divisible by 5
3. `fizzbuzz` - if the number is divisible by both 3 and 5.
4. The original value - if the number is NOT divisible by both 3 or 5

> **Hint**: You should reuse your `isDivisibleBy` function from the previous question to check if a number is divisible by 3 or 5.
>
> **Practice Wishful Thinking:** Break down the logic by imagining helper functions for each condition. You could wish for functions like:
>
> -   `isDivisibleBy3(x)` - checks if x is divisible by 3
> -   `isDivisibleBy5(x)` - checks if x is divisible by 5
> -   `isDivisibleByBoth3And5(x)` - checks if x is divisible by both 3 and 5
>
> Write your `fizzbuzz` function using these imaginary helpers first, then implement them using the `isDivisibleBy` function you already have. This helps you focus on the conditional logic structure before worrying about the divisibility details.

```js
function isDivisibleBy(x, y) {}

function fizzbuzz(x) {}

console.log(fizzbuzz(3)); // "fizz"
console.log(fizzbuzz(5)); // "buzz"
console.log(fizzbuzz(15)); // "fizzbuzz"
console.log(fizzbuzz(16)); // 16
console.log(fizzbuzz(9)); // "fizz"
console.log(fizzbuzz(10)); // "buzz"
console.log(fizzbuzz(30)); // "fizzbuzz"
```

## 4. Bigger number

Implement the function `bigger(a, b)` that returns the bigger number.

```js
function bigger(a, b) {}

console.log(bigger(1, 2)); // 2
console.log(bigger(3, 2)); // 3
console.log(bigger(4, 4)); // 4
```

## 5. Biggest number

Implement the function `biggest(a, b, c, d)` that returns the biggest number.

> **Practice Wishful Thinking:** You already have a `bigger(a, b)` function from question 4 that finds the bigger of two numbers. Use wishful thinking to break this problem down - imagine you can use `bigger` multiple times to solve this step by step. How would you find the biggest of four numbers using a function that only compares two at a time?

```js
function biggest(a, b, c, d) {}

console.log(biggest(1, 2, 3, 4)); // 4
console.log(biggest(3, 2, 5, 1)); // 5
console.log(biggest(9, 9, 9, 9)); // 9
```

## 6. ChickenBanana(a, b, c)

Given 3 strings `a`, `b`, and `c`.

1. If all of the string is "chicken", returns "CHICKEN!"
2. If all of the string is "banana", returns "BANANA!"
3. If none of the string is either "chicken" or "banana", returns "none"
4. Otherwise, if the strings contain a mix of "chicken" and/or "banana" along with other values, return the one ("chicken" or "banana") that appears first among the inputs a, b, and c in order.

> **Practice Wishful Thinking:** Break this problem down by imagining you already have helper functions to solve the subproblems. For example:
>
> -   Wish for a function `allAreChicken(a, b, c)` that checks if all three strings are "chicken"
> -   Wish for a function `allAreBanana(a, b, c)` that checks if all three strings are "banana"
> -   Wish for a function `noneAreChickenOrBanana(a, b, c)` that checks if none are "chicken" or "banana"
> -   Wish for a function `getFirstChickenOrBanana(a, b, c)` that returns the first "chicken" or "banana" found
>
> Write your main `chickenBanana` function using these imaginary helpers first, then implement each helper function afterward. This approach helps you focus on the overall logic before getting stuck on implementation details.

```js
function chickenBanana(a, b, c) {}

console.log(chickenBanana('chicken', 'chicken', 'chicken')); // "CHICKEN!"
console.log(chickenBanana('banana', 'banana', 'banana')); // "BANANA!"
console.log(chickenBanana('chicken', 'banana', 'apple')); // "chicken"
console.log(chickenBanana('apple', 'chicken', 'banana')); // "chicken"
console.log(chickenBanana('apple', 'banana', 'chicken')); // "banana"
console.log(chickenBanana('banana', 'apple', 'chicken')); // "banana"
console.log(chickenBanana('apple', 'orange', 'pear')); // "none"

console.log(biggest(9, 9, 9, 9)); // 9
```
