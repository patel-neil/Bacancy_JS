let prices = prompt("Enter prices separated by commas:").split(",")

new_prices = prices.map( num => '$' + num)

console.log(new_prices);