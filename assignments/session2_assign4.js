//Code to find the sub total of the items purchased by the user.

let price = Number(prompt("Enter the price of the item:"));

let quantity = Number(prompt("Enter the quantity of the item:"));

function calculateTotalPrice(price , quantity)
{
    return price * quantity;
}

console.log("The total price is: " + calculateTotalPrice(price , quantity));