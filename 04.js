"use strict";
function numerosSeparados(numeros) {
    let resultado = "";
    numeros.forEach((numero, index) => {
        resultado += numero;
        if (index !== numeros.length - 1) {
            resultado += "-";
        }
    });
    return resultado;
}
const arrayNumeros = [1, 2, 3, 4];
const numeros = numerosSeparados(arrayNumeros);
console.log(numeros);
