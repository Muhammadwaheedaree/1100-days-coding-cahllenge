# Day 70: Learning TypeScript Interfaces

## Overview
On Day 70 of my 100 Days of Code challenge, I delved into TypeScript interfaces. Interfaces in TypeScript are a powerful way to define contracts or blueprints for objects, specifying the properties, methods, and their types that the objects must implement. This enhances type safety and code readability.

## What I Learned

### Defining Interfaces
An interface defines the shape and structure of an object, specifying the properties and methods that the object should have.

#### Example: Basic Interface
```typescript
interface PersonEx1 {
  name: string;
  age: number;
}

const John: PersonEx1 = {
  name: "John",
  age: 30,
};
```
In this example:
- We define an interface `PersonEx1` with two properties: `name` (a string) and `age` (a number).
- We create an object `John` that adheres to this interface.

### Interface Methods and Parameters
Interfaces can also define the signatures of methods that objects should implement.

#### Example: Interface with Methods
```typescript
interface PersonEx2 {
  name: string;
  age: number;
  greet(message: string): void;
}

const Sarah: PersonEx2 = {
  name: "Sarah",
  age: 30,
  greet(message: string) {
    console.log(`${this.name} says: ${message}`);
  },
};

Sarah.greet("Hello, TypeScript!"); // Output: Sarah says: Hello, TypeScript!
```
In this example:
- The `PersonEx2` interface includes a `greet` method.
- The `Sarah` object implements the `PersonEx2` interface, including the `greet` method.

### Reopening Interfaces
You can extend interfaces by reopening them and adding new properties or methods.

#### Example: Interface Reopening
```typescript
interface Settings {
  readonly theme: boolean;
  font: string;
}

interface Settings {
  sidebar: boolean;
}

interface Settings {
  external: boolean;
}

let userSettings: Settings = {
  theme: true,
  font: "Open Sans",
  sidebar: false,
  external: true
};
```
In this example:
- We initially define the `Settings` interface with `theme` and `font`.
- We reopen the `Settings` interface to add `sidebar` and `external`.

### Built-in Interfaces
TypeScript provides built-in interfaces for standard objects, such as HTML elements in the DOM.

#### Example: HTMLImageElement Interface
```typescript
const imgElement: HTMLImageElement = document.createElement("img");
imgElement.src = "image.jpg";
imgElement.alt = "My Image";

if (imgElement.complete) {
    console.log(`Image dimensions: ${imgElement.naturalWidth}x${imgElement.naturalHeight}`);
} else {
    imgElement.addEventListener("load", () => {
        console.log(`Image dimensions: ${imgElement.naturalWidth}x${imgElement.naturalHeight}`);
    });
}
```
In this example, we use the `HTMLImageElement` interface to manipulate an image element in a type-safe manner.

### Interfaces vs. Type Aliases
Interfaces and type aliases can both define custom types, but they have different capabilities and use cases.

#### Example: Interfaces vs. Type Aliases
```typescript
// Using Interface
interface PersonExInterface {
  name: string;
  age: number;
}

// Using Type Alias
type PersonExType = {
  name: string;
  age: number;
};

// Extending Interface
interface AnimalExInterface {
  type: string;
}

interface Dog extends AnimalExInterface {
  bark(): void;
}

class Labrador implements Dog {
  type: string = "dog";
  bark() {
    console.log("Woof!");
  }
}

// Using Intersection Type with Type Alias
type AnimalExType = {
  type: string;
};

type Monkey = AnimalExType & {
  bark(): void;
};

const labrador: Monkey = {
  type: "monkey",
  bark() {
    console.log("Woof!");
  },
};
```

## Conclusion
Learning about interfaces has significantly enhanced my understanding of TypeScript, particularly how to define and enforce object structures. Interfaces improve type safety, code clarity, and maintainability. Stay tuned for more updates as I continue my journey through the 100 Days of Code challenge!

---

Keep coding and happy learning!
