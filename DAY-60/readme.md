# Day 60: JavaScript Functions and Function Expressions

## What I Learned

### Functions
- **Function Declaration Syntax:**
  ```javascript
  function name(parameters, delimited, by, comma) {
    /* code */
  }
  ```
- **Key Points:**
  - Values passed to a function as parameters are copied to its local variables.
  - A function can access outer variables, but outer code cannot access the function's local variables.
  - Functions can return a value; if no value is returned, the result is `undefined`.
  - Prefer using local variables and parameters for cleaner and more understandable code.
  - Function names should be descriptive, usually using verbs, and common prefixes like `create…`, `show…`, `get…`, `check…`.

### Function Expressions
- **Function Expressions:**
  - Functions can be assigned, copied, or declared anywhere in the code.
  - If a function is declared as a separate statement, it's a “Function Declaration.”
  - If a function is created as part of an expression, it's a “Function Expression.”
  - **Function Declarations** are processed before the code block is executed, making them visible throughout the block.
  - **Function Expressions** are created when the execution flow reaches them.
  - Function Declarations are usually more readable and flexible, thus preferable. Function Expressions are used when Function Declarations are not suitable for the task.

### Articles
- [JavaScript Functions](https://javascript.info/function-basics)
- [JavaScript Function Expressions](https://javascript.info/function-expressions)