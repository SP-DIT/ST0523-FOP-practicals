module.exports = {
    testcases: [
        // Public test cases (first 3)
        {
            input: [1],
            expected: '*',
            isPublic: true,
            description: 'Right-angled triangle height 1 -> single asterisk',
        },
        {
            input: [2],
            expected: '*\n* *',
            isPublic: true,
            description: 'Right-angled triangle height 2 -> two rows',
        },
        {
            input: [3],
            expected: '*\n* *\n* * *',
            isPublic: true,
            description: 'Right-angled triangle height 3 -> three rows',
        },

        // Hidden test cases
        {
            input: [0],
            expected: '',
            isPublic: false,
            description: 'Height 0 should return empty string',
        },
        {
            input: [4],
            expected: '*\n* *\n* * *\n* * * *',
            isPublic: false,
            description: 'Right-angled triangle height 4 -> four rows',
        },
        {
            input: [5],
            expected: '*\n* *\n* * *\n* * * *\n* * * * *',
            isPublic: false,
            description: 'Right-angled triangle height 5 -> five rows',
        },
        {
            input: [6],
            expected: '*\n* *\n* * *\n* * * *\n* * * * *\n* * * * * *',
            isPublic: false,
            description: 'Right-angled triangle height 6 -> six rows',
        },
        {
            input: [7],
            expected: '*\n* *\n* * *\n* * * *\n* * * * *\n* * * * * *\n* * * * * * *',
            isPublic: false,
            description: 'Right-angled triangle height 7 -> seven rows',
        },
        {
            input: [8],
            expected: '*\n* *\n* * *\n* * * *\n* * * * *\n* * * * * *\n* * * * * * *\n* * * * * * * *',
            isPublic: false,
            description: 'Right-angled triangle height 8 -> eight rows',
        },
        {
            input: [9],
            expected: '*\n* *\n* * *\n* * * *\n* * * * *\n* * * * * *\n* * * * * * *\n* * * * * * * *\n* * * * * * * * *',
            isPublic: false,
            description: 'Right-angled triangle height 9 -> nine rows',
        },
        {
            input: [10],
            expected: '*\n* *\n* * *\n* * * *\n* * * * *\n* * * * * *\n* * * * * * *\n* * * * * * * *\n* * * * * * * * *\n* * * * * * * * * *',
            isPublic: false,
            description: 'Right-angled triangle height 10 -> ten rows',
        },
        {
            input: [1],
            expected: '*',
            isPublic: false,
            description: 'Single row triangle should just be one asterisk',
        },
        {
            input: [2],
            expected: '*\n* *',
            isPublic: false,
            description: 'Two row triangle verification',
        },
        {
            input: [3],
            expected: '*\n* *\n* * *',
            isPublic: false,
            description: 'Three row triangle verification',
        },
        {
            input: [11],
            expected: '*\n* *\n* * *\n* * * *\n* * * * *\n* * * * * *\n* * * * * * *\n* * * * * * * *\n* * * * * * * * *\n* * * * * * * * * *\n* * * * * * * * * * *',
            isPublic: false,
            description: 'Right-angled triangle height 11 -> eleven rows',
        },
        {
            input: [12],
            expected: '*\n* *\n* * *\n* * * *\n* * * * *\n* * * * * *\n* * * * * * *\n* * * * * * * *\n* * * * * * * * *\n* * * * * * * * * *\n* * * * * * * * * * *\n* * * * * * * * * * * *',
            isPublic: false,
            description: 'Right-angled triangle height 12 -> twelve rows',
        },
        {
            input: [13],
            expected: '*\n* *\n* * *\n* * * *\n* * * * *\n* * * * * *\n* * * * * * *\n* * * * * * * *\n* * * * * * * * *\n* * * * * * * * * *\n* * * * * * * * * * *\n* * * * * * * * * * * *\n* * * * * * * * * * * * *',
            isPublic: false,
            description: 'Right-angled triangle height 13 -> thirteen rows',
        },
        {
            input: [14],
            expected: '*\n* *\n* * *\n* * * *\n* * * * *\n* * * * * *\n* * * * * * *\n* * * * * * * *\n* * * * * * * * *\n* * * * * * * * * *\n* * * * * * * * * * *\n* * * * * * * * * * * *\n* * * * * * * * * * * * *\n* * * * * * * * * * * * * *',
            isPublic: false,
            description: 'Right-angled triangle height 14 -> fourteen rows',
        },
        {
            input: [15],
            expected: '*\n* *\n* * *\n* * * *\n* * * * *\n* * * * * *\n* * * * * * *\n* * * * * * * *\n* * * * * * * * *\n* * * * * * * * * *\n* * * * * * * * * * *\n* * * * * * * * * * * *\n* * * * * * * * * * * * *\n* * * * * * * * * * * * * *\n* * * * * * * * * * * * * * *',
            isPublic: false,
            description: 'Right-angled triangle height 15 -> fifteen rows',
        },
        {
            input: [1],
            expected: '*',
            isPublic: false,
            description: 'Edge case: minimum valid triangle',
        },
    ],
    options: {
        type: 'JSON',
    },
};