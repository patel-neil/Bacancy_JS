// 5. Trace the execution of this class logic.

class Counter {
  static count = 0;
  count = 10;

  constructor() {
    Counter.count++;
  }

  getCount() {
    return this.count;
  }

  static getStaticCount() {
    return this.count;
  }
}

const c1 = new Counter();
const c2 = new Counter();

console.log(c1.getCount());        // 10
console.log(Counter.getStaticCount()); // 2
console.log(c1.getStaticCount());  // objects can't call static methods


/*
when the program is run, and when it encounters the class 'Counter', it creates a static variable associated with the class
only. This variable is not accessible by the objects created from the class.

When the constructor is called, it increments the static variable 'count' by 1 for each object created. and a new instance
variable 'count' is created for each object with value 10. 

*/
