// 2. Identify why the following code throws an error and fix it without using the class keyword.

/*
    The code porduces Woof! for genericAnimal.bark() because we have Dog.prototype = Animal.prototype;
    due to it, Dog and Animal came to same level. both have the same prototype objects. so when we define Dog.prototype.bark()
    it actually defined in Animal.prototype too. SO Animal could also access the method.

    myDog.constructor.name produced 'Animal'. As we know, instances don't have constructor property. so it looks out in Dog.
    But even Dog doesn't have the construcotr property because of  Dog.prototype = Animal.prototype;
    So, it looks up into Animal as both's prototype are equal. It finds the constructor property in Animal pointing to itself.
    So, it prints Animal.
*/


// Given below is the fixed code 
function Animal(name) {
  this.name = name;
}

Animal.prototype.eat = function() {
  console.log(`${this.name} is eating.`);
};

function Dog(name, breed) {
  Animal.call(this, name);
  this.breed = breed;
}

// Intent: Dog should inherit from Animal
Dog.prototype = Object.create(Animal.prototype);

Dog.prototype.constructor = Dog;

Animal.prototype.bark = function() {
  console.log("Woof!");
};

const myDog = new Dog("Buddy", "Golden");
const genericAnimal = new Animal("Generic");

genericAnimal.bark();
console.log(myDog.constructor.name);
