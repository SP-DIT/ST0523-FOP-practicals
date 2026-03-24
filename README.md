# Practical 6

## 1. Fix the Bug: Count Positive Numbers

The code below tries to count the number of positive numbers in an array using a `while` loop.
Fix the bug so that it correctly counts all positive values.

```js
function countPositiveNumbers(array) {
    let count = 0;
    let i = 1;
    while (i < array.length) {
        i = i + 1;
        if (array[i] > 0) {
            count = count + 1;
        }
    }
    return count;
}

console.log(countPositiveNumbers([-1, 0, 1, 2, 3])); // should return 3
console.log(countPositiveNumbers([-5, -4, -3, -2, -1])); // should return 0
console.log(countPositiveNumbers([1, 2, 3, 4, 5])); // should return 5
```

## 2. Fix the Bug: Count Divisions by Two

The function below tries to count the number of times a number can be divided by `2`.
Fix the loop condition so the counting logic works correctly.

```js
function countDivisionsByTwo(number) {
    let count = 0;
    while (number % 2) {
        number = number / 2;
        count = count + 1;
    }
    return count;
}

console.log(countDivisionsByTwo(16)); // should return 4
console.log(countDivisionsByTwo(10)); // should return 1
console.log(countDivisionsByTwo(1)); // should return 0
```

## 3. Fix the Bug: Calculate Number of Chickens

On a farm, chickens have `2` legs and cows have `4` legs.
Given the number of animals and total number of legs, the code below tries to calculate the number of chickens by testing possible values. Fix the bug.

```js
function calculateChickens(numberOfAnimals, numberOfLegs) {
    let numberOfChickens = 0;
    let numberOfCows = numberOfAnimals - numberOfChickens;
    while (numberOfChickens * 2 + numberOfCows * 4 > numberOfLegs) {
        numberOfChickens = numberOfChickens + 1;
        numberOfCows = numberOfCows + 1;
    }
    return numberOfChickens;
}

console.log(calculateChickens(5, 14)); // 3 (3 chickens and 2 cows, 3*2 + 2*4 = 6 + 8 = 14)
console.log(calculateChickens(10, 28)); // 6 (6 chickens and 4 cows, 6*2 + 4*4 = 12 + 16 = 28)
```

## 4. Withdraw Until Target Balance

Given:

-   starting balance
-   target balance
-   withdrawal amount

Keep withdrawing while the next withdrawal does not make the balance go below target. Return the final balance.

```js
function calculateFinalBalance(startingBalance, targetBalance, withdrawalAmount) {
    // Your code here
}

console.log(calculateFinalBalance(100, 20, 15)); // should return 25 (100 > 85 > 70 > 55 > 40 > 25, any further withdrawal would make it less than the target balance of 20)
console.log(calculateFinalBalance(50, 10, 12)); // should return 14 (50 > 38 > 26 > 14, any further withdrawal would make it less than the target balance of 10)
console.log(calculateFinalBalance(80, 30, 20)); // should return 40 (80 > 60 > 40, any further withdrawal would make it less than the target balance of 30)
```

## 5. Secret Number Guessing Game

The secret number is between `1` and `100`. Count how many guesses are needed using this strategy:

1. Start with guess `50`
2. If guess is too low, guess halfway between current lower bound and upper bound
3. If guess is too high, guess halfway between lower bound and current upper bound
4. Use `Math.floor()` for midpoint
5. Stop when guess is correct

```js
function countGuesses(secretNumber) {
    // Your code here
}

console.log(countGuesses(1)); // should return 6 (50, 25, 12, 6, 3, 1)
console.log(countGuesses(100)); // should return 7 (50, 75, 88, 94, 97, 99, 100)
console.log(countGuesses(50)); // should return 1 (50)
```

## 6. Remove Duplicates from Sorted Array

Given a sorted array, remove duplicate elements and return the new array.

