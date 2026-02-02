function outer() {
  let count = 0;
  let secret = "JS";

  function middle(step) {
    function inner() {
      count += step;
      console.log(count, secret);
    }
    return inner;
  }

  return middle;
}

const fn = outer();

const inc1 = fn(1);
const inc5 = fn(5);

inc1(); // 1 "JS"
inc1(); // 2 "JS"

inc5(); // 7 "JS"
