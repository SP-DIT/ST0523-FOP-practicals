const fs = require('fs');
const path = require('path');
const util = require('util');
const package = require('./package.json');
const { exit } = require('process');

const { studentId, className } = package;
if (
    !studentId ||
    !className ||
    !/^(p|P)[0-9]{7}$/.test(studentId) ||
    !/^(DIT|DAAA|DCDF|DCITP)\/FT\/1A\/(\d{2})$/.test(className)
) {
    console.error(
        `Invalid studentId: ${studentId} or className: ${className}\nDo set your student Id (e.g. p1121782) and ClassName (e.g. DIT/FT/1A/01) in package.json`,
    );
    exit(-1);
}

// Get all folders in the current directory
const folders = fs.readdirSync(__dirname, { withFileTypes: true }).filter((dirent) => dirent.isDirectory());

// URL of logging service
const loggerUrl = 'https://fop-practical-log-collector.azurewebsites.net';

// My folders are named 1Introduction, 2Operators, 3Conditionals, etc.Put those that meet this pattern in an array
const folderNames = folders
    .map((dirent) => dirent.name)
    .filter((name) => /^\d+[A-Z].*$/.test(name))
    .sort((nameA, nameB) => {
        const [_, A] = /^(\d+)[A-Z].*$/.exec(nameA);
        const [__, B] = /^(\d+)[A-Z].*$/.exec(nameB);
        return +A - +B;
    }); // Sort the folders

function readProblemSetInput() {
    // Check for folder argument
    const folderIndex = process.argv[2];
    if (!folderIndex) {
        console.error('Please provide a problem set name, e.g., node run p<PROBLEM_SET> q[QUESTION_NUMBER]');
        process.exit(1);
    }

    const folderName = folderNames[folderIndex.slice(1) - 1];
    if (!folderName) {
        console.error(`Problem set "${folderIndex}" does not exist.`);
        process.exit(1);
    }

    const invalidProblemSets = ['1Introduction', '2Operators'];
    if (invalidProblemSets.includes(folderName)) {
        console.error(`Problem set "${folderName}" can be executed with run.js`);
        process.exit(1);
    }

    return folderName;
}

function readQuestionInput(folderName) {
    const subFolderName = process.argv[3];
    if (subFolderName) {
        return [subFolderName];
    }

    // get all folders in the folderName
    const subFolderNames = fs
        .readdirSync(path.join(__dirname, folderName), { withFileTypes: true })
        .filter((dirent) => dirent.isDirectory())
        .map((dirent) => dirent.name)
        .sort();
    return subFolderNames;
}

function readQuestionInputFromCurrentFolder() {
    const subFolderName = process.argv[2];
    if (subFolderName) {
        return [subFolderName];
    }

    // get all folders in the folderName
    const subFolderNames = fs
        .readdirSync(process.cwd(), { withFileTypes: true })
        .filter((dirent) => dirent.isDirectory() && dirent.name.startsWith('q'))
        .map((dirent) => dirent.name)
        .sort();
    return subFolderNames;
}

function getCodeAndTestCasesPath(folderName, subFolderName) {
    // Construct the folder path
    const folderPath = path.join(__dirname, folderName, subFolderName);

    // Check if the folder exists
    if (!fs.existsSync(folderPath)) {
        console.error(`Folder "${folderPath}" does not exist.`);
        process.exit(1);
    }

    // Import code.js and testcases.js
    const codePath = path.join(folderPath, 'code.js');
    const testCasesPath = path.join(folderPath, 'testcases.js');

    // Check if both code and testcases files exist
    if (!fs.existsSync(codePath) || !fs.existsSync(testCasesPath)) {
        console.error(`Missing code.js or testcases.js in the folder "${subFolderName}".`);
        process.exit(1);
    }

    return { codePath, testCasesPath };
}

function silentRequire(codePath) {
    const originalLog = console.log;
    console.log = () => {};
    const runCode = require(codePath); // Assuming code.js exports a `runCode` function
    console.log = originalLog;
    return runCode;
}

