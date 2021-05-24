class BancoPrivate {
  private cofreQuantidade: number = 1000;

  private sacarQuantidadeCofre(quantidade: number): string | number {
    if (quantidade > this.cofreQuantidade) {
      return "Quantidade inferior ao que foi solicitado!";
    } else {
      this.cofreQuantidade -= quantidade;
      return this.cofreQuantidade;
    }
  }

  public sacarCaixaEletronico(valor: number) {
    return this.sacarQuantidadeCofre(valor);
  }
}

const Nubank = new BancoPrivate();
Nubank.sacarCaixaEletronico(800);
