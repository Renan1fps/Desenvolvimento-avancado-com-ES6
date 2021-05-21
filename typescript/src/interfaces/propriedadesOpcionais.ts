interface ICalcado {
  tamanho: number;
  cor: string;
  modelo: string;
  corCardaco?: string;
}

const Chinelo: ICalcado = {
  cor: "azul",
  modelo: "simples",
  tamanho: 41,
};

const Tenis: ICalcado = {
  cor: "azul",
  modelo: "simples",
  tamanho: 41,
  corCardaco: "preto",
};
