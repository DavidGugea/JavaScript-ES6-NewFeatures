let person = {
    firstName : "Max",
    lastName : "Mustermann",
    address : {
        postCode : "23456",
        street : "Musterstraße 22"
    },
    phoneNumbers : [
        '02345/23456786',
        '02345/23456789'
    ]
}

let {
    firstName : firstNameExtracted,
    lastName : lastNameExtracted,
    address : {
        postCode : postCodeExtracted,
        street : streetExtracted
    },
    phoneNumbers : [
        phoneNumber1Extracted,
        phoneNumber2Extracted,
    ]
} = person;

console.log(firstNameExtracted);
console.log(lastNameExtracted);
console.log(postCodeExtracted);
console.log(streetExtracted);
console.log(phoneNumber1Extracted);
console.log(phoneNumber2Extracted);