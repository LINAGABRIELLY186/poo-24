"use strict";
class Hora {
    hora;
    minuto;
    segundo;
    constructor(hora, minuto, segundo) {
        this.hora = hora;
        this.minuto = minuto;
        this.segundo = segundo;
    }
    ler_hora() {
        return this.hora;
    }
    ler_minuto() {
        return this.minuto;
    }
    ler_segundo() {
        return this.segundo;
    }
    formatada() {
        return `${this.hora}:${this.minuto}:${this.segundo}`;
    }
}
let hora1 = new Hora(12, 15, 39);
console.log(hora1.formatada());
