// Assignment 3
// Create overloads for a function format that:
// Accepts number → returns string
// Accepts Date → returns string

function format(value: number): string;
function format(value: Date): string;
function format(value: number | Date): string {
  if (typeof value === "number") {
    return value.toFixed(2);
  }

  if (value instanceof Date) {
    return value.toISOString();
  }

  throw new Error("Invalid argument type");
}

const data = format(123);
console.log(data);