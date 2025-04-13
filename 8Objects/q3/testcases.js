module.exports = {
    testcases: [
        {
            input: [
                ['ST0523', 'ST0501', 'ST2413'],
                {
                    ST0523: ['Alice', 'Bob'],
                    ST0501: ['Alice', 'John', 'Charlie'],
                    ST2413: ['John', 'Charlie'],
                },
            ],
            expected: {
                Alice: ['ST0523', 'ST0501'],
                Bob: ['ST0523'],
                John: ['ST0501', 'ST2413'],
                Charlie: ['ST0501', 'ST2413'],
            },
        },
        {
            input: [
                ['ST0523', 'ST0501', 'ST2413', 'CC1001', 'CC1007', 'MS0105'],
                {
                    ST0523: ['y', 'm', 'e'],
                    ST0501: ['d'],
                    ST2413: [
                        'e',
                        'j',
                        'c',
                        'w',
                        'z',
                        'x',
                        'k',
                        'i',
                        'd',
                        'f',
                        'y',
                        's',
                        'b',
                        'q',
                        'g',
                        't',
                        'h',
                        'r',
                        'a',
                        'm',
                        'v',
                        'u',
                        'n',
                    ],
                    CC1001: ['j', 'b', 'f', 'k', 'e'],
                    CC1007: [
                        'a',
                        'f',
                        'n',
                        'u',
                        'i',
                        'e',
                        'h',
                        'p',
                        'q',
                        'z',
                        'w',
                        'd',
                        'b',
                        'l',
                        's',
                        'c',
                        'j',
                        'y',
                        'o',
                        't',
                        'm',
                        'r',
                        'g',
                        'v',
                        'k',
                        'x',
                    ],
                    MS0105: [
                        'x',
                        's',
                        't',
                        'd',
                        'p',
                        'n',
                        'f',
                        'j',
                        'i',
                        'h',
                        'z',
                        'o',
                        'g',
                        'w',
                        'u',
                        'a',
                        'k',
                        'r',
                        'e',
                        'v',
                    ],
                },
            ],
            expected: {
                y: ['ST0523', 'ST2413', 'CC1007'],
                m: ['ST0523', 'ST2413', 'CC1007'],
                e: ['ST0523', 'ST2413', 'CC1001', 'CC1007', 'MS0105'],
                d: ['ST0501', 'ST2413', 'CC1007', 'MS0105'],
                j: ['ST2413', 'CC1001', 'CC1007', 'MS0105'],
                c: ['ST2413', 'CC1007'],
                w: ['ST2413', 'CC1007', 'MS0105'],
                z: ['ST2413', 'CC1007', 'MS0105'],
                x: ['ST2413', 'CC1007', 'MS0105'],
                k: ['ST2413', 'CC1001', 'CC1007', 'MS0105'],
                i: ['ST2413', 'CC1007', 'MS0105'],
                f: ['ST2413', 'CC1001', 'CC1007', 'MS0105'],
                s: ['ST2413', 'CC1007', 'MS0105'],
                b: ['ST2413', 'CC1001', 'CC1007'],
                q: ['ST2413', 'CC1007'],
                g: ['ST2413', 'CC1007', 'MS0105'],
                t: ['ST2413', 'CC1007', 'MS0105'],
                h: ['ST2413', 'CC1007', 'MS0105'],
                r: ['ST2413', 'CC1007', 'MS0105'],
                a: ['ST2413', 'CC1007', 'MS0105'],
                v: ['ST2413', 'CC1007', 'MS0105'],
                u: ['ST2413', 'CC1007', 'MS0105'],
                n: ['ST2413', 'CC1007', 'MS0105'],
                p: ['CC1007', 'MS0105'],
                l: ['CC1007'],
                o: ['CC1007', 'MS0105'],
            },
        },
    ],
    options: {
        type: 'JSON',
    },
};
