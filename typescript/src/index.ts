console.log("Hello world!");

class Produto {
  nome: string;
  valor: number;

  constructor(produtoNome: string, produtoValor: number) {
    this.nome = produtoNome;
    this.valor = produtoValor;
  }
}

const leite = new Produto("leite", 20);
