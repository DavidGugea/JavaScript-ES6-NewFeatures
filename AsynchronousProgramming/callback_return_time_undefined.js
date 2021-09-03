function asyncFunction(callbackFunction){
    let result;
    setTimeout(
        () => {
            result = Math.floor(Math.random() * 100) + 1;
        },
        2000 // 2 seconds
    );

    return result;
}

let result = asyncFunction();
console.log(result); // undefined
