const input = require("fs").readFileSync("/stdin", "utf8");

const valores = input.split();

const A = valores.shift();

console.log(A);