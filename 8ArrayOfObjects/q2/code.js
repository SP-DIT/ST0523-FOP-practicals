function objectsToTable(objects) {
    // Your code here
}

module.exports = objectsToTable;

// examples

console.log(
    objectsToTable([
        { name: 'Alice', age: 20, grade: 'A' },
        { name: 'Bob', age: 22, grade: 'B' },
    ]),
); // "<table><tr><th>name</th><th>age</th><th>grade</th></tr><tr><td>Alice</td><td>20</td><td>A</td></tr><tr><td>Bob</td><td>22</td><td>B</td></tr></table>"
console.log(
    objectsToTable([
        { name: 'Charlie', age: 19, grade: 'A' },
        { name: 'David', age: 21, grade: 'C' },
    ]),
); // "<table><tr><th>name</th><th>age</th><th>grade</th></tr><tr><td>Charlie</td><td>19</td><td>A</td></tr><tr><td>David</td><td>21</td><td>C</td></tr></table>"
