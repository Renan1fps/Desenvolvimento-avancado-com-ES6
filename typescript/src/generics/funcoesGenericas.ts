function obterPrimeiraPosicao<T>(arrayParametro: Array<T>): T | undefined {
  return arrayParametro.pop();
}

var functionArrow = <T>(array: Array<T>) => {
  return array.pop();
};

/*Em arrow functions Implicitamente ela sabe que retornará  T | undefined*/
/*Para criar funcões genericas basta colocar <T> depois de seu nome (no tipo do parametro se tiver) e em seu retorno */
