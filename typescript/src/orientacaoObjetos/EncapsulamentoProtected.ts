class DomicilioProtected {
  public cor: string;
  public numero: number;
  protected endereco: string;

  constructor(cor: string, numero: number, endereco: string) {
    this.cor = cor;
    this.numero = numero;
    this.endereco = endereco;
  }

  public tocarCampainha(): string {
    return "Interfone tocado";
  }
}

class CasaProtected extends DomicilioProtected {
  /*Quando não criamos um novo atributo, não se faz necessário fazer o constructor */
  
  protected atenderInterfone(mensagem: string): string {
    return mensagem;

  }
}

const CasaDoHomer= new CasaProtected("preta", 248,"Bem longe")


