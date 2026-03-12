console.log("A");


Promise.resolve().then(function() {
 console.log("B");
  Promise.resolve().then(function() {
   console.log("C");
 });
  console.log("D");
});


Promise.resolve().then(function() {
 console.log("E");
});


setTimeout(function() {
 console.log("F");
}, 0);


console.log("G");

/*
Output:
A
G
B
D
E
C
F

Reason: Same workflow mentioned in the previous examples.
*/