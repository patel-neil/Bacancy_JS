let cart = prompt("Enter price of items in the cart seperated by commmas: ").split(",")

let total = cart.reduce( (acc,curr) => acc + Number(curr) , 0)

console.log(total);