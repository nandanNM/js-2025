let date = new Date();
// .getFullYear() → Gets the year
console.log(date.getFullYear()); // 2025

// .getMonth() → Gets the month (0-11)
console.log(date.getMonth()); // 2 (March)

// .getDate() → Gets the day of the month
console.log(date.getDate()); // 22

// .getDay() → Gets the weekday (0-6)
console.log(date.getDay()); // 6 (Saturday)

// .toISOString() → Converts to ISO format
console.log(date.toISOString()); // "2025-03-22T12:00:00.000Z"

// .toUTCString() → Converts to UTC format
console.log(date.toUTCString()); // "Wed, 22 Mar 2025 12:00:00 GMT"

// .toLocaleString() → Converts to local format
console.log(date.toLocaleString()); // "3/22/2025, 12:00:00 AM"

// .toLocaleDateString() → Converts to local date format
console.log(date.toLocaleDateString()); // "3/22/2025"

// .toLocaleTimeString() → Converts to local time format
console.log(date.toLocaleTimeString()); // "12:00:00 AM"

// .toJSON() → Converts to JSON format
console.log(date.toJSON()); // "2025-03-22T12:00:00.000Z"
