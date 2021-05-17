//Notação literal

const nome = "Renan";
const ObjetoPessoa = {
  nome,
  soma(a, b) {
    return a + b;
  },
};

console.log(ObjetoPessoa.nome);
console.log(ObjetoPessoa.soma(1, 8));

//Classes

class Pessoa {
  cpf() {
    return "122.333.444-55";
  }
}

class Funcionario extends Pessoa{
    salario(){
        return 2.500
    }
}

console.log(new Funcionario().cpf())