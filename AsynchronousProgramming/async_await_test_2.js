function waitForSomething(){
    return new Promise(
        (resolve, reject) => {
            let error = false;

            setTimeout(
                () => {
                    if(!error){
                        resolve("Process ended successfully.");
                    }else{
                        reject("Process coudn't end.");
                    }
                },
                2000
            )
        }
    )
}

async function main(){
    await waitForSomething()
        .then(msg => {
            console.log(msg);
        })
        .catch(msg => {
            console.log(msg);
        })
    console.log("After process ended.");
}

main();
