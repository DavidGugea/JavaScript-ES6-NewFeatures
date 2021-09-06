let firstName = Symbol.for("firstName");
let lastName = Symbol.for("lastName");

/*
let firstName = "firstName";
let lastName = "lastName";
*/

let person = new Object();

person[firstName] = "Max";
person[lastName] = "Mustermann";

console.log(person[firstName]);
console.log(person[lastName]);
console.log("------------------------------------------------");
console.log(person[0]);
console.log(person[1]);
console.log("------------------------------------------------");
console.log(person.firstName);
console.log(person.lastName);
console.log("------------------------------------------------");
console.log(person['firstName']);
console.log(person['lastName']);