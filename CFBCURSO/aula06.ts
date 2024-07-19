let numero:Number[]=[20,30,40];
// let numero:Array<number|string>=[20,19,18];
// let numero:(number|string)[]=[20,19,18];

numero.push(10); //insere 10 no final
numero.unshift(1); //insere 1 no começo
numero.pop(); //retira o ultimo
numero.shift(); //retira o primeiro
console.log(numero);

let numero_ro:ReadonlyArray<Number>=[100,200,300];//array somente de leitura
//descarta os metodos que podem alters-los.


