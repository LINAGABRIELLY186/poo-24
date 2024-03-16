function ehPrimo(numero: number): Boolean{
    if (numero <= 1) {
        return false;
    }
    for (let i = 2; i < numero ; i++){
        if (numero % i === 0)
            return false;
            
    } 
        return true;
    
}
const numero = 17;
const resultado = ehPrimo(numero);
console.log(`O numero ${numero} , é primo? ${resultado}`);