let input = require("fs").readFileSync("stdin", "utf8");
let valores = input.split("\n");

let nomeVendedor = (valores.shift());
let salarioVendedor = parseInt(valores.shift());
let vendasEfetuadas = parseFloat(valores.shift());

let salario = (0.15 * vendasEfetuadas);
salario = salario + salarioVendedor;

console.log("Esses é o nome do Vendedor " + nomeVendedor);
console.log("Esses é o salário do vendedor " + salarioVendedor);
console.log("Essa são as vendas efetuadas " + vendasEfetuadas);
console.log("TOTAL = R$ " + salario.toFixed(2));