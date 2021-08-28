'use strict';

let numbersOfAlbums = new Map(
    [
        ["Artist_1", "Album_1"],
        ["Artist_2", "Album_2"],
        ["Artist_3", "Album_3"],
        ["Artist_4", "Album_4"],
        ["Artist_5", "Album_5"],
    ]
);

numbersOfAlbums.set("Artist_6", "Album_6");
numbersOfAlbums.set("Artist_7", "Album_7");

console.log(numbersOfAlbums);
console.log(numbersOfAlbums.size);
console.log(numbersOfAlbums.get("Artist_3"));

console.log("--------------------------------------------------------");

console.log(numbersOfAlbums.has("Artist_3"))
numbersOfAlbums.delete("Artist_3")
console.log(numbersOfAlbums.has("Artist_3"))

console.log("--------------------------------------------------------");

// for - of  loop
for(let artist of numbersOfAlbums.keys()){
    console.log(artist);
}

console.log("--------------------------------------------------------");

// entries ( [0] -> key , [1] - > value )
for(let entry of numbersOfAlbums.entries()){
    console.log(`Key -- > ${entry[0]} || Value -- > ${entry[1]}`);
}