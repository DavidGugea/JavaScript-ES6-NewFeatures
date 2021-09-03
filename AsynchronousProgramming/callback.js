function asyncFunction(callbackFunction){
    // Code
    console.log("Before callback.");
    callbackFunction();
    console.log("After callback.");
    // More code here
}

function callbackFunction(){
    console.log("Inside the callback.");
}

asyncFunction(callbackFunction);
