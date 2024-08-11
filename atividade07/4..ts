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

    private validaValor(valor: number): boolean {
        return valor > 0;
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
    private _taxaDeJuros: number;

    constructor(numero: string, saldo: number, cliente: Cliente, taxaDeJuros: number) {
     
        super(numero, saldo, cliente);
        this._taxaDeJuros = taxaDeJuros;     
    }

    public renderJuros() {
        let juros: number = this.saldo * this._taxaDeJuros;  
        this.depositar(juros);  
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
        if (conta != null) {
            conta.sacar(valor);
        }
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
    //ii
    renderJuros_(numero:string):void{
      let contaPoup: Conta =this.consultar(numero);
        if (contaPoup instanceof Poupanca){
            (contaPoup as Poupanca).renderJuros();
        }
        else {
            console.log("A conta encontrada não é poupança");
        }
      }


    }


let cont1: Conta = new Conta("2-3", 4000, new Cliente(1, "lina"));
let poup1: Poupanca = new Poupanca("2-4", 5000, new Cliente(2, "gabrielly"), 0.05);



