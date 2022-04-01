//require("./modulo01")
var m1 = require("./modulo01");
m1.contar(); //1  
m1.contar(); //2  // Graças ao closure o valor do contador é acrescentado

var m2 = require("./modulo01"); //  O require é executado uma vêz só mesmo que seja atribuido a uma nova variável como aqui ,
m2.contar(); //3                //  é mantida o escopo do primeiro require. Utiliza o padrão Singleton , por isso o valor
m2.contar(); //4                // do contador não foi zerado quando foi criado m2