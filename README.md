# Practical 4

## 1. Fix the bug: sumToN(n)

The function below is trying to compute the sum from 1 to `n` (both inclusive).

Find and fix the bug.

```js
function sumToN(n) {
    let sum = 0;
    for (let i = 0; i < n; i++) {
        sum += i;
    }
    return sum;
}

console.log(sumToN(5)); // 1+2+3+4+5 = 15
console.log(sumToN(7)); // 1+2+3+4+5+6+7 = 28
```

## 2. Fix the bug: factorial(n)

The function below is trying to compute the factorial of `n`, which is the product of all positive integers from 1 to `n`.

Find and fix the bug.

```js
function factorial(n) {
    let result = 1;
    for (let i = 0; i < n; i++) {
        result *= i;
    }
    return result;
}

console.log(factorial(5)); // 5*4*3*2*1 = 120
console.log(factorial(7)); // 7*6*5*4*3*2*1 = 5040
```

## 3. Fix the bug: isPrime(num)

The function below is trying to check if a number is prime.

A number is prime if it is greater than 1 and has no positive divisors other than 1 and itself.

Find and fix the bug.

```js
function isPrime(num) {
    if (num <= 1) {
        // 0, 1 and negative numbers are not prime
        return false;
    }

    for (let i = 2; i <= num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

console.log(isPrime(2)); // true
console.log(isPrime(3)); // true
console.log(isPrime(4)); // false
console.log(isPrime(5)); // true
console.log(isPrime(10)); // false
```

## 4. Sum Numbers from N to M

Complete the following function that sums numbers from `n` to `m` (both inclusive).

Assume `n <= m`.

```js
function sumFromNToM(n, m) {
    // your code here
}

console.log(sumFromNToM(1, 4)); // 10
console.log(sumFromNToM(3, 6)); // 18
```

## 5. Sum Even Numbers

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

## 6. Count Multiples of Three

Complete the following function that counts how many numbers between 1 and n are divisible by 3.

> **Practice Wishful Thinking:** What functions can you wish for to aid you in solving this problem?

```js
function countMultiplesOfThree(n) {
    // your code here
}

console.log(countMultiplesOfThree(10)); // 3 (3, 6, 9)
console.log(countMultiplesOfThree(20)); // 6 (3, 6, 9, 12, 15, 18)
```

## 7. Count Multiples of X

Like Question 6, but this time it is generalized to count any multiples of `x`.

> **Practice Wishful Thinking:** What functions can you wish for to aid you in solving this problem?

```js
function countMultiplesOfX(n, x) {
    // your code here
}

console.log(countMultiplesOfX(10, 3)); // 3 (3, 6, 9)
console.log(countMultiplesOfX(20, 5)); // 4 (5, 10, 15, 20)
```

## 8. String Repetition

Complete the following function that builds a new string by repeating a given string multiple times.

```js
function repeat(string, n) {
    // your code here
}

console.log(repeat('hello', 3)); // Expected output: "hellohellohello"
console.log(repeat('*#', 4)); // Expected output: "*#*#*#*#"
```

## 9. Count Vowels

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

## 10. Sum of Digits

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

## 11. Right-Angled Triangle

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

> **Practice Wishful Thinking:** How might the `repeat` function from Question 8 help you solve this problem?

```js
function rightAngledTriangle(height) {
    // your code here
}

console.log(rightAngledTriangle(3));
console.log(rightAngledTriangle(4));
```

## 12. Diamond

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
