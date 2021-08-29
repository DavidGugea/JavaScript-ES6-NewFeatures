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

## Sets & Weaksets

Sets are unique arrays that don't have any duplicate items. Example:

```JavaScript
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
```

WeakSets are just like WeakMaps. They only allow objects as items and the objects that are not being referenced are getting picked up by the GC.

Example:

```JavaScript
'use strict';

let artist1 = {
    name : "Kyuss"
};

let artist2 = {
    name : "Tool"
};

let artist3 = {
    name : "Monster Magnet"
};

let artist4 = {
    name : "Ben Harper"
};

let artist5 = {
    name : "Queens of the Stone Age"
};

let artist6 = {
    name : "Justin Bieber"
};

let artists = new WeakSet(
    [
        artist1,
        artist2,
        artist3,
        artist4,
        artist5,
    ]
);
```

## Capsuling iteration over data-structures

In order to use an iterator, you can use the ```.next()``` method that every ds has.:

```JavaScript
let list = new Array();
for(let i = 0 ; i < 10; i++){
    list.push(i);
}

for(let i = 0 ; i < list.length ; i++){
    console.log(list.next());
}
```

You can also build your own iterator by using closures:

```JavaScript
function build_iterator_of(array) {
    let index = 0;
    let done_value = false;
    return {
        next: function () {
            if (index === array.length) {
                // Set the done value to be true
                done_value = true;
                // Reset the index so that we start from the beginning once the iterator has reached the end.
                index = 0;

                return this.next();
            } else {
                let prev_index = index;
                index++;
                return ({
                    value: array[prev_index],
                    done: done_value
                });
            }
        }
    }
}

let array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let iterator = build_iterator_of(array);

for (let i = 0; i < array.length * 7; i++) {
    let obj = iterator.next();
    console.log(`VALUE -- > ${obj.value} || DONE -- > ${obj.done}`);
}
```

In this exmaple the closure returns an object with the next function just like any other ds does.

If you want to build a generator you can use the ```yield``` keyword:

```JavaScript
function* generator(){
    counter = 0
    while(true){
        counter++;
        yield counter;
    }
}

let generator_values = generator();
for(let value of generator_valuesenerator){
    if(value){
        console.log(value);
    }else{
        break;
    }
}
```

In case you want to be able to iterate over a self made generator you have to add the iteration symbol to it:

```JavaScript
artists = [
    "artist_1",
    "artist_2",
    "artist_3",
    "artist_4",
    "artist_5",
];
let arrayWrapper = {
    array : artists
};

arrayWrapper[Symbol.iterator] = function(){
    let array = this.array;
    let counter = this.array.length - 1;

    return{ 
        next : function(){
            if(counter < 0){
                return {
                    done: true
                };
            }else{
                return { 
                    value : array[counter--],
                    done : false
                }
            }
        }
    }
};

for(let artist of arrayWrapper){
    console.log(artist);
}
```