//Exercise 1: The URL Slug Builder
//Scenario: You have a blog post title, and you need to generate a URL-friendly "slug" (lowercase, hyphen-separated).


let input = prompt("Enter a string: ");

input = input.toLowerCase();

let input_arr = input.split(" ")

let input_join = input_arr.join("-")

console.log(input_join);