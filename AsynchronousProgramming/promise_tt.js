let p = new Promise(
    (resolve, reject) => {
        let error = false;

        if(!error){
            resolve("This parameter comes from resolve");
        }else{
            reject("This parameter comes from reject");
        }
    }
);

p
    .then(
        param => {
            console.log(param);
            console.log("Promise resolved");
        }
    )
    .catch(
        param => {
            console.log(param);
            console.log("Promise rejected");
        }
    )