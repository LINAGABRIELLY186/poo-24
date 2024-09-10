class AplicacaoError extends Error {

    constructor(message: string) {
        super(message)
    }
}

class SaldoInsuficienteError extends AplicacaoError {
  constructor(message: string) {
    super(message);
  }
}

class ContaNaoEncontradaError extends AplicacaoError {
  constructor(message: string) {
    super(message);
  }
}

class ValorInvalidoError extends AplicacaoError {
  constructor(message: string) {
    super(message);
  }
}

class PoupancaInvalidaError extends AplicacaoError {
    constructor(message: string) {
      super(message);
    }
  }


class Cliente {
    id: number;
    nome: string;

    constructor(id: number, nome: string) {
        this.id = id;
        this.nome = nome;
    }
}

class Conta {
    numero: string;
    cliente: Cliente;
    private _saldo: number;

    constructor(numero: string, saldo: number, cliente: Cliente) {
        this.numero = numero;
        this.cliente = cliente;
        if (this.validaValor(saldo)) {
            this._saldo = saldo;
        } else {
            this._saldo = 0;
        }      
    }

    sacar(valor: number) {

        if (this._saldo > valor && this.validaValor(valor)) {
            this._saldo = this._saldo - valor;
        }
    }

    private validaValor(valor: number): void {
        if(valor<0){
            throw new ValorInvalidoError("Valor invalido: " + valor);
        }
       
    }

    depositar(valor: number): void {
        this._saldo = this._saldo + valor
    }

    get saldo(): number {
        return this._saldo;
    } 

    consultarSaldo(): number {
        return this._saldo;
    }

    transferir(contaDestino: Conta, valor: number): void {
        /*
        this.saldo = this.saldo - valor;
        contaDestino.saldo = contaDestino.saldo + valor;
        */
        this.sacar(valor);
        contaDestino.depositar(valor);
        
    }
}

class Poupanca extends Conta {
    private _taxaDeJuros: number

    constructor(numero: string, saldo: number, cliente: Cliente, taxaDeJuros: number) {
     
        super(numero, saldo, cliente);
        this._taxaDeJuros = taxaDeJuros;     
    }

    public renderJuros() {
        let juros: number = this.saldo * this._taxaDeJuros;  
        this.depositar(juros);  
    }
}

class ContaImposto extends Conta {
    private _taxaImposto: number = 0;

    constructor(numero: string, saldo: number, cliente: Cliente, taxaImposto: number) {
        super(numero, saldo, cliente);
        this._taxaImposto = taxaImposto;
    }

    sacar(valor: number): void {
        super.sacar(valor);
        let valorImposto = valor * this._taxaImposto/100;
        super.sacar(valorImposto)
    }
}



class Banco {
    private _contas: Conta[] = [];

    inserir(conta: Conta) {
        this._contas.push(conta);
    }

    consultar(numero: string): Conta {
        let contaProcurada!: Conta;
        for (let i: number = 0; i < this._contas.length; i++) {
            if (this._contas[i].numero == numero) {
                contaProcurada = this._contas[i];
                break;
            }
        }

        return contaProcurada;
    }

    alterar(conta: Conta){
        let contaProcurada: Conta = this.consultar(conta.numero);
        //contaProcurada.saldo = conta.saldo;
        let saldoTemporario = contaProcurada.consultarSaldo();
        contaProcurada.sacar(saldoTemporario);
        contaProcurada.depositar(conta.consultarSaldo());

        contaProcurada.cliente = conta.cliente;        
    }

    alterarPorIndice(conta: Conta) {
        let indice: number = this.consultarPorIndice(conta.numero);
        if (indice != -1) {
            this._contas[indice] = conta;
        }
    }

    private consultarPorIndice(numero: string): number {
        let indiceProcurado: number = -1;
        for (let i: number = 0; i < this._contas.length; i++) {
            if (this._contas[i].numero == numero) {
                indiceProcurado = i;
                break;
            }
        }

        return indiceProcurado;
    }

    excluir(numero: string): void {
        let indice: number = this.consultarPorIndice(numero);
        if (indice!= -1) {
            for (let i: number = indice; i < this._contas.length; i++) {
                this._contas[i] = this._contas[i + 1];
                console.log(this._contas);
            }
            
            this._contas.pop();
            console.log(this._contas);
        }
    }    

    sacar(numero: string, valor: number): void {
        let conta: Conta = this.consultar(numero);
        if (conta == null) {
            throw new ContaNaoEncontradaError("Conta nao ");}
        conta.sacar(valor);
    }

    depositar(numero: string, valor: number): void {
        let conta: Conta = this.consultar(numero);
        if (conta!= null) {
            conta.depositar(valor);
        }
    }

    transferir(numero: string, numeroContaDestino: string, valor: number): void {
        let contaOrigem: Conta = this.consultar(numero);
        let contaDestino: Conta = this.consultar(numeroContaDestino);
        
        if (contaOrigem != null && contaDestino != null) {
            contaOrigem.transferir(contaDestino, valor);
        }
    }

    consultarSaldo(numero: string): number {
        let conta: Conta = this.consultar(numero);
        return conta.consultarSaldo();
    }

