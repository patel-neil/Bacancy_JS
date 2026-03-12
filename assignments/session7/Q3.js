//Q3. The Broken Chain

Promise.reject("Error Occurred")
    .then(() => console.log("Success"))
    .catch((err) => console.log(err));


/*
Ouput:
Error Occured

Reason: As the Promise is rejected, catch executes and prints the message.
*/