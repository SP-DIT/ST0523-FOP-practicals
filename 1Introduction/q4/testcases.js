module.exports = {
    testcases: [
        // Public test cases (first 3)
        {
            input: [4, 3, 2, 1],
            expected: 40,
            isPublic: true,
            description: 'Basic example from README: (4²-3²)² - (2²-1²)² = 7² - 3² = 49 - 9 = 40',
        },
        {
            input: [3, 2, 2, 1],
            expected: 16,
            isPublic: true,
            description: 'Simple calculation: (3²-2²)² - (2²-1²)² = 5² - 3² = 25 - 9 = 16',
        },
        {
            input: [5, 1, 3, 0],
            expected: 495,
            isPublic: true,
            description: 'Larger numbers: (5²-1²)² - (3²-0²)² = 24² - 9² = 576 - 81 = 495',
        },

        // Private test cases
        {
            input: [0, 0, 0, 0],
            expected: 0,
            isPublic: false,
            description: 'All zeros: (0²-0²)² - (0²-0²)² = 0² - 0² = 0',
        },
        {
            input: [1, 0, 1, 0],
            expected: 0,
            isPublic: false,
            description: 'Equal expressions: (1²-0²)² - (1²-0²)² = 1² - 1² = 0',
        },
        {
            input: [2, 2, 1, 1],
            expected: 0,
            isPublic: false,
            description: 'Both expressions zero: (2²-2²)² - (1²-1²)² = 0² - 0² = 0',
        },
        {
            input: [1, 0, 0, 0],
            expected: 1,
            isPublic: false,
            description: 'First non-zero, second zero: (1²-0²)² - (0²-0²)² = 1² - 0² = 1',
        },
        {
            input: [0, 0, 1, 0],
            expected: -1,
            isPublic: false,
            description: 'First zero, second non-zero: (0²-0²)² - (1²-0²)² = 0² - 1² = -1',
        },
        {
            input: [2, 1, 1, 0],
            expected: 8,
            isPublic: false,
            description: 'Mixed small numbers: (2²-1²)² - (1²-0²)² = 3² - 1² = 9 - 1 = 8',
        },
        {
            input: [3, 0, 2, 0],
            expected: 65,
            isPublic: false,
            description: 'Second parameters zero: (3²-0²)² - (2²-0²)² = 9² - 4² = 81 - 16 = 65',
        },
        {
            input: [0, 1, 0, 2],
            expected: -15,
            isPublic: false,
            description: 'First parameters zero: (0²-1²)² - (0²-2²)² = 1² - 4² = 1 - 16 = -15',
        },
        {
            input: [5, 4, 3, 2],
            expected: 56,
            isPublic: false,
            description: 'Consecutive-like numbers: (5²-4²)² - (3²-2²)² = 9² - 5² = 81 - 25 = 56',
        },
        {
            input: [6, 2, 4, 1],
            expected: 799,
            isPublic: false,
            description: 'Larger differences: (6²-2²)² - (4²-1²)² = 32² - 15² = 1024 - 225 = 799',
        },
        {
            input: [1, 3, 2, 4],
            expected: -80,
            isPublic: false,
            description: 'Negative intermediate results: (1²-3²)² - (2²-4²)² = (-8)² - (-12)² = 64 - 144 = -80',
        },
        {
            input: [7, 0, 5, 0],
            expected: 1776,
            isPublic: false,
            description: 'Large numbers, zeros: (7²-0²)² - (5²-0²)² = 49² - 25² = 2401 - 625 = 1776',
        },
        {
            input: [2, 3, 1, 4],
            expected: -200,
            isPublic: false,
            description: 'All negative intermediates: (2²-3²)² - (1²-4²)² = (-5)² - (-15)² = 25 - 225 = -200',
        },
        {
            input: [8, 6, 5, 3],
            expected: 528,
            isPublic: false,
            description: 'Medium large numbers: (8²-6²)² - (5²-3²)² = 28² - 16² = 784 - 256 = 528',
        },
        {
            input: [1, 1, 2, 2],
            expected: 0,
            isPublic: false,
            description: 'Both pairs equal: (1²-1²)² - (2²-2²)² = 0² - 0² = 0',
        },
        {
            input: [10, 8, 6, 4],
            expected: 896,
            isPublic: false,
            description: 'Large even numbers: (10²-8²)² - (6²-4²)² = 36² - 20² = 1296 - 400 = 896',
        },
        {
            input: [3, 5, 1, 7],
            expected: -2048,
            isPublic: false,
            description: 'Second > first in pairs: (3²-5²)² - (1²-7²)² = 16² - 48² = 256 - 2304 = -2048',
        },
    ],
    options: {
        type: 'JSON',
    },
};
