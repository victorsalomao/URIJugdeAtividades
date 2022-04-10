let input = require("fs").readFileSync("stdin", "utf8");

let valores = input.split("");

let raio = parseFloat(valores.shift());
let n = 3.14159;
let area = n * (raio * raio)


console.log("A=" + area.toFixed(4));