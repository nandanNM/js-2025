# Advanced Questions

## How does JavaScript handle object references?

- In JavaScript, objects are assigned and passed by reference, not by value. This means that when you assign an object to a variable or pass it to a function, you're working with a reference to the original object, not a copy of it.
  -- Assigning an object to another variable doesn’t create a new object; it copies the reference.
  -- Comparing two objects with == or === returns false unless they reference the same object.

  -- Passing an object to a function passes the reference, so modifications affect the original.

  -- To avoid modifying the original object, use shallow copies (...spread, Object.assign) or deep -- copies (JSON.parse(JSON.stringify(obj)), structured cloning, or libraries like Lodash's \_.cloneDeep).

## Explain the concept of object prototypes in JavaScript

- A prototype is an object from which another object inherits properties and methods. When you create an object, JavaScript automatically links it to a prototype.

- JavaScript first checks if the object itself has that property.
- If not, it looks up the prototype.

- If the property is not found, it keeps looking up the prototype chain until it reaches null.
