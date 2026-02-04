console.log("Start");


async function asyncFunction() {
 console.log("Async 1");
  await Promise.resolve();
 console.log("Async 2");
}


asyncFunction();


Promise.resolve().then(function() {
 console.log("Promise 1");
});


setTimeout(function() {
 console.log("Timeout");
}, 0);


console.log("End");

/*
Output:
Start
Async1
End
Async 2
Promise 1
Timeout

Reason: Start logs first. then execution goes into async function. logs async 1. then goes back to global scope.
        logs end. Promises get queued up in the microtask queue. executed one by one. and last executes timeout.
*/