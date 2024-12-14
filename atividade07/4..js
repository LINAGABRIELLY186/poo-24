"use strict";
class Cliente {
    id;
    nome;
    constructor(id, nome) {
        this.id = id;
        this.nome = nome;
    }
}
class Conta {
    numero;
    cliente;
    _saldo;
    constructor(numero, saldo, cliente) {
        this.numero = numero;
        this.cliente = cliente;
        if (this.validaValor(saldo)) {
            this._saldo = saldo;
        }
        else {
            this._saldo = 0;
        }
    }
    sacar(valor) {
        if (this._saldo > valor && this.validaValor(valor)) {
            this._saldo = this._saldo - valor;
        }
    }
    validaValor(valor) {
        return valor > 0;
    }
    depositar(valor) {
        this._saldo = this._saldo + valor;
    }
    get saldo() {
        return this._saldo;
    }
    consultarSaldo() {
        return this._saldo;
    }
    transferir(contaDestino, valor) {
        /*
        this.saldo = this.saldo - valor;
        contaDestino.saldo = contaDestino.saldo + valor;
        */
        this.sacar(valor);
        contaDestino.depositar(valor);
    }
}
class Poupanca extends Conta {
    _taxaDeJuros;
    constructor(numero, saldo, cliente, taxaDeJuros) {
        super(numero, saldo, cliente);
        this._taxaDeJuros = taxaDeJuros;
    }
    renderJuros() {
        let juros = this.saldo * this._taxaDeJuros;
        this.depositar(juros);
    }
}
class Banco {
    _contas = [];
    inserir(conta) {
        this._contas.push(conta);
    }
    consultar(numero) {
        let contaProcurada;
        for (let i = 0; i < this._contas.length; i++) {
            if (this._contas[i].numero == numero) {
                contaProcurada = this._contas[i];
                break;
            }
        }
        return contaProcurada;
    }
    alterar(conta) {
        let contaProcurada = this.consultar(conta.numero);
        let saldoTemporario = contaProcurada.consultarSaldo();
        contaProcurada.sacar(saldoTemporario);
        contaProcurada.depositar(conta.consultarSaldo());
        contaProcurada.cliente = conta.cliente;
    }
    alterarPorIndice(conta) {
        let indice = this.consultarPorIndice(conta.numero);
        if (indice != -1) {
            this._contas[indice] = conta;
        }
    }
    consultarPorIndice(numero) {
        let indiceProcurado = -1;
        for (let i = 0; i < this._contas.length; i++) {
            if (this._contas[i].numero == numero) {
                indiceProcurado = i;
                break;
            }
        }
        return indiceProcurado;
    }
    excluir(numero) {
        let indice = this.consultarPorIndice(numero);
        if (indice != -1) {
            for (let i = indice; i < this._contas.length; i++) {
                this._contas[i] = this._contas[i + 1];
                console.log(this._contas);
            }
            this._contas.pop();
            console.log(this._contas);
        }
    }
    sacar(numero, valor) {
        let conta = this.consultar(numero);
        if (conta != null) {
            conta.sacar(valor);
        }
    }
    depositar(numero, valor) {
        let conta = this.consultar(numero);
        if (conta != null) {
            conta.depositar(valor);
        }
    }
    transferir(numero, numeroContaDestino, valor) {
        let contaOrigem = this.consultar(numero);
        let contaDestino = this.consultar(numeroContaDestino);
        if (contaOrigem != null && contaDestino != null) {
            contaOrigem.transferir(contaDestino, valor);
        }
    }
    consultarSaldo(numero) {
        let conta = this.consultar(numero);
        return conta.consultarSaldo();
    }
    //ii
    renderJuros_(numero) {
        let contaPoup = this.consultar(numero);
        if (contaPoup instanceof Poupanca) {
            contaPoup.renderJuros();
        }
        else {
            console.log("A conta encontrada não é poupança");
        }
    }
}
let cont1 = new Conta("2-3", 4000, new Cliente(1, "lina"));
let poup1 = new Poupanca("2-4", 5000, new Cliente(2, "gabrielly"), 0.05);
