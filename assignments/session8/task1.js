console.log("1");


setTimeout(function() {
 console.log("2");
}, 0);


Promise.resolve().then(function() {
 console.log("3");
});


console.log("4");


/*
Output:
1
4
3
2

Reason: 1 and 4 consoles are synchronous tasks so they are executed first. Promise is moved to microtask
        queue and setTimeout callback is moved to macrotask queue. Microtask queue has higher priority than macrotask
        queue. So, promise executes first than callbacks. And at last, callback executes.
*/