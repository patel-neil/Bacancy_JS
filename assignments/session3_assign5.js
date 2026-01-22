// Exercise 5: The "One-Liner" Chain
// Scenario: Combine both methods.

let nums = prompt("Enter numbers separated by commas:").split(",")

new_nums = nums.filter( num => num >= 0).map( num => Number(num) * 2)

console.log(new_nums);