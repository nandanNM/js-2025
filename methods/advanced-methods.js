// Creates a new object with the specified prototype.
// Prototype-based inheritance
let parent = { greet: () => "Hello!" };
console.log(parent.greet()); // "Hello!"
let child = Object.create(parent);
console.log(child.greet()); // "Hello!"

console.log(Object.getPrototypeOf(child) === parent); // true

// If we used parent directly, every object would share the same properties.
//  But with Object.create(), each object can have its own independent properties.
let child1 = Object.create(parent);
let child2 = Object.create(parent);

child1.greet = () => "Hi!";
console.log(child1.greet()); // "Hi!"
console.log(child2.greet()); // "Hello!" (Still using parent's method)

let newProto = { sayHi: () => "Hi!" };
Object.setPrototypeOf(child, newProto);
console.log(child.sayHi()); // "Hi!"

// Cloning Objects

// In JavaScript, there are two types of copies:
// 1️⃣ Shallow Copy
// 2️⃣ Deep Copy

let obj = { a: 1, b: 2, c: 3 };
let clone = Object.assign({}, obj);
console.log(clone); // { a: 1, b: 2, c: 3 }
console.log(clone === obj); // false

let copy = { ...original };
console.log(copy); // { a: 1, b: 2 }

// 1️⃣ Shallow Copy
// A shallow copy copies the reference of nested objects instead of duplicating them.

// If you modify a nested object in the copy, the original object is also affected.

let obj1 = { name: "Nandan", details: { age: 21 } };
let obj2 = { ...obj1 };

obj2.name = "Manna";
obj2.details.age = 22; // ⚠️ Also changes obj1.details.age

console.log(obj1); // { name: "Nandan", details: { age: 22 } }
console.log(obj2); // { name: "Manna", details: { age: 22 } }

// 2️⃣ Deep Copy
// A deep copy creates a completely independent clone, including nested objects.
// Methods to Create a Deep Copy
let obj2 = { name: "Nandan", details: { age: 21 } };
let obj3 = JSON.parse(JSON.stringify(obj2));

obj2.details.age = 22; // ✅ Does NOT affect obj1

console.log(obj2.details.age); // 21
console.log(obj3.details.age); // 22
//  Cons: Does not work for functions, undefined, Date, or Map/Set.

let obj4 = { name: "Nandan", details: { age: 21 }, date: new Date() };
let obj5 = structuredClone(obj4);

obj5.details.age = 22;
console.log(obj4.details.age); // 21 ✅ Deep copy
console.log(obj5.date === obj4.date); // false ✅ Cloned correctly

let deepObj = { x: { y: 10 } };
let deepCopy = structuredClone(deepObj);
deepCopy.x.y = 20;
console.log(deepObj.x.y); // 10 (original unchanged)

// Defines a new property with fine-grained control.
let person = {};
Object.defineProperty(person, "name", {
  value: "Nandan",
  writable: false, // Cannot modify
  enumerable: true, // Appears in loops
  configurable: false, // Cannot delete
});
console.log(person.name); // "Nandan"
person.name = "Manna"; // Won't change
console.log(person.name); // "Nandan"

// Defines multiple properties at once.
let product = {};
Object.defineProperties(product, {
  name: { value: "Laptop", writable: false },
  price: { value: 50000, writable: true },
});
console.log(product.name); // "Laptop"
// Creates a new object with the specified prototype.
// Prototype-based inheritance
let parent = { greet: () => "Hello!" };
console.log(parent.greet()); // "Hello!"
let child = Object.create(parent);
console.log(child.greet()); // "Hello!"

console.log(Object.getPrototypeOf(child) === parent); // true

// If we used parent directly, every object would share the same properties.
//  But with Object.create(), each object can have its own independent properties.
let child1 = Object.create(parent);
let child2 = Object.create(parent);

child1.greet = () => "Hi!";
console.log(child1.greet()); // "Hi!"
console.log(child2.greet()); // "Hello!" (Still using parent's method)

let newProto = { sayHi: () => "Hi!" };
Object.setPrototypeOf(child, newProto);
console.log(child.sayHi()); // "Hi!"

// Cloning Objects

// In JavaScript, there are two types of copies:
// 1️⃣ Shallow Copy
// 2️⃣ Deep Copy

