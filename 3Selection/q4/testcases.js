module.exports = {
    testcases: [
        // Public test cases (first 3)
        {
            input: ['Student', 'Bus'],
            expected: 0.5,
            isPublic: true,
            description: 'Student taking Bus should pay 0.5',
        },
        {
            input: ['Senior', 'Bus'],
            expected: 0.3,
            isPublic: true,
            description: 'Senior taking Bus should pay 0.3',
        },
        {
            input: ['Adult', 'Train'],
            expected: 3,
            isPublic: true,
            description: 'Adult taking Train should pay 3',
        },
        // Hidden test cases
        {
            input: ['Student', 'Train'],
            expected: 0.75,
            isPublic: false,
            description: 'Student taking Train should pay 0.75',
        },
        {
            input: ['Senior', 'Train'],
            expected: 0.5,
            isPublic: false,
            description: 'Senior taking Train should pay 0.5',
        },
        {
            input: ['Adult', 'Bus'],
            expected: 1.5,
            isPublic: false,
            description: 'Adult taking Bus should pay 1.5',
        },
        {
            input: ['Student', 'Car'],
            expected: undefined,
            isPublic: false,
            description: 'Unknown transport mode for Student should return undefined',
        },
        {
            input: ['Senior', 'Car'],
            expected: undefined,
            isPublic: false,
            description: 'Unknown transport mode for Senior should return undefined',
        },
        {
            input: ['Adult', 'Car'],
            expected: undefined,
            isPublic: false,
            description: 'Unknown transport mode for Adult should return undefined',
        },
        {
            input: ['Child', 'Bus'],
            expected: undefined,
            isPublic: false,
            description: 'Unknown fare type should return undefined',
        },
        {
            input: ['Child', 'Train'],
            expected: undefined,
            isPublic: false,
            description: 'Unknown fare type with Train should return undefined',
        },
        {
            input: ['', 'Bus'],
            expected: undefined,
            isPublic: false,
            description: 'Empty fare type should return undefined',
        },
        {
            input: ['Student', ''],
            expected: undefined,
            isPublic: false,
            description: 'Empty transport mode should return undefined',
        },
        {
            input: ['', ''],
            expected: undefined,
            isPublic: false,
            description: 'Both empty strings should return undefined',
        },
        {
            input: ['student', 'Bus'],
            expected: undefined,
            isPublic: false,
            description: 'Case-sensitive fare type student should return undefined',
        },
        {
            input: ['Student', 'bus'],
            expected: undefined,
            isPublic: false,
            description: 'Case-sensitive transport mode bus should return undefined',
        },
        {
            input: [' Adult', 'Train'],
            expected: undefined,
            isPublic: false,
            description: 'Leading space in fare type should return undefined',
        },
        {
            input: ['Adult ', 'Train'],
            expected: undefined,
            isPublic: false,
            description: 'Trailing space in fare type should return undefined',
        },
        {
            input: ['Student', 'Train '],
            expected: undefined,
            isPublic: false,
            description: 'Trailing space in transport mode should return undefined',
        },
        {
            input: ['Senior', ' Bus'],
            expected: undefined,
            isPublic: false,
            description: 'Leading space in transport mode should return undefined',
        },
    ],
};
