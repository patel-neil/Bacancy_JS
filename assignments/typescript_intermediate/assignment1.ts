// Assignment 1: Type Inference
// 1. Declare variables using let and const with initial values and observe inferred types
// 2. Try reassigning incompatible values and note the compiler errors
// 3. Write a function without a return type and inspect what TypeScript infers

let value = "Hello";

const value1 = "Hello";

value = 10;
//Type 'number' is not assignable to type 'string'.

value1 = 10
//Cannot assign to 'value1' because it is a constant.


function greet(name: string) {
    console.log("Hello, " + name);
}
//function greet(name: string): void

function calculateTotal(price: number, tax: number) {
    return price + tax;
}
//function calculateTotal(price: number, tax: number): number