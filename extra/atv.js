"use strict";
class Empregado {
    salario;
    constructor(salario) {
        this.salario = salario;
    }
    calcularSalario() {
        return this.salario;
    }
}
class Diarista extends Empregado {
    calcularSalario() {
        return super.calcularSalario() / 30;
    }
}
class Horista extends Diarista {
    calcularSalario() {
        return super.calcularSalario() / 24;
    }
}
class Pessoa {
    _nome;
    _sobrenome;
    constructor(nome, sobrenome) {
        this._nome = nome;
        this._sobrenome = sobrenome;
    }
    get nome() {
        return this._nome;
    }
    get sobrenome() {
        return this._sobrenome;
    }
    get nomeCompleto() {
        return this._nome + " " + this._sobrenome;
    }
}
class Funcionario extends Pessoa {
    _matricula;
    _salario;
    constructor(nome, sobrenome, matricula, salario) {
        super(nome, sobrenome);
        this._matricula = matricula;
        if (salario >= 0) {
            this._salario = salario;
        }
        else {
            throw new Error("O salario nao pode ser negativo.");
        }
    }
    get matricula() {
        return this._matricula;
    }
    get salario() {
        return this._salario;
    }
    calcularSalarioPrimeiraParcela() {
        return this.salario * 60 / 100;
    }
    calcularSalarioSegundaaParcela() {
        return this.salario * 40 / 100;
    }
}
class Professor extends Funcionario {
    titulacao;
    constructor(nome, sobrenome, matricula, salario, titulacao) {
        super(nome, sobrenome, matricula, salario);
        this.titulacao = titulacao;
    }
    get Titulacao() {
        return this.titulacao;
    }
    calcularSalarioPrimeiraParcela() {
        return this.salario;
    }
    calcularSalarioSegundaaParcela() {
        return 0;
    }
}
class FolhaDePagamento {
    _pessoas;
    constructor(pessoas) {
        this._pessoas = pessoas;
    }
    calcularPagamentos() {
        let totalsal = 0;
        for (const pessoa of this._pessoas) {
            if (pessoa instanceof Funcionario) {
                totalsal += pessoa.calcularSalarioPrimeiraParcela() + pessoa.calcularSalarioSegundaaParcela();
            }
        }
        return totalsal;
    }
}
let f1 = new Funcionario("Lina", "Gabrielly", "11-1", 1500);
let f2 = new Professor("Crislane", "Leal", "11-1", 1500, "DRA");
const pessoas = [f1, f2];
console.log(f1, f2);
const folhadepag = new FolhaDePagamento(pessoas);
console.log(`Total de salários: ${folhadepag.calcularPagamentos()}`);
