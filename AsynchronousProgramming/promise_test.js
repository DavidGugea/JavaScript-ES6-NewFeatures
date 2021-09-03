let promise = new Promise(
    (resolve, reject) => {
        let error = false;
        resolve("The first parameter sent from resolve", "The second paramtere sent from resolve");
        reject("The first parameter sent from reject", "The second paramtere sent from reject");
m       
        /*
        if(!error){
            resolve("The first parameter sent from resolve", "The second paramtere sent from resolve");
        }else{
            reject("The first parameter sent from reject", "The second paramtere sent from reject");

        if(!error){
            resolve("The first parameter sent from resolve", "The second paramtere sent from resolve");
        }else{
            reject("The first parameter sent from reject", "The second paramtere sent from reject");
        }
        */
    }
);

let then_function = (param1, param2) => {
    console.log(`Parameters from resolve() inside promise -- > [${param1}, ${param2}]`);
}
let reject_function = (param1, param2) => {
    console.log(`Parameters from reject() inside promise -- > [${param1}, ${param2}]`);
}

promise
    .then(then_function)
    .catch(reject_function);
