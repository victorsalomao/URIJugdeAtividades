let input = require("fs").readFileSync("stdin", "utf8");
let valores = input.split("\n");

let [x1, y1]= valores[0].split(" ");
let [x2, y2]= valores[1].split(" ");

let calculo1 = Math.pow(x2 - x1, 2);
let calculo2 = Math.pow(y2 - y1, 2);

let distancia = Math.sqrt(calculo1 + calculo2);

console.log(distancia.toFixed(4));
