// Assignment 5: Type Aliases
// Create reusable aliases for union and intersection types
// Refactor earlier assignments to use these aliases
// Observe how readability improves
// Create a type alias for string | number
// Use it in two variables
// How does this improve readability?

type ID = number | string

let user_id : ID;
let user_name : ID;

user_name = "John"

console.log(typeof user_name);

user_id = 21

console.log(typeof user_id);

type user_name = 
{
    name : string
}

type user_id = {
    id : number
}

type User = user_name & user_id;

const activeUser: User = {
    id: 552,
    name: "Marcus"
};

type Role = 'admin' | 'customer' | 'guest';

type AppUser = User & { role: Role };

const superUser: AppUser = {
    id: 1,
    name: "Sarah",
    role: "admin"
};