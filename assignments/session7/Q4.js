//Q4. Global vs. Local Scope

var status = "Offline";

const server = {
    status: "Online",
    getStatus: function() {
        return this.status;
    }
};

console.log(server.getStatus());

/*
Output:
Online

Reason: 'this' keyword is used inside a method function of 'server'. So, it is bound to the scope of 
        'server' object. So, it refers to the 'status' key of the object. So, it returns Online as output.
*/