module.exports = {
    testcases: [
        {
            input: [{ name: 'John', class: '1A01' }],
            expected: {
                isBrandNew: false,
                originalUpdated: true,
                studentInfo: 'John is from class 1A01',
                updatedStudentInfo: 'John is from class 1A02',
            },
        },
        {
            input: [{ name: 'Alice', class: '1A99' }],
            expected: {
                isBrandNew: false,
                originalUpdated: true,
                studentInfo: 'Alice is from class 1A99',
                updatedStudentInfo: 'Alice is from class 1A02',
            },
        },
    ],
    options: {
        monkeyPatch: (fn) => {
            return (input) => {
                const student = { ...input };
                const originalGetFormattedStudentInformation = student.getFormattedStudentInformation;
                const result = fn(student);
                const isBrandNew = result !== student;
                const originalUpdated =
                    student.getFormattedStudentInformation !== originalGetFormattedStudentInformation;
                const studentInfo = student.getFormattedStudentInformation();
                student.class = '1A02';
                const updatedStudentInfo = student.getFormattedStudentInformation();
                return { isBrandNew, originalUpdated, studentInfo, updatedStudentInfo };
            };
        },
        type: 'JSON',
    },
};
