function asyncFunction(callbackFunction){
    let result;
    setTimeout(
        () => {
            result = Math.floor(Math.random()*100) + 1;
            if(result >= 50){
                callbackFunction(
                    null, 
                    result
                );
            }else{
                callbackFunction(
                    new Error(`Result ${result} is smaller than 50.`),
                    undefined
                );
            };
        },
        2000
    );
}

asyncFunction(
    (error, result) => {
        if(error){
            console.log(error);
        }else{
            console.log(result);
        }
    }
);
