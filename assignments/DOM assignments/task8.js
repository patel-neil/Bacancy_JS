// 8) Create a Promise that resolves with the number 5.
// Chain .then() to double the number, then another .then() to add 20, and finally log the result.

const startPromise = new Promise((resolve) => {
    resolve(5);
});

startPromise
    .then((num) => {
        return num * 2; 
    })
    .then((doubledNum) => {
        return doubledNum + 20;
    })
    .then((finalResult) => {
        console.log("Final Result:", finalResult);
    });