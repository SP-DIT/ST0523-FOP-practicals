module.exports = {
    testcases: [
        // Public test cases (first 3)
        {
            input: ['John', 1994, 2025],
            expected: 'John (31)',
            isPublic: true,
            description: 'Basic example from README: John born 1994, age 31 in 2025'
        },
        {
            input: ['Alice', 2000, 2025],
            expected: 'Alice (25)',
            isPublic: true,
            description: 'Simple calculation: Alice born 2000, age 25 in 2025'
        },
        {
            input: ['Bob', 1990, 2025],
            expected: 'Bob (35)',
            isPublic: true,
            description: 'Another basic case: Bob born 1990, age 35 in 2025'
        },

        // Private test cases - Edge cases for young people
        {
            input: ['Emma', 2020, 2025],
            expected: 'Emma (5)',
            isPublic: false,
            description: 'Young child: 5 years old'
        },
        {
            input: ['Baby', 2024, 2025],
            expected: 'Baby (1)',
            isPublic: false,
            description: 'Very young: 1 year old baby'
        },
        {
            input: ['Newborn', 2025, 2025],
            expected: 'Newborn (0)',
            isPublic: false,
            description: 'Newborn: 0 years old (born in current year)'
        },

        // Private test cases - Older people
        {
            input: ['Senior', 1950, 2025],
            expected: 'Senior (75)',
            isPublic: false,
            description: 'Senior citizen: 75 years old'
        },
        {
            input: ['Elder', 1940, 2025],
            expected: 'Elder (85)',
            isPublic: false,
            description: 'Elderly person: 85 years old'
        },
        {
            input: ['Grandpa', 1930, 2025],
            expected: 'Grandpa (95)',
            isPublic: false,
            description: 'Very elderly: 95 years old'
        },

        // Private test cases - Different name formats
        {
            input: ['Elizabeth', 1995, 2025],
            expected: 'Elizabeth (30)',
            isPublic: false,
            description: 'Longer name: Elizabeth'
        },
        {
            input: ['Michael', 1985, 2025],
            expected: 'Michael (40)',
            isPublic: false,
            description: 'Common name: Michael'
        },
        {
            input: ['Jennifer', 1988, 2025],
            expected: 'Jennifer (37)',
            isPublic: false,
            description: 'Traditional name: Jennifer'
        },

        // Private test cases - Special name formats
        {
            input: ['A', 2000, 2025],
            expected: 'A (25)',
            isPublic: false,
            description: 'Single character name: A'
        },
        {
            input: ['X', 1999, 2025],
            expected: 'X (26)',
            isPublic: false,
            description: 'Single character name: X'
        },

        // Private test cases - Long names
        {
            input: ['Christopher', 1992, 2025],
            expected: 'Christopher (33)',
            isPublic: false,
            description: 'Very long name: Christopher'
        },
        {
            input: ['Alexandria', 1987, 2025],
            expected: 'Alexandria (38)',
            isPublic: false,
            description: 'Long female name: Alexandria'
        },

        // Private test cases - Different current years
        {
            input: ['Tom', 1980, 2020],
            expected: 'Tom (40)',
            isPublic: false,
            description: 'Different current year: 2020'
        },
        {
            input: ['Sarah', 1975, 2030],
            expected: 'Sarah (55)',
            isPublic: false,
            description: 'Future current year: 2030'
        },
        {
            input: ['Mike', 2010, 2024],
            expected: 'Mike (14)',
            isPublic: false,
            description: 'Teenager in 2024'
        },

        // Private test cases - Boundary cases
        {
            input: ['Future', 1900, 2000],
            expected: 'Future (100)',
            isPublic: false,
            description: 'Century age: 100 years old'
        },
    ],
    options: {
        type: 'JSON',
    },
};
