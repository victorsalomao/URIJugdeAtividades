let input = require("fs").readFileSync("stdin", "utf8");
let valores = input.split("\n");

let distanciaPercorrida = parseFloat(valores.shift());
let totalCombustivel = parseFloat(valores.shift());

let consumoMedio = (distanciaPercorrida / totalCombustivel);

console.log(consumoMedio.toFixed(3) + " km/l");