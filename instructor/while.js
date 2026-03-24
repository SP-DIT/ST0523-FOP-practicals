// q1 fix the bug in the code below.
// The code tries to count the number of positive numbers in an array using a while-loop
// Fix the while loop so that it correctly counts the positive numbers.

function countPositiveNumbers(array) {
    let count = 0;
    let i = 0;
    while (i <= array.length) {
        i = i + 1;
        if (array[i] > 0) {
            count = count + 1;
        }
    }
    return count;
}

// Sample
console.log(countPositiveNumbers([-1, 0, 1, 2, 3])); // should return 3
console.log(countPositiveNumbers([-5, -4, -3, -2, -1])); // should return 0
console.log(countPositiveNumbers([1, 2, 3, 4, 5])); // should return 5

// q2 fix the bug in the code below.
// The code below tries to count the number of times a number can be divided by 2.

function countDivisionsByTwo(number) {
    let count = 0;
    while (number % 2) {
        number = number / 2;
        count = count + 1;
    }
    return count;
}

// Sample
console.log(countDivisionsByTwo(16)); // should return 4
console.log(countDivisionsByTwo(10)); // should return 1
console.log(countDivisionsByTwo(1)); // should return 0

// q3 fix the bug in the code below
// On a farm, there are chickens and cows.
// Chickens have 2 legs and cows have 4 legs.
// Given the number of animals and the number of legs,
// the code below tries to calculate the number of chickens by iterating through possible numbers of chickens.

function calculateChickens(numberOfAnimals, numberOfLegs) {
    let numberOfChickens = 0;
    let numberOfCows = numberOfAnimals - numberOfChickens;
    while (numberOfChickens * 2 + numberOfCows * 4 > numberOfLegs) {
        numberOfChickens = numberOfChickens + 1;
        numberOfCows = numberOfCows + 1;
    }
    return numberOfChickens;
}

// Sample
console.log(calculateChickens(5, 14)); // 3 (3 chickens and 2 cows, 3*2 + 2*4 = 6 + 8 = 14)
console.log(calculateChickens(10, 28)); // 6 (6 chickens and 4 cows, 6*2 + 4*4 = 12 + 16 = 28)

// q4 withdraw until target balance
// Given a starting balance, a target balance, and withdrawal amount,
// where you are to keep withdrawing till the balance is at the lowest yet not less than the target balance
// write a function that calculates the final balance after the withdrawals.

function calculateFinalBalance(startingBalance, targetBalance, withdrawalAmount) {
    // Your code here
}

// Sample
console.log(calculateFinalBalance(100, 20, 15)); // should return 25 (100 > 85 > 70 > 55 > 40 > 25, any further withdrawal would make it less than the target balance of 20)
console.log(calculateFinalBalance(50, 10, 12)); // should return 14 (50 > 38 > 26 > 14, any further withdrawal would make it less than the target balance of 10)
console.log(calculateFinalBalance(80, 30, 20)); // should return 40 (80 > 60 > 40, any further withdrawal would make it less than the target balance of 30)

// q5 secret number guessing game
// The secret number guessing game is a game where the player has to guess a secret number between 1 and 100 with as few guesses as possible.
// After each guess, the player is told whether their guess is too low, too high, or correct.
// You being a programming student knew that one of the best way to guess the secret number is to start with 50 and then keep halving the range of possible numbers based on whether the guess is too low or too high.
// That is:
// 1. Start with a guess of 50.
// 2. If the guess is too low, then the next guess should be halfway between the 51 and 100, i.e. 75.
// 3. If the guess is too high, then the next guess should be halfway between the 49 and 1, i.e. 25.
// 4. Repeat steps 2 and 3 until the guess is correct.
// If the half way point is not an integer (e.g. (100 + 51) / 2 = 75.5), round it down to the nearest integer using Math.floor().
//
// Given the secret number, write a function that count the number of guesses it takes to find the secret number using the above strategy.

function countGuesses(secretNumber) {
    // Your code here
}

// Sample
console.log(countGuesses(1)); // should return 6 (50, 25, 12, 6, 3, 1)
console.log(countGuesses(100)); // should return 6 (50, 75, 88, 94, 97, 100)
console.log(countGuesses(50)); // should return 1 (50)

// q6 remove duplicate from sorted array
// Given a sorted array, write a function that removes the duplicate elements from the array and returns the new array.
// For practice, try solving it also with either a while-loop or fop-loop

