module.exports = {
    testcases: [
        {
            input: ['north', 'south', 'south'],
            expected: 'Proceed',
        },
        {
            input: ['north', 'south', 'east'],
            expected: 'Proceed',
        },
        {
            input: ['north', 'south', 'west'],
            expected: 'Stop',
        },
        {
            input: ['north', 'east', 'south'],
            expected: 'Proceed',
        },
        {
            input: ['north', 'east', 'east'],
            expected: 'Proceed',
        },
        {
            input: ['north', 'east', 'west'],
            expected: 'Stop',
        },
        {
            input: ['north', 'west', 'south'],
            expected: 'Stop',
        },
        {
            input: ['north', 'west', 'east'],
            expected: 'Stop',
        },
        {
            input: ['north', 'west', 'west'],
            expected: 'Stop',
        },
        {
            input: ['south', 'north', 'north'],
            expected: 'Proceed',
        },
        {
            input: ['south', 'north', 'east'],
            expected: 'Stop',
        },
        {
            input: ['south', 'north', 'west'],
            expected: 'Proceed',
        },
        {
            input: ['south', 'east', 'north'],
            expected: 'Stop',
        },
        {
            input: ['south', 'east', 'east'],
            expected: 'Stop',
        },
        {
            input: ['south', 'east', 'west'],
            expected: 'Stop',
        },
        {
            input: ['south', 'west', 'north'],
            expected: 'Proceed',
        },
        {
            input: ['south', 'west', 'east'],
            expected: 'Stop',
        },
        {
            input: ['south', 'west', 'west'],
            expected: 'Proceed',
        },
        {
            input: ['east', 'north', 'north'],
            expected: 'Stop',
        },
        {
            input: ['east', 'north', 'south'],
            expected: 'Stop',
        },
        {
            input: ['east', 'north', 'west'],
            expected: 'Stop',
        },
        {
            input: ['east', 'south', 'north'],
            expected: 'Stop',
        },
        {
            input: ['east', 'south', 'south'],
            expected: 'Proceed',
        },
        {
            input: ['east', 'south', 'west'],
            expected: 'Proceed',
        },
        {
            input: ['east', 'west', 'north'],
            expected: 'Stop',
        },
        {
            input: ['east', 'west', 'south'],
            expected: 'Proceed',
        },
        {
            input: ['east', 'west', 'west'],
            expected: 'Proceed',
        },
        {
            input: ['west', 'north', 'north'],
            expected: 'Proceed',
        },
        {
            input: ['west', 'north', 'south'],
            expected: 'Stop',
        },
        {
            input: ['west', 'north', 'east'],
            expected: 'Proceed',
        },
        {
            input: ['west', 'south', 'north'],
            expected: 'Stop',
        },
        {
            input: ['west', 'south', 'south'],
            expected: 'Stop',
        },
        {
            input: ['west', 'south', 'east'],
            expected: 'Stop',
        },
        {
            input: ['west', 'east', 'north'],
            expected: 'Proceed',
        },
        {
            input: ['west', 'east', 'south'],
            expected: 'Stop',
        },
        {
            input: ['west', 'east', 'east'],
            expected: 'Proceed',
        },
    ],
    options: {},
};
