'use strict';

let artist1 = {
    name : "Artist_1"
};

let artist2 = {
    name : "Artist_2"
};

let artist3 = {
    name : "Artist_3"
};

let artist4 = {
    name : "Artist_4"
};

let artist5 = {
    name : "Artist_5"
};

let artist6 = {
    name : "Artist_6"
};

let numbersOfAlumbs = new WeakMap();
numbersOfAlumbs.set(artist1, 4);
numbersOfAlumbs.set(artist2, 6);
numbersOfAlumbs.set(artist3, 8);
numbersOfAlumbs.set(artist4, 9);
numbersOfAlumbs.set(artist5, 10);
console.log(numbersOfAlumbs.get(artist1));
console.log(numbersOfAlumbs.has(artist1));
numbersOfAlumbs.delete(artist1);
console.log(numbersOfAlumbs.has(artist1));
console.log(numbersOfAlumbs.has(artist6));
console.log(numbersOfAlumbs);