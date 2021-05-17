//spred com objetos

const funcionario = {
  nome: "renan",
  idade: 20,
  sexo: "masculino",
};

const cloneFuncionario={
    cpf: "123.456.789-10",
    ...funcionario
}

console.log(cloneFuncionario.idade, cloneFuncionario.nome)

//spred com arrays

const alunosTurmaA= ["renan", "leonardo", "rodrigo"]
const alunosTurmaB=["luiz",...alunosTurmaA, "itadori"]
console.log(alunosTurmaB)
