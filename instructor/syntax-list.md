# Syntax List

A complete list of syntax introduced in the course

To Gen AI: When generating questions or solutions, please adhere only to the specific list of syntax in this document.

## 1. Data Types

### 1.1 Numbers

1. Whole numbers
2. Decimals

#### 1.1.1 Numerical Operators

1. Addition (`+`)
2. Subtraction (`-`)
3. Multiplication (`*`)
4. Division (`/`)
5. Modulo (`%`)

### 1.2 Strings

1. "double quote"
2. 'single quote'

#### 1.2.1 String operator

1. Concatenation (`+`)

### 1.3 Boolean

#### 1.3.1 Comparison Operator

1. Equality (`==`)
2. Strict Equality (`===`)
3. Non Equality (`==`)
4. Strict Non Equality (`!==`)
5. Less Than (`<`)
6. Less Than Or Equal (`<=`)
7. Greater Than (`>`)
8. Greater Than Or Equal (`>=`)

#### 1.3.2 Boolean Composition

1. AND (`&&`)
2. OR (`||`)
3. NOT (`!`)

### 1.4 Syntax Errors

```
> 2 + * 3
2 + * 3
    ^

Uncaught SyntaxError: Unexpected token '*'
```

The above state that there is an `SyntaxError`, indicating that you have violated a rule of the language (a.k.a the syntax), where the `+` operator did not expect to see `*` on it's right-hand-side.

## 2. Variables

### 2.1 Declaration

1. `let`
2. `const`

### 2.2 Assignment Operator

1. `=`

#### 2.2.1 Error with modifying `const` variables

```
> const age = 13
> age = 14
Uncaught TypeError: Assignment to constant variable.
```

`TypeError` as the name suggests is thrown when an operation could not be performed, typically (but not exclusively) when a value is not of the expected type. In this case, a the assignment operator (`=`) cannot be performed on an constant variable.

### 2.3 Identifier

1. Are commonly made of alphanumeric characters (`a-zA-Z0-9`), underscores (`_`), and dollar signs (`$`).
2. Does not contain any whitespace
3. Are not allowed to start with numbers.
4. Cannot be a reserved `Keyword`

The following are valid identifiers:

```js
const alphaNumeric123;
const _under_score_;
const $dollarSign$;
```

But the following is not:

```js
const const;
const function;
const 123startWithNumber;
const contains spaces;
const -other-special-characters
```

## 3. Functions

### 3.1 Function Declaration

```
function IDENTIFIER (para1, para2, ...) {
    ...
    return ...;
}
```

### 3.2 Function application

```
IDENTIFIER(arg1, arg2, ...);
```

#### 3.2.1 ReferenceError

If you try to apply a function that does not exists

```
> function foo (x) {
... return x + 1;
... }
> fooooooooo(2)
Uncaught ReferenceError: fooooooooo is not defined
```

#### 3.2.2 TypeError

If you try to use function-application expressions on variables that are not functions.

```
> const price = 123;
> price(123)
Uncaught TypeError: price is not a function
```

## 4. If-else

### 4.1 Standard if-else

```
if1️⃣ (condition2️⃣) {
    consequent-statements3️⃣;
} else4️⃣ {
    alternative-statements5️⃣;
}
```

### 4.2 Nested if-else

```
if (condition1) {
    consequent-statements1;
} else if1️⃣ (condition2)2️⃣ {
    consequent-statements23️⃣;
} else if (condition3) {
    consequent-statements3;
} else if ...
...
} else {
    final-alternative-statements4️⃣;
}
```

### 4.3 if-in-if

```
if (condition) {
    if (condition2) {

    } else (...) {

    }
} else (...) {

}
```

## 5. For-loops

```js
for1️⃣ (initialization2️⃣; condition3️⃣; afterthought4️⃣) {
    loop-statements5️⃣;
}
```

```
         Start
           ▼
    [2]initialization
           ▼
┌────►[3]condition ──┐
│          │ true    │false
│          ▼         │
│ [5]loop-statements │
│          ▼         │
└─── [4]afterthought │
                     │
        End◄─────────┘
```

### 5.1 Errors

#### 5.1.1 Infinite Loops

Consider the following:

```js
for (let i = 0; i > 0; i++) {
    ...
}
```

