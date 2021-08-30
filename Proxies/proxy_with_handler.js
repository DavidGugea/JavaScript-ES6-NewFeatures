let targetObject = {};
let handler = {
    set : function(targetObject, property, value){
        console.log(`Set ${value} for the property ${property}`);
        targetObject[property] = value;
    },
    get: function(targetObject, property){
        console.log(`Send ${targetObject[property]} from the property ${property}`);
        return targetObject[property];
    }
};

let proxy = new Proxy(targetObject, handler);

proxy.firstName = "Max";
proxy.lastName = "Mustermann";

console.log(proxy.firstName);
console.log(proxy.lastName);

console.dir(targetObject);
