# 100 Days of TypeScript - Day 55

## Overview
On Day 55 of my 100 Days of TypeScript challenge, I explored the basic data types in JavaScript and the browser-specific functions to interact with visitors.

## Topics Covered

### JavaScript Data Types
JavaScript has 8 basic data types:
1. **Number**: for numbers of any kind: integer or floating-point. Integers are limited by ±(2^53 - 1).
2. **BigInt**: for integer numbers of arbitrary length.
3. **String**: for strings. A string may have zero or more characters, there’s no separate single-character type.
4. **Boolean**: for true/false values.
5. **Null**: for unknown values – a standalone type that has a single value null.
6. **Undefined**: for unassigned values – a standalone type that has a single value undefined.
7. **Symbol**: for unique identifiers.
8. **Object**: for more complex data structures.

The `typeof` operator allows us to see which type is stored in a variable. It returns a string with the name of the type.

### Browser-Specific Functions
We covered 3 browser-specific functions to interact with visitors:
1. **alert**: shows a message.
2. **prompt****: shows a message asking the user to input text. It returns the text or, if Cancel button or Esc is clicked, null.
3. **confirm**: shows a message and waits for the user to press “OK” or “Cancel”. It returns true for OK and false for Cancel/Esc.

All these methods are modal: they pause script execution and don’t allow the visitor to interact with the rest of the page until the window has been dismissed.

## Article Source Links
- [JavaScript Data Types](https://javascript.info/types)
- [Browser-Specific Functions](https://javascript.info/alert-prompt-confirm)

---

Join me on this learning journey! #100DaysOfCode #TypeScript #JavaScript #WebDevelopment
