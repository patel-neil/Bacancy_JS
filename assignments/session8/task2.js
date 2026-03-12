console.log("Start");


setTimeout(function() {
 console.log("Timeout 1");
  Promise.resolve().then(function() {
   console.log("Promise 1");
 });
}, 0);


Promise.resolve().then(function() {
 console.log("Promise 2");
  setTimeout(function() {
   console.log("Timeout 2");
 }, 0);
});


console.log("End");

/*
Output:
Start
End
Promise 2
Timeout 1
Promise 1
Timeout 2

Reason: Start and end executes first. Then Promise2 gets registers in microtask queue. Promise 2 gets prints. 
        Meanwhile Timeout 1 is already registered in the macrotask queue. now, timeout 2 gets registered.
        Timeout 1 prints and promise 1 prints. at last timeout 2 prints.
*/