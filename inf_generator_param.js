function* counter(){
    let counter = 0;
    while(true){
        counter++;
        let restart = yield counter;
        console.dir(restart);
        if(restart == true){
            counter = 0;
        }
    }
}

let counter1 = counter();