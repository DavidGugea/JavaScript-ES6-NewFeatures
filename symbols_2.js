const symbol1 = Symbol.for("exampleKey"); // Creating a symbol inside the symbol-registry
const symbol2 = Symbol("exampleDescription"); // Cerating a symbol outisde the symbol-registry

console.log(Symbol.keyFor(symbol1));
console.log(Symbol.keyFor(symbol2));

const symbol3 = Symbol.for("exampleKey");
const symbol4 = Symbol.for("exampleKey");

console.log(symbol3 === symbol4); // true because they both are inside the symbol registry