class Postagem{
    id: number;
    texto: string;
    qtdCurtidas: number;
 
    constructor(id: number, texto: string, qtdCurtidas: number){
       this.id=id;
       this.texto=texto; 
       this.qtdCurtidas=qtdCurtidas;
    }
    curtir(qtdCurtidas:number){
      this.qtdCurtidas += qtdCurtidas;
 
    }
    toString(texto: string, qtdCurtidas: number){
    return `Texto:${texto} - Curtidas:${qtdCurtidas}` ;
 
    }
 
 
 }
 /*
 let p1: Postagem = new Postagem(1,"flamengo", 10);
 let p2: Postagem = new Postagem(2,"brasil", 50);
 console.log(p1);
 console.log(p2);
 
 console.log(p1.toString("flamengo",10));
 
 p1.curtir(30);
 console.log(p1);*/
 
 class Microblog{
     postagens: Postagem[]=[]
     
     incluir(postagem:Postagem){
         this.postagens.push(postagem);
     }
     
     excluir(id:number){
         
         for(let i: number= 0;i<this.postagens.length;i++){
             if(this.postagens[i].id === id){
                 
 
                 this.postagens.splice(i,1);
                 break;
             }
         }
     }
     curtir(id: number) {
        const postagem = this.postagens.find(p => p.id === id);
        if (postagem) {
            postagem.curtir(id);
        }
    }

    postagemMaisCurtida(): Postagem | null {
        return this.postagens.reduce((max, postagem) => 
            (postagem.qtdCurtidas > max.qtdCurtidas ? postagem : max), this.postagens[0] || null);
    }

    toString(): string {
        return this.postagens.map(postagem => postagem.toString()).join('\n');
    }
}

// Exemplo de uso
let microblog = new Microblog();
let p1 = new Postagem(1, "flamengo", 10);
let p2 = new Postagem(2, "brasil", 50);

microblog.incluir(p1);
microblog.incluir(p2);

console.log(microblog.toString());

microblog.curtir(1);
console.log(microblog.postagemMaisCurtida());
 

 