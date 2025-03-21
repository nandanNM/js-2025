let age = 18;

if (age >= 18) {
  console.log("You can vote!");
} else {
  console.log("You cannot vote yet.");
}

let day = 3;
// switch
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  default:
    console.log("Invalid day");
}

let age2 = 20;
let message = age2 >= 18 ? "Adult" : "Minor";
console.log(message); // "Adult"

// && (AND): Executes second expression if the first is true.
// || (OR): Executes second expression if the first is false.
// ?? (Nullish Coalescing): Returns the right operand if the left is null or undefined.

let user = "Nandan";
console.log(user && "Welcome!"); // "Welcome!"

let myname = "";
console.log(myname || "Guest"); // "Guest"

let value = null;
console.log(value ?? "Default Value"); // "Default Value"

// Optional Chaining (?.)

let person = { name: "Nandan", address: { city: "Kolkata" } };
console.log(person.address?.city); // "Kolkata"
console.log(person.contact?.phone); // `undefined` (no error)

let a = 0;
let b = "0";
console.log(a == b); // true
console.log(a === b); // false

let obj = {};
if (obj) {
  console.log("Object is truthy"); // this run because obj is truthy
} else {
  console.log("Object is falsy");
}
