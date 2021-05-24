class Professor {
  nome: string;
  idade: number;
  disciplina: string;

  constructor(nome: string, idade: number, disciplina: string) {
    this.nome = nome;
    this.idade = idade;
    this.disciplina = disciplina;
  }

  Apresentar(): string {
    return `Olá meu nome é ${this.nome} e irei ministrar aulas de ${this.disciplina} `;
  }

  darNotas(...notas: number[]): number {
    const notasTotal = notas.reduce((nota, notaltotal) => nota + notaltotal, 0);
    return notasTotal / notas.length;
  }
}

const ademir = new Professor("Ademir", 45, "Pneumática");

console.log(ademir.Apresentar());
console.log(ademir.darNotas(6, 5, 7, 8));
