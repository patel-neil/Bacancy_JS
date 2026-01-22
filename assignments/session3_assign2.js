// Exercise 2: Pagination Logic
// Scenario: You have a list of 10 items. You need to simulate "Page 2" of a table, displaying only items 4, 5, and 6


let items = prompt("Enter items separated by commas:").split(",")

let page_no = Number(prompt("Enter page number:"));

first_index = (page_no * 3) - 2;

console.log(items.slice(first_index - 1 , first_index + 2));