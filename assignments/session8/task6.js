//Create a function that logs numbers 1 to 5, with a 1-second delay between each number.

function countWithDelay() {
    for(let i=1; i<=5; i++)
    {
        setTimeout(() => {
            console.log(i + "(after " + i + " seconds)")
        },i*1000)
    }
 // Your code here
 // Should output: 1 (after 1s), 2 (after 2s), 3 (after 3s), 4 (after 4s), 5 (after 5s)
}

countWithDelay();

/*
Output:
1(after1seconds)
2(after2seconds)
3(after3seconds)
4(after4seconds)
5(after5seconds)
*/