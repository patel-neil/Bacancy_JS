//Q6. The "Lost" Context

const user = {
    name: "Alex",
    printName() {
        console.log(this.name);
    }
};

const print = user.printName;
print();


/*
Output:
undefined

Reason: here, we are directly copying the whole printname() function into print. So, now, print is no longed related
        to the object 'user'. so, this keyword refers to the global scope and it doesn;t find anything named 
        'name'. So, it returns undefined.
*/