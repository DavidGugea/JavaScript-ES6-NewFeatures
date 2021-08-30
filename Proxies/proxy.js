let targetObject = {
    fistName : null,
    lastName : null
};

let handler = {
    // Implementation
}

let proxy = new Proxy(targetObject, handler);
proxy.firstName = "Max";
proxy.lastName = "Mustermann";

console.log(proxy.firstName);
console.log(proxy.lastName);

console.log(targetObject.firstName);
console.log(targetObject.lastName);