function makeMessage(name, yearOfBirth, currentYear) {
    // Calculate the age by subtracting birth year from current year
    const age = currentYear - yearOfBirth;
    // Return the formatted message using string concatenation
    return name + ' (' + age + ')';
}

function make3Messages(name1, yearOfBirth1, name2, yearOfBirth2, name3, yearOfBirth3, currentYear) {
    // Use the makeMessage function for each person
    const message1 = makeMessage(name1, yearOfBirth1, currentYear);
    const message2 = makeMessage(name2, yearOfBirth2, currentYear);
    const message3 = makeMessage(name3, yearOfBirth3, currentYear);
    
    // Combine all three messages with commas and spaces using string concatenation
    return message1 + ', ' + message2 + ', ' + message3;
}module.exports = make3Messages;

// examples - these should work when the solution is implemented

console.log(make3Messages('John', 1994, 'Mary', 1999, 'Tom', 1986, 2025)); // "John (31), Mary (26), Tom (39)"
console.log(make3Messages('Alice', 1990, 'Bob', 1985, 'Charlie', 2000, 2025)); // "Alice (35), Bob (40), Charlie (25)"
console.log(make3Messages('Baby', 2024, 'Toddler', 2022, 'Child', 2020, 2025)); // "Baby (1), Toddler (3), Child (5)"
