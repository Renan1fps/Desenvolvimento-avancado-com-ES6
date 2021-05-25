class UsuarioReadonly {
  readonly id: number = 4485548;
  private nome: string = "joão";
  private senha: string = "joaosenha";
  readonly dataCadastro: Date = new Date();
}

const usuarioReadonly= new UsuarioReadonly()

console.log(usuarioReadonly.id)//posso ler mas modificalo não e privado não consigo nem acessá-lo, mas dentro de minha classe consigo manipular.
