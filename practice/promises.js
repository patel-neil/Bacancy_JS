const mypromise = new Promise((resolve, reject) => {
    const success = false;

    if(success)
    {
        resolve("Successful");
    }
    else{
        reject("Error");
    }
})

mypromise
.then((data) => {
    console.log(data);
})
.catch((data) => {
    console.log(data);
})