const promise = new Promise(
    (resolve, reject) => {
        // Change status from 'pending' to 'fulfilled'
        // resolve();

        // Change statu from 'pending' to 'rejected'
        // reject();
        
        setTimeout(() => {
            // Code
            resolve("RESOLVE MESSAGE");
            // reject("REJECT MESSAGE");
        }, 1000)
    }
);

const onFulfillment = (result) => {
    // resolve was called
    console.log(result);
    console.log("Resolve was called");
}

const onRejection = (error) => {
    // reject was called
    console.log(error);
    console.log("Start cooking pasta");
}

/*
 * Promise status : pending to fulfilled -> then() is executed
 * Promise status : pending to rejected  -> catch() is executed
*/

promise.then(onFulfillment);
promise.catch(onRejection);
