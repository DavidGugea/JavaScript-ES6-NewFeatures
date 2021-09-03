function makeRequest(location){
    return new Promise(
        (resolve, reject) => {
            console.log(`Making Request to ${location}`);
            if(location === "Google"){
                resolve("Google was called");
            }else{
                reject("Google wasn't called");
            }
        }
    )
}

function processRequest(response){
    return new Promise((resolve, reject) => {
        console.log("Processing response.");
        resolve(`Extra information : ${response}`);
    })
}

/*
makeRequest("Facebook")
    .then(response => {
        console.log("Response received");
        return processRequest(response)
    })
    .then(processedResponse => {
        console.log(processedResponse);
    })
    .catch(err => {
        console.log(err);
    })
*/

// async & await are syntax sugar
async function doWork(){
    // Await says that the code should wait until the makeRequest is finished and then, afterwards, it will be allowed to carry on.
    try{
        const response = await makeRequest("Facebook");
        console.log("Response received");
        const processedResponse = await processRequest(response);
        console.log(processedResponse);
    } catch (err){
        console.log(err);
    }
}

doWork();
