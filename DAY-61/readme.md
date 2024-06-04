# Day 61: JavaScript Arrow Functions and JavaScript Specials

## What I Learned

### Arrow Functions
Arrow functions provide a concise syntax for writing functions in JavaScript. They have several advantages and characteristics that differentiate them from traditional function expressions:

- **Shorter Syntax**: Arrow functions are written using the `=>` syntax.
- **Implicit Return**: If the function body contains only a single expression, it returns the result of that expression without needing an explicit `return` statement.
- **No `this` Binding**: Arrow functions do not have their own `this` context. Instead, they inherit `this` from the surrounding code.

### JavaScript Specials
This section covers some special aspects and subtle points in JavaScript that are important to understand for writing robust code.

#### Code Structure
- **Semicolons**: Statements are usually delimited by semicolons. JavaScript has automatic semicolon insertion, but it's recommended to explicitly use semicolons to avoid unexpected errors.
- **Blocks**: Semicolons are not required after code blocks `{...}` and constructs like loops.

#### Strict Mode
- **'use strict'**: This directive enables strict mode, which catches common coding errors and disables some features that are confusing or poorly thought out. It should be placed at the top of scripts or functions.

#### Variables
- **Declaration**: Variables can be declared using `let`, `const`, and `var`. 
- **Naming**: Variable names can include letters, digits (not as the first character), `$`, and `_`.
- **Types**: JavaScript has dynamic typing and supports multiple data types, including `number`, `bigint`, `string`, `boolean`, `null`, `undefined`, `object`, and `symbol`.

#### Interaction
Basic UI functions include:
- `prompt(question, [default])`: Asks for input and returns it.
- `confirm(question)`: Asks for confirmation and returns `true` or `false`.
- `alert(message)`: Displays a message.

#### Operators
JavaScript supports various operators:
- **Arithmetical**: `+`, `-`, `*`, `/`, `%`, `**`.
- **Assignment**: `=`, `+=`, `-=`, etc.
- **Bitwise**: Works with 32-bit integers.
- **Conditional**: `cond ? resultA : resultB`.
- **Logical**: `&&`, `||`, `!`.
- **Nullish Coalescing**: `??`.
- **Comparison**: `==`, `===`, `>`, `<`, etc.

#### Loops
Three main types of loops:
- `while`
- `do...while`
- `for`

#### The "switch" Construct
Used to replace multiple `if` checks. It uses strict equality `===` for comparisons.

#### Functions
Three ways to create functions:
- **Function Declaration**
- **Function Expression**
- **Arrow Functions**

## Article Source
For more detailed information, please refer to the original articles:

- [JavaScript Arrow Functions](https://javascript.info/arrow-functions-basics)
- [JavaScript Specials](https://javascript.info/javascript-specials)