let obj = { a: 1, b: 2, c: 3 };
let clone = Object.assign({}, obj);
console.log(clone); // { a: 1, b: 2, c: 3 }
console.log(clone === obj); // false

let copy = { ...original };
console.log(copy); // { a: 1, b: 2 }

// 1️⃣ Shallow Copy
// A shallow copy copies the reference of nested objects instead of duplicating them.

// If you modify a nested object in the copy, the original object is also affected.

let obj1 = { name: "Nandan", details: { age: 21 } };
let obj2 = { ...obj1 };

obj2.name = "Manna";
obj2.details.age = 22; // ⚠️ Also changes obj1.details.age

console.log(obj1); // { name: "Nandan", details: { age: 22 } }
console.log(obj2); // { name: "Manna", details: { age: 22 } }

// 2️⃣ Deep Copy
// A deep copy creates a completely independent clone, including nested objects.
// Methods to Create a Deep Copy
let obj2 = { name: "Nandan", details: { age: 21 } };
let obj3 = JSON.parse(JSON.stringify(obj2));

obj2.details.age = 22; // ✅ Does NOT affect obj1

console.log(obj2.details.age); // 21
console.log(obj3.details.age); // 22
//  Cons: Does not work for functions, undefined, Date, or Map/Set.

let obj4 = { name: "Nandan", details: { age: 21 }, date: new Date() };
let obj5 = structuredClone(obj4);

obj5.details.age = 22;
console.log(obj4.details.age); // 21 ✅ Deep copy
console.log(obj5.date === obj4.date); // false ✅ Cloned correctly

let deepObj = { x: { y: 10 } };
let deepCopy = structuredClone(deepObj);
deepCopy.x.y = 20;
console.log(deepObj.x.y); // 10 (original unchanged)

// Defines a new property with fine-grained control.
let person = {};
Object.defineProperty(person, "name", {
  value: "Nandan",
  writable: false, // Cannot modify
  enumerable: true, // Appears in loops
  configurable: false, // Cannot delete
});
console.log(person.name); // "Nandan"
person.name = "Manna"; // Won't change
console.log(person.name); // "Nandan"

// Defines multiple properties at once.
let product = {};
Object.defineProperties(product, {
  name: { value: "Laptop", writable: false },
  price: { value: 50000, writable: true },
});
console.log(product.name); // "Laptop"
// Creates a new object with the specified prototype.
// Prototype-based inheritance
let parent = { greet: () => "Hello!" };
console.log(parent.greet()); // "Hello!"
let child = Object.create(parent);
console.log(child.greet()); // "Hello!"

console.log(Object.getPrototypeOf(child) === parent); // true

// If we used parent directly, every object would share the same properties.
//  But with Object.create(), each object can have its own independent properties.
let child1 = Object.create(parent);
let child2 = Object.create(parent);

child1.greet = () => "Hi!";
console.log(child1.greet()); // "Hi!"
console.log(child2.greet()); // "Hello!" (Still using parent's method)

let newProto = { sayHi: () => "Hi!" };
Object.setPrototypeOf(child, newProto);
console.log(child.sayHi()); // "Hi!"

// Cloning Objects

// In JavaScript, there are two types of copies:
// 1️⃣ Shallow Copy
// 2️⃣ Deep Copy

let obj = { a: 1, b: 2, c: 3 };
let clone = Object.assign({}, obj);
console.log(clone); // { a: 1, b: 2, c: 3 }
console.log(clone === obj); // false

let copy = { ...original };
console.log(copy); // { a: 1, b: 2 }

// 1️⃣ Shallow Copy
// A shallow copy copies the reference of nested objects instead of duplicating them.

// If you modify a nested object in the copy, the original object is also affected.

let obj1 = { name: "Nandan", details: { age: 21 } };
let obj2 = { ...obj1 };

obj2.name = "Manna";
obj2.details.age = 22; // ⚠️ Also changes obj1.details.age

console.log(obj1); // { name: "Nandan", details: { age: 22 } }
console.log(obj2); // { name: "Manna", details: { age: 22 } }

