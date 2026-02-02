//Q15. Throwing Inside a Chain

// Promise.resolve(1)
//     .then(x => {
//         throw new Error("Invalid");
//     })
//     .catch(err => {
//         console.log("Caught Error");
//         return 10;
//     })
//     .then(x => console.log(x));

/*
Output:
Caught Error
10

Reason: Exception is thrown from a then block and is catched by the catch block. Catch block executes
        and prints "Caught Error". It returns 10. Now as initially, the promise was resolved, so, the last 
        then() also runs and prints 10.
*/


//Q16. Async Function Order

async function foo() {
    console.log("A");
    await Promise.resolve();
    console.log("B");
}

console.log("C");
foo();
console.log("D");

/*
Output:
C
A
D
B

Reason: First C gets prints. Then A. now, program encounters await, so it waits for promise to resolve.
        Meanwhile, it executes last statement i.e D. And finally, B. 
*/