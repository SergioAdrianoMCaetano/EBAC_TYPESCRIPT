//CLASSES
class Conta{
    numeroConta: number;
    saldo: number = 0;

    constructor(numeroConta: number){
        this.numeroConta = numeroConta;
    };
};

class ContaSalario extends Conta{
    depositar(valor: number){
        this.saldo += valor;        
    };
};

class ContaCorrente extends Conta implements ITransferencia{
    transferir(valor: number, destinatario: Conta){
        destinatario.saldo += (valor - this.taxaTransferencia);
        return true;
    };
    taxaTransferencia: number = 0.50;
};

//INTERFACES
interface ITransferencia {
    transferir: (valor: number, destinatario: Conta) => boolean;
    taxaTransferencia: number;
};

interface Exemplo2{
    cnpj: number;
}

interface Exemplo3{
    telefone: number;
}