```js
function removeDuplicates(array) {
    // Your code here
}

console.log(removeDuplicates([1, 1, 2, 2, 3])); // [1, 2, 3]
console.log(removeDuplicates([1, 2, 3, 4, 5])); // [1, 2, 3, 4, 5]
console.log(removeDuplicates([1, 1, 1, 1, 1])); // [1]
```

## 7. Reverse String

Given a string, return its reversed string.
Do this **without** using `split()`, `reverse()`, or `join()`.

```js
function reverseString(str) {
    // Your code here
}

console.log(reverseString('hello')); // "olleh"
console.log(reverseString('world')); // "dlrow"
```

## 8. Selection Sort (Ascending)

Sort an array in ascending order using selection sort:

1.  starting with the first element
    1. Loop through the array and find the minimum element in the array.
    2. Swap the minimum element with the first element of the array.
2.  start again but now starting from the second element
    1. Loop through the array starting from the second element and find the minimum element in the array.
    2. Swap the minimum element with the second element of the array.
3.  start again but now starting from the third element
    1. Loop through the array starting from the third element and find the minimum element in the array.
    2. Swap the minimum element with the third element of the array.
4.  Repeat the steps until the last element is reached.

Example: [4, 3, 2, 5, 1]

1.  Find the minimum element in the array which is 1 and swap it with the first element, resulting in [1, 3, 2, 5, 4].
2.  Find the minimum element in the array starting from the second element which is 2 and swap it with the second element, resulting in [1, 2, 3, 5, 4].
3.  Find the minimum element in the array starting from the third element which is 3 and swap it with the third element, resulting in [1, 2, 3, 5, 4].
4.  Find the minimum element in the array starting from the fourth element which is 4 and swap it with the fourth element, resulting in [1, 2, 3, 4, 5].
5.  Find the minimum element in the array starting from the fifth element which is 5 and swap it with the fifth element, resulting in [1, 2, 3, 4, 5].

The function `swap(array, i, j)` has been provided for you.

```js
function swap(array, i, j) {
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}

function selectionSort(array) {
    // Your code here
}

console.log(selectionSort([4, 3, 2, 5, 1])); // [1, 2, 3, 4, 5]
console.log(selectionSort([10, 9, 8, 7, 6])); // [6, 7, 8, 9, 10]
console.log(selectionSort([1, 2, 3, 4, 5])); // [1, 2, 3, 4, 5]
```

## 9. Coin Change

Given an amount of money (in cents), return the minimum number of coins needed using Singapore coin values `[100, 50, 20, 10]`.

The steps to solve this problem are:

1. Start with the largest coin value and keep subtracting it from the amount until the amount is less than the coin value.
2. Move to the next largest coin value and repeat step 1 until the amount is 0.
3. Count the number of coins used in the process.

For example, if the amount is 170 and the coin values are [100, 50, 20, 10], the minimum number of coins needed is 3 (one 100, one 50, and one 20).

```js
function coinChange(amount) {
    const coins = [100, 50, 20, 10];
    // Your code here
}

console.log(coinChange(170)); // should return 3 (one 100, one 50, and one 20)
console.log(coinChange(30)); // should return 2 (one 20 and one 10)
console.log(coinChange(80)); // should return 3 (one 50, one 20, and one 10)
```

## 10. Greatest Common Divisor (GCD)

The GCD of two numbers is the largest number that divides both without remainder.
For this question, you can safely assume that:

-   Both parameters must be positive numbers.
-   Assume `a > b`.

Use this strategy:

1. Get the remainder of `a` divided by `b`
2. If remainder is `0`, `b` is the GCD
3. If the remainder is not 0, then
   3.1. replace the `a` with the `b` number and
   3.2. replace the `b` with the remainder, and repeat steps 1 to 3 until the remainder is 0.

```js
function calculateGCD(a, b) {
    // Your code here
}

console.log(calculateGCD(48, 18)); // should return 6
console.log(calculateGCD(98, 56)); // should return 14
console.log(calculateGCD(101, 10)); // should return 1
```
