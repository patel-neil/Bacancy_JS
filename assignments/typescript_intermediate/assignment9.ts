// Assignment 9: Access Modifiers
// Create a service class exposing only required public methods
// Keep internal data private
// Explain which members should be accessible and why
// Create a class with public, private, and protected members
// Try accessing them outside the class
// Which members should be exposed and why?

class service {
    private name : string
    public id : number
    protected email : string

    constructor(id : number, name : string, email : string)
    {
        this.id = id;
        this.email = email;
        this.name = name;
    }

    public  foo()
    {
        console.log(this.name + " " + this.id + " " + this.email);
    }
}

class service_child extends service{
    public foo2()
    {
        console.log(this.name + " " + this.id + " " + this.email);
    }
}

const s = new service(1, "John", "john@abc.com");

s.foo();

const s2 = new service_child(2, "Jane", "jane@abc.com");

s2.foo2();

// Error: Property 'name' is private and only accessible within class 'service'.
// BEcause name is private, it is throwing error in TS. but, the code is still getting executed successfully as
// TS gets internally converted to JS and there is no such thing as private or protected or public in JS.
// SO, JS runs fine and successfully prints.