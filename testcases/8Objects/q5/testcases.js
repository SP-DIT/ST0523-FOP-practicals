module.exports = {
    testcases: [
        {
            input: [{ name: 'John', class: '1A01' }, '1A02'],
            expected: { isBrandNew: true, originalUpdated: false, classUpdatedTo: '1A02' },
        },
        {
            input: [{ name: 'John', class: '1A01' }, '1A03'],
            expected: { isBrandNew: true, originalUpdated: false, classUpdatedTo: '1A03' },
        },
        {
            input: [{ name: 'Alice', class: '1A01' }, '1B04'],
            expected: { isBrandNew: true, originalUpdated: false, classUpdatedTo: '1B04' },
        },
        {
            input: [{ name: 'Alice', class: '1A01' }, '1B05'],
            expected: { isBrandNew: true, originalUpdated: false, classUpdatedTo: '1B05' },
        },
        {
            input: [{ name: 'Charlie', class: '1A01' }, '1C01'],
            expected: { isBrandNew: true, originalUpdated: false, classUpdatedTo: '1C01' },
        },
    ],
    options: {
        monkeyPatch: (fn) => {
            return (student, newClassName) => {
                const originalStudentClass = student.class;
                const result = fn(student, newClassName);
                const isBrandNew = result !== student;
                const originalUpdated = student.class !== originalStudentClass;
                const classUpdatedTo = result.class;
                return { isBrandNew, originalUpdated, classUpdatedTo };
            };
        },
        type: 'JSON',
    },
};
