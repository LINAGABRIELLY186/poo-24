"use strict";
class Produto {
    _Id;
    _descricao;
    _qtdProduto;
    _valorUnitario;
    constructor(Id, descricao, qtdProduto, valorUnitario) {
        this._Id = Id;
        this._descricao = descricao;
        this._qtdProduto = qtdProduto;
        this._valorUnitario = valorUnitario;
    }
    get Id() {
        return this._Id;
    }
    get descricao() {
        return this._descricao;
    }
    get qtdProduto() {
        return this._qtdProduto;
    }
    get valorUnitario() {
        return this._valorUnitario;
    }
    repor(quantidade) {
        if (quantidade > 0) {
            this._qtdProduto += quantidade;
            console.log(`${quantidade} unidades  foram adicionadas ao estoque.`);
        }
        else {
            console.log("Quantidade inválida para reposição.");
        }
    }
    darBaixa(quantidade) {
        if (quantidade > 0 && quantidade <= this._qtdProduto) {
            this._qtdProduto -= quantidade;
            console.log(`${quantidade} unidades  foram retiradas do estoque.`);
        }
        else {
            console.log("Quantidade inválida para dar baixa.");
        }
    }
}
class ProdutoPericivel extends Produto {
    _dataValidade;
    constructor(Id, descricao, qtdProduto, valorUnitario, dataValidade) {
        super(Id, descricao, qtdProduto, valorUnitario);
        this._dataValidade = dataValidade;
    }
}