function silentRunCode(runCode) {
    return (...args) => {
        const originalLog = console.log;
        console.log = () => {};
        const result = runCode(...args);
        console.log = originalLog;
        return result;
    };
}

function deepEqual(a, b) {
    if (a === b) return true;

    if (typeof a !== 'object' || typeof b !== 'object' || a === null || b === null) return false;

    if (Object.keys(a).length !== Object.keys(b).length) return false;

    for (let key in a) {
        if (!(key in b) || !deepEqual(a[key], b[key])) return false;
    }

    return true;
}

// Function to compare values based on options
function compareResults(result, expected, options) {
    if (options.type === 'floating point') {
        const precision = options.precision || 6;
        return Math.abs(result - expected) < Math.pow(10, -precision);
    } else if (options.type === 'JSON') {
        return deepEqual(result, expected);
    }
    return result === expected;
}

// Function to run the test cases
function runTestCases(runCode, testcases, options) {
    return testcases.map((testCase, testIndex) => {
        const { input, expected } = testCase;
        try {
            const result = runCode(...input);
            const passed = compareResults(result, expected, options);
            return { testIndex, passed, input, expected, actual: result };
        } catch (error) {
            return { testIndex, error: error };
        }
    });
}

function runQuestions() {
    // get folder where the script is executed from
    const cwd = process.cwd();
    const currentFolder = cwd.split(path.sep).pop();
    const isProblemSet = folderNames.includes(currentFolder);

    let problemSet, questions;

    if (!isProblemSet) {
        problemSet = readProblemSetInput();
        questions = readQuestionInput(problemSet);
    } else {
        problemSet = currentFolder;
        questions = readQuestionInputFromCurrentFolder();
    }

    const allResults = questions.map((question) => {
        const { codePath, testCasesPath } = getCodeAndTestCasesPath(problemSet, question);
        let runCode = silentRequire(codePath);
        const { testcases, options = {} } = require(testCasesPath); // Destructure testcases and options

        if (options.monkeyPatch) {
            runCode = options.monkeyPatch(runCode);
        }

        runCode = silentRunCode(runCode);

        // Run the test cases
        const results = runTestCases(runCode, testcases, options);
        return { question, results };
    });

    // log results
    const payload = {
        student_id: studentId,
        class: className,
        results: allResults
            .map(({ question, results }) =>
                results
                    .map((testCase) => [
                        {
                            problem_set: problemSet,
                            question: +question.replace('q', ''),
                            testcase: testCase.testIndex + 1,
                            result: testCase.passed ? 1 : 0,
                        },
                    ])
                    .flat(),
            )
            .flat(),
    };
    fetch(`${loggerUrl}/results`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
    }).catch((e) => {}); // Good if success, ignore otherwise

    allResults.forEach(({ question, results }) => {
        console.log(`${problemSet}/${question}`);
        results.forEach((testCase) => {
            if (testCase.error) {
                console.error(`\tTest case ${testCase.testIndex + 1}: Error - ${testCase.error.message}`);
            } else if (testCase.passed) {
                console.log(`\tTest case ${testCase.testIndex + 1}: Passed`);
            } else {
                console.log(
                    `\tTest case ${testCase.testIndex + 1}: Failed (Expected: ${JSON.stringify(
                        testCase.expected,
                    )}, Got: ${JSON.stringify(testCase.actual)})`,
                );

                const input = testCase.input.map((value) => {
                    if (value instanceof Function) return value.toString().replace(/\s/g, '');
                    return value;
                });

                let str = util.inspect(input, {
                    depth: 2,
                    maxArrayLength: 7,
                    breakLength: 80,
                    compact: 5,
                    showHidden: false,
                });
                console.log('\tInputs:\n\t\t' + str.split('\n').join('\n\t\t'));
                console.log();
            }
        });
    });

    console.table(
        allResults.map(({ question, results }) => {
            const totalQuestions = results.length;
            const failed = results.filter((testCase) => !testCase.passed).flat().length;
            const passed = totalQuestions - failed;
            return { question, passed, failed, totalQuestions };
        }),
    );
}

runQuestions();
