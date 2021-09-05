let first = 'ham';
let second = 'pineapple';
let txt = f`${first} and ${second} or ${first}`;

function f(strings, ...expressions){
    return `I do not like ${expressions.join(" and ")}`;
}

console.log(txt);