//console.log("dentro do módulo");  // quando se trata de módulo no node , implicitamente é como fosse criada uma
                                    // função auto executável que executaria este console.log
                                    // Então no require("./modulo01") no js destino será executada este console.log

var contador = 0;
//const contar = () => {
//    contador++;
//    console.log(contador);
//};

//module.exports = contar;

module.exports.contar = function () {
    contador++;
    console.log(contador);
};