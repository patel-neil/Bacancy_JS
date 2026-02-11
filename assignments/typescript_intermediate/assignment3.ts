// Assignment 3: Union Types
// Add one more role (e.g. Guest ) to the User union
// Write a function that accepts User
// Use the role field to safely narrow the type
// Observe how TypeScript prevents invalid property access
// Create a union type for two different user roles using type
// Create another union using two interfaces
// Write a function that accepts the union and narrows the type safely

type Admin = {
    role: 'admin';
    permissions: string[];
};

type Customer = {
    role: 'customer';
    purchaseHistory: number[];
};

type Guest = {
    role: 'guest',
    loggedIn : Boolean
}

type User = Admin | Customer | Guest;

function logUser(user: User) {
    console.log(user.role);
}

logUser({ role: 'customer', purchaseHistory: [1,2,3]});

logUser({ role: 'admin', permissions: ['HR', 'DevOps']});

logUser({ role: 'guest', loggedIn: true});


interface AdminInt {
    role: 'admin',
    permissions: String[]
}

interface CustomerInt {
    role: 'customer',
    purchaseHistory: Number[]
}

type NewUser = Admin | Customer;

function NewlogUser(user: NewUser)
{
    console.log(user.role);
}

NewlogUser({ role: 'customer', purchaseHistory: [1,2,3]});

NewlogUser({ role: 'admin', permissions: ['HR', 'DevOps']});

/*
Interface and 'type' behaves the same but interface has some advantages over type.

interface supports declaration merging. If two interfaces with same are declared,
then the proerties is merged into a single interface. This is known as declaration merging.
*/