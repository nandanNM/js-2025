let obj1 = { a: 1, b: 2 };
let obj2 = { b: 3, c: 4 };
let merged = Object.assign({}, obj1, obj2);
console.log(merged); // { a: 1, b: 3, c: 4 }
//👉 b: 2 is overwritten by b: 3 from obj2.

let user = { name: "Nandan", age: 21, city: "Kolkata" };
console.log(Object.keys(user)); // ["name", "age", "city"]

console.log(Object.values(user)); // ["Nandan", 21, "Kolkata"]

console.log(Object.entries(user));
// [ ["name", "Nandan"], ["age", 21], ["city", "Kolkata"] ]

let entries = [
  ["name", "Nandan"],
  ["age", 21],
];
let obj = Object.fromEntries(entries);
console.log(obj); // { name: "Nandan", age: 21 }

console.log(Object.hasOwn(user, "age")); // true
console.log(Object.hasOwn(user, "salary")); // false

let car = { brand: "Toyota" };
Object.freeze(car);
car.brand = "Honda"; // Won't change it not throw an error
console.log(car); // { brand: "Toyota" }

let book = { title: "JS Guide", pages: 300 };
Object.seal(book);
book.pages = 350; // Allowed
book.author = "John"; // Not allowed
console.log(book); // { title: "JS Guide", pages: 350 }
