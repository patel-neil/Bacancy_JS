//Q13. Promise.all Failure

// Promise.all([
//     Promise.resolve("Success 1"),
//     Promise.reject("Error 1"),
//     Promise.resolve("Success 2")
// ])
// .then(res => console.log("Result:", res))
// .catch(err => console.log("Caught:", err));

/*
Output:
Caught: Error 1

Reason: .all() method resolves only if all the promises resolve. If either any one Promise rejects,
        .all() rejects.
*/


//Q14. The "Callback" Context Trap

const player = {
    score: 50,
    updateScore() {
        setTimeout(function() {
            console.log(this.score);
        }, 100);
    }
};

player.updateScore();

/*
Output:
undefined

Reason: setTimeout is a standalone function so, this refers to global scope.

*/