let promise = new Promise(
    (resolve, reject) => {
        let error = false;

        if(!error){
            resolve("Parameter 1 from resolve", "Parameter 2 from resolve");
        }else{
            reject("Parameter 1 from resolve", "Parameter 2 from resolve");
        }
    }
)
