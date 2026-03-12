// Assignment 2: any vs unknown
// Create a function that accepts any and performs operations without checks
// Create the same function using unknown and add proper type guards
// Compare the compiler behavior and runtime safety
// Create one variable using any
// Create another variable using unknown
// Try calling methods directly on both
// Which one forces you to write safer code?

function foo(param:any)
{
    console.log(param);

    param = param - 10;

    console.log(param);

    param = param + '10';

    console.log(param);
}

foo("Hello");

foo(100);

// [LOG]: "Hello" 
// [LOG]: NaN 
// [LOG]: "NaN10" 
// [LOG]: 100 
// [LOG]: 90 
// [LOG]: "9010"

function foo2(param:unknown)
{
    console.log(param);

    if(typeof param === "number")
    {
        param = param - 10;
        //'param' is of type 'unknown'.
        //Gives error without typechecking. forces to do typecheck.
        console.log(param);
    }
    // param = param - 10;
    // //'param' is of type 'unknown'.
    // //Gives error without typechecking. forces to do typecheck.

    // console.log(param);
    if(typeof param === "string")
    {
        param = param + '10';

        console.log(param);
    }

}

foo2("Hello");

foo2(100);

let newvar : any = "Hello"

let newvar2 : unknown= "HelloWorld"

function foo3(newvar : any)
{
    newvar = newvar + 10;

    console.log(newvar);
}
//Error: Parameter 'newvar3' implicitly has an 'any' type.
function foo4(newvar2 : unknown)
{
    if(typeof newvar2 === "string")
    {
        newvar2 = newvar2 + "10";
    }

    console.log(newvar2);
}
//Error: Parameter 'newvar2' implicitly has an 'any' type.

foo3(newvar);

foo4(newvar2);

//'unknown' forces us to write safer code. any just takes anything that it gets. 
//But, we need to typecheck for unknown.