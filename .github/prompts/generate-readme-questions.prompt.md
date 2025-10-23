---
mode: agent
---

Define the task to achieve, including specific requirements, constraints, and success criteria.

# Task to achieve

1. Take the input file ${input:source_file} as a reference source containing question stubs and examples.
2. Extract and analyze all the questions from the source file (typically JavaScript comments and function stubs).
3. Update the README.md file in the root directory with well-formatted questions that include:
    - Clear problem descriptions
    - Helpful hints and examples
    - Wishful thinking suggestions for questions that build upon earlier questions
    - Proper code examples with expected outputs
4. Ensure questions are numbered sequentially and properly formatted in Markdown.

# Constraints

1. **Source File Processing:**

    - Parse the ${input:source_file} to extract all questions and their context
    - Preserve the original question intent and examples from the source file
    - Extract function signatures, example calls, and expected outputs

2. **README.md Structure:**

    - Questions should be formatted as Markdown headers (e.g., `## 1. Question Title`)
    - Include proper code blocks with syntax highlighting (```js)
    - Maintain consistent formatting throughout
    - Do not modify the first section of debugging code.

3. **Wishful Thinking Integration:**

    - For questions that reference or build upon earlier questions, include a "Practice Wishful Thinking" section
    - Suggest breaking down complex problems into smaller helper functions
    - Encourage thinking about the problem at a higher level before implementation details
    - Examples of wishful thinking prompts:
        - "Imagine you already have a helper function that..."
        - "Break this down by wishing for functions like..."
        - "Use wishful thinking to structure your solution by assuming you have..."

4. **Code Examples:**

    - Preserve all example function calls and expected outputs from the source file
    - Format them properly in code blocks
    - Ensure examples are clear and help students understand the expected behavior

5. **Available Syntax:**

    - Reference `./syntax-list.md` to ensure all suggestions and hints use only allowed JavaScript constructs
    - Do not suggest any syntax or methods not covered in the syntax list

6. **Question Dependencies:**
    - When a question builds upon a previous question, explicitly mention the dependency
    - Suggest reusing functions from earlier questions where appropriate
    - Add wishful thinking guidance for these dependencies

# Success criteria

1. **Complete Question Extraction:**

    - All questions from the source file are successfully extracted and converted
    - No questions are missed or incorrectly interpreted

2. **Proper Markdown Formatting:**

    - README.md is valid Markdown with proper syntax highlighting
    - Questions are clearly structured and easy to read
    - Code examples are properly formatted

3. **Wishful Thinking Integration:**

    - Questions that build upon earlier questions include thoughtful wishful thinking guidance
    - Suggestions help students break down complex problems
    - Wishful thinking prompts are practical and relevant to each question

4. **Consistency with Source:**

    - Function signatures match the source file exactly
    - Example inputs and outputs are preserved accurately
    - Original intent and context of each question is maintained

5. **Educational Value:**
    - Questions flow logically from simple to complex
    - Hints and suggestions are helpful without giving away the solution
    - Students are guided to think about problems systematically

# Example Wishful Thinking Sections

For questions that build upon earlier questions, include sections like:

```markdown
> **Practice Wishful Thinking:** You already have a `isDivisibleBy(x, y)` function from question 2 that checks if one number is divisible by another. Use wishful thinking to break this problem down - imagine you can use `isDivisibleBy` to create helper functions like:
>
> -   `isDivisibleBy3(x)` - checks if x is divisible by 3
> -   `isDivisibleBy5(x)` - checks if x is divisible by 5
> -   `isDivisibleByBoth3And5(x)` - checks if x is divisible by both 3 and 5
>
> Write your main function using these imaginary helpers first, then implement them using the `isDivisibleBy` function you already have. This helps you focus on the conditional logic structure before worrying about the divisibility details.
```

For complex algorithms:

```markdown
> **Practice Wishful Thinking:** Break this problem down by imagining you already have helper functions to solve the subproblems. For example:
>
> -   Wish for a function `getLastDigit(number)` that extracts the rightmost digit
> -   Wish for a function `removeLastDigit(number)` that removes the rightmost digit
> -   Wish for a function `isEmpty(number)` that checks if we've processed all digits
>
> Write your main solution using these imaginary helpers first, focusing on the overall algorithm, then implement each helper function afterward.
```

# Additional Instructions

1. **Preserve Original Context:** Keep the exact function signatures, parameter names, and example calls from the source file
2. **Enhance Descriptions:** Expand on brief comments in the source file to create comprehensive problem descriptions
3. **Add Value:** Include helpful hints, tips, and explanations that aid student understanding
4. **Maintain Flow:** Ensure questions build upon each other logically and reference dependencies clearly
5. **Format Consistently:** Use consistent Markdown formatting throughout the document

The goal is to create a comprehensive, educational README.md that transforms the raw questions from the source file into a well-structured learning experience with proper wishful thinking guidance where appropriate.
