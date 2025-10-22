# JavaScript Syntax Reference

A comprehensive list of JavaScript syntax elements introduced in this course.

> **Note for AI:** When generating questions or solutions, please adhere only to the syntax listed in this document.

## 1. Data Types

### 1.1 Numbers

JavaScript supports two types of numbers:

-   **Whole numbers** (integers): `42`, `-15`, `0`
-   **Decimals** (floating-point): `3.14`, `-2.5`, `0.1`

#### 1.1.1 Numerical Operators

| Operator | Description        | Example        |
| -------- | ------------------ | -------------- |
| `+`      | Addition           | `5 + 3` → `8`  |
| `-`      | Subtraction        | `10 - 4` → `6` |
| `*`      | Multiplication     | `6 * 7` → `42` |
| `/`      | Division           | `15 / 3` → `5` |
| `%`      | Modulo (remainder) | `17 % 5` → `2` |

### 1.2 Strings

Strings are text values enclosed in quotes:

-   **Double quotes**: `"Hello, World!"`
-   **Single quotes**: `'Hello, World!'`

#### 1.2.1 String Operator

| Operator | Description                     | Example                                |
| -------- | ------------------------------- | -------------------------------------- |
| `+`      | Concatenation (joining strings) | `"Hello" + " World"` → `"Hello World"` |

### 1.3 Boolean

Boolean values represent true or false conditions.

#### 1.3.1 Comparison Operators

| Operator | Description           | Example               |
| -------- | --------------------- | --------------------- |
| `==`     | Equality (loose)      | `5 == "5"` → `true`   |
| `===`    | Strict Equality       | `5 === "5"` → `false` |
| `!=`     | Non-Equality (loose)  | `5 != "6"` → `true`   |
| `!==`    | Strict Non-Equality   | `5 !== "5"` → `true`  |
| `<`      | Less Than             | `3 < 5` → `true`      |
| `<=`     | Less Than Or Equal    | `5 <= 5` → `true`     |
| `>`      | Greater Than          | `7 > 3` → `true`      |
| `>=`     | Greater Than Or Equal | `4 >= 4` → `true`     |

#### 1.3.2 Boolean Logical Operators

| Operator | Description                              | Example                    |
| -------- | ---------------------------------------- | -------------------------- |
| `&&`     | AND (both conditions must be true)       | `true && false` → `false`  |
| `\|\|`   | OR (at least one condition must be true) | `true \|\| false` → `true` |
| `!`      | NOT (inverts the boolean value)          | `!true` → `false`          |

### 1.4 Syntax Errors

When code violates JavaScript's syntax rules, a `SyntaxError` is thrown:

```javascript
> 2 + * 3
2 + * 3
    ^

Uncaught SyntaxError: Unexpected token '*'
```

This error indicates that the `+` operator did not expect to see `*` on its right-hand side, violating JavaScript's syntax rules.

## 2. Variables

### 2.1 Variable Declaration

JavaScript provides two main ways to declare variables:

| Keyword | Description                                | Can be reassigned? |
| ------- | ------------------------------------------ | ------------------ |
| `let`   | Declares a variable that can be changed    | ✅ Yes             |
| `const` | Declares a constant that cannot be changed | ❌ No              |

**Examples:**

```javascript
let age = 25; // Can be changed later
const name = 'John'; // Cannot be changed
```

### 2.2 Assignment Operator

| Operator | Description                   | Example    |
| -------- | ----------------------------- | ---------- |
| `=`      | Assigns a value to a variable | `age = 30` |

#### 2.2.1 Error with Modifying `const` Variables

Attempting to reassign a `const` variable will result in a `TypeError`:

```javascript
> const age = 13
> age = 14
Uncaught TypeError: Assignment to constant variable.
```

**Explanation:** A `TypeError` is thrown when an operation cannot be performed, typically when a value is not of the expected type. In this case, the assignment operator (`=`) cannot be used on a constant variable.

### 2.3 Identifiers (Variable Names)

Valid identifiers must follow these rules:

1. **Allowed characters:** Letters (`a-z`, `A-Z`), numbers (`0-9`), underscores (`_`), and dollar signs (`$`)
2. **No whitespace:** Cannot contain spaces or tabs
3. **Cannot start with numbers:** Must begin with a letter, underscore, or dollar sign
4. **Cannot be reserved keywords:** Cannot use JavaScript reserved words like `function`, `const`, etc.

**✅ Valid Examples:**

```javascript
const alphaNumeric123;
const _under_score_;
const $dollarSign$;
```

**❌ Invalid Examples:**

```javascript
const const;                    // Reserved keyword
const function;                 // Reserved keyword
const 123startWithNumber;       // Starts with number
const contains spaces;          // Contains whitespace
const -other-special-characters // Invalid special characters
```

## 3. Functions

### 3.1 Function Declaration

**Syntax:**

```javascript
function IDENTIFIER(parameter1, parameter2, ...) {
    // Function body
    return value; // Optional
}
```

