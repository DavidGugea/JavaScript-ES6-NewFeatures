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

## Proxies

A proxy works as a middle man between the code and and object. You can use it to set specific behaviours for the object ( set, get, has, and more ). For all the methods that can be used by proxies look at https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy

A proxy needs the target object and a handler. You will have to write all the methods for the proxy inside the handler and use the proxy in order to access them:

```JavaScript
const gameSettings = {
    date : "2021-28-8"
};

// A proxy is a wrapper for the game settings
// The methods inside the handler are called traps ( see docs for the methods that you can use )
const gameSettingsProxy = new Proxy(gameSettings, {
    // Get TRAP
    get : (o, property) => {
        // o is going to refer to the target object ( in our case -> gameSettings ) 
        // property will refer to the property that you are trying to retrieve
        return property in o ? o[property] : "decode";
    },

    // Set TRAP
    set : (o, property, value) => {
        if(property === "difficulty" && !["easy", "medium", "hard"].includes(value.toLowerCase())){
            throw new Error("Difficulty is invalid!");            
        }

        o[property] = value;
    },

    // Has TRAP
    has : (o, property) => {
        // Trap for "in" keyword ( it can only return true or false )
        if(property === "difficulty"){
            return false;
        }

        return property in o;
    }
});
```

## Asynchronous Programming

Functions are first class citizens in javascript meaning that they can be passed around as parameters, used in variables, returned as values from other function etc. JavaScript is by default nor synchronous neither asynchronous. Some APIs work sync other async. In the following I will explain promises and how to use them.

A promise needs a function as parameter. That function needs two parameters that are also functions, resolve and reject. If you call resolve, in order to pick it up from the promise, you will have to use ```.then()```. On the other side, if you use reject, in order to pick it up from the promise, you will have to use ```.catch()```. A promise can also return another promise as a value.

Here is an example of a promise:

```JavaScript
let p = new Promise(
    (resolve, reject) => {
        let error = false;

        if(!error){
            resolve("This parameter comes from resolve");
        }else{
            reject("This parameter comes from reject");
        }
    }
);

p
    .then(
        param => {
            console.log(param);
            console.log("Promise resolved");
        }
    )
    .catch(
        param => {
            console.log(param);
            console.log("Promise rejected");
        }
    )
```

You can also use async and await which is just syntax sugar:

```JavaScript
function doSomething(){
    return new Promise(
        (resolve, reject) => {
            let error = false;

            if(!error){
                window.setTimeout(
                    () => {
                        resolve("Done");
                    },
                    2000
                )
            }else{
                reject("Failed");
            }
        },
    )
}

async function main(){
    const value = await doSomething()
        .then(
            (result) => {
                console.log(result);
                return 5;
            }
        )
        .catch(
            (error) => {
                console.log(error);
            }
        )

    console.log(value);
    console.log("The thing that had to be done has been executed.");
}

main();
```

## Tagged Template Literals

Template Strings are just like formatted string in python where you can directly give values inside the string without using + to add values to them. Example:

```JavaScript
let a = 3;
let b = 2;
let c = a + b;

let template_string = `The sum between ${a} and ${b} is ${c}`;
```

As you can see we don't have to write every value with +.

You can also use a funciton and tag the template, that is called a tagged template literal. Here is a short example:

```JavaScript
function f(strings, ...replacements){
    // Code
}

let a = 3;
let b = 2;
let c = a + b;

let template_string = f`The sum between ${a} and ${b} is ${c}`;
```

In order to tag a template string you just have to add the name of the function in front of the template. ```strings``` represents all string that are between the templates ( everything between ```${}``` templates ). Replacements are ,in our case, a, b and c.

## Symbols

Symbols in JavaScript are seen as primitive data types. You can't instantiate a symbol with the keyword ```new()``` just like you would do with any other object. Symbols are primitive data types in JavaScript. 
When you create a symbol you can give it only one single argument and that is the symbol description. Example:

```JavaScript
const symbol = Symbol("This is the description for the symbol I've just created.");
```

You can also create two symbols with the same description in this way and you will see that they are not seen as the same symbol:

```JavaScript
const symbol_1 = Symbol("This is the description for the symbol I've just created.");
const symbol_2 = Symbol("This is the description for the symbol I've just created.");

console.log(symbol_1 === symbol_2); // false
```

The reason why they are not seen the same is because they are stored in 2 different variables.

In JavaScript we have the **Global Symbol Registry ( GSR )** which is a map with key-value pairs. Each key represents the symbol description of a symbol and the value is the symbol itself. A cleaner way of working with symbols is using the GSR.

There are 2 special methods that can be used by the Symbol data type: for and keyFor.

```Symbol.for()``` works just like ```setdefault()``` in python dicts. You must give it the symbol description as an argument. If the symbol description will be found in the GSR-keys then you will get the value back, which is the symbol that had that symbol description. Otherwise, if the symbol description hasn't been found in the GSR-keys, a new symbol will be added inside the GSR with the symbol description as its key and the symbol itself as the value. Example:

```JavaScript
const symbol = Symbol.for("symbol description");
const another_symbol = Symbol.for("symbol description");

console.log(symbol === another_symbol); // true
```

In this case, the symbols will be the same since another_symbol uses Symbol.for() with the same description as symbol, that means that Symbol.for() will return the first symbol that used that description, which in our case is ```symbol```, so ```another_symbol``` will be the exact same as ```symbol```.

```Symbol.keyFor()``` is the opposite of ```Symbol.for()```. You have to give it the symbol as its value and it will search for it inside the GSR values and will return it's key, if found. The key will be, of course, the symbol description of the given symbol.

We can use symbols in order to make values more private inside objects. That means that we can use symbols as special properties so we can't access them through iteration ( just like properties that have the ```enumerable``` property set to false )

```JavaScript
const symbol = Symbol.for("SYMBOL DESCRIPTION");

const object = {
    property_1 : "value_1",
    property_2 : "value_2",
    [symbol] : 17
};

for(let key in object){
    console.log(`KEY -- > ${key} || VALUE -- > ${object[key]}`);
    // [symbol] won't be shown here
}

console.log(object[symbol]); // 17
```

## Object and array destructuring

In order to destructure an array you can simply write the names of the properties inside parantheses.

```JavaScript
const numbers = [
    1, 2, 3, 4
]

let [
    one, two, three, four
] = numbers;
```