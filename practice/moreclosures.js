function outer() {
  let globalCount = 0;

  return function middle(label) {
    let localCount = 0;

    return function inner() {
      globalCount++;
      localCount++;
      console.log(label, globalCount, localCount);
    };
  };
}

const createCounter = outer();

const a = createCounter("A");
const b = createCounter("B");

a(); 
a(); 
b(); 
b(); 
