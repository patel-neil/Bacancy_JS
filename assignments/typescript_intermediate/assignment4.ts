// Assignment 4: Intersection Types
// Create an Order using intersection ( & )
// Create the same model using interfaces and extends
// Remove one required property and observe the compiler error
// Decide which approach feels clearer and why
// Create two small object types and combine them using intersection ( & )
// Create the same structure using interfaces and extends
// Try removing a required property and observe the compiler error
// Identify when intersection is better than union

type item_details =
{
    item : string
    price : number
}

type extra_details = 
{
    createdAt: Date
    createdBy: String
}

type Order = item_details & extra_details;


interface item_details_int {
    item : String
    price : Number
}

interface extra_details_int extends item_details_int
{
    createdAt: Date
    createdBy: String
}

type Order_Int = extra_details_int

const new_order : Order ={
    item : "Keyboard",
    price : 500,
}
//Error:
//Type '{ item: string; price: number; }' is not assignable to type 'Order'.
//Type '{ item: string; price: number; }' is missing the following properties from type 'extra_details': createdAt, createdBy

const new_order2: Order_Int = {
    item: "Mouse",
    price: 200,
    createdBy: "admin"
}

/*
Error:
Property 'createdAt' is missing in type '{ item: string; price: number; createdBy: string; }' 
but required in type 'extra_details_int'.
*/

/*
Intersection is preferred when we want to combine two types urgently without creating hierarchy.

Whereas, interface increases the code readability. It properly describes the relationship.
*/

/*
Union is OR. when there is a neccesity like 'this or that only' then we can use Union.
Whereas, intersection is AND. it is used when we want all the properties of of different types.
*/