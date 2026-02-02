//Q5. Math in Promises

Promise.resolve(10)
    .then((num) => num * 2)
    .then((result) => console.log(result));

/*
Output:
20

Reason: The example demonstrates chaining in the Promises. the two then statements would run in the order in
        which they are written. So, first num is doubled and then, it is logged.
*/