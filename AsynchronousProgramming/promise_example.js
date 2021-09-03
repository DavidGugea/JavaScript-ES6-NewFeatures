function asyncFunction(){
    let promise = new Promise(
        function(resolve, reject){
            setTimeout(
                () => {
                    let result = Math.floor(Math.sqrt(Math.random() * 100)) + 1;
                    if(result >= 50){
                        resolve(result);
                    }else{
                        reject(`Result ${result} is smaller than 50.`);
                    }
                },
                2000 // timeout 2 seconds
            )
        }
    )

    return promise;
}

asyncFunction().then(
    (result) => {
        console.log(result);
    },
    (error) => {
        console.error(error);
    }
)
