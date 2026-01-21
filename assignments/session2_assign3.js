// Code to print roles of the type of designation of employees

let employee = prompt("Enter the designation of employee:");

employee = employee.toUpperCase();

switch(employee)
{
    case "ADMIN":
        console.log("Full access");
        break;
    case "USER":
        console.log("Limited access");
        break;
    case "MANAGER":
        console.log("Moderate access");
        break;
    default:
        console.log("Invalid role");
}