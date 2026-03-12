//Predict the execution order of the following code and explain why.

console.log("start");

setTimeout(() => console.log("timeout"), 0);

Promise.resolve()
  .then(() => console.log("promise 1"))
  .then(() => console.log("promise 2"));

console.log("end");


/*
Output:
start
end
promise1
promise2
timeout

Explanation:
the start and end are synchronous statements so it will execute first.
then promise is moved to microtask queue and setTimeout is moved to macrotask queue.
the event loop will first execute all the microtasks before moving to the macrotasks,
so promise1 and promise2 will execute before timeout.
*/