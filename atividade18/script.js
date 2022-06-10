const input = require('fs').readFileSync('stdin', 'utf8');

const valores = input.split('\n');

let tempoGasto = parseFloat(valores.shift());
let velocidadeMedia = parseFloat(valores.shift());
let automovel = 12;

let distanciaPercorrida = (tempoGasto * velocidadeMedia) / automovel;

console.log(distanciaPercorrida.toFixed(3));

