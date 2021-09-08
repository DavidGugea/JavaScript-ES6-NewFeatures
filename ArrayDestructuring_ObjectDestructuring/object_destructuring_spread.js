const person = {
    firstName : "Max",
    lastName : "Mustermann",
    age : 33,
    hairColor : "brown",
    height : 1.8
}

const {
    firstName,
    lastName,
    ...properties
} = person;

console.log(firstName);
console.log(lastName);
console.log(properties);