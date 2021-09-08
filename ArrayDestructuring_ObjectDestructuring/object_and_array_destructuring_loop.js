let person= [
    {
        firstName : "Max",
        lastName : "Mustermann",
        contact : {
            email : "max.mustermann@javascripthandbuch.de",
            phone : "02345/23456789"
        }
    },
    {
        firstName : "Maxi",
        lastName : "Musterfrau",
        contact : {
            emial : "maxi.miusterfrau@javascripthandbuch.de",
            phone : "02345/23456789"
        }
    }
];

for(
    let {
        firstName,
        lastName,
        contact : {
            email,
            phone
        }
    } 
    of person
){
    console.log(`${firstName} ${lastName}`);
    console.log(`E-mail : ${email}`);
    console.log(`Telefon : ${phone}`);
    console.log("-------------------------------------------------------------------------");
}