function removeDuplicates(array) {
    // Your code here
}

// Sample
console.log(removeDuplicates([1, 1, 2, 2, 3])); // [1, 2, 3]
console.log(removeDuplicates([1, 2, 3, 4, 5])); // [1, 2, 3, 4, 5]
console.log(removeDuplicates([1, 1, 1, 1, 1])); // [1]

// q7 reverse string
// Given a string, write a function that reverses the string and returns the reversed string.
// For practice, you should reverse the string without using built-in functions like split(), reverse(), or join().

function reverseString(str) {
    // Your code here
}

// q8 selection sort (ascending)
// One of the ways to sort an array in ascending order is to repeatedly find the minimum element from the unsorted part and put it at the beginning of the sorted part.
// That is,
// 1. starting with the first element
//      1. Loop through the array and find the minimum element in the array.
//      2. Swap the minimum element with the first element of the array.
// 2. start again but now starting from the second element
//      1. Loop through the array starting from the second element and find the minimum element in the array.
//      2. Swap the minimum element with the second element of the array.
// 3. start again but now starting from the third element
//      1. Loop through the array starting from the third element and find the minimum element in the array.
//      2. Swap the minimum element with the third element of the array.
// 4. Repeat the steps until the last element is reached.
//
// Example: [4, 3, 2, 5, 1]
// 1. Find the minimum element in the array which is 1 and swap it with the first element, resulting in [1, 3, 2, 5, 4].
// 2. Find the minimum element in the array starting from the second element which is 2 and swap it with the second element, resulting in [1, 2, 3, 5, 4].
// 3. Find the minimum element in the array starting from the third element which is 3 and swap it with the third element, resulting in [1, 2, 3, 5, 4].
// 4. Find the minimum element in the array starting from the fourth element which is 4 and swap it with the fourth element, resulting in [1, 2, 3, 4, 5].
// 5. Find the minimum element in the array starting from the fifth element which is 5 and swap it with the fifth element, resulting in [1, 2, 3, 4, 5].

function selectionSort(array) {
    // Your code here
}

// Sample
console.log(selectionSort([4, 3, 2, 5, 1])); // [1, 2, 3, 4, 5]
console.log(selectionSort([10, 9, 8, 7, 6])); // [6, 7, 8, 9, 10]
console.log(selectionSort([1, 2, 3, 4, 5])); // [1, 2, 3, 4, 5]

// q9 coin change
// Given an amount of money
// write a function that calculates the minimum number of coins needed to make the amount of money.
// We will use Singapore's coin values which are [100, 50, 20, 10] (in cents)
// The steps to solve this problem are:
// 1. Start with the largest coin value and keep subtracting it from the amount until the amount is less than the coin value.
// 2. Move to the next largest coin value and repeat step 1 until the amount is 0.
// 3. Count the number of coins used in the process.
//
// For example, if the amount is 170 and the coin values are [100, 50, 20, 10], the minimum number of coins needed is 3 (one 100, one 50, and one 20).

function coinChange(amount) {
    const coins = [100, 50, 20, 10];
    // Your code here
}

// Sample
console.log(coinChange(170)); // should return 3 (one 100, one 50, and one 20)
console.log(coinChange(30)); // should return 2 (one 20 and one 10)
console.log(coinChange(80)); // should return 3 (one 50, one 20, and one 10)

// Sample
console.log(reverseString('hello')); // "olleh"
console.log(reverseString('world')); // "dlrow"

// q10 Greatest Common divisor
// The greatest common divisor (GCD) of two numbers is the largest number that divides both numbers without leaving a remainder.
// For example, the GCD of 48 and 18 is 6, because 6 is the largest number that divides both 48 and 18 without leaving a remainder.
// One way to find the GCD of two numbers is to:
// 1. Calculate the remainder of the division of the larger number by the smaller number.
// 2. If the remainder is 0, then the smaller number is the GCD.
// 3. If the remainder is not 0, then
//      3.1. replace the larger number with the smaller number and
//      3.2. replace the smaller number with the remainder, and repeat steps 1 to 3 until the remainder is 0.
//
// Given two numbers, write a function that calculates their GCD using the above strategy.

function calculateGCD(a, b) {
    // Your code here
}

// Sample
console.log(calculateGCD(48, 18)); // should return 6
console.log(calculateGCD(56, 98)); // should return 14
console.log(calculateGCD(101, 10)); // should return 1
