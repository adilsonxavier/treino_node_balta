var modulo02 = function (initialValue) { // Aqui a function está simulando uma classe
    var contador = initialValue;
    return {
        contar: function () {
            contador++;
        },
        escrever: function () {
            console.log(contador);
        }
    }
}

module.exports = modulo02;