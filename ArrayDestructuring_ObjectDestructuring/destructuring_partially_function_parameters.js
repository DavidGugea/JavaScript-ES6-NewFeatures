function printPerson(
    {
        contact : {
            email : email,
            phone : phone
        }
    }
){
    console.log(`E-Mail : ${email}`);
    console.log(`Telefon: ${phone}`);
}

let person = {
    firstName : "Max",
    lastName : "Mustermann",
    contact : {
        email : "max.mustermann@javascripthandbuch.de",
        phone : "02345/23456789"
    }
};

printPerson(person);