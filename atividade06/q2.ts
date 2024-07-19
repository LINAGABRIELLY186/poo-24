class Hora{
    private hora: number;
    private minuto: number;
    private segundo: number;
  
    constructor(hora: number,minuto:number, segundo: number){
      this.hora = hora;
      this.minuto=minuto;
      this.segundo= segundo;
  
  
    }
    public ler_hora():number{
      return this.hora;
  
    }
    public ler_minuto():number{
      return this.minuto;
  
    }
    public ler_segundo():number{
      return this.segundo;
  
    }
    public formatada():string {
      return `${this.hora}:${this.minuto}:${this.segundo}`
    }
  
  }
  
  let hora1 : Hora = new Hora(12,15,39);
  
  console.log(hora1.formatada());
  