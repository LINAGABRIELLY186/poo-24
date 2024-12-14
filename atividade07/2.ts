// class Calculadora{
//     private _num1: number;
//     private _num2: number;

//     constructor(num1:number, num2:number){
//         this._num1= num1;
//         this._num2=num2;
//     }

//     soma(): number{
//         return this._num1+this._num2;
//     }
//     get num_1():number{
//         return this._num1;
//     }
//     get num_2():number{
//         return this._num2;
//     }
// }

// let s1: Calculadora = new Calculadora(12,23);

// console.log(s1);
// console.log(s1.soma());

// class CalculadoraCientifica extends Calculadora{
//     exporneciar():number{
//         return this.num_1**this.num_2;
//     }
// }
// let s2: CalculadoraCientifica = new CalculadoraCientifica(2,3);

// console.log(s2);
// console.log(s2.exporneciar());
//sim,foi necessario fazer um get para dar um retorno nos numeros.
//quetoes acima: 2 e 3.