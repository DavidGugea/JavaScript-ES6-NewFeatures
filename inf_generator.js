function* counter(){
    let counter = 1;
    while(true){
        yield counter;
        counter++;
    }
}

let generator = counter();
let c = 0;
for(let value of generator){
    if(c < 50){
        console.log(value)
        c++;
    }else{
        break;
    }
}