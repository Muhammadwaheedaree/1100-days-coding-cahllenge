## Day 74: Debugging TypeScript in VS Code

### Overview

Today, I focused on mastering the art of debugging TypeScript applications in Visual Studio Code (VS Code). Debugging is a crucial skill for identifying and resolving issues in your code, ensuring it runs as expected. Below are the steps I followed to set up and utilize debugging in VS Code effectively.

### Steps to Debug TypeScript in VS Code

#### Step 1: Enable Source Maps
1. Open your `tsconfig.json` file.
2. Ensure the "sourceMap" option is set to `true` to generate source maps.
```json
{
  "compilerOptions": {
    "sourceMap": true
  }
}
```
3. Recompile your TypeScript code to generate source map files (e.g., `index.js.map`).

#### Step 2: Add Logic and Breakpoints
1. Open your `index.ts` file.
2. Add some logic and set a breakpoint by clicking on the line number where you want execution to pause.

#### Step 3: Configure Debugger
1. Go to the debug panel in VS Code.
2. Create a `launch.json` file by selecting `node.js` from the dropdown. This file configures VS Code for debugging.
```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "launch",
      "name": "Launch Program",
      "preLaunchTask": "tsc: build - tsconfig.json",
      "program": "${workspaceFolder}/index.ts",
      "outFiles": ["${workspaceFolder}/**/*.js"]
    }
  ]
}
```

#### Step 4: Add Pre-Launch Task
1. In `launch.json`, set the `preLaunchTask` to `tsc: build - tsconfig.json` to use the TypeScript compiler for building the application.

#### Step 5: Start Debugging
1. Open `index.ts`.
2. Start the debugging session by selecting "Launch Program" in the debug panel or by pressing `F5`.
3. The program will start and execution will halt at the breakpoint.

#### Step 6: Debugging Tools
1. Use the following tools in the debug panel to control execution:
   - **Step Over (F10)**: Execute the next line of code.
   - **Step Into**: Dive into functions.
   - **Step Out**: Exit the current function.
   - **Restart**: Restart the debugging session.
   - **Stop**: Terminate the debugging session.

#### Step 7: Inspect Variables
1. In the debug panel, use the "Variables" section to inspect current variable values.
2. Add variables to the "Watch" window to monitor their values as you step through the code.

#### Step 8: Console Logging
1. Add `console.log` statements in your code to output values to the console.
2. Start the debugging session and use `F10` to step through the code, observing the console output.

### Conclusion

Debugging in VS Code is a powerful feature that helps you understand your code's behavior and identify issues step by step. By following these steps, you can set up an effective debugging environment for your TypeScript applications.

This concludes the debugging section for Day 74. I'm excited to continue my coding journey with these new skills in my toolkit!

---

Happy coding! 🚀