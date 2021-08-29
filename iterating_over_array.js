'use strict';

let artists = [
	"artist_1",
	"artist_2",
	"artist_3",
	"artist_4",
	"artist_5",
];

let iterator = artists.values();

for(let i = 0 ; i < artists.length ; i++){
	let artist = iterator.next();
	console.log(typeof(artist));
	console.log(artist);
}
