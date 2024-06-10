# Day 68: TypeScript Tuples

Today, I explored the concept of tuples in TypeScript. Tuples are similar to arrays but have a fixed number of elements with specific types at each position. Here’s a summary of what I learned:

## Tuples in TypeScript

A tuple in TypeScript allows you to create an array with a fixed number of elements, where each element has a specific type. This provides more precise type checking compared to regular arrays.

### Defining a Tuple Type

You can define a tuple type by specifying the types of its elements in a fixed order. For example:

```typescript
// Defining a tuple type
let article: readonly [number, string, boolean] = [11, "Title One", true];
```

### Working with Tuples

You can assign new values to a tuple variable as long as the new values match the defined types and order:

```typescript
// Assigning a new tuple value to the `article` variable
article = [12, "Title Two", false];
```

### Restrictions with Tuples

Tuples are fixed in size, meaning you can't add or remove elements once they are defined. Attempting to push a new element into a tuple will result in an error:

```typescript
// Trying to push a new element into a tuple (will result in an error)
// article.push(100);
```

### Destructuring Tuples

You can use destructuring to extract and assign the individual elements of a tuple to variables:

```typescript
// Destructuring the tuple into individual variables
const [id, title, published] = article;
console.log(id);       // Output: 12
console.log(title);    // Output: "Title Two"
console.log(published);// Output: false
```

## Summary

- Tuples in TypeScript are arrays with a fixed number of elements, each with a specific type.
- Tuples provide better type checking and enforce the order and types of elements.
- You can reassign tuples with new values that match the defined type structure.
- Tuples are immutable in size; you can't add or remove elements once defined.
- Destructuring allows you to extract individual elements from a tuple easily.

TypeScript tuples are a powerful feature that enhances type safety and precision in your code, making it easier to manage and understand complex data structures.

Excited to continue my journey of learning TypeScript and improving my coding skills! 🚀