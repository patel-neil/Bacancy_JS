//Q19. Microtask vs Macrotask Interleaving

// setTimeout(() => console.log("T1"), 0);

// Promise.resolve().then(() => {
//     console.log("P1");
//     setTimeout(() => console.log("T2"), 0);
// });

// Promise.resolve().then(() => console.log("P2"));

// console.log("End");

/*
Output:
End
P1
P2
T1
T2

*/

//Q20. Object Method Assigned to Class

class Manager {
    constructor(name) {
        this.name = name;
    }

    print = () => {
        console.log(this.name);
    }
}

const m = new Manager("Sarah");
const p = m.print;
p();

/*
Output:
Sarah

Reason: print is a Instance property. So, this refers to the property of the object.
*/