// 2️⃣ Deep Copy
// A deep copy creates a completely independent clone, including nested objects.
// Methods to Create a Deep Copy
let obj2 = { name: "Nandan", details: { age: 21 } };
let obj3 = JSON.parse(JSON.stringify(obj2));

obj2.details.age = 22; // ✅ Does NOT affect obj1

console.log(obj2.details.age); // 21
console.log(obj3.details.age); // 22
//  Cons: Does not work for functions, undefined, Date, or Map/Set.

let obj4 = { name: "Nandan", details: { age: 21 }, date: new Date() };
let obj5 = structuredClone(obj4);

obj5.details.age = 22;
console.log(obj4.details.age); // 21 ✅ Deep copy
console.log(obj5.date === obj4.date); // false ✅ Cloned correctly

let deepObj = { x: { y: 10 } };
let deepCopy = structuredClone(deepObj);
deepCopy.x.y = 20;
console.log(deepObj.x.y); // 10 (original unchanged)

// Defines a new property with fine-grained control.
let person = {};
Object.defineProperty(person, "name", {
  value: "Nandan",
  writable: false, // Cannot modify
  enumerable: true, // Appears in loops
  configurable: false, // Cannot delete
});
console.log(person.name); // "Nandan"
person.name = "Manna"; // Won't change
console.log(person.name); // "Nandan"

// Defines multiple properties at once.
let product = {};
Object.defineProperties(product, {
  name: { value: "Laptop", writable: false },
  price: { value: 50000, writable: true },
});
console.log(product.name); // "Laptop"
// Creates a new object with the specified prototype.
// Prototype-based inheritance
let parent = { greet: () => "Hello!" };
console.log(parent.greet()); // "Hello!"
let child = Object.create(parent);
console.log(child.greet()); // "Hello!"

console.log(Object.getPrototypeOf(child) === parent); // true

// If we used parent directly, every object would share the same properties.
//  But with Object.create(), each object can have its own independent properties.
let child1 = Object.create(parent);
let child2 = Object.create(parent);

child1.greet = () => "Hi!";
console.log(child1.greet()); // "Hi!"
console.log(child2.greet()); // "Hello!" (Still using parent's method)

let newProto = { sayHi: () => "Hi!" };
Object.setPrototypeOf(child, newProto);
console.log(child.sayHi()); // "Hi!"

// Cloning Objects

// In JavaScript, there are two types of copies:
// 1️⃣ Shallow Copy
// 2️⃣ Deep Copy

let obj = { a: 1, b: 2, c: 3 };
let clone = Object.assign({}, obj);
console.log(clone); // { a: 1, b: 2, c: 3 }
console.log(clone === obj); // false

let copy = { ...original };
console.log(copy); // { a: 1, b: 2 }

// 1️⃣ Shallow Copy
// A shallow copy copies the reference of nested objects instead of duplicating them.

// If you modify a nested object in the copy, the original object is also affected.

let obj1 = { name: "Nandan", details: { age: 21 } };
let obj2 = { ...obj1 };

obj2.name = "Manna";
obj2.details.age = 22; // ⚠️ Also changes obj1.details.age

console.log(obj1); // { name: "Nandan", details: { age: 22 } }
console.log(obj2); // { name: "Manna", details: { age: 22 } }

// 2️⃣ Deep Copy
// A deep copy creates a completely independent clone, including nested objects.
// Methods to Create a Deep Copy
let obj2 = { name: "Nandan", details: { age: 21 } };
let obj3 = JSON.parse(JSON.stringify(obj2));

obj2.details.age = 22; // ✅ Does NOT affect obj1

console.log(obj2.details.age); // 21
console.log(obj3.details.age); // 22
//  Cons: Does not work for functions, undefined, Date, or Map/Set.

let obj4 = { name: "Nandan", details: { age: 21 }, date: new Date() };
let obj5 = structuredClone(obj4);

obj5.details.age = 22;
console.log(obj4.details.age); // 21 ✅ Deep copy
console.log(obj5.date === obj4.date); // false ✅ Cloned correctly

let deepObj = { x: { y: 10 } };
let deepCopy = structuredClone(deepObj);
deepCopy.x.y = 20;
console.log(deepObj.x.y); // 10 (original unchanged)

