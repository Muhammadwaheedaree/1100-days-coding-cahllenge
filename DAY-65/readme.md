# Day 65: Type Annotations with Functions in TypeScript

## Overview
Today, I explored how to use type annotations with functions in TypeScript. This includes specifying types for function parameters, return values, optional and default parameters, rest parameters, arrow functions, anonymous functions, and understanding the `void` and `never` types.

## Key Learnings

### Type Annotations with Functions
Type annotations in TypeScript allow you to specify the data types for function parameters and return values. This helps in ensuring type safety and making the code more readable and maintainable.

```typescript
// Function to calculate the area of a rectangle
function calculateRectangleArea(lengthRectAngle: number, widthOfRectAngle: number): number {
  return lengthRectAngle * widthOfRectAngle;
}

const lengthRectAngle = 5;
const widthOfRectAngle = 3;
const area = calculateRectangleArea(lengthRectAngle, widthOfRectAngle);
console.log(`The area of the rectangle is: ${area}`);
```

### Optional and Default Parameters
TypeScript allows you to make function parameters optional or provide default values, enhancing flexibility.

```typescript
// Optional Parameters
function greetOptional(name: string, age?: number) {
  if (age !== undefined) {
    console.log(`Hello, ${name}! You are ${age} years old.`);
  } else {
    console.log(`Hello, ${name}!`);
  }
}

greetOptional("Alice"); // Output: "Hello, Alice!"
greetOptional("Bob", 30); // Output: "Hello, Bob! You are 30 years old."

// Default Parameters
function greetDefault(name: string, age: number = 25) {
  console.log(`Hello, ${name}! You are ${age} years old.`);
}

greetDefault("Alice"); // Output: "Hello, Alice! You are 25 years old."
greetDefault("Bob", 30); // Output: "Hello, Bob! You are 30 years old."
```

### Function Rest Parameter
Rest parameters allow a function to accept an indefinite number of arguments as an array.

```typescript
// Function with a rest parameter and type annotations
function addAll(...nums: number[]): number {
  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    result += nums[i];
  }
  return result;
}

console.log(addAll(10, 20, 30, 100, 10.5, +true)); // Output: 170.5
```

### Arrow Functions
Arrow functions offer a concise syntax for defining functions.

```typescript
const addWithArrow = (num1: number, num2: number): number => num1 + num2;
console.log(addWithArrow(10, 20)); // Output: 30
```

### Anonymous Functions
Anonymous functions are functions without a name, often used in function expressions.

```typescript
const add = function (num1: number, num2: number): number {
  return num1 + num2;
};
console.log(add(10, 20)); // Output: 30
```

### `void` and `never` Types
- **`void` Type**: Indicates the absence of a value, often used for functions that don't return a value.
- **`never` Type**: Represents values that never occur, used for functions that throw exceptions or never return.

```typescript
// void
function greet(name: string): void {
  console.log(`Hello, ${name}!`);
}

// never
function throwError(message: string): never {
  throw new Error(message);
}

function infiniteLoop(): never {
  while (true) {
    // Infinite loop
  }
}
```

## Conclusion
Understanding type annotations with functions in TypeScript enhances code reliability and readability. It ensures that functions are used correctly, with appropriate parameter types and return values, and helps in catching errors early in the development process.