let person = {
    firstName : "Max",
    lastName : "Mustermann"
};

/*

Extracted variables have different names from the properties inside the object

let {
    firstName : firstNameExtracted,
    lastName : lastNameExtracted
} = person;

*/

// The extracted variables have the same name as the properties of the object

let {
    firstName,
    lastName
} = person;

console.log(firstName);
console.log(person.firstName);
console.log("------------------------------------------");
console.log(lastName);
console.log(person.lastName);