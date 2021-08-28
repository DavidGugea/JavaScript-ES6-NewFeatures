# New features of ES6

## Maps & Weakmaps

In JS you can create a key-value pairs data structures with the a map. A weakmap works exactly like a map but the keys have to be objects and they will be deleted by the GC if they aren't referenced.

Example:

```JavaScript
let numbersOfAlbums = new Map(
    [
        ["Artist_1", "Album_1"],
        ["Artist_2", "Album_2"],
        ["Artist_3", "Album_3"],
        ["Artist_4", "Album_4"],
        ["Artist_5", "Album_5"],
    ]
);
```

A weakmap however needs to be built out of objects ( as their keys ) :

```JavaScript
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
```