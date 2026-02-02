//Practice on setTimeout and Setinterval.

const id = setTimeout( () => {
    console.log("Timeout after 1 second");
}, 1000)

var count = 0;

const intid = setInterval( () => {
    console.log("Interval Run every 3 seconds(for 5 iterations)");
    count++;
    if(count === 5)
    {
        clearInterval(intid);
    }
}, 3000)


/*
Output:
Timeout after 1 second
Interval Run every 3 seconds(for 5 iterations)
Interval Run every 3 seconds(for 5 iterations)
Interval Run every 3 seconds(for 5 iterations)
Interval Run every 3 seconds(for 5 iterations)
Interval Run every 3 seconds(for 5 iterations)
*/