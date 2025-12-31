---
mode: agent
---

Define the task to achieve, including specific requirements, constraints, and success criteria.

# Task to achieve

1. For the given problem, problem ${input:question}, read the problem statement from the README.md from the root directory.
    1. You can search for "## ${input:question}" in the README.md to find the relevant section.
2. For the selected problem, do the following:
    1. Create a new directory named `q${input:question}` under the problem set directory (e.g. ${input:question}TopicName).
    2. Populate the `testcase.js` file with 20 testcases of different normal and edge cases
    3. Generate a `solution.js` file that solves the problem.
    4. Generate a `code.js` file that contains only the function signature and sample calls with expected outputs as comments.
3. You can refer to `./instructor/sample` directory for reference of the file formats.
4. Stage and commit the changes.

# Constraints

1. The testcase.js file follows the schema as shown below:

    **For regular function testing (returns a single value):**

    ```js
    module.exports = {
        testcases: [
            // Public test cases (first 3)
            {
                input: [[1, 2, 3, 4, 5]],
                expected: 15,
                isPublic: true,
                description: 'Sum of [1, 2, 3, 4, 5] should be 15',
            },
        ],
        options: {
            type: 'floating point', // Optional field, options: undefined (exact match), 'floating point', 'JSON', or 'commands'
            precision: 6, // Optional field, number of decimal places for floating point comparison
        },
    };
    ```

    **For command-based testing (returns an object with methods):**

    ```js
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
                description: 'Circle with radius 5: getArea() and getCircumference()',
            },
        ],
        options: {
            type: 'commands', // MUST be 'commands' for command-based testing
        },
    };
    ```

2. Each testcase should follow the appropriate format:

    **Regular testcase format:**

    ```json
    {
        input: [para1, para2, ...],
        expected: 'expected outcome',
        isPublic: true, // true for the first 3
        description: 'Short description to be displayed in CLI when the testcase fails'
    }
    ```

    **Command-based testcase format:**

    ```json
    {
        input: [para1, para2, ...],
        commands: [
            { method: 'methodName', params: [param1, param2, ...] },
            { method: 'anotherMethod', params: [] }
        ],
        expected: [
            { value: expectedValue1, options: { type: 'floating point', precision: 3 } },
            { value: expectedValue2, options: {} }
        ],
        isPublic: true,
        description: 'Short description to be displayed in CLI when the testcase fails'
    }
    ```

3. Options field types:

    - `undefined` or omitted: Exact match comparison (===)
    - `'floating point'`: Floating point comparison with precision
    - `'JSON'`: Deep object equality comparison
    - `'commands'`: Command-based testing for objects with methods

4. For command-based tests:

    - Each `expected` item must have a `value` property and optional `options` property
    - The `options` for each command can specify comparison type per command
    - Use this when testing functions that return objects with methods

5. For command-based tests:

    - Each `expected` item must have a `value` property and optional `options` property
    - The `options` for each command can specify comparison type per command
    - Use this when testing functions that return objects with methods

6. The first three testcases will be public.
7. For `code.js` and `solution.js` remember to include the `module.exports` statement at the end of the file.
8. The available syntax to be used to solve the problems is to be read from `./instructor/syntax-list.md`

# Success criteria

1. You are to run the solution against the designed testcases and make sure all the test cases passes.
    1. You can use `node run pX qY` where `pX` and `qY` corresponds to the problem set number and the question number. (e.g. `node run p${input:question} q3`)
    2. You need to set the NODE_ENV environment variable to `test` to run the testcases.
    3. We are very very likely using powershell so use the following to run the testcases:
        ```ps
        $env:NODE_ENV="test"; node run pX qY
        ```
2. You are to fix the test cases and/or the solution.js file accordingly.
