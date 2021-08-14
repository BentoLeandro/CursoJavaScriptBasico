export class Conta {
    constructor(saldoInicial, cliente, agencia){
        //classe abstrata não pode ser instanciada diretamente
        //as classes abstratas devem ser herdadas para outras classes
        if (this.constructor == Conta){
            //throw new Error("Você não deveria instanciar um objeto do tipo Conta Diretamente!");
        }

        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;        
    }

    set cliente(novoValor){
        if (novoValor instanceof Cliente){
            this._cliente = novoValor;
        }
    }

    get cliente(){
        return this._cliente;
    }

    _saldo = 0;

    get saldo(){
        return this._saldo;
    }

    sacar(valor){        
        taxa = 1;
        return this._sacar(valor, taxa);        
    }

    _sacar(valor, taxa){
        const valorSacado = taxa * valor;
        if (this._saldo >= valorSacado) {
            this._saldo -= valorSacado;
            return valorSacado;
        }
        return 0;
    }
    
    depositar(valor){
        if (valor <= 0){
            return; 
        }
        this._saldo += valor;
    }

    transferir(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}