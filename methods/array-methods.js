let numbers = [1, 2, 3, 4, 5];
let citys = ["kolkata", "delhi", "bangalore", "mumbai", "chennai"];
let contrys = {
  kolkata: "india",
  delhi: "india",
  bangalore: "india",
  mumbai: "india",
  chennai: "india",
};
console.log(contrys["kolkata"]); //

// push() - Add element at the end
numbers.push(6);
console.log(numbers); // [1, 2, 3, 4, 5, 6]

// pop() - Remove last element
numbers.pop();
console.log(numbers); // [1, 2, 3, 4, 5]

// shift() - Remove first element
numbers.shift();
console.log(numbers); // [2, 3, 4, 5]

// unshift() - Add element at the beginning
numbers.unshift(1);
console.log(numbers); // [1, 2, 3, 4, 5]

const array1 = ["a", "b", "c"];
const array2 = ["d", "e", "f"];
const array3 = array1.concat(array2);

console.log(array3);
// Expected output: Array ["a", "b", "c", "d", "e", "f"]

// Iteration Methods

// map() - Create a new array by multiplying each number by 2
let doubled = numbers.map((num) => num * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

// filter() - Get numbers greater than 3
let filtered = numbers.filter((num) => num > 3);
console.log(filtered); // [4, 5]

// forEach() - Loop through elements
numbers.forEach((num) => console.log(num * 2)); // 2, 4, 6, 8, 10

// reduce() - Sum all numbers
const sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);
console.log(sum); // 15

let fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];
let count = fruits.reduce((acc, fruit) => {
  console.log(fruit, acc);
  return acc;
}, {});
console.log(count); // { apple: 3, banana: 2, orange: 1 }
