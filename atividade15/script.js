let input = require("fs").readFileSync("stdin", "utf8");
let valores = input.split("\n");

let x1 = valores.shift().split(" ");
let x2 = valores.shift().split(" ");
let y1 = valores.shift().split(" ");
let y2 = valores.shift().split(" ");


console.log(x1, x2, y1, y2);