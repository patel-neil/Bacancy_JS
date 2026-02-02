//Q11. The Nested Timeout

console.log('A');

setTimeout(() => {
    console.log('B');
}, 0);

Promise.resolve().then(() => {
    console.log('C');
    Promise.resolve().then(() => console.log('D'));
});

console.log('E');

/*
Output:
A
E
C
D
B

Reason: Promises are resolved earlier than setTimeout.
*/

//Q12. Explicit Binding (Call/Apply)

const agent = {
    id: 101
};

function showId() {
    console.log(this.id);
}

showId.call(agent);
showId.apply(null);

/*
Output:
101
undefined

Reason: call() forces JS to treat the 'this' as an object of agent. So, it refers to the id of agent.
        JS ignores null in apply() and this refers to the global window.
        So, undefined.
*/