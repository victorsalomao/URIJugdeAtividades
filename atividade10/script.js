let input = require("fs").readFileSync("stdin", "utf8");
let valores = input.split("\n");

let codigo1 = valores.shift().split(" ");
let codigo2 = valores.shift().split(" ");

let iDpeca1 = codigo1.shift();
let numeroPecas1 = codigo1.shift();
let valorUnitarioPeca1 = codigo1.shift();
let valorTotalpeca1 = (numeroPecas1 * valorUnitarioPeca1);

let iDpeca2 = codigo2.shift();
let numeroPecas2 = codigo2.shift();
let valorUnitarioPeca2 = codigo2.shift();
let valorTotalpeca2 = (numeroPecas2 * valorUnitarioPeca2);

let valorTotalpecas = (valorTotalpeca1 + valorTotalpeca2);

console.log("VALOR A PAGAR: R$ " + valorTotalpecas.toFixed(2));