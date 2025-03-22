let num = 123.456;
// .toFixed(decimals) → Rounds to a fixed decimal
console.log(num.toFixed(2)); // "123.46" returns string

// .toPrecision(digits) → Rounds to specified length
console.log(num.toPrecision(5)); // "123.46" cut  digits returns  string (Always returns string)
console.log(num.toPrecision(9)); // "123.456000" add extra 0 returns  string

// Number.parseInt(string) → Converts string to integer
console.log(Number.parseInt("123px")); // 123

// Number.parseFloat(string) → Converts string to float
console.log(Number.parseFloat("123.45px")); // 123.45
console.log(Math.floor(123.56)); // 123
console.log(Number((123.56).toFixed(0))); // 124 (Rounds instead of truncating)

// Number.isInteger(value) → Checks if the number is an integer
console.log(Number.isInteger(123)); // true

// Number.isNaN(value) → Checks if the value is NaN
console.log(Number.isNaN(NaN)); // true

// Number.isFinite(value) → Checks if the number is finite
console.log(Number.isFinite(123)); // true
