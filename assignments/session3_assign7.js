// const user = {
//     name: "Alex",
//     greet: () => {
//         console.log("Hello, " + this.name);
//     }
// };
// user.greet();

/* the output logs undefined because this is used inside a arrow function.

there is no 'this' for arrow functions. so 'this' looks for its parent. But as is it written inside an object,
and objects don't have scope, so 'this' now refers to the golbal scope. so it logs undefined. 

We can use normal function isnstead of the arrow function tro fix the undefined error.
*/

const user = {
    name: "Alex",
    greet: function() {
        console.log("Hello, " + this.name);
    }
};
user.greet();