module.exports = {
    testcases: [
        {
            input: [
                { name: 'Alice', score: 85 },
                { name: 'Bob', score: 90 },
                { name: 'Charlie', score: 80 },
            ],
            expected: { min: 80, max: 90, average: 85 },
            isPublic: true,
            description: 'Computes min, max, average for typical distinct scores',
        },
        {
            input: [
                { name: 'Dan', score: 60 },
                { name: 'Eve', score: 75 },
                { name: 'Fay', score: 90 },
            ],
            expected: { min: 60, max: 90, average: 75 },
            isPublic: true,
            description: 'Handles increasing score order correctly',
        },
        {
            input: [
                { name: 'Gina', score: 100 },
                { name: 'Hank', score: 100 },
                { name: 'Ivan', score: 100 },
            ],
            expected: { min: 100, max: 100, average: 100 },
            isPublic: true,
            description: 'Returns same min, max, average when all scores are equal',
        },
        {
            input: [
                { name: 'Jade', score: 0 },
                { name: 'Ken', score: 50 },
                { name: 'Liam', score: 100 },
            ],
            expected: { min: 0, max: 100, average: 50 },
            isPublic: false,
            description: 'Handles full score range from 0 to 100',
        },
        {
            input: [
                { name: 'Mia', score: 70 },
                { name: 'Noah', score: 70 },
                { name: 'Omar', score: 85 },
            ],
            expected: { min: 70, max: 85, average: 75 },
            isPublic: false,
            description: 'Handles tie for minimum score correctly',
        },
        {
            input: [
                { name: 'Pia', score: 92 },
                { name: 'Quin', score: 81 },
                { name: 'Rae', score: 92 },
            ],
            expected: { min: 81, max: 92, average: 88.33333333333333 },
            isPublic: false,
            description: 'Handles tie for maximum score correctly',
        },
        {
            input: [
                { name: 'Sam', score: 40 },
                { name: 'Tia', score: 55 },
                { name: 'Uma', score: 70 },
            ],
            expected: { min: 40, max: 70, average: 55 },
            isPublic: false,
            description: 'Computes average exactly for arithmetic progression scores',
        },
        {
            input: [
                { name: 'Vic', score: 33 },
                { name: 'Wen', score: 66 },
                { name: 'Xiu', score: 99 },
            ],
            expected: { min: 33, max: 99, average: 66 },
            isPublic: false,
            description: 'Computes average correctly for multiples of 33',
        },
        {
            input: [
                { name: 'Yan', score: 88 },
                { name: 'Zed', score: 77 },
                { name: 'Abe', score: 66 },
            ],
            expected: { min: 66, max: 88, average: 77 },
            isPublic: false,
            description: 'Handles descending score order correctly',
        },
        {
            input: [
                { name: 'Bea', score: 59 },
                { name: 'Cal', score: 61 },
                { name: 'Dee', score: 60 },
            ],
            expected: { min: 59, max: 61, average: 60 },
            isPublic: false,
            description: 'Handles close neighboring scores correctly',
        },
        {
            input: [
                { name: 'Eli', score: 1 },
                { name: 'Flo', score: 2 },
                { name: 'Gil', score: 3 },
            ],
            expected: { min: 1, max: 3, average: 2 },
            isPublic: false,
            description: 'Computes statistics for very low scores',
        },
        {
            input: [
                { name: 'Hal', score: 97 },
                { name: 'Ira', score: 98 },
                { name: 'Jin', score: 99 },
            ],
            expected: { min: 97, max: 99, average: 98 },
            isPublic: false,
            description: 'Computes statistics for very high scores',
        },
        {
            input: [
                { name: 'Kai', score: 45 },
                { name: 'Lou', score: 45 },
                { name: 'Mae', score: 45 },
            ],
            expected: { min: 45, max: 45, average: 45 },
            isPublic: false,
            description: 'Returns correct object when all scores are the same non-100 value',
        },
        {
            input: [
                { name: 'Ned', score: 20 },
                { name: 'Oli', score: 50 },
                { name: 'Pam', score: 80 },
            ],
            expected: { min: 20, max: 80, average: 50 },
            isPublic: false,
            description: 'Handles evenly spread scores around average 50',
        },
        {
            input: [
                { name: 'Qia', score: 73 },
                { name: 'Raj', score: 73 },
                { name: 'Sue', score: 74 },
            ],
            expected: { min: 73, max: 74, average: 73.33333333333333 },
            isPublic: false,
            description: 'Handles near-equal scores with repeating decimal average',
        },
        {
            input: [
                { name: 'Tom', score: 12 },
                { name: 'Una', score: 24 },
                { name: 'Val', score: 36 },
            ],
            expected: { min: 12, max: 36, average: 24 },
            isPublic: false,
            description: 'Computes average for scaled values correctly',
        },
        {
            input: [
                { name: 'Wai', score: 84 },
                { name: 'Xan', score: 84 },
                { name: 'Yeo', score: 90 },
            ],
            expected: { min: 84, max: 90, average: 86 },
            isPublic: false,
            description: 'Handles pair tie below the maximum correctly',
        },
        {
            input: [
                { name: 'Zia', score: 91 },
                { name: 'Ari', score: 88 },
                { name: 'Ben', score: 85 },
            ],
            expected: { min: 85, max: 91, average: 88 },
            isPublic: false,
            description: 'Computes statistics when first student has maximum',
        },
        {
            input: [
                { name: 'Cia', score: 58 },
                { name: 'Don', score: 65 },
                { name: 'Eon', score: 72 },
            ],
            expected: { min: 58, max: 72, average: 65 },
            isPublic: false,
            description: 'Computes statistics when middle score equals average',
        },
        {
            input: [
                { name: 'Fia', score: 99 },
                { name: 'Geo', score: 0 },
                { name: 'Hio', score: 51 },
            ],
            expected: { min: 0, max: 99, average: 50 },
            isPublic: false,
            description: 'Handles mixed extreme and mid scores correctly',
        },
    ],
    options: {
        type: 'JSON',
    },
};
