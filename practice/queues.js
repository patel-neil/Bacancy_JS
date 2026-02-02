//Example for practice of promises, timeouts, and synchronous tasks all in one.

//this example demonstrates the working of microtask queue, macrotask queue and call stack.


console.log("Start");

Promise.resolve().then(() => {
  console.log("Microtask 1");

  setTimeout(() => {
    console.log("Macrotask inside microtask");
  }, 0);

  setTimeout(() => {
    console.log("Macrotask2 inside microtask");

    setTimeout( () => {
        console.log("nested macrotask inside a microtask.")
    },0)
  }, 0);
});

Promise.resolve().then(() => {
  console.log("Microtask 2");
});

setTimeout(() => {
  console.log("Macrotask outside");
}, 0);

setTimeout(() => {
  console.log("Macrotask2 outside");

  setTimeout( () => {
    console.log("nested macrotask outside")
  }, 0)
},0);

console.log("End");

/*
Output:
Start
End
Microtask 1
Microtask 2
Macrotask outside
Macrotask2 outside
Macrotask inside microtask
Macrotask2 inside microtask
nested macrotask outside
nested macrotask inside a microtask.
*/