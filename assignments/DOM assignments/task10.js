// 10) Create a function simulateTask(name, delay) that returns a Promise resolving after delay ms.
// Part A: Run three tasks sequentially using async/await.
// Part B: Run three tasks simultaneously using Promise.all().
// Compare the total time taken for Part A vs Part B.

function simulateTask(name, delay) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(name);
        }, delay);
    });
}

// Part A
async function runSequential() {
    console.time("Sequential Total Time");
    
    await simulateTask("A1", 1000);
    await simulateTask("A2", 1000);
    await simulateTask("A3", 1000);
    
    console.timeEnd("Sequential Total Time"); 
}

// Part B
async function runSimultaneous() {
    console.time("Simultaneous Total Time");
    
    await Promise.all([
        simulateTask("B1", 1000),
        simulateTask("B2", 1000),
        simulateTask("B3", 1000)
    ]);
    
    console.timeEnd("Simultaneous Total Time"); 
}

async function compare() {
    console.log("Sequential");
    await runSequential();
    
    console.log("\nSimultaneous");
    await runSimultaneous();
}

compare();