// Q1. Complete the function that returns the sum of all elements in an array.
function sumArray(array) {
    // your code here
}
  
console.log(sumArray([1, 2, 3, 4, 5])); // 15
console.log(sumArray([10, 20, 30]));    // 60


// Q2. Complete the function that returns the largest number in the array.
function findMaxInArray(array) {
    // your code here
}

console.log(findMaxInArray([3, 7, 2, 9, 5])); // 9
console.log(findMaxInArray([-10, -5, -1]));   // -1


// Q3. Complete the function that returns how many numbers in the array are even.
function countEvenNumbers(array) {
    // your code here
}

console.log(countEvenNumbers([1, 2, 3, 4, 5])); // 2
console.log(countEvenNumbers([10, 15, 20, 25])); // 2


// Q4. Complete the function that returns the average value of all numbers in the array.
function averageArray(array) {
    // your code here
}

console.log(averageArray([1, 2, 3, 4, 5])); // 3
console.log(averageArray([10, 20, 30]));    // 20


// Q5. Complete the function that returns a new array containing only the positive numbers.
function getPositiveNumbers(array) {
    // your code here
}

console.log(getPositiveNumbers([1, -3, 5, -2, 7])); // [1, 5, 7]
console.log(getPositiveNumbers([-5, -1, -9])); // []


// Q6. Complete the function that returns a new array with elements in reverse order.
function reverseArray(array) {
    // your code here
}

console.log(reverseArray([1, 2, 3])); // [3, 2, 1]
console.log(reverseArray(["a", "b", "c", "d"])); // ["d", "c", "b", "a"]


// Q7. Complete the following function that returns an array containing the first k multiples of a given number n.
// Hint: Use a loop to generate each multiple and store it into an array using .push().
function multiplication(n, k) {
    // your code here
}

console.log(multiplication(2, 5));  // [2, 4, 6, 8, 10]
console.log(multiplication(3, 4));  // [3, 6, 9, 12]
console.log(multiplication(5, 3));  // [5, 10, 15]
console.log(multiplication(10, 0)); // []


// Q8. Complete the following function that determines whether an array of numbers is:
// Ascending – each element is greater than the previous
// Non-descending – each element is greater than or equal to the previous
// Descending – each element is smaller than the previous
// Non-ascending – each element is smaller than or equal to the previous
// Constant – all elements are equal
// Unsorted – none of the above
function checkArray(array) {
    // your code here
}

console.log(checkArray([1, 2, 3, 4, 5])); // 'Ascending'
console.log(checkArray([5, 4, 3, 2, 1])); // 'Descending'
console.log(checkArray([1, 1, 1, 1, 1])); // 'Constant'
console.log(checkArray([1, 2, 2, 3, 4])); // 'Non-descending'
console.log(checkArray([5, 4, 4, 3, 2])); // 'Non-ascending'
console.log(checkArray([1, 2, 4, 3, 5])); // 'Unsorted'