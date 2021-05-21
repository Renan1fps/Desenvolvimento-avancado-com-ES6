interface ISoma {
  /*Função anônima */
  (num1: number, num2: number): number;
}

let soma: ISoma;

soma = (numero, numero2) => {
  return numero + numero2;
};

//--------------------------------------------------------------------

interface ICalculos {
  somar(num1: number, num2: number): number;
  dividir?(num1: number, num2: number): number;
  /*dividir é opcional para ser implementado*/
}

let calculadora: ICalculos;

/*No objeto devemos implementar fazendo o corpo da função */
calculadora = {
  somar: (numero:number, numero2:number) => {
    return numero + numero2;
  },
};
