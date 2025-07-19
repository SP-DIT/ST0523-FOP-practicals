module.exports = {
    testcases: [
        {
            input: [['file', 'file', 'file']],
            expected: ['file', 'file(1)', 'file(2)'],
        },
        {
            input: [['onepiece', 'onepiece(1)', 'onepiece(2)', 'onepiece(3)', 'onepiece']],
            expected: ['onepiece', 'onepiece(1)', 'onepiece(2)', 'onepiece(3)', 'onepiece(4)'],
        },
        {
            input: [['gta', 'gta(2)', 'gta', 'gta']],
            expected: ['gta', 'gta(2)', 'gta(1)', 'gta(3)'],
        },
        {
            input: [['pikachu', 'pikachu(1)', 'pikachu(1)', 'pikachu(1)']],
            expected: ['pikachu', 'pikachu(1)', 'pikachu(1)(1)', 'pikachu(1)(2)'],
        },
        {
            input: [
                [
                    'a(999)',
                    'a',
                    'a(1)',
                    'a(2)',
                    'a',
                    'a',
                    'a',
                    'a(3)',
                    'a(3)',
                    'a(3)',
                    'a',
                    'a',
                    'a',
                    'a(999)',
                    'a(999)',
                    'a(999)',
                ],
            ],
            expected: [
                'a(999)',
                'a',
                'a(1)',
                'a(2)',
                'a(3)',
                'a(4)',
                'a(5)',
                'a(3)(1)',
                'a(3)(2)',
                'a(3)(3)',
                'a(6)',
                'a(7)',
                'a(8)',
                'a(999)(1)',
                'a(999)(2)',
                'a(999)(3)',
            ],
        },
    ],
    options: {
        type: 'JSON',
    },
};
