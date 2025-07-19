/**
 * You will be given a series of commands. There are 2 types of commands
 * 1. def [VAR_NAME] [VALUE] - This command will define a variable VAR_NAME with the value VALUE
 *      The value will be in the range of [-1000, 1000]
 *      No two variables are ever defined to have the same numeric value at the same time.
 *      A redefinition of a variable simply overwrites the old definition.
 * 2. calc [EXPR] = - This is a calculation command,
 *      it starts with the "calc" keywords, followed by 1 to 15 variables separated by addition or subtraction operators.
 *      Based on the definitions of the variables, you are to calculate the value of the expression.
 *      There are 3 possible situations:
 *          1. The expression contains unknown variables - In this case, you will output "invalid"
 *          2. The expression evaluates to a value that maps to existing variable - In this case, output the variable name.
 *          3. The expression evaluates to a value that is NOT mapped to any existing variable - output "unknown"
 *
 * @param {string[]} commands - An array of strings where each string is a command.
 * @returns {string[]} - An array of strings where each string is the output of the calculation command.
 *
 * @example
 * def foo 3
 * calc foo + bar
 * def bar 7
 * def programming 10
 * calc foo + bar
 * def is 4
 * def fun 8
 * calc programming - is + fun
 * def fun 1
 * calc programming - is + fun
 *
 * Output: ['invalid', 'programming', 'unknown', 'bar']
 *
 * @explanation
 * For the first example:
 * - The first command defines the variable "foo" to be 3
 * - The second command calculates foo + bar, which is invalid since "bar" is not defined yet.
 * - The third command defines the variable "bar" to be 7
 * - The fourth command defines the variable "programming" to be 10
 * - The fifth command calculates foo + bar, which is 3 + 7 = 10, and 10 maps to the variable "programming"
 * - The sixth command defines the variable "is" to be 4
 * - The seventh command defines the variable "fun" to be 8
 * - The eighth command calculates programming - is + fun, which is 10 - 4 + 8 = 14, and since 14 is not mapped to any variable, the output is "unknown"
 * - The ninth command redefines the variable "fun" to be 1, it overwrites the old definition
 * - The tenth command calculates programming - is + fun, which is 10 - 4 + 1 = 7, and 7 maps to the variable "bar"
 *
 */
function evaluateCommands(commands) {
    // Write your code here
    const variables = {};
    const reverseVariables = {};
    let result = [];
    for (let i = 0; i < commands.length; i++) {
        const command = commands[i];
        const commandsArray = command.split(' ');
        const action = commandsArray[0];

        if (action === 'def') {
            const variable = commandsArray[1];
            const value = +commandsArray[2];
            variables[variable] = value;
            reverseVariables[value] = variable;
        } else if (action === 'calc') {
            let value = variables[commandsArray[1]];
            let invalid = value === undefined;
            for (let j = 2; j < commandsArray.length && !invalid; j += 2) {
                const operator = commandsArray[j];
                const variable = commandsArray[j + 1];
                if (variables[variable] === undefined) {
                    invalid = true;
                } else if (operator === '+') {
                    value += variables[variable];
                } else {
                    value -= variables[variable];
                }
            }
            if (invalid) {
                result.push('invalid');
            } else if (reverseVariables[value] === undefined) {
                result.push('unknown');
            } else {
                result.push(reverseVariables[value]);
            }
        }
    }
    return result;
}

// Your own test cases
// e.g.;

console.log(evaluateCommands(['def foo 3', 'calc foo + bar', 'def bar 7', 'def programming 10', 'calc foo + bar']));

module.exports = evaluateCommands;
