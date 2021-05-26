export class BancoDeDados {
  constructor(
    private url: string,
    private user: string,
    private password: string
  ) {}

 static Conectar() {
    console.log(`Conectando ao banco`);
  }
  Desconectar() {
    console.log("Desconectando");
  }
}
