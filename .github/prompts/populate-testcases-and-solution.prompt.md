---
mode: agent
---

Define the task to achieve, including specific requirements, constraints, and success criteria.

# Task to achieve

1. For the given problem, problem ${input:problem}, read the problem statement from the README.md from the root directory.
    1. You can search for "## ${input:problem}" in the README.md to find the relevant section.
2. Populate the testcase.js file with 20 testcases of different edge cases
3. Generate a solution.js file that solves the problem.
4. Stage and commit the changes.

# Constraints

1. Each testcase should follow the following format:
    ```json
        {
            input: [para1, para2, ...],
            expected: 'expected outcome',
            isPublic: true, // true for the first 3
        },
    ```
2. The available syntax is to be read from `./instructor/syntax-list.md`

# Success criteria

1. You are to run the solution against the designed testcases and make sure all the test cases passes. You can use `node run pX qY` where `pX` and `qY` corresponds to the problem set number and the question number. (e.g. `node run p1 q3`)
2. You are to fix the test cases and/or the solution.js file accordingly.
