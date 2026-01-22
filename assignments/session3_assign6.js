// Exercise 6: The Shopping Cart
// Scenario: Calculate the total cost of the items in a cart.

let cart = prompt("Enter price of items in the cart seperated by commmas: ").split(",")

let total = cart.reduce( (acc,curr) => acc + Number(curr) , 0)

console.log(total);