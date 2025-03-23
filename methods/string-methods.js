let str = "Hello, World!";
// .length → Returns the length of the string
console.log(str.length); // 13

// .toUpperCase() → Converts to uppercase
console.log(str.toUpperCase()); // "HELLO, WORLD!"

// .toLowerCase() → Converts to lowercase
console.log(str.toLowerCase()); // "hello, world!"

// .charAt(index) → Returns character at a given index
console.log(str.charAt(7)); // "W"

// .indexOf(substring) → Finds first occurrence of a substring
console.log(str.indexOf("World")); // 7

// .slice(start, end) → Extracts part of a string
console.log(str.slice(0, 5)); // "Hello"

// .replace(old, new) → Replaces a part of the string
console.log(str.replace("World", "JavaScript")); // "Hello, JavaScript!"

// .split(separator) → Splits string into an array
console.log(str.split(", ")); // ["Hello", "World!"]
