const symbol = Symbol.for("My symbol description");
const another_symbol = Symbol.for("My symbol description");

console.log(symbol === another_symbol);
console.log(Symbol.keyFor(symbol));