const input = require("fs").readFileSync("stdin", "utf8");
const [A, B, C, D] = input.split(" ").map(item => parseFloat(item));
//let valores2 = valores.split(" ");

console.log(A.toFixed(1));
console.log(B);
console.log(C);
console.log(D);

