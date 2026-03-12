//Q17. The "Finally" Gotcha

Promise.resolve("Done")
    .finally(() => {
        console.log("Cleanup");
        return "Modified?";
    })
    .then(res => console.log(res));

/*
Output:
Cleanup
Done

Reason:  JS ignores the return statement in the finally block as it just meant for cleanup.
*/

//Q18. Variable Hoisting & Promises

console.log(a);
var a = 5;

Promise.resolve().then(() => {
    console.log(a);
});

a = 10;


/*
Output:
undefined
10

Reason: As the variable a is hoisted, it first logs undefined. Promises are executed after the call stack
        is empty. SO, a becomes 10 and then, call stack becomes empty. So, 10 is logged. 
*/