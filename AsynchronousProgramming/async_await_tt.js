function doSomething(){
    return new Promise(
        (resolve, reject) => {
            let error = false;

            if(!error){
                window.setTimeout(
                    () => {
                        resolve("Done");
                    },
                    2000
                )
            }else{
                reject("Failed");
            }
        },
    )
}

async function main(){
    const value = await doSomething()
        .then(
            (result) => {
                console.log(result);
                return 5;
            }
        )
        .catch(
            (error) => {
                console.log(error);
            }
        )

    console.log(value);
    console.log("The thing that had to be done has been executed.");
}

main();