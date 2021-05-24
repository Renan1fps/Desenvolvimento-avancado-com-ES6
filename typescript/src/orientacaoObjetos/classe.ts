class Pessoa {
  nome: string;
  idade: number;
  sexo: string;

  constructor(nome: string, idade: number, sexo: string) {
    this.nome = nome;
    this.idade = idade;
    this.sexo = sexo;
  }
  toString(): string {
    return `Nome: ${this.nome},
            Idade: ${this.idade},
            Sexo: ${this.sexo}`;
  }
}

const joao = new Pessoa("joão", 25, "masculino");
const maria = new Pessoa("maria", 25, "feminino");
console.log(joao.toString());
console.log("" + joao); //hackerzinho para imprimir o toString
