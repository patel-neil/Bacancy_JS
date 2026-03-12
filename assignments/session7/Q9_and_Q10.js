//Q9. Chaining Returns

Promise.resolve(5)
    .then((val) => {
        console.log(val);
        return val + 5;
    })
    .then((val) => console.log(val));

/*
Output:
5
10

Reason: there is chaining of "then". So, the first then prints 5 and return 10. The second then takes 10 as
        input and prints 10.
*/


//Q10. Catch and Continue

Promise.reject("Fail")
    .catch((err) => {
        console.log(err);
        return "Recovered";
    })
    .then((res) => console.log(res));

/*
Output:
Fail
Recovered

Reason: A value returned from then can only be passed to other then. it can't be passed to catch.
        Vice-versa is also true. So, as the promise rejects, it prints Fail and Recovered. 
        But, then is not executed.
*/