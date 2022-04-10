let input = require("fs").readFileSync("stdin", "utf8");

let valores = input.split("\n");

let A = parseFloat(valores.shift());
let B = parseFloat(valores.shift());

let pesoA = 3.5;
let pesoB = 7.5;

let MEDIA = ((A*pesoA)+ (B*pesoB)) / 11;

console.log("MEDIA = " + MEDIA.toFixed(5));