    renderJuros(numero: string): void {
        let conta: Conta = this.consultar(numero);

        if (conta instanceof Poupanca) {
            (conta as Poupanca).renderJuros()
        }
    }
}

let c1: Conta = new Conta("111-1", 1000, new Cliente(1, "Ely"));
let p1: Poupanca = new Poupanca("222-2", 1000, new Cliente(2, "João"), 0.05);
c1.transferir(p1, 100);
p1.renderJuros();
//console.log(c1.saldo);
//console.log(p1.saldo);

let banco: Banco = new Banco();
banco.inserir(c1);
banco.inserir(p1);

//console.log(banco.consultar("222-2").cliente.nome);


//banco.contas = [];

/*
  versão 01
class Ola {
    private nome: String;
    private saudacao: String;

    constructor(nome: String, saudacao: String) {
        this.nome = nome;
        this.saudacao = saudacao;
    }

    dizerOla(): void {
        console.log(this.saudacao + ", " + this.nome);
    } 
}

*/
/*
// versão 2
class Ola {
    constructor(private nome: String, private saudacao: String) {}

    dizerOla(): void {
        console.log(this.saudacao + ", " + this.nome);
  
    }
}
    
let ola1: Ola = new Ola("Ely", "Boa tarde");


ola1.dizerOla();
*/


class Veiculo {
    placa: string;
    ano: number;

    constructor(placa: string, ano: number) {
        this.placa = placa;
        this.ano = ano;
    }
}

class Carro extends Veiculo {
    modelo: string;

    constructor(placa: string, ano: number, modelo: string) {
        super(placa, ano);
        this.modelo = modelo;
    }
}

class CarroEletrico extends Carro {
    autonomiaBateria: number;

    constructor(placa: string, ano: number, modelo: string, autonomiaBateria: number) {
        super(placa, ano, modelo);
        this.autonomiaBateria = autonomiaBateria;
    }
}

/*
let veiculo: Veiculo = new CarroEletrico("111-1", 2021, "DOLPHIN",400);
console.log(veiculo.placa);
console.log((veiculo as Carro).modelo);
console.log((veiculo as CarroEletrico).autonomiaBateria);
*/

let ce: CarroEletrico = new CarroEletrico("111-1", 2021, "DOLPHIN",400);
//console.log(ce.placa);


class Calculadora {
    private _op1: number;
    private _op2: number;

    constructor(op1: number, op2: number) {
        this._op1 = op1;
        this._op2 = op2;
    }

    public somar(): number {
        return this._op1 + this._op2;
    }

    get op1(): number {
        return this._op1;
    }   

    get op2(): number {
        return this._op2;
    }   
}

class CalculadoraCientifica extends Calculadora {
    exponenciar(): number {
        return Math.pow(this.op1, this.op2);
    }

 }
/*
let calculadora: Calculadora = new Calculadora(10, 20);
console.log(calculadora.somar());

let calculadoraCientifica: CalculadoraCientifica = new CalculadoraCientifica(2, 3);
console.log(calculadoraCientifica.exponenciar());
console.log(calculadoraCientifica.somar());
*/

let conta1: Conta =  new Conta("111-1", 1000, new Cliente(1, "Ely"));
let poupanca1: Conta = new Poupanca("222-2", 2000, new Cliente(2, "João"), 0.05);
let poupanca2: Poupanca = new Poupanca("333-3", 3000, new Cliente(3, "Ricardo"), 0.05);


function imprimeCliente(conta: Conta): void {
    console.log("Nome do cliente: " + conta.cliente.nome);
}

/*
imprimeCliente(conta1);
imprimeCliente(poupanca1);
imprimeCliente(poupanca2);

(<Poupanca> poupanca1).renderJuros();
(poupanca1 as Poupanca).renderJuros();
poupanca2.renderJuros()
*/

/*
function renderJuros(conta: Conta): void {
    console.log("Saldo atual: " + conta.saldo);
    if (conta instanceof Poupanca) {
        (conta as Poupanca).renderJuros();
    }
    console.log("Saldo após os juros: " + conta.saldo);
}

renderJuros(poupanca1);
renderJuros(conta1);
*/


let banco2 = new Banco();
banco2.inserir(conta1);
banco2.inserir(poupanca1);
banco2.inserir(poupanca2);

console.log("Saldo atual conta1: " + banco2.consultarSaldo('111-1'));
banco2.renderJuros('111-1');
console.log("Saldo final conta1: " + banco2.consultarSaldo('111-1'));

console.log("Saldo atual conta1: " + banco2.consultarSaldo('222-2'));
banco2.renderJuros('222-2');
console.log("Saldo final conta1: " + banco2.consultarSaldo('222-2'));

let contaImposto1: ContaImposto = 
    new ContaImposto('444-4', 4000, new Cliente(4,'Joaquim'),0.38);

//contaImposto1.sacar(100);    
console.log(contaImposto1.saldo);

banco2.inserir(contaImposto1);
banco2.sacar('444-4', 100);
console.log(banco2.consultarSaldo('444-4'));