// Defines a new property with fine-grained control.
let person = {};
Object.defineProperty(person, "name", {
  value: "Nandan",
  writable: false, // Cannot modify
  enumerable: true, // Appears in loops
  configurable: false, // Cannot delete
});
console.log(person.name); // "Nandan"
person.name = "Manna"; // Won't change
console.log(person.name); // "Nandan"

// Defines multiple properties at once.
let product = {};
Object.defineProperties(product, {
  name: { value: "Laptop", writable: false },
  price: { value: 50000, writable: true },
});
console.log(product.name); // "Laptop"
// Creates a new object with the specified prototype.
// Prototype-based inheritance
let parent = { greet: () => "Hello!" };
console.log(parent.greet()); // "Hello!"
let child = Object.create(parent);
console.log(child.greet()); // "Hello!"

console.log(Object.getPrototypeOf(child) === parent); // true

// If we used parent directly, every object would share the same properties.
//  But with Object.create(), each object can have its own independent properties.
let child1 = Object.create(parent);
let child2 = Object.create(parent);

child1.greet = () => "Hi!";
console.log(child1.greet()); // "Hi!"
console.log(child2.greet()); // "Hello!" (Still using parent's method)

let newProto = { sayHi: () => "Hi!" };
Object.setPrototypeOf(child, newProto);
console.log(child.sayHi()); // "Hi!"

// Cloning Objects

// In JavaScript, there are two types of copies:
// 1️⃣ Shallow Copy
// 2️⃣ Deep Copy

let obj = { a: 1, b: 2, c: 3 };
let clone = Object.assign({}, obj);
console.log(clone); // { a: 1, b: 2, c: 3 }
console.log(clone === obj); // false

let copy = { ...original };
console.log(copy); // { a: 1, b: 2 }

// 1️⃣ Shallow Copy
// A shallow copy copies the reference of nested objects instead of duplicating them.

// If you modify a nested object in the copy, the original object is also affected.

let obj1 = { name: "Nandan", details: { age: 21 } };
let obj2 = { ...obj1 };

obj2.name = "Manna";
obj2.details.age = 22; // ⚠️ Also changes obj1.details.age

console.log(obj1); // { name: "Nandan", details: { age: 22 } }
console.log(obj2); // { name: "Manna", details: { age: 22 } }

// 2️⃣ Deep Copy
// A deep copy creates a completely independent clone, including nested objects.
// Methods to Create a Deep Copy
let obj2 = { name: "Nandan", details: { age: 21 } };
let obj3 = JSON.parse(JSON.stringify(obj2));

obj2.details.age = 22; // ✅ Does NOT affect obj1

console.log(obj2.details.age); // 21
console.log(obj3.details.age); // 22
//  Cons: Does not work for functions, undefined, Date, or Map/Set.

let obj4 = { name: "Nandan", details: { age: 21 }, date: new Date() };
let obj5 = structuredClone(obj4);

obj5.details.age = 22;
console.log(obj4.details.age); // 21 ✅ Deep copy
console.log(obj5.date === obj4.date); // false ✅ Cloned correctly

let deepObj = { x: { y: 10 } };
let deepCopy = structuredClone(deepObj);
deepCopy.x.y = 20;
console.log(deepObj.x.y); // 10 (original unchanged)

// Defines a new property with fine-grained control.
let person = {};
Object.defineProperty(person, "name", {
  value: "Nandan",
  writable: false, // Cannot modify
  enumerable: true, // Appears in loops
  configurable: false, // Cannot delete
});
console.log(person.name); // "Nandan"
person.name = "Manna"; // Won't change
console.log(person.name); // "Nandan"

// Defines multiple properties at once.
let product = {};
Object.defineProperties(product, {
  name: { value: "Laptop", writable: false },
  price: { value: 50000, writable: true },
});
console.log(product.name); // "Laptop"
// Creates a new object with the specified prototype.
// Prototype-based inheritance
let parent = { greet: () => "Hello!" };
console.log(parent.greet()); // "Hello!"
let child = Object.create(parent);
console.log(child.greet()); // "Hello!"

console.log(Object.getPrototypeOf(child) === parent); // true

// If we used parent directly, every object would share the same properties.
//  But with Object.create(), each object can have its own independent properties.
let child1 = Object.create(parent);
let child2 = Object.create(parent);