**Example:**

```javascript
function addNumbers(a, b) {
    return a + b;
}
```

### 3.2 Function Call (Application)

**Syntax:**

```javascript
IDENTIFIER(argument1, argument2, ...);
```

**Example:**

```javascript
let result = addNumbers(5, 3); // result = 8
```

#### 3.2.1 ReferenceError

Attempting to call a function that doesn't exist will result in a `ReferenceError`:

```javascript
> function foo(x) {
... return x + 1;
... }
> fooooooooo(2)  // Typo in function name
Uncaught ReferenceError: fooooooooo is not defined
```

#### 3.2.2 TypeError

Attempting to call a variable that is not a function will result in a `TypeError`:

```javascript
> const price = 123;
> price(123)  // price is a number, not a function
Uncaught TypeError: price is not a function
```

## 4. Conditional Statements (if-else)

### 4.1 Basic if-else Statement

**Syntax:**

```javascript
if (condition) {
    // Execute when condition is true
} else {
    // Execute when condition is false
}
```

**Example:**

```javascript
if (age >= 18) {
    console.log('You can vote!');
} else {
    console.log('You cannot vote yet.');
}
```

### 4.2 else if (Multiple Conditions)

**Syntax:**

```javascript
if (condition1) {
    // Execute when condition1 is true
} else if (condition2) {
    // Execute when condition2 is true
} else if (condition3) {
    // Execute when condition3 is true
} else {
    // Execute when all conditions are false
}
```

**Example:**

```javascript
if (score >= 90) {
    grade = 'A';
} else if (score >= 80) {
    grade = 'B';
} else if (score >= 70) {
    grade = 'C';
} else {
    grade = 'F';
}
```

### 4.3 Nested if Statements

You can place if statements inside other if statements:

**Syntax:**

```javascript
if (condition1) {
    if (condition2) {
        // Execute when both conditions are true
    } else {
        // Execute when condition1 is true but condition2 is false
    }
} else {
    // Execute when condition1 is false
}
```

## 5. For Loops

### 5.1 Basic for Loop Syntax

**Syntax:**

```javascript
for (initialization; condition; afterthought) {
    // Loop body - statements to repeat
}
```

**Example:**

```javascript
for (let i = 0; i < 5; i++) {
    console.log('Number: ' + i);
}
```

### 5.2 Loop Execution Flow

```
         Start
           ▼
    [1] initialization
           ▼
┌────► [2] condition ──┐
│          │ true      │ false
│          ▼           │
│ [4] loop body        │
│          ▼           │
└─── [3] afterthought  │
                       │
        End ◄──────────┘
```

**Execution Order:**

1. **Initialization**: Execute once at the beginning
2. **Condition**: Check before each iteration
3. **Afterthought**: Execute after each iteration
4. **Loop body**: Execute when condition is true

### 5.3 Common Loop Errors

#### 5.3.1 Infinite Loops

**Problem:** A loop that never terminates because the condition is always true.

**Example of infinite loop:**

```javascript
for (let i = 0; i > 0; i++) {
    // i starts at 0, condition is false from start
    // This loop never runs
}

for (let i = 0; i >= 0; i++) {
    // i will always be >= 0
    // This loop runs forever
}
```

**Solution:** Ensure your condition will eventually become false.

#### 5.3.2 Off-by-One Errors

**Problem:** Loop runs one time too many or too few.

**Incorrect Example 1 (too many iterations):**

```javascript
function multiplyWholeNumbers(x, y) {
    let result = 0;
    for (let i = 0; i <= y; i++) {
        // <= causes one extra iteration
        result = result + x;
    }
    return result;
}

multiplyWholeNumbers(2, 5); // Returns 12 instead of 10
```

**Incorrect Example 2 (too few iterations):**

```javascript
function multiplyWholeNumbers(x, y) {
    let result = 0;
    for (let i = 1; i < y; i++) {
        // Starting at 1 and using < causes one less iteration
        result = result + x;
    }
    return result;
}

multiplyWholeNumbers(2, 5); // Returns 8 instead of 10
```

**Correct Example:**

```javascript
function multiplyWholeNumbers(x, y) {
    let result = 0;
    for (let i = 0; i < y; i++) {
        // Start at 0, use < for exact count
        result = result + x;
    }
    return result;
}

multiplyWholeNumbers(2, 5); // Returns 10 (correct)
```

#### 5.3.3 Variable Scope Error

Loop variables are only accessible within the loop:

```javascript
> for (let i = 1; i <= 10; i++) {
...   // i is accessible here
... }
> console.log(i);  // Trying to access i outside the loop
Uncaught ReferenceError: i is not defined
```

**Explanation:** The variable `i` only exists within the for-loop scope, so accessing it outside results in a `ReferenceError`.

## 6. Objects

Objects are collections of key-value pairs (properties).

### 6.1 Object Creation

**Syntax:**

