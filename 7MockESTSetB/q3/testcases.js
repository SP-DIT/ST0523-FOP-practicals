module.exports = {
    testcases: [
        // Public test cases (first 3)
        {
            input: [
                [
                    { name: 'Alice', scores: [90, 85, 88] },
                    { name: 'Bob', scores: [70, 75, 72] },
                    { name: 'Charlie', scores: [50, 55, 60] },
                ],
            ],
            expected: [
                { name: 'Alice', grade: 'A' },
                { name: 'Bob', grade: 'B' },
                { name: 'Charlie', grade: 'C' },
            ],
            isPublic: true,
            description: 'Three students with grades A, B, and C',
        },
        {
            input: [
                [
                    { name: 'David', scores: [40, 45, 50, 45, 40, 60] },
                    { name: 'Eve', scores: [80, 85, 90, 75, 100] },
                    { name: 'Frank', scores: [60, 65] },
                    { name: 'Grace', scores: [30, 35, 40] },
                ],
            ],
            expected: [
                { name: 'David', grade: 'D' },
                { name: 'Eve', grade: 'A' },
                { name: 'Frank', grade: 'C' },
                { name: 'Grace', grade: 'D' },
            ],
            isPublic: true,
            description: 'Four students with varying number of scores',
        },
        {
            input: [[{ name: 'Solo', scores: [100] }]],
            expected: [{ name: 'Solo', grade: 'A' }],
            isPublic: true,
            description: 'Single student with one perfect score',
        },
        // Hidden test cases
        {
            input: [[]],
            expected: [],
            isPublic: false,
            description: 'Empty array should return empty array',
        },
        {
            input: [[{ name: 'Student', scores: [85] }]],
            expected: [{ name: 'Student', grade: 'A' }],
            isPublic: false,
            description: 'Boundary: score exactly 85 should be grade A',
        },
        {
            input: [[{ name: 'Student', scores: [84] }]],
            expected: [{ name: 'Student', grade: 'B' }],
            isPublic: false,
            description: 'Boundary: score 84 should be grade B',
        },
        {
            input: [[{ name: 'Student', scores: [70] }]],
            expected: [{ name: 'Student', grade: 'B' }],
            isPublic: false,
            description: 'Boundary: score exactly 70 should be grade B',
        },
        {
            input: [[{ name: 'Student', scores: [69] }]],
            expected: [{ name: 'Student', grade: 'C' }],
            isPublic: false,
            description: 'Boundary: score 69 should be grade C',
        },
        {
            input: [[{ name: 'Student', scores: [50] }]],
            expected: [{ name: 'Student', grade: 'C' }],
            isPublic: false,
            description: 'Boundary: score exactly 50 should be grade C',
        },
        {
            input: [[{ name: 'Student', scores: [49] }]],
            expected: [{ name: 'Student', grade: 'D' }],
            isPublic: false,
            description: 'Boundary: score 49 should be grade D',
        },
        {
            input: [
                [
                    { name: 'S1', scores: [100, 100, 100] },
                    { name: 'S2', scores: [0, 0, 0] },
                ],
            ],
            expected: [
                { name: 'S1', grade: 'A' },
                { name: 'S2', grade: 'D' },
            ],
            isPublic: false,
            description: 'Extreme scores: perfect vs zero',
        },
        {
            input: [
                [
                    { name: 'S1', scores: [84, 85] },
                    { name: 'S2', scores: [69, 70] },
                    { name: 'S3', scores: [49, 50] },
                ],
            ],
            expected: [
                { name: 'S1', grade: 'B' },
                { name: 'S2', grade: 'C' },
                { name: 'S3', grade: 'D' },
            ],
            isPublic: false,
            description: 'Boundary averages: 84.5, 69.5, 49.5',
        },
        {
            input: [
                [
                    { name: 'S1', scores: [90, 92, 88, 95, 91] },
                    { name: 'S2', scores: [75, 78, 72, 80, 70] },
                    { name: 'S3', scores: [55, 60, 52, 58, 50] },
                    { name: 'S4', scores: [40, 45, 35, 48, 42] },
                ],
            ],
            expected: [
                { name: 'S1', grade: 'A' },
                { name: 'S2', grade: 'B' },
                { name: 'S3', grade: 'C' },
                { name: 'S4', grade: 'D' },
            ],
            isPublic: false,
            description: 'Five scores each, all different grades',
        },
        {
            input: [
                [
                    { name: 'S1', scores: [95, 96, 97, 98, 99, 100] },
                    { name: 'S2', scores: [80, 81, 82, 83, 84, 85] },
                ],
            ],
            expected: [
                { name: 'S1', grade: 'A' },
                { name: 'S2', grade: 'B' },
            ],
            isPublic: false,
            description: 'Six scores each',
        },
        {
            input: [
                [
                    { name: 'S1', scores: [88, 89, 90, 91, 92, 93, 94] },
                    { name: 'S2', scores: [73, 74, 75, 76, 77, 78, 79] },
                ],
            ],
            expected: [
                { name: 'S1', grade: 'A' },
                { name: 'S2', grade: 'B' },
            ],
            isPublic: false,
            description: 'Seven scores each',
        },
        {
            input: [
                [
                    { name: 'S1', scores: [85, 86, 87, 88, 89, 90, 91, 92] },
                    { name: 'S2', scores: [60, 61, 62, 63, 64, 65, 66, 67] },
                ],
            ],
            expected: [
                { name: 'S1', grade: 'A' },
                { name: 'S2', grade: 'C' },
            ],
            isPublic: false,
            description: 'Eight scores each',
        },
        {
            input: [
                [
                    { name: 'S1', scores: [90, 91, 92, 93, 94, 95, 96, 97, 98] },
                    { name: 'S2', scores: [45, 46, 47, 48, 49, 50, 51, 52, 53] },
                ],
            ],
            expected: [
                { name: 'S1', grade: 'A' },
                { name: 'S2', grade: 'D' },
            ],
            isPublic: false,
            description: 'Nine scores each',
        },
        {
            input: [
                [
                    { name: 'S1', scores: [85, 86, 87, 88, 89, 90, 91, 92, 93, 94] },
                    { name: 'S2', scores: [70, 71, 72, 73, 74, 75, 76, 77, 78, 79] },
                    { name: 'S3', scores: [50, 51, 52, 53, 54, 55, 56, 57, 58, 59] },
                    { name: 'S4', scores: [30, 31, 32, 33, 34, 35, 36, 37, 38, 39] },
                ],
            ],
            expected: [
                { name: 'S1', grade: 'A' },
                { name: 'S2', grade: 'B' },
                { name: 'S3', grade: 'C' },
                { name: 'S4', grade: 'D' },
            ],
            isPublic: false,
            description: 'Ten scores each, covers all grade categories',
        },
        {
            input: [
                [
                    { name: 'S1', scores: [100, 0] },
                    { name: 'S2', scores: [90, 60] },
                    { name: 'S3', scores: [80, 50] },
                ],
            ],
            expected: [
                { name: 'S1', grade: 'C' },
                { name: 'S2', grade: 'B' },
                { name: 'S3', grade: 'C' },
            ],
            isPublic: false,
            description: 'Wide range within each student',
        },
        {
            input: [
                [
                    { name: 'A+', scores: [95, 96, 97] },
                    { name: 'B+', scores: [80, 81, 82] },
                    { name: 'C+', scores: [65, 66, 67] },
                    { name: 'D+', scores: [45, 46, 47] },
                ],
            ],
            expected: [
                { name: 'A+', grade: 'A' },
                { name: 'B+', grade: 'B' },
                { name: 'C+', grade: 'C' },
                { name: 'D+', grade: 'D' },
            ],
            isPublic: false,
            description: 'All four grade categories represented',
        },
    ],
    options: {
        type: 'JSON',
    },
};
