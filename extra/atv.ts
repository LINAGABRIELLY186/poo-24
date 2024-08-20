class Empregado{
  salario:number;
  constructor(salario:number){
    this.salario=salario;
  }
  calcularSalario():number{
    return this.salario;
  }
}
class Diarista extends Empregado{
   calcularSalario():number{
   return super.calcularSalario()/30;
   }

}
class Horista extends Diarista{
    calcularSalario():number{
     return super.calcularSalario()/24;
   }
}

class Pessoa{
    private _nome:string;
    private _sobrenome:string;
    
    constructor(nome:string,sobrenome:string){
        this._nome=nome;
        this._sobrenome=sobrenome;
    }

    get nome():string{
        return this._nome;
    }
    get sobrenome():string{
        return this._sobrenome;
    }
    get nomeCompleto():string{
        return this._nome+ " " +this._sobrenome;
    }
}

class Funcionario extends Pessoa{
    private _matricula:string;
    private _salario:number;
  
   constructor(nome:string,sobrenome:string, matricula:string,salario:number){
    super(nome,sobrenome);
    this._matricula=matricula;
    if (salario>=0){
    this._salario=salario;
    }else{
      throw new Error("O salario nao pode ser negativo.");
    }
   }
   get matricula():string{
    return this._matricula;
   }
   get salario():number{
    return this._salario;
   }
  calcularSalarioPrimeiraParcela():number{
    return this.salario*60/100;
  }
  calcularSalarioSegundaaParcela():number{
    return this.salario*40/100;
  }
    
}
class Professor extends Funcionario{
  titulacao:string;

  constructor(nome:string,sobrenome:string, matricula:string,salario:number,titulacao:string){
    super(nome,sobrenome,matricula,salario);
    this.titulacao=titulacao;
  }
  get Titulacao():string{
    return this.titulacao;
  }
  
  calcularSalarioPrimeiraParcela(): number {
    return this.salario;
  }
  calcularSalarioSegundaaParcela(): number {
    return 0;
  }
  
}

class FolhaDePagamento{
 private _pessoas: Pessoa[];

 constructor(pessoas:Pessoa[]){
  this._pessoas=pessoas;
 }

 calcularPagamentos():number{
  let totalsal=0;
  
  for(const pessoa of this._pessoas){

    if(pessoa instanceof Funcionario){
        totalsal+=pessoa.calcularSalarioPrimeiraParcela()+pessoa.calcularSalarioSegundaaParcela();
    }
  }

  return totalsal;
 }

}

let f1: Funcionario= new Funcionario("Lina","Gabrielly","11-1", 1500);
let f2: Funcionario= new Professor("Crislane","Leal","11-1", 1500,"DRA");
const pessoas:Pessoa[]=[f1,f2];
console.log(f1,f2);
const folhadepag= new FolhaDePagamento(pessoas);

console.log(`Total de salários: ${folhadepag.calcularPagamentos()}`);