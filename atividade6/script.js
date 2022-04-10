let input = require("fs").readFileSync("stdin", "utf8");

let valores = input.split("\n");

let A = parseFloat(valores.shift());
let B = parseFloat(valores.shift());
let C = parseFloat(valores.shift());

let pesoA = 2;
let pesoB = 3;
let pesoC = 5;

let MEDIA = ((A*pesoA)+ (B*pesoB) + (C*pesoC)) / 10;

console.log("MEDIA = " + MEDIA.toFixed(1));