child1.greet = () => "Hi!";
console.log(child1.greet()); // "Hi!"
console.log(child2.greet()); // "Hello!" (Still using parent's method)

let newProto = { sayHi: () => "Hi!" };
Object.setPrototypeOf(child, newProto);
console.log(child.sayHi()); // "Hi!"

// Cloning Objects

// In JavaScript, there are two types of copies:
// 1️⃣ Shallow Copy
// 2️⃣ Deep Copy

let obj = { a: 1, b: 2, c: 3 };
let clone = Object.assign({}, obj);
console.log(clone); // { a: 1, b: 2, c: 3 }
console.log(clone === obj); // false

let copy = { ...original };
console.log(copy); // { a: 1, b: 2 }

// 1️⃣ Shallow Copy
// A shallow copy copies the reference of nested objects instead of duplicating them.

// If you modify a nested object in the copy, the original object is also affected.

let obj1 = { name: "Nandan", details: { age: 21 } };
let obj2 = { ...obj1 };

obj2.name = "Manna";
obj2.details.age = 22; // ⚠️ Also changes obj1.details.age

console.log(obj1); // { name: "Nandan", details: { age: 22 } }
console.log(obj2); // { name: "Manna", details: { age: 22 } }

// 2️⃣ Deep Copy
// A deep copy creates a completely independent clone, including nested objects.
// Methods to Create a Deep Copy
let obj2 = { name: "Nandan", details: { age: 21 } };
let obj3 = JSON.parse(JSON.stringify(obj2));

obj2.details.age = 22; // ✅ Does NOT affect obj1

console.log(obj2.details.age); // 21
console.log(obj3.details.age); // 22
//  Cons: Does not work for functions, undefined, Date, or Map/Set.

let obj4 = { name: "Nandan", details: { age: 21 }, date: new Date() };
let obj5 = structuredClone(obj4);

obj5.details.age = 22;
console.log(obj4.details.age); // 21 ✅ Deep copy
console.log(obj5.date === obj4.date); // false ✅ Cloned correctly

let deepObj = { x: { y: 10 } };
let deepCopy = structuredClone(deepObj);
deepCopy.x.y = 20;
console.log(deepObj.x.y); // 10 (original unchanged)

// Defines a new property with fine-grained control.
let person = {};
Object.defineProperty(person, "name", {
  value: "Nandan",
  writable: false, // Cannot modify
  enumerable: true, // Appears in loops
  configurable: false, // Cannot delete
});
console.log(person.name); // "Nandan"
person.name = "Manna"; // Won't change
console.log(person.name); // "Nandan"

// Defines multiple properties at once.
let product = {};
Object.defineProperties(product, {
  name: { value: "Laptop", writable: false },
  price: { value: 50000, writable: true },
});
console.log(product.name); // "Laptop"
// Creates a new object with the specified prototype.
// Prototype-based inheritance
let parent = { greet: () => "Hello!" };
console.log(parent.greet()); // "Hello!"
let child = Object.create(parent);
console.log(child.greet()); // "Hello!"

console.log(Object.getPrototypeOf(child) === parent); // true

// If we used parent directly, every object would share the same properties.
//  But with Object.create(), each object can have its own independent properties.
let child1 = Object.create(parent);
let child2 = Object.create(parent);

child1.greet = () => "Hi!";
console.log(child1.greet()); // "Hi!"
console.log(child2.greet()); // "Hello!" (Still using parent's method)

let newProto = { sayHi: () => "Hi!" };
Object.setPrototypeOf(child, newProto);
console.log(child.sayHi()); // "Hi!"

// Cloning Objects

// In JavaScript, there are two types of copies:
// 1️⃣ Shallow Copy
// 2️⃣ Deep Copy

let obj = { a: 1, b: 2, c: 3 };
let clone = Object.assign({}, obj);
console.log(clone); // { a: 1, b: 2, c: 3 }
console.log(clone === obj); // false

let copy = { ...original };
console.log(copy); // { a: 1, b: 2 }

// 1️⃣ Shallow Copy
// A shallow copy copies the reference of nested objects instead of duplicating them.

// If you modify a nested object in the copy, the original object is also affected.

