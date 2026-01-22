//Combine everything you learned into one function.

//Inventory List

const inventory = [
    {name : "Laptop", price : 1000, quantity :14},
    {name : "Phone", price : 500, quantity :0},
    {name : "Mouse", price : 200, quantity :10},   
]

let inven = inventory.filter( stock => stock.quantity > 0).map( item => item.price * item.quantity).reduce( (acc,curr) => acc + curr , 0)

console.log(inven);