```javascript
{
    property1: value1,
    property2: value2,
    // ...
}
```

**Example:**

```javascript
const person = {
    name: 'John',
    age: 30,
    city: 'New York',
};
```

### 6.2 Property Access

There are two ways to access object properties:

#### Dot Notation

```javascript
obj.propertyName;
```

-   The property name must be a valid identifier
-   **Example:** `person.name` → `"John"`

#### Square Bracket Notation

```javascript
obj[expression];
```

-   The expression is evaluated to get the property name
-   **Example:** `person["name"]` → `"John"`

**When to use square brackets:**

1. Property name is not a valid identifier (e.g., contains spaces or numbers)
2. Property name needs to be computed dynamically

```javascript
const obj = {
    'user name': 'John',
    123: 'number property',
};

console.log(obj['user name']); // "John"
console.log(obj[123]); // "number property"
```

### 6.3 Common Property Access Errors

#### 6.3.1 Accessing Non-existent Properties

When accessing a property that doesn't exist, JavaScript returns `undefined`:

```javascript
const obj = {
    abc: 123,
    def: 456,
};

console.log(obj.ghi); // undefined
console.log(obj['ghi']); // undefined
```

#### 6.3.2 Mixing Dot and Bracket Notation Syntax

**❌ Incorrect Examples:**

```javascript
const obj = {
    abc: 123,
    def: 456
};

// Wrong: Using string with dot notation
obj."abc"  // SyntaxError: Unexpected string

// Wrong: Using variable name without quotes in brackets
obj[abc]   // ReferenceError: abc is not defined
```

**✅ Correct Examples:**

```javascript
obj.abc; // Dot notation with identifier
obj['abc']; // Bracket notation with string
```

#### 6.3.3 Accessing Properties of undefined

Attempting to access properties of `undefined` variables results in a `TypeError`:

```javascript
function getAge(object) {
    return object.age; // Error if object is undefined
}

let obj; // obj is undefined
console.log(getAge(obj));
// TypeError: Cannot read properties of undefined (reading 'age')
```

### 6.4 Modifying Object Properties

After creating an object, you can add new properties or update existing ones:

```javascript
const obj = {
    abc: 123,
    def: 456,
};

// Adding new properties
obj['hij'] = 789;
obj.klm = 101112;

// Updating existing properties
obj['abc'] = 131415;
obj.def = 161718;

console.log(obj);
// { abc: 131415, def: 161718, hij: 789, klm: 101112 }
```

### 6.5 Methods (Functions in Objects)

Objects can contain functions as properties, called **methods**:

```javascript
const max = 1000000; // Maximum account value

// Function to update bank balance
function deposit(amount) {
    if (this.balance + amount > max) {
        return -1; // Transaction failed
    } else {
        this.balance = this.balance + amount;
        return this.balance; // Return new balance
    }
}

// Bank accounts
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

#### 6.5.1 The `this` Keyword

When a function is called as a method of an object, the `this` keyword refers to that object. This allows the same function to work with different objects depending on how it's called.

### 6.6 Pass by Reference

**Important:** Objects are passed by reference, meaning no copy is made when passing objects to functions or assigning them to variables.

## 7. Arrays

Arrays are special objects used to store ordered lists of values.

### 7.1 Array Creation

**Syntax:**

```javascript
[value1, value2, value3, ...]
```

**Example:**

```javascript
const fruits = ['apple', 'orange', 'pear'];
const numbers = [1, 2, 3, 4, 5];
const mixed = ['hello', 42, true];
```

### 7.2 Array Element Access

Array elements are accessed using their **index** (position), starting from 0:

```javascript
const array = ['apple', 'orange', 'pear'];

console.log(array[0]); // 'apple' (first element)
console.log(array[1]); // 'orange' (second element)
console.log(array[2]); // 'pear' (third element)
```

**Note:** Since array indices are numbers (not valid identifiers), you can only use square bracket notation, not dot notation.

#### 7.2.1 Accessing Non-existent Indices

Accessing an index that doesn't exist returns `undefined`:

```javascript
const array = ['apple', 'orange', 'pear'];

console.log(array[999]); // undefined
console.log(array[-1]); // undefined
```

### 7.3 Modifying Arrays

#### Adding Elements

```javascript
const arr = [1, 2, 3];

// Add to the end of array
arr.push(4);
console.log(arr); // [1, 2, 3, 4]

// Set specific position
arr[5] = 6;
console.log(arr); // [1, 2, 3, 4, undefined, 6]
```

#### Updating Elements

```javascript
const arr = [1, 2, 3];
arr[1] = 10;
console.log(arr); // [1, 10, 3]
```

### 7.4 Array Length

The `length` property returns the number of elements in an array:

```javascript
const arr = [1, 2, 3];
console.log(arr.length); // 3
```

**Important:** Setting an element at a high index affects the length:

```javascript
const arr = [1, 2, 3];
arr[999] = 9;
console.log(arr.length); // 1000
```
