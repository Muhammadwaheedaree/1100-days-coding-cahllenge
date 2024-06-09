# Day 67: Type Annotations with Arrays

Today, I delved into the realm of type annotations with arrays in TypeScript. Here's a summary of what I learned:

### Type Annotations with Arrays
- Type annotations with arrays allow us to specify the expected data types of array elements, ensuring type safety in our code.
- For instance, annotating an array of strings looks like this:
  ```typescript
  let fruits: string[] = ["apple", "banana", "cherry"];
  ```
- We can then iterate over the array using a loop or other methods and access each element with the assurance that it is of the specified type.

### Type Annotations with Multidimensional Arrays
- TypeScript supports multidimensional arrays with different element types.
- For example:
  ```typescript
  let arrayOne: number[] = [1, 2, 3, 4, 5];
  let arrayTwo: string[] = ["A", "B", "C"];
  let arrayThree: (string | number)[] = [1, 2, 3, 4, "A", "B", "C"];
  ```
- `arrayOne` is annotated as an array of numbers (`number[]`), `arrayTwo` as an array of strings (`string[]`), and `arrayThree` as an array that can hold elements of either type string or number (`(string | number)[]`).

Understanding and applying type annotations with arrays is crucial for maintaining code clarity and preventing type-related errors in TypeScript projects.

Let's keep exploring TypeScript to enhance our coding skills further!

Happy coding! 🚀👨‍💻