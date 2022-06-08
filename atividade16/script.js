let input = require("fs").readFileSync("stdin", "utf8");
let valores = input.split("\n");

let distancia = parseInt(valores.shift()); 

let tempo = (distancia * 2);

console.log(tempo + " minutos");

