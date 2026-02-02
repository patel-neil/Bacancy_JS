//Q2. Basic Promise Flow

console.log(1);
Promise.resolve().then(() => {
    console.log(2);
});
console.log(3);


/*
Output:
1
3
2

Reason: console.log are synchronous operations so they are directly stored in the call stack. When they encounter
        Promise, it stores moves it into microtask queue. So, first, synchronous task gets finished and then 
        microtask queue is executed. 
*/