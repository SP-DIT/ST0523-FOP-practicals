# Practical 3

## 1. Fix the bug: isALargest(a, b, c)

The function below is supposed to return `true` if `a` is the largest among `a`, `b`, and `c`, and `false` otherwise.

Find and fix the bug.

```js
function isALargest(a, b, c) {
    if (a > b > c) {
        return true;
    } else {
        return false;
    }
}

console.log(isALargest(5, 3, 2)); // true
console.log(isALargest(5, 6, 2)); // false
console.log(isALargest(5, 3, 6)); // false
```

## 2. Fix the bug: canRide(height, age, weight)

The function below checks roller coaster eligibility.

A rider must satisfy **all** of these conditions:

-   age is at least 12
-   height is at least 120 cm
-   weight is at least 40 kg

Find and fix the bug.

```js
function canRide(height, age, weight) {
    if (height >= 120 || age >= 12 || weight >= 40) {
        return true;
    } else {
        return false;
    }
}

console.log(canRide(168, 17, 60)); // true
console.log(canRide(110, 17, 60)); // false
console.log(canRide(168, 10, 60)); // false
console.log(canRide(168, 17, 30)); // false
```

## 3. Fix the bug: scoreToGrade(score)

The function below converts a numeric score into a letter grade.

Find and fix the bug.

```js
function scoreToGrade(score) {
    let grade = 'F';
    if (score >= 80) {
        grade = 'A';
    }
    if (score >= 70) {
        grade = 'B';
    }
    if (score >= 60) {
        grade = 'C';
    }
    if (score >= 50) {
        grade = 'D';
    }
    return grade;
}

console.log(scoreToGrade(81)); // A
console.log(scoreToGrade(77)); // B
console.log(scoreToGrade(63)); // C
console.log(scoreToGrade(49)); // F
```

## 4. Fix the bug: calculateTransportFare(fareType, modeOfTransport)

The function below calculates transport fare using this table:

| Fare type | Bus | Train |
| --------- | --- | ----- |
| Student   | 0.5 | 0.75  |
| Senior    | 0.3 | 0.5   |
| Adult     | 1.5 | 3     |

Find and fix the bug.

```js
// prettier-ignore
function calculateTransportFare(fareType, modeOfTransport) {
	if (fareType = 'Student') {
		if (modeOfTransport = 'Bus') {
			return 0.5;
		} else if (modeOfTransport = 'Train') {
			return 0.75;
		}
	} else if (fareType = 'Senior') {
		if (modeOfTransport = 'Bus') {
			return 0.3;
		} else if (modeOfTransport = 'Train') {
			return 0.5;
		}
	} else if (fareType = 'Adult') {
		if (modeOfTransport = 'Bus') {
			return 1.5;
		} else if (modeOfTransport = 'Train') {
			return 3;
		}
	}
}

console.log(calculateTransportFare('Student', 'Bus')); // 0.5
console.log(calculateTransportFare('Senior', 'Bus')); // 0.3
console.log(calculateTransportFare('Adult', 'Train')); // 3
```

## 5. Is Even?

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

## 6. isDivisibleBy(x, y)

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

## 7. fizzbuzz

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

## 8. Bigger number

Implement the function `bigger(a, b)` that returns the bigger number.

```js
function bigger(a, b) {}

console.log(bigger(1, 2)); // 2
console.log(bigger(3, 2)); // 3
console.log(bigger(4, 4)); // 4
```

## 9. Biggest number

Implement the function `biggest(a, b, c, d)` that returns the biggest number.

> **Practice Wishful Thinking:** You already have a `bigger(a, b)` function from question 8 that finds the bigger of two numbers. Use wishful thinking to break this problem down - imagine you can use `bigger` multiple times to solve this step by step. How would you find the biggest of four numbers using a function that only compares two at a time?

```js
function biggest(a, b, c, d) {}

console.log(biggest(1, 2, 3, 4)); // 4
console.log(biggest(3, 2, 5, 1)); // 5
console.log(biggest(9, 9, 9, 9)); // 9
```

## 10. ChickenBanana(a, b, c)

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
