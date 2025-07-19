module.exports = {
    testcases: [
        {
            input: ['John', '1A01'],
            expected: { name: 'John', class: '1A01', formattedStudentInformation: 'John is in class 1A01' },
            // Expects getFormattedStudentInformation to be a function that returns the formattedStudentInformation
        },
        {
            input: ['Alice', '1A99'],
            expected: { name: 'Alice', class: '1A99', formattedStudentInformation: 'Alice is in class 1A99' },
            // Expects getFormattedStudentInformation to be a function that returns the formattedStudentInformation
        },
        {
            input: ['Bob', '1B03'],
            expected: { name: 'Bob', class: '1B03', formattedStudentInformation: 'Bob is in class 1B03' },
            // Expects getFormattedStudentInformation to be a function that returns the formattedStudentInformation
        },
        {
            input: ['Charlie', '1C06'],
            expected: { name: 'Charlie', class: '1C06', formattedStudentInformation: 'Charlie is in class 1C06' },
            // Expects getFormattedStudentInformation to be a function that returns the formattedStudentInformation
        },
        {
            input: ['Douglas', '1D11'],
            expected: { name: 'Douglas', class: '1D11', formattedStudentInformation: 'Douglas is in class 1D11' },
            // Expects getFormattedStudentInformation to be a function that returns the formattedStudentInformation
        },
    ],
    options: {
        type: 'JSON',
        monkeyPatch: (fn) => {
            return (...params) => {
                const result = fn(...params);
                const formattedStudentInformation = result.getFormattedStudentInformation() || 'undefined';
                return { name: result.name, class: result.class, formattedStudentInformation };
            };
        },
    },
};