let obj1 = { name: "Nandan", details: { age: 21 } };
let obj2 = { ...obj1 };

obj2.name = "Manna";
obj2.details.age = 22; // ⚠️ Also changes obj1.details.age

console.log(obj1); // { name: "Nandan", details: { age: 22 } }
console.log(obj2); // { name: "Manna", details: { age: 22 } }

// 2️⃣ Deep Copy
// A deep copy creates a completely independent clone, including nested objects.
// Methods to Create a Deep Copy
let obj2 = { name: "Nandan", details: { age: 21 } };
let obj3 = JSON.parse(JSON.stringify(obj2));

obj2.details.age = 22; // ✅ Does NOT affect obj1

console.log(obj2.details.age); // 21
console.log(obj3.details.age); // 22
//  Cons: Does not work for functions, undefined, Date, or Map/Set.

let obj4 = { name: "Nandan", details: { age: 21 }, date: new Date() };
let obj5 = structuredClone(obj4);

obj5.details.age = 22;
console.log(obj4.details.age); // 21 ✅ Deep copy
console.log(obj5.date === obj4.date); // false ✅ Cloned correctly

let deepObj = { x: { y: 10 } };
let deepCopy = structuredClone(deepObj);
deepCopy.x.y = 20;
console.log(deepObj.x.y); // 10 (original unchanged)

// Defines a new property with fine-grained control.
let person = {};
Object.defineProperty(person, "name", {
  value: "Nandan",
  writable: false, // Cannot modify
  enumerable: true, // Appears in loops
  configurable: false, // Cannot delete
});
console.log(person.name); // "Nandan"
person.name = "Manna"; // Won't change
console.log(person.name); // "Nandan"

// Defines multiple properties at once.
let product = {};
Object.defineProperties(product, {
  name: { value: "Laptop", writable: false },
  price: { value: 50000, writable: true },
});
console.log(product.name); // "Laptop"
// Creates a new object with the specified prototype.
// Prototype-based inheritance
let parent = { greet: () => "Hello!" };
console.log(parent.greet()); // "Hello!"
let child = Object.create(parent);
console.log(child.greet()); // "Hello!"

console.log(Object.getPrototypeOf(child) === parent); // true

// If we used parent directly, every object would share the same properties.
//  But with Object.create(), each object can have its own independent properties.
let child1 = Object.create(parent);
let child2 = Object.create(parent);

child1.greet = () => "Hi!";
console.log(child1.greet()); // "Hi!"
console.log(child2.greet()); // "Hello!" (Still using parent's method)

let newProto = { sayHi: () => "Hi!" };
Object.setPrototypeOf(child, newProto);
console.log(child.sayHi()); // "Hi!"

// Cloning Objects

// In JavaScript, there are two types of copies:
// 1️⃣ Shallow Copy
// 2️⃣ Deep Copy

let obj = { a: 1, b: 2, c: 3 };
let clone = Object.assign({}, obj);
console.log(clone); // { a: 1, b: 2, c: 3 }
console.log(clone === obj); // false

let copy = { ...original };
console.log(copy); // { a: 1, b: 2 }

// 1️⃣ Shallow Copy
// A shallow copy copies the reference of nested objects instead of duplicating them.

// If you modify a nested object in the copy, the original object is also affected.

let obj1 = { name: "Nandan", details: { age: 21 } };
let obj2 = { ...obj1 };

obj2.name = "Manna";
obj2.details.age = 22; // ⚠️ Also changes obj1.details.age

console.log(obj1); // { name: "Nandan", details: { age: 22 } }
console.log(obj2); // { name: "Manna", details: { age: 22 } }

// 2️⃣ Deep Copy
// A deep copy creates a completely independent clone, including nested objects.
// Methods to Create a Deep Copy
let obj2 = { name: "Nandan", details: { age: 21 } };
let obj3 = JSON.parse(JSON.stringify(obj2));

obj2.details.age = 22; // ✅ Does NOT affect obj1

console.log(obj2.details.age); // 21
console.log(obj3.details.age); // 22
//  Cons: Does not work for functions, undefined, Date, or Map/Set.

let obj4 = { name: "Nandan", details: { age: 21 }, date: new Date() };
let obj5 = structuredClone(obj4);

