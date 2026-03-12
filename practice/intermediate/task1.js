//Predict the output of the following code and explain why it behaves that way.
console.log(a);

var a = 10;

if (true) {
  let a = 20;
  console.log(a);
}

console.log(a);

/*
Output:
undefined
20
10

Explanation:
The first console.log(a) will output 'undefined' because of variable hoisting. 
Variables with 'var' keyword are hoisted. then, for the second console.log, the value is 20,
because it refers to the scope of the if statement.

and the last statement is global scope, so it will output 10.
*/