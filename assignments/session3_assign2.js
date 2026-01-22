// Pagination logic

let items = prompt("Enter items separated by commas:").split(",")

let page_no = Number(prompt("Enter page number:"));

first_index = (page_no * 3) - 2;

console.log(items.slice(first_index - 1 , first_index + 2));