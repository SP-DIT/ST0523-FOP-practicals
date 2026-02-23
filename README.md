# Practical 1

> Press `CTRL + SHIFT + V` to preview the rendered pdf

## 1. Fix the expression error

The function should evaluate the expression $48 ÷ 2(9 + 3)$.

Your task is to fix the syntax error in the expression so the function returns the correct value.

```js
function evaluate() {
    return 48 / 2(9 + 3);
}

console.log(evaluate()); // 288
```

## 2. Square a value 3 times

The function should square `x` three times in sequence. i.e. $((x^2)^2)^2$

Add brackets so the exponent expression matches this order.

```js
function square3Time(x) {
    return x ** (2 ** (2 ** 2));
}

console.log(square3Time(2)); // 256
console.log(square3Time(3)); // 6561
```

## 3. Build `multiplyBy3` using `add`

Fix the code so `multiplyBy3(x)` correctly returns `x * 3` by reusing `add(x, y)`.

```js
function add(x, y) {
    x + y;
}

function multiplyBy3(x) {
    return add(x, add(x, x));
}

console.log(multiplyBy3(4)); // 12
```

## 4. Fix string message assignment

The function should return a greeting message for the given name.

```js
function greetings(name) {
    const message = 'Hello, ';
    message = message + name;
    return message;
}

console.log(greetings('Ali')); // "Hello, Ali"
```

## 5. Fix the full name variable

The function should return the full name by joining `firstName` and `lastName` with one space.

```js
function displayName(firstName, lastName) {
	const full name = firstName + ' ' + lastName;
	return full name;
}

console.log(displayName('John', 'Tan')); // "John Tan"
```

## 6. Make a message

Given the name, year of birth, and current year, return a message indicating the person's name and age.

```js
function makeMessage(name, yearOfBirth, currentYear) {}

console.log(makeMessage('John', 1994, 2025)); // "John (31)"
```

## 7. Make 3 messages

Given the name and the year of birth of 3 different person, along with the current year, return a message listing the name and age of the 3 person, each separated by a comma.

> Hint: You should reuse your code from the previous question

```js
function makeMessage(name, yearOfBirth, currentYear) {}

function make3Messages(name1, yearOfBirth1, name2, yearOfBirth2, name3, yearOfBirth3, currentYear) {}

console.log(make3Messages('John', 1994, 'Mary', 1999, 'Tom', 1986, 2025)); // "John (31), Mary (26), Tom (39)"
```

## 8. Multiple wrapper

Implement a function `wrapper(a, b, c, message)` that returns a string which wraps the message in a specific pattern of characters.

`a`, `b`, and `c` are single-character strings used as wrapping characters.

The output string should be constructed as follows:

1. The string starts with three repetitions of character `a`.
2. This is followed by two repetitions of character `b`.
3. Then a single instance of character `c`.
4. Next comes the original `message` string.
5. After the message, repeat character `c` once again.
6. Then repeat character `b` twice.
7. Finally, end the string with three repetitions of character `a`.

Example 1:

```js
wrapper('#', '%', '*', 'message');
```

Output 1:

```js
###%%*message*%%###
```

Example 2:

```js
wrapper('@', 'B', '(', 'message');
```

Output 2:

```
@@@BB(message(BB@@@
```

Code

```js
function wrapper(a, b, c, message) {}

console.log(wrapper('#', '%', '*', 'message')); // "###%%*message*%%###"
```

## 9. Calculate $a^2 - b^2$

> Hint: $a \times a = a^2$

```js
function aSquareMinusBSquare(a, b) {}

console.log(aSquareMinusBSquare(10, 1)); // 99
```

## 10. Calculate $(a^2 - b^2)^2 - (c^2 - d^2)^2$

> Hint: Reuse `aSquareMinusBSquare`

```js
function aSquareMinusBSquare(a, b) {}

function multipleSquareMinusSquare(a, b, c, d) {}

console.log(multipleSquareMinusSquare(4, 3, 2, 1)); // 40
```
