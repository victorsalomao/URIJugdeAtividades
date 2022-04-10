let input = require("fs").readFileSync("stdin", "utf8");

let valores = input.split("\n");

let numeroDoFuncionario = parseInt(valores.shift());
let numeroHorasTrabalhadas = parseInt(valores.shift());
let valorDaHora = parseFloat(valores.shift());

let salario = (numeroHorasTrabalhadas * valorDaHora);

console.log("NUMBER = " + numeroDoFuncionario);
console.log("SALARY = U$ " + salario.toFixed(2));
