module.exports = {
    testcases: [
        // Basic test cases
        {
            input: ['John', 1994, 2025],
            expected: 'John (31)',
            isPublic: true,
        },
        {
            input: ['Alice', 2000, 2025],
            expected: 'Alice (25)',
            isPublic: true,
        },
        {
            input: ['Bob', 1990, 2025],
            expected: 'Bob (35)',
            isPublic: true,
        },

        // Edge cases - very young people
        {
            input: ['Emma', 2020, 2025],
            expected: 'Emma (5)',
        },
        {
            input: ['Baby', 2024, 2025],
            expected: 'Baby (1)',
        },
        {
            input: ['Newborn', 2025, 2025],
            expected: 'Newborn (0)',
        },

        // Edge cases - older people
        {
            input: ['Senior', 1950, 2025],
            expected: 'Senior (75)',
        },
        {
            input: ['Elder', 1940, 2025],
            expected: 'Elder (85)',
        },
        {
            input: ['Grandpa', 1930, 2025],
            expected: 'Grandpa (95)',
        },

        // Different name formats
        {
            input: ['Elizabeth', 1995, 2025],
            expected: 'Elizabeth (30)',
        },
        {
            input: ['Michael', 1985, 2025],
            expected: 'Michael (40)',
        },
        {
            input: ['Jennifer', 1988, 2025],
            expected: 'Jennifer (37)',
        },

        // Single character names
        {
            input: ['A', 2000, 2025],
            expected: 'A (25)',
        },
        {
            input: ['X', 1999, 2025],
            expected: 'X (26)',
        },

        // Long names
        {
            input: ['Christopher', 1992, 2025],
            expected: 'Christopher (33)',
        },
        {
            input: ['Alexandria', 1987, 2025],
            expected: 'Alexandria (38)',
        },

        // Different current years
        {
            input: ['Tom', 1980, 2020],
            expected: 'Tom (40)',
        },
        {
            input: ['Sarah', 1975, 2030],
            expected: 'Sarah (55)',
        },
        {
            input: ['Mike', 2010, 2024],
            expected: 'Mike (14)',
        },

        // Boundary year cases
        {
            input: ['Future', 1900, 2000],
            expected: 'Future (100)',
        },
    ],
    options: {
        type: 'JSON',
    },
};
