function asyncFunction(callbackFunction){
    let result;

    setTimeout(
        () => {
            result = Math.floor(Math.random() * 100) + 1;
            if(result < 50){
                throw new Error(`Random number ${result} is smaller than 50.`);
            }
        },
        2000 // 2 seconds
    );

    return result;
}

try{
    let result = asyncFunction();
    console.log(result);
}catch(error){
    console.error(`Error : ${error}`);
}
