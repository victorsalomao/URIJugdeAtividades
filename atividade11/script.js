let input = require("fs").readFileSync("stdin", "utf8");
let valores = input.split("\n");

let raio = parseFloat(valores.shift());
let pi = 3.14159;

let esfera = (4.0/3 * pi * Math.pow(raio, 3));

console.log("VOLUME = " + esfera.toFixed(3));