// Assignment 8: Typed Functions
// Write a function with required and optional parameters
// Define return types explicitly
// Create a small utility function that would exist in a real project
// Write a function with one required and one optional parameter
// Call it with and without the optional argument
// How does TypeScript enforce correctness here?


function formatCurrency(amount: number, currency?: string) {
    if (currency) {
        return `${currency}${amount}`;
    }
    return `$${amount}`;
}

const price1 = formatCurrency(100); 
console.log(price1);

const price2 = formatCurrency(100, "₹");
console.log(price2); 

/*
To check the correctness, it first checks the number of arguements provided. optional type is resolved as undefined.
so, the if condition will be false and won't go into it.
*/