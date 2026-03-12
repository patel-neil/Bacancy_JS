function tossCoin() {
    return new Promise((resolve, reject) => {
        console.log("Tossing the coin");
        
        const result = Math.random();

        setTimeout(() => {
            if (result > 0.5) {
                resolve("Heads");
            } else {
                reject("Tails");
            }
        }, 1000);
    });
}

tossCoin()
    .then((value) => {
        console.log(`Result: ${value}! You win!`);
    })
    .catch((error) => {
        console.log(`Result: ${error}! You lost.`);
    });