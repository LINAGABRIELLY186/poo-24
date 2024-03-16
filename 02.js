function ehPrimo(numero) {
    if (numero <= 1) {
        return false;
    }
    for (var i = 2; i < numero; i++) {
        if (numero % i === 0)
            return false;
    }
    return true;
}
var numero = 17;
var resultado = ehPrimo(numero);
console.log("O numero ".concat(numero, " , \u00E9 primo? ").concat(resultado));
