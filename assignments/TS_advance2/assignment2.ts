// Assignment 2
// Create FirstArgument<T> to extract first parameter type.
// Test it with a function that takes (id: string, active: boolean) .

type FirstArguement<T> = T extends (first : infer U,...args : any[]) => any ? U : never;

function testcode(id : string, active : boolean)
{
    console.log(id,active);
}

type Result = FirstArguement<typeof testcode>; // Result = string