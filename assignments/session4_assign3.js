// 3. Predict the result of the following execution.

function SmartPhone(brand) {
  this.brand = brand;
  
  return {
    brand: "Generic",
    os: "Android",
  };
}

SmartPhone.prototype.getBrand = function() {
  return this.brand;
};


const myPhone = new SmartPhone("Apple");

console.log(myPhone.brand);    // ?
console.log(myPhone.getBrand); // ?


/*Output:
Generic
undefined



Explanation: if we return a object from a function, the values assigned during the initialization of the function
will be overwritten by the returned object values. So, myPhone.brand will print 'Generic'.

getBrand method is defined in the SMartphone.prototype. BUt myPhone is not linked with any other prototype,
so by default, it is linked to Object.protottype which has no idea about Smartphone.prototype.
So getBrand returns undefined.

To fix the getBrand undefined output, we can add:

__proto__: SmartPhone.prototype 
in the object that is returned from the function.
*/
