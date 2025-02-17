class Pessoa {
    nome: string;
    renda?: number;

    constructor (nome: string, renda?: number){
        this.nome = nome;
        this.renda = renda;
    }

    dizOi(): string {
        return `${this.nome} disse oi!`
    }
};

class ContaBancaria {
    protected saldo: number = 0;
    public numeroConta: number;

    constructor(numeroConta : number){
        this.numeroConta = numeroConta;
    };

    static retornaNumeroBanco (){
        return 123;
    };

    private getSaldo(){
        return this.saldo;
    };

    depositar(valor: number){
        this.saldo += valor;
    }
};

class contaBancariaPessoaFisica extends ContaBancaria{
    depositar(valor: number): void {
        this.saldo = valor * 2;
    }
};

const contaDoPedro = new contaBancariaPessoaFisica(12345674);

ContaBancaria.retornaNumeroBanco;