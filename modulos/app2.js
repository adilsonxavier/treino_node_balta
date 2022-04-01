
var m1 = require("./modulo02")(1);
var m2 = require("./modulo02")(5);

m1.contar();
//m1.contar();
console.log("m1:");
m1.escrever(); // 2  => começou com 1 e somou  + 1

m2.contar();
//m2.contar();
console.log("m2:");
m2.escrever(); //6   => começou com 5 e somou  + 1

console.log("m1 de novo:");
m1.escrever(); // 2 => o valor de m1 se manteve por que  m1 e m2 tem escopos separados pois  a função contar em modulo02.js
              // está dentro da função modulo02()

