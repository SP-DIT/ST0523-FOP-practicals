function createCustomer(name, age) {
    let category = '';

    if (age <= 12) {
        category = 'Child';
    } else if (age <= 19) {
        category = 'Teenager';
    } else if (age <= 64) {
        category = 'Adult';
    } else {
        category = 'Senior';
    }

    return {
        name: name,
        age: age,
        category: category,
    };
}

module.exports = createCustomer;

// examples

console.log(createCustomer('Alice', 10)); // { name: 'Alice', age: 10, category: 'Child' }
console.log(createCustomer('Bob', 16)); // { name: 'Bob', age: 16, category: 'Teenager' }
console.log(createCustomer('Charlie', 30)); // { name: 'Charlie', age: 30, category: 'Adult' }
console.log(createCustomer('David', 70)); // { name: 'David', age: 70, category: 'Senior' }
