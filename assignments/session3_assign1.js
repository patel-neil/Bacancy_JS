//URL slug generator

let input = prompt("Enter a string: ");

input = input.toLowerCase();

let input_arr = input.split(" ")

let input_join = input_arr.join("-")

console.log(input_join);