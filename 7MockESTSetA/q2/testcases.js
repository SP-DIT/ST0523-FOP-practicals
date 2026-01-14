module.exports = {
    testcases: [
        // Public test cases (first 3)
        {
            input: [
                [
                    { name: 'John', age: 25, gender: 'male', contribution: 5 },
                    { name: 'Jane', age: 22, gender: 'female', contribution: 8 },
                    { name: 'Mike', age: 28, gender: 'male', contribution: 10 },
                    { name: 'Emily', age: 32, gender: 'female', contribution: 7 },
                    { name: 'Tom', age: 32, gender: 'male', contribution: 7 },
                ],
            ],
            expected: 15,
            isPublic: true,
            description: 'John (25, male, 5) + Mike (28, male, 10) = 15',
        },
        {
            input: [
                [
                    { name: 'Alice', age: 27, gender: 'female', contribution: 6 },
                    { name: 'Bob', age: 24, gender: 'male', contribution: 9 },
                    { name: 'Charlie', age: 29, gender: 'male', contribution: 4 },
                    { name: 'Diana', age: 31, gender: 'female', contribution: 10 },
                    { name: 'Elliot', age: 12, gender: 'male', contribution: 10 },
                ],
            ],
            expected: 23,
            isPublic: true,
            description: 'Bob (24, male, 9) + Charlie (29, male, 4) + Elliot (12, male, 10) = 23',
        },
        {
            input: [
                [
                    { name: 'Sam', age: 18, gender: 'male', contribution: 12 },
                    { name: 'Lisa', age: 19, gender: 'female', contribution: 15 },
                    { name: 'Mark', age: 29, gender: 'male', contribution: 8 },
                ],
            ],
            expected: 20,
            isPublic: true,
            description: 'Sam (18, male, 12) + Mark (29, male, 8) = 20',
        },
        // Hidden test cases
        {
            input: [[]],
            expected: 0,
            isPublic: false,
            description: 'Empty array should return 0',
        },
        {
            input: [
                [
                    { name: 'Alice', age: 30, gender: 'female', contribution: 10 },
                    { name: 'Bob', age: 31, gender: 'male', contribution: 15 },
                ],
            ],
            expected: 0,
            isPublic: false,
            description: 'No young males (all age >= 30)',
        },
        {
            input: [
                [
                    { name: 'Anna', age: 25, gender: 'female', contribution: 10 },
                    { name: 'Beth', age: 28, gender: 'female', contribution: 12 },
                    { name: 'Carol', age: 20, gender: 'female', contribution: 8 },
                ],
            ],
            expected: 0,
            isPublic: false,
            description: 'No males (all female)',
        },
        {
            input: [
                [
                    { name: 'David', age: 30, gender: 'male', contribution: 20 },
                    { name: 'Eric', age: 35, gender: 'male', contribution: 25 },
                ],
            ],
            expected: 0,
            isPublic: false,
            description: 'Males but all age >= 30',
        },
        {
            input: [[{ name: 'Frank', age: 29, gender: 'male', contribution: 5 }]],
            expected: 5,
            isPublic: false,
            description: 'Single young male volunteer',
        },
        {
            input: [
                [
                    { name: 'George', age: 18, gender: 'male', contribution: 0 },
                    { name: 'Henry', age: 25, gender: 'male', contribution: 0 },
                ],
            ],
            expected: 0,
            isPublic: false,
            description: 'Young males with zero contribution',
        },
        {
            input: [
                [
                    { name: 'Ian', age: 0, gender: 'male', contribution: 10 },
                    { name: 'Jack', age: 1, gender: 'male', contribution: 5 },
                ],
            ],
            expected: 15,
            isPublic: false,
            description: 'Very young males (age 0 and 1)',
        },
        {
            input: [
                [
                    { name: 'Kevin', age: 29, gender: 'male', contribution: 100 },
                    { name: 'Leo', age: 29, gender: 'male', contribution: 200 },
                ],
            ],
            expected: 300,
            isPublic: false,
            description: 'High contribution values',
        },
        {
            input: [
                [
                    { name: 'Max', age: 29, gender: 'male', contribution: 1 },
                    { name: 'Nina', age: 29, gender: 'female', contribution: 1 },
                    { name: 'Oscar', age: 30, gender: 'male', contribution: 1 },
                ],
            ],
            expected: 1,
            isPublic: false,
            description: 'Boundary age test (29 included, 30 excluded)',
        },
        {
            input: [
                [
                    { name: 'Paul', age: 20, gender: 'male', contribution: 5 },
                    { name: 'Quinn', age: 21, gender: 'male', contribution: 6 },
                    { name: 'Rita', age: 22, gender: 'female', contribution: 7 },
                    { name: 'Steve', age: 23, gender: 'male', contribution: 8 },
                    { name: 'Tina', age: 24, gender: 'female', contribution: 9 },
                ],
            ],
            expected: 19,
            isPublic: false,
            description: 'Mixed genders: Paul (5) + Quinn (6) + Steve (8) = 19',
        },
        {
            input: [
                [
                    { name: 'Uma', age: 15, gender: 'male', contribution: 2 },
                    { name: 'Vera', age: 16, gender: 'female', contribution: 3 },
                    { name: 'Will', age: 17, gender: 'male', contribution: 4 },
                    { name: 'Xena', age: 18, gender: 'female', contribution: 5 },
                    { name: 'Yuri', age: 19, gender: 'male', contribution: 6 },
                ],
            ],
            expected: 12,
            isPublic: false,
            description: 'Teenagers: Uma (2) + Will (4) + Yuri (6) = 12',
        },
        {
            input: [
                [
                    { name: 'Zack', age: 25, gender: 'male', contribution: 50 },
                    { name: 'Amy', age: 26, gender: 'female', contribution: 60 },
                    { name: 'Ben', age: 27, gender: 'male', contribution: 70 },
                    { name: 'Cathy', age: 28, gender: 'female', contribution: 80 },
                    { name: 'Dan', age: 29, gender: 'male', contribution: 90 },
                ],
            ],
            expected: 210,
            isPublic: false,
            description: 'Mid-twenties: Zack (50) + Ben (70) + Dan (90) = 210',
        },
        {
            input: [
                [
                    { name: 'Alice', age: 29, gender: 'male', contribution: 11 },
                    { name: 'Bob', age: 29, gender: 'male', contribution: 12 },
                    { name: 'Charlie', age: 29, gender: 'male', contribution: 13 },
                    { name: 'David', age: 29, gender: 'male', contribution: 14 },
                ],
            ],
            expected: 50,
            isPublic: false,
            description: 'All same age (29): 11 + 12 + 13 + 14 = 50',
        },
        {
            input: [
                [
                    { name: 'Emma', age: 10, gender: 'male', contribution: 3 },
                    { name: 'Frank', age: 20, gender: 'male', contribution: 5 },
                    { name: 'Grace', age: 25, gender: 'female', contribution: 7 },
                    { name: 'Henry', age: 29, gender: 'male', contribution: 9 },
                    { name: 'Ivy', age: 30, gender: 'male', contribution: 11 },
                    { name: 'Jack', age: 35, gender: 'male', contribution: 13 },
                ],
            ],
            expected: 17,
            isPublic: false,
            description: 'Mixed ages: Emma (3) + Frank (5) + Henry (9) = 17',
        },
        {
            input: [
                [
                    { name: 'Kate', age: 5, gender: 'male', contribution: 1 },
                    { name: 'Liam', age: 10, gender: 'male', contribution: 2 },
                    { name: 'Mia', age: 15, gender: 'male', contribution: 3 },
                    { name: 'Noah', age: 20, gender: 'male', contribution: 4 },
                    { name: 'Olivia', age: 25, gender: 'male', contribution: 5 },
                ],
            ],
            expected: 15,
            isPublic: false,
            description: 'All young males: 1 + 2 + 3 + 4 + 5 = 15',
        },
        {
            input: [
                [
                    { name: 'Peter', age: 29, gender: 'male', contribution: 7 },
                    { name: 'Quinn', age: 30, gender: 'male', contribution: 8 },
                    { name: 'Rachel', age: 29, gender: 'female', contribution: 9 },
                ],
            ],
            expected: 7,
            isPublic: false,
            description: 'Only Peter (29, male) qualifies = 7',
        },
        {
            input: [
                [
                    { name: 'Sam', age: 22, gender: 'male', contribution: 15 },
                    { name: 'Tom', age: 23, gender: 'male', contribution: 20 },
                    { name: 'Uma', age: 24, gender: 'male', contribution: 25 },
                    { name: 'Vic', age: 25, gender: 'male', contribution: 30 },
                    { name: 'Wes', age: 26, gender: 'male', contribution: 35 },
                ],
            ],
            expected: 125,
            isPublic: false,
            description: 'All young males with increasing contributions: 15 + 20 + 25 + 30 + 35 = 125',
        },
    ],
};
