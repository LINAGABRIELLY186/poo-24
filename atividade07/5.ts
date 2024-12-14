class Produto{
 private _Id: number;
 private _descricao: string;
 private _qtdProduto: number;
 private _valorUnitario: number;

 constructor(Id:number,descricao:string,qtdProduto:number,valorUnitario:number){
    this._Id= Id;
    this._descricao = descricao;
    this._qtdProduto= qtdProduto;
    this._valorUnitario= valorUnitario;




   
 }

  get Id(): number{
    return this._Id;
  }
  get descricao(): string{
    return this._descricao;
  }
  get qtdProduto(): number{
    return this._qtdProduto;
  }
  get valorUnitario(): number{
    return this._valorUnitario;
  }
  
  repor(quantidade: number): void {
    if (quantidade > 0) {
        this._qtdProduto += quantidade;
        console.log(`${quantidade} unidades  foram adicionadas ao estoque.`);
    } else {
        console.log("Quantidade inválida para reposição.");
    }
  }
    darBaixa(quantidade: number): void {
        if (quantidade > 0 && quantidade<= this._qtdProduto ) {
            this._qtdProduto  -= quantidade;
            console.log(`${quantidade} unidades  foram retiradas do estoque.`);
        } else {
            console.log("Quantidade inválida para dar baixa.");
        }
    }
}


class ProdutoPericivel extends Produto{
 private _dataValidade: Date;

 constructor(Id:number,descricao:string,qtdProduto:number,valorUnitario:number,dataValidade:Date){
    super(Id,descricao,qtdProduto,valorUnitario);
    this._dataValidade= dataValidade;
 }


}