obj5.details.age = 22;
console.log(obj4.details.age); // 21 ✅ Deep copy
console.log(obj5.date === obj4.date); // false ✅ Cloned correctly

let deepObj = { x: { y: 10 } };
let deepCopy = structuredClone(deepObj);
deepCopy.x.y = 20;
console.log(deepObj.x.y); // 10 (original unchanged)

// Defines a new property with fine-grained control.
let person = {};
Object.defineProperty(person, "name", {
  value: "Nandan",
  writable: false, // Cannot modify
  enumerable: true, // Appears in loops
  configurable: false, // Cannot delete
});
console.log(person.name); // "Nandan"
person.name = "Manna"; // Won't change
console.log(person.name); // "Nandan"

// Defines multiple properties at once.
let product = {};
Object.defineProperties(product, {
  name: { value: "Laptop", writable: false },
  price: { value: 50000, writable: true },
});
console.log(product.name); // "Laptop"
// Creates a new object with the specified prototype.
// Prototype-based inheritance
let parent = { greet: () => "Hello!" };
console.log(parent.greet()); // "Hello!"
let child = Object.create(parent);
console.log(child.greet()); // "Hello!"

console.log(Object.getPrototypeOf(child) === parent); // true

// If we used parent directly, every object would share the same properties.
//  But with Object.create(), each object can have its own independent properties.
let child1 = Object.create(parent);
let child2 = Object.create(parent);

child1.greet = () => "Hi!";
console.log(child1.greet()); // "Hi!"
console.log(child2.greet()); // "Hello!" (Still using parent's method)

let newProto = { sayHi: () => "Hi!" };
Object.setPrototypeOf(child, newProto);
console.log(child.sayHi()); // "Hi!"

// Cloning Objects

// In JavaScript, there are two types of copies:
// 1️⃣ Shallow Copy
// 2️⃣ Deep Copy

let obj = { a: 1, b: 2, c: 3 };
let clone = Object.assign({}, obj);
console.log(clone); // { a: 1, b: 2, c: 3 }
console.log(clone === obj); // false

let copy = { ...original };
console.log(copy); // { a: 1, b: 2 }

// 1️⃣ Shallow Copy
// A shallow copy copies the reference of nested objects instead of duplicating them.

// If you modify a nested object in the copy, the original object is also affected.

let obj1 = { name: "Nandan", details: { age: 21 } };
let obj2 = { ...obj1 };

obj2.name = "Manna";
obj2.details.age = 22; // ⚠️ Also changes obj1.details.age

console.log(obj1); // { name: "Nandan", details: { age: 22 } }
console.log(obj2); // { name: "Manna", details: { age: 22 } }

// 2️⃣ Deep Copy
// A deep copy creates a completely independent clone, including nested objects.
// Methods to Create a Deep Copy
let obj2 = { name: "Nandan", details: { age: 21 } };
let obj3 = JSON.parse(JSON.stringify(obj2));

obj2.details.age = 22; // ✅ Does NOT affect obj1

console.log(obj2.details.age); // 21
console.log(obj3.details.age); // 22
//  Cons: Does not work for functions, undefined, Date, or Map/Set.

let obj4 = { name: "Nandan", details: { age: 21 }, date: new Date() };
let obj5 = structuredClone(obj4);

obj5.details.age = 22;
console.log(obj4.details.age); // 21 ✅ Deep copy
console.log(obj5.date === obj4.date); // false ✅ Cloned correctly

let deepObj = { x: { y: 10 } };
let deepCopy = structuredClone(deepObj);
deepCopy.x.y = 20;
console.log(deepObj.x.y); // 10 (original unchanged)

// Defines a new property with fine-grained control.
let person = {};
Object.defineProperty(person, "name", {
  value: "Nandan",
  writable: false, // Cannot modify
  enumerable: true, // Appears in loops
  configurable: false, // Cannot delete
});
console.log(person.name); // "Nandan"
person.name = "Manna"; // Won't change
console.log(person.name); // "Nandan"

// Defines multiple properties at once.
let product = {};
Object.defineProperties(product, {
  name: { value: "Laptop", writable: false },
  price: { value: 50000, writable: true },
});
console.log(product.name); // "Laptop"