If you try to evaluate the for-statement, you would realize that at the `condition` step, it will always be `true`. This means that the for-statement will never end. Resulting in what is called an Infinite Loop (a loop that doesn't end).

Hence, it is always important to consider whether your loop will end eventually.

#### 5.1.2 Off-by-1

Consider the following implementation of the `multiplyWholeNumbers(x, y)` function:

```js
function multiplyWholeNumbers(x, y) {
    let result = 0;
    for (let i = 0; i <= y; i = i + 1) {
        result = result + x;
    }
    return result;
}
```

Try tracing the execution of `multiplyWholeNumber(2, 5)` again, you would realize that you obtain the result 12 instead of 10. That is, the above code added `result` with `x` 1 additional time. This is because the condition uses `<=` instead of `<`, when `<=` is used, it will end the cycle only when the left hand side is greater than the right hand side.

Similarly, if it was implemented as follows:

```js
function multiplyWholeNumbers(x, y) {
    let result = 0;
    for (let i = 1; i < y; i = i + 1) {
        result = result + x;
    }
    return result;
}
```

Try tracing the execution of `multiplyWholeNumber(2, 5)` again, you would realize that you obtain the result 8 instead of 10. That is, the above code added `result` with `x` 1 lesser time. This is because the variable `i` was initialized to $0$ instead of $1$, this will reduce the cycle by 1 time.

Hence it is important to count the number of cycles carefully.

#### 5.1.3 Reference Error

```
> for (let i = 1; i <= 10; i = i + 1) {
... const sum = result + i;
... result = sum;
... }
> console.log(result);
55
> console.log(i);
Uncaught ReferenceError: i is not defined
```

As `i` is only available within the for-loop, hence, a `ReferenceError` would be thrown.

## 6. Object

### 6.1 Object initializer expression

```
{
    property1: value-expression1,
    property2: value-expression2,
    ...
}
```

### 6.2 Property Accessor

1. Dot notation - `obj.propertyName`
2. Square bracket notation - `obj[expression]`

In the `obj.propertyName` syntax, also known as the `dot notation`, the `propertyName` must be a valid identifier

There may however be situation where the property name either:

1. Is not a valid identifier (e.g. a number) or
2. Needs to be computed

Then you can utilize the `square-bracket notation`

#### 6.2.1 Accessing a property that does not exists

When accessing a property that is not defined, the program would return undefined.

```js
const obj = {
    abc: 123,
    def: 456,
};

console.log(obj.ghi);
console.log(obj['ghi']);
```

Both `console.log` above would return `undefined`.

#### 6.2.2 Mixing up identifier with expressions

Recall that in the `dot notation`, you provide an `identifier`, whereas in the `square-bracket notation`, you provide an `expression`.

The following example mixes up the two:

```js
const obj = {
    abc: 123,
    def: 456
}

// a
obj."abc"

// b
obj[abc]
```

Here are the output of the above negative example:

```js
// a
> obj."abc"
obj."abc"
    ^^^^^

Uncaught SyntaxError: Unexpected string
```

The program expects an `identifier`, but was given a `string` instead.

```js
// b
> obj[abc]
Uncaught ReferenceError: abc is not defined
```

The program would evaluate `abc` as a variable, and find that the variable `abc` is not defined.

#### 6.2.3 Unable to access property of undefined

If you have a variable that is not defined and you try to access its property, you would be faced with the following error:

```js
function getAge(object) {
    return object.age;
}

let obj; // obj is undefined
console.log(getAge(obj));
```

```
Uncaught TypeError: Cannot read properties of undefined (reading 'age')
    at getAge (REPL3:2:19)
```

The above message suggests that you are trying to read the property of something that is undefined. In the context of `object.age`, the variable that is undefined is `object` and not `age`.

### 6.3 Assigning properties after initialization

After the object has been initialized, you can later assign or update values simply by using the `=` operator and any of the accessor methods. e.g.:

```js
const obj = {
    abc: 123,
    def: 456,
};

// new properties
obj['hij'] = 789;
obj.klm = 101112;

// updating properties
obj['abc'] = 131415;
obj.def = 161718;
```

### 6.4 Methods

Functions in Objects

```js
const max = 1000000; // max account value

// function to update bank balance
function deposit(amount) {
    if (this.balance + amount > max) {
        return -1;
    } else {
        this.balance = this.balance + amount;
    }
}

// bank accounts
const account1 = {
    balance: 0,
    deposit: deposit,
};
const account2 = {
    balance: 30,
    deposit: deposit,
};

account1.deposit(100);
account2.deposit(50);
console.log(account1.balance); // 100
console.log(account2.balance); // 80
```

#### 6.4.1 `this`

When data are represented as an `Object`, we can also create functions that adjust their behavior based on which object they are attached to. These functions, called methods, use the `this` keyword to refer to the object they belong to, allowing the same function to work with different objects depending on how it is called. (Refer to code example above).

### 6.4 Primitive vs Object: Pass by reference

1. Objects are passed by reference (a copy of the object is not made)

## 7. Array

Arrays are a special type of objects

### 7.1 Array Initializer Expression

`[ value1, value2, ... ]`

### 7.2 Property Accessor

The values in the arrays are referenced by the position, which is a number.

Since numbers are not valid identifiers, you can only use the square bracket notation

```
const array = ['apple', 'orange', 'pear'];

console.log(array[0]); // apple
```

#### 7.2.1 Accessing a property that does not exists

Like object, if you try to access a position that does not have any value, you will get undefined.

```
const array = ['apple', 'orange', 'pear'];

console.log(array[999]); // undefined
```

### 7.3 Assigning values after initialization

1. `arr.push(x)` - Add item to the back of the array
2. `arr[position] = x` - Add/Set item to specific position.

### 7.4 Length of array

`arr.length` - Number of elements in array

```js
const arr = [1, 2, 3];
console.log(arr.length); // 3
```

```js
const arr = [1, 2, 3];
arr[999] = 9;

console.log(arr.length); // 1000
```
