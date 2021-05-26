interface InterGenerica<T> {
  valor: T;

  realizarProcessamento(argumento: T): T;
}

const tipoString: InterGenerica<string> = {
  valor: "nome",
  realizarProcessamento(argumento: string) {
    return argumento;
  },
};

const tipoNumber: InterGenerica<number> = {
  valor: 25,
  realizarProcessamento(argumento: number) {
    return 25;
  },
};
