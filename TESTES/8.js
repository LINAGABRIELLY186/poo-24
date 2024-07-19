"use strict";
class Conta {
    // Outros atributos e métodos existentes da classe Conta...
    verificarSituacao() {
        const saldo = this.calcularSaldo();
        if (saldo >= 0) {
            return `Situação Positiva (R$ ${saldo.toFixed(2)})`;
        }
        else {
            return `Situação Negativa (R$ ${saldo.toFixed(2)})`;
        }
    }
}
// Exemplo de uso da classe Conta
const conta = new Conta(); // Supondo que você já tenha uma instância da classe Conta
console.log(conta.verificarSituacao()); // Saída: Situação Positiva (R$ 1500.00) ou Situação Negativa (R$ -500.00)
