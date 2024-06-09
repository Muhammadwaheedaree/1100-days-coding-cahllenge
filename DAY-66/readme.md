# Day 66: TypeScript Type System Concepts

### Union Types
Union types allow a variable to hold values of multiple types. They are denoted using the `|` symbol between the types.
```typescript
let myVar: string | number;
myVar = "Hello"; // Valid assignment
myVar = 42;      // Valid assignment
```
In this example, `myVar` can hold either a string or a number.

### Literal Types
Literal types specify exact values a variable can hold. This enhances type safety by restricting the values to specific literals.
```typescript
let direction: "left" | "right" | "up" | "down";
```
The `direction` variable can only be assigned one of the specified string literals.

### Nullable Types
Nullable types allow a variable to have a specific type or the `null` value, making it clear that the variable might be absent or uninitialized.
```typescript
let username: string | null = "Glicher";
let age: number | null = null;
```
This example shows `username` can be a string or `null`, and `age` can be a number or `null`.

### Type Alias
Type aliases create custom names for types, enhancing readability and maintainability.
```typescript
type MyString = string;
type MyStringOrNumber = string | number;

let myName: MyString = "Glicher";
let myValue: MyStringOrNumber = 10;
```
Type aliases can also define complex object structures.
```typescript
type Employee = {
  name: string;
  age: number;
  email?: string;
};

const alice: Employee = { name: "Alice", age: 30, email: "alice@example.com" };
const bob: Employee = { name: "Bob", age: 25 };
```
### Intersection Types
Intersection types combine multiple types into one, including all properties from the intersected types.
```typescript
type FirstType = { name: string; age: number; };
type SecondType = { address: string; phone: string; };
type CombinedType = FirstType & SecondType;

const person: CombinedType = {
  name: 'John Doe',
  age: 30,
  address: '123 Main St',
  phone: '123-456-7890'
};
```
In this example, `CombinedType` includes properties from both `FirstType` and `SecondType`.

These TypeScript features provide a robust type system, ensuring code safety, readability, and maintainability.