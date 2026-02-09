// 
//5) Write a function downloadFile(url, callback) that simulates a 3-second delay using setTimeout.
// After the delay, log "Download complete: [url]" and execute the callback function.

function downloadFile(url, callback)
{
    console.log("Download Started");

    setTimeout(() => {
        console.log("Download Complete: " + url);

        callback();
    }, 3000)

}

downloadFile("http://localhost:8080", () => {
    console.log("Success! The file is ready to be opened.");
});