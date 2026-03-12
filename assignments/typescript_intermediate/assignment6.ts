// Assignment 6: Interfaces
// Create Admin and Customer interfaces using a common base
// Extend the base interface to add role-specific properties
// Write a function that accepts BaseUser
// Pass both Admin and Customer objects to the function
// Design an interface for an API response object
// Create a function that accepts this interface as a parameter
// Extend the interface and reuse it
// Create an interface for a Product
// Create a variable that follows this interface
// Why are interfaces preferred in large projects?

interface BaseUser{
    name : string
    id : number
}

interface Admin extends BaseUser{
    permission: string
}

interface Customer extends BaseUser
{
    email : string
}

const new_admin : Admin =
{
    id : 1,
    name : "Mohan",
    permission : "All_access"
}

const new_customer : Customer = 
{
    id : 2,
    name : "Rohan",
    email : "rohan@abc.com"
}

function foo(baseUser : BaseUser)
{
    console.log(baseUser.id + " " + baseUser.name);
}

foo(new_admin);

foo(new_customer);


interface api_response
{
    status : number
    message : string
}

const api_resp : api_response =
{
    status : 200,
    message : "Success"
}

function api(api_obj : api_response)
{
    console.log(api_obj.message + ": " + api_obj.status)
}

api(api_resp);

interface Product
{
    item : string,
    price : number
}

interface Productapi extends api_response
{
    data : Product
}

const new_product : Product = 
{
    item : "CPU",
    price : 3000
}

const product_details : Productapi = 
{
    status : 500,
    message : "Internal Server Error",
    data : new_product
}

console.log(JSON.stringify(product_details.data)+ ": " + product_details.message);