'use strict';
let artists = new Set(
    [
        "Kyuss",
        "Kyuss",
        "Tool",
        "Monster Magnet",
        "Ben Harper",
        "Queens of the Stone Age"
    ]
);

artists.add("Kyuss");
console.log(artists.has("Kyuss"));
// artists.clear();

console.log(artists);
console.log(artists.size);

for(let artist of artists.keys()){
    console.log(artist);
}

for(let artist of artists.values()){
    console.log(artist);
}

for(let artist of artists){
    console.log(artist);
}