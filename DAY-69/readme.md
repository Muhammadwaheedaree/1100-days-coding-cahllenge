# Day 69: Learning TypeScript Enums

## Overview
On Day 69 of my 100 Days of Code challenge, I explored the concept of Enums in TypeScript. Enums are a powerful feature that allows you to define a set of named constant values representing discrete options or categories, providing a more readable and expressive way to handle related values.

## What I Learned

### Enums in TypeScript
Enums are a way to create a new data type composed of predefined, related values. They make code more readable and maintainable by giving meaningful names to these values.

#### Defining an Enum
Here's how you can define an enum in TypeScript:

```typescript
enum Days {
  Sunday,
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday
}
```

#### Using an Enum
You can use the enum values in your code as follows:

```typescript
const today: Days = Days.Wednesday;
console.log(`Today is ${Days[today]}`);
```

In this example:
- We define an enum called `Days` with a list of constant values starting from 0 by default.
- We assign the value `Days.Wednesday` to the variable `today`.
- We use `Days[today]` to retrieve and display the name of the day associated with the value in `today`.

### Benefits of Enums
- **Readability**: Enums make code more readable by providing human-readable names for specific values.
- **Type Safety**: Enums help ensure that only predefined values are used, reducing errors.
- **Maintainability**: They make the code easier to maintain by centralizing the definition of related values.

Enums are commonly used for categories such as days of the week, status codes, and other sets of related values.

## Conclusion
Learning about enums has been an insightful experience, highlighting how TypeScript can enhance the clarity and safety of your code. I'm excited to apply this knowledge to improve my TypeScript projects further.

Stay tuned for more updates as I continue my journey through the 100 Days of Code challenge!

---

Feel free to check out my GitHub repository to see all the code examples and progress so far.

---

Keep coding and happy learning!