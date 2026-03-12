// Assignment 7: Enums
// Create an enum for payment states (INITIATED, SUCCESS, FAILED)
// Write a function that accepts only this enum
// Try passing an invalid value and observe the error
// Why enums are better than magic strings?

enum payment_status {
    Initiated = "INITIATED",
    Success = "SUCCESS",
    Failed = "FAILED"
}

function foo(payment : payment_status)
{
    console.log("Status is: " + payment);
}

foo(payment_status.Success);

foo(payment_status.Initiated);

foo(payment_status.fail)
//Prints undefined.

/*
"Magic strings" are hardcoded string values like "SUCCESS". If in a big project, we decide to change it to "COMPLETED",
then we need to make changes everywhere where we used it. 

But if we used Enum, then the change is to be made in enum only. Everywhere it will be reflected.
So, enum is better to use than magi strings.
*/