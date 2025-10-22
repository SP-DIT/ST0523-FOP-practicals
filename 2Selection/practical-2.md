# Practical 2

This is just a sample of what can be in the practicals

## 1. Is Even?

Apart from the usual `+`, `-`, `*`, `/` operators, there is also the modulo (`%`) operator that calculates the `remainder`.

example:

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

Implement the function `isDivisibleBy(x, y)` that returns `true` is `x` is divisible by `y`.

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

## 2. fizzbuzz

Implement the function `fizzbuzz(x)` that returns a value based on the following rule:

1. `fizz` - if the number is divisible by 3
2. `buzz` - if the number is divisible by 5
3. `fizzbuzz` - if the number is divisible by both 3 and 5.
4. The original value - if the number is NOT divisible by both 3 or 5

> Hint: A number is divisible by another if the remainder is 0
> e.g. Since `15 % 5 = 0`, that means that 15 is divisible by 5 and I should return `"buzz"`

```js
function fizzbuzz(x) {}

console.log(fizzbuzz(3)); // "fizz"
console.log(fizzbuzz(5)); // "buzz"
console.log(fizzbuzz(15)); // "fizzbuzz"
console.log(fizzbuzz(16)); // 16
console.log(fizzbuzz(9)); // "fizz"
console.log(fizzbuzz(10)); // "buzz"
console.log(fizzbuzz(30)); // "fizzbuzz"
```

## 3. ChickenBanana(a, b, c)

Given 3 strings `a`, `b`, and `c`.

1. If all of the string is "chicken", returns "CHICKEN!"
2. If all of the string is "banana", returns "BANANA!"
3. If none of the string is either "chicken" or "banana", returns "none"
4. Otherwise, if the strings contain a mix of "chicken" and/or "banana" along with other values, return the one ("chicken" or "banana") that appears first among the inputs a, b, and c in order.

```js
function chickenBanana(a, b, c) {}

console.log(chickenBanana('chicken', 'chicken', 'chicken')); // "CHICKEN!"
console.log(chickenBanana('banana', 'banana', 'banana')); // "BANANA!"
console.log(chickenBanana('chicken', 'banana', 'apple')); // "chicken"
console.log(chickenBanana('apple', 'chicken', 'banana')); // "chicken"
console.log(chickenBanana('apple', 'banana', 'chicken')); // "banana"
console.log(chickenBanana('banana', 'apple', 'chicken')); // "banana"
console.log(chickenBanana('apple', 'orange', 'pear')); // "none"
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

```js
function biggest(a, b, c, d) {}

console.log(biggest(1, 2, 3, 4)); // 4
console.log(biggest(3, 2, 5, 1)); // 5
console.log(biggest(9, 9, 9, 9)); // 9
```

## 6. Challenge

Write the `biggest(a, b, c, d)` function by reusing the `bigger(a, b)` function you created earlier.

You can keep the if-statement in `bigger(a, b)`, but do not use any if-statements in your solution of `biggest(a, b, c, d)`.

```js
function bigger(a, b) {}

function biggest(a, b, c, d) {
    // do not use if-statements here
}

console.log(biggest(1, 2, 3, 4)); // 4
console.log(biggest(3, 2, 5, 1)); // 5
console.log(biggest(9, 9, 9, 9)); // 9
```
