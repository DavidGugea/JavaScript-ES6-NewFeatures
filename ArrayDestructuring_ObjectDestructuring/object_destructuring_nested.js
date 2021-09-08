let person = {
    firstName : "Max",
    lastName : "Mustermann",
    address : {
        postCode : "23456",
        street : "Musterstraße 22"
    }
}

// In case that the extracted values have different names from the properties inside the object

let {
    firstName : firstNameExtracted,
    lastName : lastNameExtracted,
    address : {
        postCode : postCodeExtracted,
        street : streetExtracted
    }
} = person;

console.log(firstNameExtracted);
console.log(lastNameExtracted);
console.log(postCodeExtracted);
console.log(streetExtracted);

console.log("-----------------------------------------");

// In case that the extracted values have the same names as the properties inside the object

let {
    firstName,
    lastName,
    address : {
        postCode,
        street
    }
} = person;

console.log(firstName);
console.log(lastName);
console.log(postCode);
console.log(street);