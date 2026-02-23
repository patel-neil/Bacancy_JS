// Assignment 2
// Create a function activateUser that accepts only objects having isActive: boolean .
// Create another function that requires both id and email .
// Try passing invalid objects and observe TypeScript errors.

function activeUser<T extends {isActive: boolean}>(user : T) : void
{
    console.log(`User is ${user.isActive ? "active" : "inactive"}`);
}

function userDetails<T extends {id: number, email: string}>(user : T) : void
{
    console.log(`User ID: ${user.id}, Email: ${user.email}`);
}

// Valid usage
activeUser({isActive: true, name: "Jonas"});
userDetails({id: 101, email: "jonas@example.com"});

// Invalid usage
activeUser({name: "Alice"}); // Error: Property 'isActive' is missing
userDetails({id: 102}); // Error: Property 'email' is missing