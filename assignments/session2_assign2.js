//Code to print numbers from 1 to 20 and show each number is odd or even

for(let i = 0; i < 20; i++)
{
    if((i+1) % 2 === 0)
    {
        console.log((i + 1) + " --> even");
    }
    else
    {
        console.log((i + 1) + " --> odd");
    }
}