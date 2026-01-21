//Code for the coupon discount problem

let amount = Number(prompt("Enter the total amount:"));

let couponcode = prompt("Enter the coupon code ");
function applycoupon(amount , couponcode)
{
    switch(couponcode)
    {
        case "SAVE10":
            return amount - (amount*0.10);
            break;
        case "SAVE20":
            return amount - (amount*0.20);
            break;
        case "NONE":
            return amount;
            break;
        default:
            return "Invalid coupon code";
            break;
    }
}

console.log("The final amount after applying coupon is: " + applycoupon(amount , couponcode));