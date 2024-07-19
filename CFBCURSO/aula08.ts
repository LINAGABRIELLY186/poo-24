let dados={
  nome:"gaby",
  idade:25,
  status:"a",
  ola:()=>{console.log("Ola")},
  info:(p:string)=>{console.log(p)}

}

dados.nome="fernandes"

console.log(typeof(dados));
console.log(dados.nome);
dados.ola();
dados.info(dados.nome);