module.exports = {
    testcases: [
        {
            input: ['C'],
            expected: ['C', 'D', 'E', 'F', 'G', 'A', 'B', 'C'],
        },
        {
            input: ['G'],
            expected: ['G', 'A', 'B', 'C', 'D', 'E', 'F#', 'G'],
        },
        {
            input: ['D'],
            expected: ['D', 'E', 'F#', 'G', 'A', 'B', 'C#', 'D'],
        },
        {
            input: ['A'],
            expected: ['A', 'B', 'C#', 'D', 'E', 'F#', 'G#', 'A'],
        },
        {
            input: ['E'],
            expected: ['E', 'F#', 'G#', 'A', 'B', 'C#', 'D#', 'E'],
        },
    ],
    options: {
        type: 'JSON',
    },
};
