module.exports = {
    testcases: [
        // Public test cases (first 3)
        {
            input: [5],
            commands: [
                { method: 'getArea', params: [] },
                { method: 'getCircumference', params: [] },
            ],
            expected: [
                { value: 78.53981633974483, options: { type: 'floating point', precision: 3 } },
                { value: 31.41592653589793, options: { type: 'floating point', precision: 3 } },
            ],
            isPublic: true,
            description:
                'Circle with radius 5: getArea() should return ~78.54, getCircumference() should return ~31.42',
        },
        {
            input: [10],
            commands: [
                { method: 'getArea', params: [] },
                { method: 'getCircumference', params: [] },
            ],
            expected: [
                { value: 314.1592653589793, options: { type: 'floating point', precision: 3 } },
                { value: 62.83185307179586, options: { type: 'floating point', precision: 3 } },
            ],
            isPublic: true,
            description:
                'Circle with radius 10: getArea() should return ~314.16, getCircumference() should return ~62.83',
        },
        {
            input: [1],
            commands: [
                { method: 'getArea', params: [] },
                { method: 'getCircumference', params: [] },
            ],
            expected: [
                { value: 3.141592653589793, options: { type: 'floating point', precision: 3 } },
                { value: 6.283185307179586, options: { type: 'floating point', precision: 3 } },
            ],
            isPublic: true,
            description: 'Circle with radius 1: getArea() should return ~3.14, getCircumference() should return ~6.28',
        },
        // Hidden test cases
        {
            input: [7],
            commands: [
                { method: 'getArea', params: [] },
                { method: 'getCircumference', params: [] },
            ],
            expected: [
                { value: 153.93804002589985, options: { type: 'floating point', precision: 3 } },
                { value: 43.982297150257104, options: { type: 'floating point', precision: 3 } },
            ],
            isPublic: false,
            description: 'Circle with radius 7: getArea() and getCircumference() should return correct values',
        },
        {
            input: [0],
            commands: [
                { method: 'getArea', params: [] },
                { method: 'getCircumference', params: [] },
            ],
            expected: [
                { value: 0, options: { type: 'floating point', precision: 3 } },
                { value: 0, options: { type: 'floating point', precision: 3 } },
            ],
            isPublic: false,
            description: 'Circle with radius 0: area and circumference should both be 0',
        },
        {
            input: [2],
            commands: [
                { method: 'getArea', params: [] },
                { method: 'getCircumference', params: [] },
            ],
            expected: [
                { value: 12.566370614359172, options: { type: 'floating point', precision: 3 } },
                { value: 12.566370614359172, options: { type: 'floating point', precision: 3 } },
            ],
            isPublic: false,
            description: 'Circle with radius 2',
        },
        {
            input: [3],
            commands: [
                { method: 'getArea', params: [] },
                { method: 'getCircumference', params: [] },
            ],
            expected: [
                { value: 28.274333882308138, options: { type: 'floating point', precision: 3 } },
                { value: 18.84955592153876, options: { type: 'floating point', precision: 3 } },
            ],
            isPublic: false,
            description: 'Circle with radius 3',
        },
        {
            input: [0.5],
            commands: [
                { method: 'getArea', params: [] },
                { method: 'getCircumference', params: [] },
            ],
            expected: [
                { value: 0.7853981633974483, options: { type: 'floating point', precision: 3 } },
                { value: 3.141592653589793, options: { type: 'floating point', precision: 3 } },
            ],
            isPublic: false,
            description: 'Circle with decimal radius 0.5',
        },
        {
            input: [2.5],
            commands: [
                { method: 'getArea', params: [] },
                { method: 'getCircumference', params: [] },
            ],
            expected: [
                { value: 19.634954084936208, options: { type: 'floating point', precision: 3 } },
                { value: 15.707963267948966, options: { type: 'floating point', precision: 3 } },
            ],
            isPublic: false,
            description: 'Circle with decimal radius 2.5',
        },
        {
            input: [3.14],
            commands: [
                { method: 'getArea', params: [] },
                { method: 'getCircumference', params: [] },
            ],
            expected: [
                { value: 30.974846927333928, options: { type: 'floating point', precision: 3 } },
                { value: 19.729201864543903, options: { type: 'floating point', precision: 3 } },
            ],
            isPublic: false,
            description: 'Circle with radius close to pi (3.14)',
        },
        {
            input: [100],
            commands: [
                { method: 'getArea', params: [] },
                { method: 'getCircumference', params: [] },
            ],
            expected: [
                { value: 31415.926535897932, options: { type: 'floating point', precision: 3 } },
                { value: 628.3185307179587, options: { type: 'floating point', precision: 3 } },
            ],
            isPublic: false,
            description: 'Circle with large radius 100',
        },
        {
            input: [0.1],
            commands: [
                { method: 'getArea', params: [] },
                { method: 'getCircumference', params: [] },
            ],
            expected: [
                { value: 0.031415926535897934, options: { type: 'floating point', precision: 3 } },
                { value: 0.6283185307179586, options: { type: 'floating point', precision: 3 } },
            ],
            isPublic: false,
            description: 'Circle with very small radius 0.1',
        },
        {
            input: [15],
            commands: [
                { method: 'getArea', params: [] },
                { method: 'getCircumference', params: [] },
            ],
            expected: [
                { value: 706.8583470577034, options: { type: 'floating point', precision: 3 } },
                { value: 94.24777960769379, options: { type: 'floating point', precision: 3 } },
            ],
            isPublic: false,
            description: 'Circle with radius 15',
        },
        {
            input: [20],
            commands: [
                { method: 'getArea', params: [] },
                { method: 'getCircumference', params: [] },
            ],
            expected: [
                { value: 1256.6370614359173, options: { type: 'floating point', precision: 3 } },
                { value: 125.66370614359172, options: { type: 'floating point', precision: 3 } },
            ],
            isPublic: false,
            description: 'Circle with radius 20',
        },
        {
            input: [7.7],
            commands: [
                { method: 'getArea', params: [] },
                { method: 'getCircumference', params: [] },
            ],
            expected: [
                { value: 186.26502843133886, options: { type: 'floating point', precision: 3 } },
                { value: 48.38052686528282, options: { type: 'floating point', precision: 3 } },
            ],
            isPublic: false,
            description: 'Circle with decimal radius 7.7',
        },
        {
            input: [12.5],
            commands: [
                { method: 'getArea', params: [] },
                { method: 'getCircumference', params: [] },
            ],
            expected: [
                { value: 490.87385212340517, options: { type: 'floating point', precision: 3 } },
                { value: 78.53981633974483, options: { type: 'floating point', precision: 3 } },
            ],
            isPublic: false,
            description: 'Circle with decimal radius 12.5',
        },
        {
            input: [0.01],
            commands: [
                { method: 'getArea', params: [] },
                { method: 'getCircumference', params: [] },
            ],
            expected: [
                { value: 0.00031415926535897933, options: { type: 'floating point', precision: 3 } },
                { value: 0.06283185307179587, options: { type: 'floating point', precision: 3 } },
            ],
            isPublic: false,
            description: 'Circle with very small radius 0.01',
        },
        {
            input: [50],
            commands: [
                { method: 'getArea', params: [] },
                { method: 'getCircumference', params: [] },
            ],
            expected: [
                { value: 7853.981633974483, options: { type: 'floating point', precision: 3 } },
                { value: 314.1592653589793, options: { type: 'floating point', precision: 3 } },
            ],
            isPublic: false,
            description: 'Circle with radius 50',
        },
        {
            input: [8.25],
            commands: [
                { method: 'getArea', params: [] },
                { method: 'getCircumference', params: [] },
            ],
            expected: [
                { value: 213.8246499849553, options: { type: 'floating point', precision: 3 } },
                { value: 51.83627878423159, options: { type: 'floating point', precision: 3 } },
            ],
            isPublic: false,
            description: 'Circle with decimal radius 8.25',
        },
        {
            input: [1000],
            commands: [
                { method: 'getArea', params: [] },
                { method: 'getCircumference', params: [] },
            ],
            expected: [
                { value: 3141592.653589793, options: { type: 'floating point', precision: 3 } },
                { value: 6283.185307179587, options: { type: 'floating point', precision: 3 } },
            ],
            isPublic: false,
            description: 'Circle with very large radius 1000',
        },
    ],
    options: {
        type: 'commands',
    },
};
