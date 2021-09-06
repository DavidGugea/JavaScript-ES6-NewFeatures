const symbol = Symbol.for("SYMBOL DESCRIPTION");

const object = {
    property_1 : "value_1",
    property_2 : "value_2",
    [symbol] : 17
};

for(let key in object){
    console.log(`KEY -- > ${key} || VALUE -- > ${object[key]}`);
}

console.log(object[symbol]);
console.dir(object);