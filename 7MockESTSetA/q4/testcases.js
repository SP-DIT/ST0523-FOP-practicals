module.exports = {
    testcases: [
        // Public test cases (first 3)
        {
            input: [[85, 92, 78, 90, 88]],
            expected: { highest: 92, lowest: 78, average: 86.6 },
            isPublic: true,
            description: 'Scores [85, 92, 78, 90, 88]: highest 92, lowest 78, average 86.6',
        },
        {
            input: [[70, 75, 80, 85, 90, 95]],
            expected: { highest: 95, lowest: 70, average: 82.5 },
            isPublic: true,
            description: 'Scores [70, 75, 80, 85, 90, 95]: highest 95, lowest 70, average 82.5',
        },
        {
            input: [[100, 98, 95, 97, 96]],
            expected: { highest: 100, lowest: 95, average: 97.2 },
            isPublic: true,
            description: 'Scores [100, 98, 95, 97, 96]: highest 100, lowest 95, average 97.2',
        },
        // Hidden test cases
        {
            input: [[50]],
            expected: { highest: 50, lowest: 50, average: 50 },
            isPublic: false,
            description: 'Single score: highest, lowest, and average all equal',
        },
        {
            input: [[100, 100, 100]],
            expected: { highest: 100, lowest: 100, average: 100 },
            isPublic: false,
            description: 'All same scores: highest, lowest, and average all 100',
        },
        {
            input: [[0, 100]],
            expected: { highest: 100, lowest: 0, average: 50 },
            isPublic: false,
            description: 'Two extreme scores: 0 and 100',
        },
        {
            input: [[10, 20, 30, 40, 50]],
            expected: { highest: 50, lowest: 10, average: 30 },
            isPublic: false,
            description: 'Linear sequence: average is middle value',
        },
        {
            input: [[50, 40, 30, 20, 10]],
            expected: { highest: 50, lowest: 10, average: 30 },
            isPublic: false,
            description: 'Reverse linear sequence: same stats as forward',
        },
        {
            input: [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]],
            expected: { highest: 10, lowest: 1, average: 5.5 },
            isPublic: false,
            description: 'Consecutive numbers 1-10: average 5.5',
        },
        {
            input: [[0, 0, 0, 100]],
            expected: { highest: 100, lowest: 0, average: 25 },
            isPublic: false,
            description: 'Three zeros and one 100: average 25',
        },
        {
            input: [[55, 55, 55, 55, 55]],
            expected: { highest: 55, lowest: 55, average: 55 },
            isPublic: false,
            description: 'All identical scores: 55',
        },
        {
            input: [[90, 85, 95, 80, 100, 75]],
            expected: { highest: 100, lowest: 75, average: 87.5 },
            isPublic: false,
            description: 'Mixed high scores: highest 100, lowest 75',
        },
        {
            input: [[25, 30, 35, 40, 45, 50, 55, 60, 65, 70]],
            expected: { highest: 70, lowest: 25, average: 47.5 },
            isPublic: false,
            description: 'Ten scores in increments of 5',
        },
        {
            input: [[1, 1, 1, 1, 100]],
            expected: { highest: 100, lowest: 1, average: 20.8 },
            isPublic: false,
            description: 'Four 1s and one 100: average 20.8',
        },
        {
            input: [[88, 88, 88, 88]],
            expected: { highest: 88, lowest: 88, average: 88 },
            isPublic: false,
            description: 'All scores are 88',
        },
        {
            input: [[99, 98, 97, 96, 95, 94, 93, 92, 91, 90]],
            expected: { highest: 99, lowest: 90, average: 94.5 },
            isPublic: false,
            description: 'Descending scores from 99 to 90',
        },
        {
            input: [[60, 70, 80, 90, 100]],
            expected: { highest: 100, lowest: 60, average: 80 },
            isPublic: false,
            description: 'Scores in increments of 10: average 80',
        },
        {
            input: [[33, 67, 50, 84, 16]],
            expected: { highest: 84, lowest: 16, average: 50 },
            isPublic: false,
            description: 'Random order scores: average 50',
        },
        {
            input: [[0, 25, 50, 75, 100]],
            expected: { highest: 100, lowest: 0, average: 50 },
            isPublic: false,
            description: 'Evenly spaced from 0 to 100',
        },
        {
            input: [[77, 88, 99, 66, 55]],
            expected: { highest: 99, lowest: 55, average: 77 },
            isPublic: false,
            description: 'Varied scores: average 77',
        },
    ],
    options: {
        type: 'JSON',
    },
};
