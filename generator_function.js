function* returnOneThenReturnTwo(){
    // console.log("A");
    yield 1;

    // console.log("B");
    yield 2;

    // console.log("C");
}

/*
let generator = returnOneThenReturnTwo();
console.dir(generator);

for(let i = 0 ; i < 3 ; i++){
    result = generator.next();
    console.log(result);
}
*/

let generator = returnOneThenReturnTwo();
for(let value of generator){
    if(value){
        console.log(value);
    }else{
        break;
    }
}