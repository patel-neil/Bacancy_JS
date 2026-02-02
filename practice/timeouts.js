console.log("Starting...");

function hello(msg, info)
{
    console.log(msg + info + "Hello World ")
}

setTimeout(hello, 2000, "hi ", "there ")

console.log("The end");

/*  
    Output:
    Starting...
    The end
    hi there Hello World 
*/

console.log("Starting...");

function hello(msg, info)
{
    console.log(msg + info + "Hello World ")
}

setTimeout(hello, "hi ", "there ")

console.log("The end");

/*
    Output:
    Starting...
    The end
    there undefinedHello World

    Reason: If we do pass the time value in setTimeout, the in treats the upnext parameter as time value.
            So, the "hi " is treated as time value. JS tries to convert it into a Number and results into NaN.
            NaN, negative or omitted values in time are considered 0 for setTimeout.
            Now, msg is set to there and info as undefined. so it outputs such anomaly.
*/

console.log("Starting...");

function hello(msg, info)
{
    console.log(msg + info + "Hello World ")
}

setTimeout(hello)

console.log("The end");

/*
    Output:
    Starting...
    The end
    NaNHello World


    Reason: here delay is not present, so it is NaN and considered 0. now when we do msg + info in console.log,
            as both msg and info are undefined, it would not do string concatenation. it will first do type
            conversion of undefined to number which is NaN and NaN + NaN results into NaN.
            now, NaN + "Hello World" results into string concatenation and outputs NaNHello World.


            if we do console.log(msg + " " + info + "Hello World "), it will output
            undefined undefinedHello World

            as here, string concatenation is happening.
*/