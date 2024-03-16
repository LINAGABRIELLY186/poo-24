function numerosSeparados(numeros) {
    var resultado = "";
    numeros.forEach(function (numero, index) {
        resultado += numero;
        if (index !== numeros.length - 1) {
            resultado += "-";
        }
    });
    return resultado;
}
var arrayNumeros = [1, 2, 3, 4];
var numeros = numerosSeparados(arrayNumeros);
console.log(numeros);
