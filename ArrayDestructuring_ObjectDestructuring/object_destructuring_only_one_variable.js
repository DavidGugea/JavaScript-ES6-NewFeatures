let person = {
    firstName : "Max",
    lastName : "Mustermann",
    address : {
        postCode : "23456",
        street : "Musterstraße 22"
    }
}


/*

Destruct only one variable that hasn't been declared yet:

let {
    firstName
} = person;

*/

// Destruct only one variable that already has a value:

let firstName = 5;

// {firstName} = person >>>**IS WRONG**<<<
({firstName} = person);
console.log(firstName);