/*
const symb1 = Symbol("symbol description");
let obj = {
    name : "Steve",
    [symb1] : new Date()
};

for(let i in obj){
    console.log(i);
    console.log(obj[i]);
}

console.log(obj[symb1]);
console.log(Object.keys(obj));
*/

const symbol2 = Symbol.for("Object Data");
const symbol3 = Symbol.for("Object Data");

let obj = {
    name : "Steve",
    [symbol2] : new Date()
};

console.log(Object.keys(obj));
console.log(obj[symbol2]);
console.log(Symbol.keyFor(symbol2));
console.log(symbol2 === symbol3);
console.log(obj[symbol3]);
console.log(Symbol.keyFor(symbol3));

let obj2 = {
    name : "Lynette",
    [Symbol.for("Object Data")] : new Date()
};

console.log(obj2[symbol2]);