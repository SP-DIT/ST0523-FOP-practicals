const fs = require('fs');
const path = require('path');
const util = require('util');
const package = require('./package.json');
const { exit } = require('process');

const { studentId, className } = package;
if (
    process.env.NODE_ENV !== 'test' &&
    process.env.NODE_ENV !== 'dev' &&
    (!studentId ||
        !className ||
        !/^(p|P)[0-9]{7}$/.test(studentId) ||
        !/^(DIT|DCS|DAAA|DCDF|DCITP)\/FT\/1[AB]\/(\d{2})$/.test(className))
) {
    console.error(
        `Invalid studentId: ${studentId} or className: ${className}\nDo set your student Id (e.g. p1121782) and ClassName (e.g. DIT/FT/1A/01) in package.json`,
    );
    exit(-1);
}

// Get all folders in the current directory
const folders = fs.readdirSync(__dirname, { withFileTypes: true }).filter((dirent) => dirent.isDirectory());

// My folders are named 1Introduction, 2Operators, 3Conditionals, etc.Put those that meet this pattern in an array
const folderNames = folders
    .map((dirent) => dirent.name)
    .filter((name) => /^\d+[A-Z].*$/.test(name))
    .sort((nameA, nameB) => {
        const [_, A] = /^(\d+)[A-Z].*$/.exec(nameA);
        const [__, B] = /^(\d+)[A-Z].*$/.exec(nameB);
        return +A - +B;
    }); // Sort the folders

// Returns the folder name that contains the questions to run,
// previously it was read from command line arguments
// but now that each set only have 1 problem set
//  it just returns the first folder in the sorted list of folders
function readProblemSetInput() {
    return folderNames[0];
}

