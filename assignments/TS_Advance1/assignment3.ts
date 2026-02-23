// Assignment 3
// Create a function updateField that takes:
// object
// key
// value
// Ensure the value type matches the key type.
// Try assigning wrong type and observe the error.

function updateField<T,K extends keyof T>(obj : T, key : K, value : T[K]) : void
{
    obj[key] = value;
}

const user = {name: "Alice", age: 30};

updateField(user, "name", "Bob");
updateField(user, "age", 35);

console.log(user); // Output: { name: 'Bob', age: 35 }

// Invalid usage
updateField(user, "name", 123); // Error: Type 'number' is not assignable to type 'string'
updateField(user, "age", "thirty"); // Error: Type 'string' is not assignable to type 'number'