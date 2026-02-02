//Q7. Event Loop Basic Race

console.log("Start");

setTimeout(() => console.log("Timeout"), 0);

Promise.resolve().then(() => console.log("Promise"));

console.log("End");

/*
Output:
Start
End
Promise
Timeout

Reason: Promises are stored in microtask queue and timeout is stored in macrotask queue. 
        the priority goes as synchronous > microtask > macrotask. So, first, synchronous console.log prints,
        then promise prints and finally timeout prints.
*/

//Q8. Arrow Function Pitfall

const group = {
    title: "Developers",
    getTitle: () => {
        console.log(this.title);
    }
};

group.getTitle();

/*
Output:
undefined

Reason: Arrow functions do now have their own scope. it looks outside. but, as 'group' is just a object literal,
        it also doesnt have the scope. so, the this keyword refers to the global window object. So it 
        returns undefined.
*/