module.exports = {
    testcases: [
    {
        input: [[1, 2, 3, 4, 5]],
        expected: 'Ascending',
        isPublic: true,
        description: 'Simple ascending array'
    },
    {
        input: [[5, 4, 3, 2, 1]],
        expected: 'Descending',
        isPublic: true,
        description: 'Simple descending array'
    },
    {
        input: [[3, 3, 3, 3]],
        expected: 'Constant',
        isPublic: true,
        description: 'Array with all equal elements'
    },
    {
        input: [[1, 1, 2, 2, 3]],
        expected: 'Non-descending',
        isPublic: false,
        description: 'Non-descending with equal consecutive elements'
    },
    {
        input: [[5, 5, 4, 4, 3]],
        expected: 'Non-ascending',
        isPublic: false,
        description: 'Non-ascending with equal consecutive elements'
    },
    {
        input: [[1, 3, 2, 4]],
        expected: 'Unsorted',
        isPublic: false,
        description: 'Mixed pattern - unsorted'
    },
    {
        input: [[10, 20, 30, 40, 50]],
        expected: 'Ascending',
        isPublic: false,
        description: 'Ascending with larger numbers'
    },
    {
        input: [[100, 80, 60, 40, 20]],
        expected: 'Descending',
        isPublic: false,
        description: 'Descending with larger numbers'
    },
    {
        input: [[1, 2, 3, 3, 4]],
        expected: 'Non-descending',
        isPublic: false,
        description: 'Non-descending with equal elements in middle'
    },
    {
        input: [[4, 3, 3, 2, 1]],
        expected: 'Non-ascending',
        isPublic: false,
        description: 'Non-ascending with equal elements in middle'
    },
    {
        input: [[42]],
        expected: 'Constant',
        isPublic: false,
        description: 'Single element array'
    },
    {
        input: [[1, 2]],
        expected: 'Ascending',
        isPublic: false,
        description: 'Two element ascending array'
    },
    {
        input: [[2, 1]],
        expected: 'Descending',
        isPublic: false,
        description: 'Two element descending array'
    },
    {
        input: [[5, 5]],
        expected: 'Constant',
        isPublic: false,
        description: 'Two equal elements'
    },
    {
        input: [[-5, -3, -1, 1, 3]],
        expected: 'Ascending',
        isPublic: false,
        description: 'Ascending with negative numbers'
    },
    {
        input: [[3, 1, -1, -3, -5]],
        expected: 'Descending',
        isPublic: false,
        description: 'Descending with negative numbers'
    },
    {
        input: [[1, 3, 2, 5, 4]],
        expected: 'Unsorted',
        isPublic: false,
        description: 'Alternating pattern - unsorted'
    },
    {
        input: [[0, 0, 0, 0, 0]],
        expected: 'Constant',
        isPublic: false,
        description: 'All zeros'
    },
    {
        input: [[1, 1, 1, 2, 2, 2]],
        expected: 'Non-descending',
        isPublic: false,
        description: 'Non-descending with multiple equal groups'
    },
    {
        input: [[3, 2, 2, 1, 1, 1]],
        expected: 'Non-ascending',
        isPublic: false,
        description: 'Non-ascending with multiple equal groups'
    }
    ],
    options: {
        type: 'JSON',
    },
};