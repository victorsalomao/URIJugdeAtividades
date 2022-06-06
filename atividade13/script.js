var input = require("fs").readFileSync("stdin", "utf8");
let valores = input.split("\n");

let valor = valores.shift().split(" ");

let a = parseFloat(valor.shift());
let b = parseFloat(valor.shift());
let c = parseFloat(valor.shift());
let maiorAB;

    if(a > b && a > c ){
        resultado = a;  
    } else if(b > a && b > c){
        resultado = b;
    } else {
        resultado = c;
    }
    

console.log(resultado +" eh o maior");


