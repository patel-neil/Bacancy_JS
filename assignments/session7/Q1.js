//Q1. Simple Object Context

const laptop = {
    brand: "Dell",
    getBrand: function() {
        return this.brand;
    }
};
const myBrand = laptop.getBrand();
console.log(myBrand);

/*
Output:
Dell


Reason: 'this' keyword is used inside a method function of class laptop. So, it is bound to the scope of 
        laptop object. So, it refers to the 'brand' key of the object. So, it returns Dell as output.
*/
