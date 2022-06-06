let input = require("fs").readFileSync("stdin", "utf8");
let valores = input.split("\n");

let nomeVendedor = (valores.shift());
let salarioVendedor = parseInt(valores.shift());
let vendasEfetuadas = parseFloat(valores.shift());

let salario = (15*100 / vendasEfetuadas);

console.log("Esses são os dados " + nomeVendedor);
console.log("Esses são os dados " + salarioVendedor);
console.log("Esses são os dados " + salario.toFixed(1));