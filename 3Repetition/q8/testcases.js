module.exports = {
    testcases: [
        // Public test cases (first 3)
        {
            input: [1],
            expected: '*',
            isPublic: true,
            description: 'Diamond width 1 -> single asterisk',
        },
        {
            input: [2],
            expected: ' *\n* *\n *',
            isPublic: true,
            description: 'Diamond width 2 -> three rows',
        },
        {
            input: [3],
            expected: '  *\n * *\n* * *\n * *\n  *',
            isPublic: true,
            description: 'Diamond width 3 -> five rows',
        },

        // Hidden test cases
        {
            input: [0],
            expected: '',
            isPublic: false,
            description: 'Width 0 should return empty string',
        },
        {
            input: [4],
            expected: '   *\n  * *\n * * *\n* * * *\n * * *\n  * *\n   *',
            isPublic: false,
            description: 'Diamond width 4 -> seven rows',
        },
        {
            input: [5],
            expected: '    *\n   * *\n  * * *\n * * * *\n* * * * *\n * * * *\n  * * *\n   * *\n    *',
            isPublic: false,
            description: 'Diamond width 5 -> nine rows',
        },
        {
            input: [6],
            expected: '     *\n    * *\n   * * *\n  * * * *\n * * * * *\n* * * * * *\n * * * * *\n  * * * *\n   * * *\n    * *\n     *',
            isPublic: false,
            description: 'Diamond width 6 -> eleven rows',
        },
        {
            input: [7],
            expected: '      *\n     * *\n    * * *\n   * * * *\n  * * * * *\n * * * * * *\n* * * * * * *\n * * * * * *\n  * * * * *\n   * * * *\n    * * *\n     * *\n      *',
            isPublic: false,
            description: 'Diamond width 7 -> thirteen rows',
        },
        {
            input: [8],
            expected: '       *\n      * *\n     * * *\n    * * * *\n   * * * * *\n  * * * * * *\n * * * * * * *\n* * * * * * * *\n * * * * * * *\n  * * * * * *\n   * * * * *\n    * * * *\n     * * *\n      * *\n       *',
            isPublic: false,
            description: 'Diamond width 8 -> fifteen rows',
        },
        {
            input: [9],
            expected: '        *\n       * *\n      * * *\n     * * * *\n    * * * * *\n   * * * * * *\n  * * * * * * *\n * * * * * * * *\n* * * * * * * * *\n * * * * * * * *\n  * * * * * * *\n   * * * * * *\n    * * * * *\n     * * * *\n      * * *\n       * *\n        *',
            isPublic: false,
            description: 'Diamond width 9 -> seventeen rows',
        },
        {
            input: [10],
            expected: '         *\n        * *\n       * * *\n      * * * *\n     * * * * *\n    * * * * * *\n   * * * * * * *\n  * * * * * * * *\n * * * * * * * * *\n* * * * * * * * * *\n * * * * * * * * *\n  * * * * * * * *\n   * * * * * * *\n    * * * * * *\n     * * * * *\n      * * * *\n       * * *\n        * *\n         *',
            isPublic: false,
            description: 'Diamond width 10 -> nineteen rows',
        },
        {
            input: [1],
            expected: '*',
            isPublic: false,
            description: 'Single width diamond should be one asterisk',
        },
        {
            input: [2],
            expected: ' *\n* *\n *',
            isPublic: false,
            description: 'Width 2 diamond verification',
        },
        {
            input: [3],
            expected: '  *\n * *\n* * *\n * *\n  *',
            isPublic: false,
            description: 'Width 3 diamond verification',
        },
        {
            input: [11],
            expected: '          *\n         * *\n        * * *\n       * * * *\n      * * * * *\n     * * * * * *\n    * * * * * * *\n   * * * * * * * *\n  * * * * * * * * *\n * * * * * * * * * *\n* * * * * * * * * * *\n * * * * * * * * * *\n  * * * * * * * * *\n   * * * * * * * *\n    * * * * * * *\n     * * * * * *\n      * * * * *\n       * * * *\n        * * *\n         * *\n          *',
            isPublic: false,
            description: 'Diamond width 11 -> twenty-one rows',
        },
        {
            input: [12],
            expected: '           *\n          * *\n         * * *\n        * * * *\n       * * * * *\n      * * * * * *\n     * * * * * * *\n    * * * * * * * *\n   * * * * * * * * *\n  * * * * * * * * * *\n * * * * * * * * * * *\n* * * * * * * * * * * *\n * * * * * * * * * * *\n  * * * * * * * * * *\n   * * * * * * * * *\n    * * * * * * * *\n     * * * * * * *\n      * * * * * *\n       * * * * *\n        * * * *\n         * * *\n          * *\n           *',
            isPublic: false,
            description: 'Diamond width 12 -> twenty-three rows',
        },
        {
            input: [13],
            expected: '            *\n           * *\n          * * *\n         * * * *\n        * * * * *\n       * * * * * *\n      * * * * * * *\n     * * * * * * * *\n    * * * * * * * * *\n   * * * * * * * * * *\n  * * * * * * * * * * *\n * * * * * * * * * * * *\n* * * * * * * * * * * * *\n * * * * * * * * * * * *\n  * * * * * * * * * * *\n   * * * * * * * * * *\n    * * * * * * * * *\n     * * * * * * * *\n      * * * * * * *\n       * * * * * *\n        * * * * *\n         * * * *\n          * * *\n           * *\n            *',
            isPublic: false,
            description: 'Diamond width 13 -> twenty-five rows',
        },
        {
            input: [14],
            expected: '             *\n            * *\n           * * *\n          * * * *\n         * * * * *\n        * * * * * *\n       * * * * * * *\n      * * * * * * * *\n     * * * * * * * * *\n    * * * * * * * * * *\n   * * * * * * * * * * *\n  * * * * * * * * * * * *\n * * * * * * * * * * * * *\n* * * * * * * * * * * * * *\n * * * * * * * * * * * * *\n  * * * * * * * * * * * *\n   * * * * * * * * * * *\n    * * * * * * * * * *\n     * * * * * * * * *\n      * * * * * * * *\n       * * * * * * *\n        * * * * * *\n         * * * * *\n          * * * *\n           * * *\n            * *\n             *',
            isPublic: false,
            description: 'Diamond width 14 -> twenty-seven rows',
        },
        {
            input: [15],
            expected: '              *\n             * *\n            * * *\n           * * * *\n          * * * * *\n         * * * * * *\n        * * * * * * *\n       * * * * * * * *\n      * * * * * * * * *\n     * * * * * * * * * *\n    * * * * * * * * * * *\n   * * * * * * * * * * * *\n  * * * * * * * * * * * * *\n * * * * * * * * * * * * * *\n* * * * * * * * * * * * * * *\n * * * * * * * * * * * * * *\n  * * * * * * * * * * * * *\n   * * * * * * * * * * * *\n    * * * * * * * * * * *\n     * * * * * * * * * *\n      * * * * * * * * *\n       * * * * * * * *\n        * * * * * * *\n         * * * * * *\n          * * * * *\n           * * * *\n            * * *\n             * *\n              *',
            isPublic: false,
            description: 'Diamond width 15 -> twenty-nine rows',
        },
        {
            input: [1],
            expected: '*',
            isPublic: false,
            description: 'Edge case: minimum valid diamond',
        },
    ],
    options: {
        type: 'JSON',
    },
};