function readQuestionInput(folderName) {
    // Sample call with subFolderName: node run q1
    // Sample call without subFolderName (runs all question): node run
    const subFolderName = process.argv[2];
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

function getCodeAndTestCasesPath(folderName, subFolderName) {
    // Construct the folder path
    const folderPath = path.join(__dirname, folderName, subFolderName);

    // Check if the folder exists
    if (!fs.existsSync(folderPath)) {
        console.error(`Folder "${folderPath}" does not exist.`);
        process.exit(1);
    }

    // Import code.js and testcases.js
    const codeFile = process.env.NODE_ENV === 'test' ? 'solution.js' : 'code.js';
    const codePath = path.join(folderPath, codeFile);
    const testCasesPath = path.join(folderPath, 'testcases.js');

    console.log(`Testing ${subFolderName}/${codeFile} against ${subFolderName}/testcases.js\n`);

    // Check if both code and testcases files exist
    if (!fs.existsSync(codePath) || !fs.existsSync(testCasesPath)) {
        console.error(`Missing ${codeFile} or testcases.js in the folder "${subFolderName}".`);
        process.exit(1);
    }

    return { codePath, testCasesPath };
}

function silentRequire(codePath) {
    const originalLog = console.log;
    console.log = () => {};
    try {
        const runCode = require(codePath);
        console.log = originalLog;
        return runCode;
    } catch (error) {
        console.log = originalLog;
        // Re-throw with more context
        throw new Error(`Failed to load ${codePath}: ${error.message}`);
    }
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

// Function to format test case output for better readability
function formatTestCaseOutput(input, expected, actual) {
    const inputStr = util.inspect(input, {
        depth: 5,
        maxArrayLength: 100,
        maxStringLength: 200,
        breakLength: 60,
        compact: 5,
        colors: false,
        showHidden: false,
    });

    const expectedStr = util.inspect(expected, {
        depth: 5,
        maxArrayLength: 100,
        maxStringLength: 200,
        breakLength: 60,
        compact: false,
        colors: false,
        showHidden: false,
    });

    const actualStr = util.inspect(actual, {
        depth: 5,
        maxArrayLength: 100,
        maxStringLength: 200,
        breakLength: 60,
        compact: false,
        colors: false,
        showHidden: false,
    });

    // Always use consistent multi-line formatting
    const formattedInput = inputStr
        .split('\n')
        .map((line) => `\t\t  ${line}`)
        .join('\n');
    const formattedExpected = expectedStr
        .split('\n')
        .map((line) => `\t\t  ${line}`)
        .join('\n');
    const formattedActual = actualStr
        .split('\n')
        .map((line) => `\t\t  ${line}`)
        .join('\n');

    return `\t\tInput:\n${formattedInput}\n\t\tExpected:\n${formattedExpected}\n\t\tGot:\n${formattedActual}`;
}

// Function to format command-based test case output
function formatCommandTestCaseOutput(input, commands, expected, actual) {
    const inputStr = util.inspect(input, {
        depth: 5,
        maxArrayLength: 100,
        maxStringLength: 200,
        breakLength: 60,
        compact: 5,
        colors: false,
        showHidden: false,
    });

    const formattedInput = inputStr
        .split('\n')
        .map((line) => `\t\t  ${line}`)
        .join('\n');

    let output = `\t\tInput:\n${formattedInput}\n\t\tCommands executed:\n`;

    for (let i = 0; i < commands.length; i++) {
        const command = commands[i];
        const commandStr =
            command.params.length > 0 ? `${command.method}(${command.params.join(', ')})` : `${command.method}()`;

        const expectedStr = util.inspect(expected[i], {
            depth: 5,
            maxArrayLength: 100,
            maxStringLength: 200,
            breakLength: 60,
            compact: false,
            colors: false,
            showHidden: false,
        });

        const actualStr = util.inspect(actual[i], {
            depth: 5,
            maxArrayLength: 100,
            maxStringLength: 200,
            breakLength: 60,
            compact: false,
            colors: false,
            showHidden: false,
        });

        output += `\t\t  ${i + 1}. ${commandStr}\n`;
        output += `\t\t     Expected: ${expectedStr}\n`;
        output += `\t\t     Got: ${actualStr}\n`;
    }

    return output;
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

// Function to run command-based test cases
function runCommandBasedTest(runCode, testCase) {
    const { input, expected, commands } = testCase;

    // Create the object using the input parameters
    const obj = runCode(...input);

    // Execute each command and collect results
    const actualResults = [];
    let allPassed = true;

    for (let i = 0; i < commands.length; i++) {
        const command = commands[i];
        const expectedItem = expected[i];

        try {
            // Check if method exists
            if (typeof obj[command.method] !== 'function') {
                throw new TypeError(`${command.method} is not a function or does not exist on the returned object`);
            }

            // Execute the method on the object
            const actualResult = obj[command.method](...command.params);
            actualResults.push(actualResult);

            // Get comparison options (can be per-command or use defaults)
            const compareOptions = expectedItem.options || {};

            // Compare the result
            const passed = compareResults(actualResult, expectedItem.value, compareOptions);

            if (!passed) {
                allPassed = false;
            }
        } catch (error) {
            // If there's an error executing the command, treat it as a failed test
            actualResults.push(`Error: ${error.message}`);
            allPassed = false;
        }
    }

    return {
        passed: allPassed,
        expected: expected.map((e) => e.value),
        actual: actualResults,
        commands,
    };
}

// Function to run the test cases
function runTestCases(runCode, testcases, options) {
    return testcases.map((testCase, testIndex) => {
        const { input, expected, isPublic, description } = testCase;
        try {
            let result;

            // Handle commands-based testing
            if (options.type === 'commands') {
                result = runCommandBasedTest(runCode, testCase);
            } else {
                // Handle regular testing (non-commands)
                const actual = runCode(...input);
                const passed = compareResults(actual, expected, options);
                result = { passed, expected, actual };
            }

            // Return common structure with test-specific results
            return { testIndex, input, isPublic, description, ...result };
        } catch (error) {
            return { testIndex, error: error };
        }
    });
}

function runQuestions() {
    // get folder where the script is executed from

    let problemSet, questions;

    problemSet = readProblemSetInput();
    questions = readQuestionInput(problemSet);

    const allResults = questions.map((question) => {
        const { codePath, testCasesPath } = getCodeAndTestCasesPath(problemSet, question);
        const { testcases, options = {} } = require(testCasesPath); // Destructure testcases and options

        try {
            let runCode = silentRequire(codePath);

            if (options.monkeyPatch) {
                runCode = options.monkeyPatch(runCode);
            }

            runCode = silentRunCode(runCode);

            // Run the test cases
            const results = runTestCases(runCode, testcases, options);
            return { question, testcases, results };
        } catch (error) {
            // If there's an error loading or running the question, return error for all tests
            console.error(`\nError in ${problemSet}/${question}: ${error.message}\n`);
            return {
                question,
                testcases,
                results: [
                    {
                        testIndex: -1,
                        error: error,
                    },
                ],
            };
        }
    });

    allResults.forEach(({ question, results }) => {
        console.log(`${problemSet}/${question}`);
        results.forEach((testCase) => {
            if (testCase.error) {
                console.error(
                    `\tTest case ${testCase.testIndex + 1}: Error - ${testCase.error.message}` +
                        (testCase.description ? ` (${testCase.description})` : ''),
                );
            } else if (testCase.passed) {
                console.log(
                    `\tTest case ${testCase.testIndex + 1}: \tPassed ✅` +
                        (testCase.description ? ` (${testCase.description})` : ''),
                );
            } else {
                console.log(
                    `\tTest case ${testCase.testIndex + 1}: \tFailed ❌` +
                        (testCase.description ? ` (${testCase.description})` : ''),
                );
                if (testCase.isPublic) {
                    // Use command-based formatting if commands are present
                    if (testCase.commands) {
                        console.log(
                            formatCommandTestCaseOutput(
                                testCase.input,
                                testCase.commands,
                                testCase.expected,
                                testCase.actual,
                            ),
                        );
                    } else {
                        console.log(formatTestCaseOutput(testCase.input, testCase.expected, testCase.actual));
                    }
                    console.log();
                }
            }
        });
    });

    const summary = allResults
        .map(({ question, results, testcases }) => {
            const totalQuestions = testcases.length;
            let failed = results.filter((testCase) => !testCase.passed).flat().length;
            if (results[0].testIndex === -1) {
                failed = totalQuestions; // If there's an error loading/running the question, count all as failed
            }
            const passed = totalQuestions - failed;
            return { question, passed, failed, totalQuestions };
        })
        .sort((a, b) => +a.question.replace('q', '') - +b.question.replace('q', '')); // Sort by question number

    console.table(summary);

    // Calculate overall score and exit code
    const totalTests = summary.reduce((acc, cur) => acc + cur.totalQuestions, 0);
    const totalPassed = summary.reduce((acc, cur) => acc + cur.passed, 0);
    const allPassed = totalPassed === totalTests;

    return { totalTests, totalPassed, allPassed };
}

const result = runQuestions();
process.exit(result.allPassed ? 0 : 1);
