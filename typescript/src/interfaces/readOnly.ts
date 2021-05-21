interface ICurso {
  readonly nome: string;
  preco: number;
  cargaHoraria: number;
  classificacao: number;
}

const Curso: ICurso = {
  nome: "typescript",
  cargaHoraria: 10,
  classificacao: 5,
  preco: 50.0,
};
// Curso.nome="outro nome" --> dará erro porque é uma propriedade de leitura apenas

Curso.preco = 60.0; //--> não me dá erro porque ela não é readonly
