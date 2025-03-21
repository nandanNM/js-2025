//  Primitive Data Types (Immutable)
// ✅ Stored directly in memory
// ✅ Immutable (Cannot be changed directly)
// ✅ Compared by value (not by reference)

// "If we change the value of the variable, it will not change the value in the memory"
// ✅ True for primitive values
// ❌ False for reference values (unless copied properly)
let name = "John"; // string
let age = 30; // integer
let isStudent = true; // boolean
let height = 1.75; // float
let weight = 75.5; // float
let favoriteFruit = null; // null
let favoriteMusician = undefined; // undefined

let symbol = Symbol("mySymbol"); // symbol
let bigInt = BigInt(123456789); // bigint -> large number can't be stored in a number variable without loss of precision
// if we have a large number so it is stored in bigint data type

let text = "Hello";
text[0] = "Y"; // ❌ Does nothing (immutable)
console.log(text); // "Hello"

// Non-Primitive Data Types (Reference Types)
// ✅ Stored as references in memory
// ✅ Mutable (Can be modified directly)
// ✅ Compared by reference (not value)

let person = {
  name: "John",
  age: 30,
  isStudent: true,
};

person.name = "Jane"; // ✅ Mutable (Can be modified directly)
console.log(person); // { name: 'Jane', age: 30, isStudent: true }

let array = [1, 2, 3];
array[0] = 4; // ✅ Mutable (Can be modified directly)
console.log(array); // [4, 2, 3]

function add(a, b) {
  return a + b;
}

let result = add(2, 3); // ✅ Mutable (Can be modified directly)
console.log(result); // 5

// Data Type	 Primitive	       Non-Primitive
// Storage	   Stored by value	 Stored by reference
// Mutability	 Immutable	       Mutable
// Size	       Fixed  size       Dynamic size in memory (can grow)
// Comparison	 Compared by value	Compared by reference

//Example of Value vs Reference

// Primitive (Value-based)
let a = 10;
let b = a;
b = 20;
console.log(a); // 10 (original value remains unchanged)

// Non-Primitive (Reference-based)
let obj1 = { name: "Nandan" };
let obj2 = obj1; // Reference is copied
// obj2 store obj1 reference
obj2.name = "Manna";
console.log(obj1.name); // "Manna" (Both point to the same object)

// some weird  example

console.log(typeof undefined); // "undefined"
console.log(typeof null); // "object"
console.log(typeof NaN); // "number"
console.log(typeof Symbol()); // "symbol"
console.log(typeof []); // "object"
console.log(typeof {}); // "object"
console.log(typeof function () {}); // "function"

console.log(NaN === NaN); // false
console.log(null > 0); // false
console.log(null < 0); // false
console.log(null == 0); // false
console.log(null >= 0); // true
console.log(null <= 0); // true
