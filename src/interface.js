"use strict";
//CLASSES
class Conta {
    constructor(numeroConta) {
        this.saldo = 0;
        this.numeroConta = numeroConta;
    }
    ;
}
;
class ContaSalario extends Conta {
    depositar(valor) {
        this.saldo += valor;
    }
    ;
}
;
class ContaCorrente extends Conta {
    constructor() {
        super(...arguments);
        this.taxaTransferencia = 0.50;
    }
    transferir(valor, destinatario) {
        destinatario.saldo += (valor - this.taxaTransferencia);
        return true;
    }
    ;
}
;
;
