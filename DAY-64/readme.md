### Day 64: Learning TypeScript - Type Annotations With Objects

Today's progress in my #100DaysOfCode challenge was focused on understanding type annotations with objects in TypeScript. Here's a summary of what I learned:

📝 **Key Takeaways:**
- **Type Annotations:** Specify the types of properties that an object should have.
- **Optional Properties:** Use the `?` symbol to denote optional properties in the object type annotation.
- **Nested Objects:** Define nested objects with their own type annotations.

Here's an example demonstrating type annotations with objects:

```typescript
let personExOne: {
  name: string;
  age: number;
  jobTitle?: string;
  address: {
    street: string;
    city: string;
  };
} = {
  name: "Alice",
  age: 30,
  jobTitle: "Engineer",
  address: {
    street: "123 Main St",
    city: "Wonderland",
  },
};
```

Understanding type annotations with objects is crucial for ensuring type safety and clarity in TypeScript code.

#TypeScript #TypeAnnotations #Objects #Programming #Learning #Developer #CodeNewbie #TypeSafety

Keep coding and learning! 💻🚀
