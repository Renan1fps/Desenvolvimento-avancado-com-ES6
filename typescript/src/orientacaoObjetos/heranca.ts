class PessoaHeranca {
  nome: string;
  idade: number;
  cpf: string;

  constructor(nome: string, idade: number, cpf: string) {
    this.nome = nome;
    this.idade = idade;
    this.cpf = cpf;
  }
}


class FuncionarioHerenca extends PessoaHeranca {
  empresa: string;
  cargo: string;

  constructor(
    nome: string,
    idade: number,
    cpf: string,
    empresa: string,
    cargo: string
  ) {
    super(nome, idade, cpf);
    this.empresa = empresa;
    this.cargo = cargo;
  }
}
