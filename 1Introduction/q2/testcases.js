module.exports = {
    testcases: [
        // Basic functionality tests
        {
            input: ['John', 1994, 'Mary', 1999, 'Tom', 1986, 2025],
            expected: 'John (31), Mary (26), Tom (39)',
            isPublic: true,
        },
        {
            input: ['Alice', 1990, 'Bob', 1985, 'Charlie', 2000, 2025],
            expected: 'Alice (35), Bob (40), Charlie (25)',
            isPublic: true,
        },
        {
            input: ['Emma', 1995, 'Liam', 1992, 'Sophia', 1998, 2025],
            expected: 'Emma (30), Liam (33), Sophia (27)',
            isPublic: true,
        },

        // Edge cases - young people
        {
            input: ['Baby', 2024, 'Toddler', 2022, 'Child', 2020, 2025],
            expected: 'Baby (1), Toddler (3), Child (5)',
        },
        {
            input: ['Teen1', 2010, 'Teen2', 2008, 'Teen3', 2007, 2025],
            expected: 'Teen1 (15), Teen2 (17), Teen3 (18)',
        },

        // Edge cases - older people
        {
            input: ['Senior1', 1945, 'Senior2', 1950, 'Senior3', 1940, 2025],
            expected: 'Senior1 (80), Senior2 (75), Senior3 (85)',
        },
        {
            input: ['Elder', 1930, 'Veteran', 1935, 'Grandpa', 1925, 2025],
            expected: 'Elder (95), Veteran (90), Grandpa (100)',
        },

        // Different current years
        {
            input: ['Alex', 2000, 'Sam', 1995, 'Jordan', 1990, 2020],
            expected: 'Alex (20), Sam (25), Jordan (30)',
        },
        {
            input: ['Chris', 1988, 'Taylor', 1992, 'Morgan', 1985, 2030],
            expected: 'Chris (42), Taylor (38), Morgan (45)',
        },

        // Same ages
        {
            input: ['Twin1', 1995, 'Twin2', 1995, 'Twin3', 1995, 2025],
            expected: 'Twin1 (30), Twin2 (30), Twin3 (30)',
        },

        // Single character names
        {
            input: ['A', 1990, 'B', 1991, 'C', 1992, 2025],
            expected: 'A (35), B (34), C (33)',
        },

        // Longer names
        {
            input: ['Alexander', 1980, 'Elizabeth', 1975, 'Christopher', 1985, 2025],
            expected: 'Alexander (45), Elizabeth (50), Christopher (40)',
        },

        // Names with special characters/spaces
        {
            input: ['Mary-Jane', 1990, 'Jean-Luc', 1985, 'Anne-Marie', 1995, 2025],
            expected: 'Mary-Jane (35), Jean-Luc (40), Anne-Marie (30)',
        },

        // Birth year same as current year
        {
            input: ['Newborn1', 2025, 'Newborn2', 2025, 'Newborn3', 2025, 2025],
            expected: 'Newborn1 (0), Newborn2 (0), Newborn3 (0)',
        },

        // Different case names
        {
            input: ['john', 1990, 'MARY', 1985, 'ToM', 1995, 2025],
            expected: 'john (35), MARY (40), ToM (30)',
        },

        // Large age differences
        {
            input: ['Young', 2010, 'Middle', 1980, 'Old', 1950, 2025],
            expected: 'Young (15), Middle (45), Old (75)',
        },

        // Sequential birth years
        {
            input: ['First', 2000, 'Second', 2001, 'Third', 2002, 2025],
            expected: 'First (25), Second (24), Third (23)',
        },

        // Random order ages
        {
            input: ['Person1', 1960, 'Person2', 2000, 'Person3', 1980, 2025],
            expected: 'Person1 (65), Person2 (25), Person3 (45)',
        },

        // Edge case: Far future
        {
            input: ['Future1', 1990, 'Future2', 1995, 'Future3', 2000, 2100],
            expected: 'Future1 (110), Future2 (105), Future3 (100)',
        },

        // Numbers in names
        {
            input: ['Agent007', 1980, 'Player1', 1990, 'User123', 1985, 2025],
            expected: 'Agent007 (45), Player1 (35), User123 (40)',
        },
    ],
    options: {
        type: 'JSON',
    },
};
