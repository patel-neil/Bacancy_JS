// Exercise 3: The Price Formatter
// Scenario: You have a list of raw number prices. You need to format them for the UI.

let prices = prompt("Enter prices separated by commas:").split(",")

new_prices = prices.map( num => '$' + num)

console.log(new_prices);