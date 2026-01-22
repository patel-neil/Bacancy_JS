// Exercise 4: The Clean-Up Crew
// Scenario: You have a list of user ages. Some data is corrupted (negative numbers or zero).

let ages = prompt("Enter ages separated by commas:").split(",")

new_ages = ages.filter( age => age > 0)

console.log(new_ages);